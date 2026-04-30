/**
 * MTN MoMo API Client — Collections (Request to Pay)
 *
 * Handles authentication, payment initiation, and status polling
 * against the MTN MoMo Open API.
 *
 * Docs: https://momodeveloper.mtn.com/api-documentation/
 */

const MOMO_BASE_URL = process.env.MOMO_BASE_URL || 'https://sandbox.momodeveloper.mtn.com';
const MOMO_SUBSCRIPTION_KEY = process.env.MOMO_COLLECTION_SUBSCRIPTION_KEY || '';
const MOMO_API_USER_ID = process.env.MOMO_API_USER_ID || '';
const MOMO_API_KEY = process.env.MOMO_API_KEY || '';
const MOMO_ENVIRONMENT = process.env.MOMO_ENVIRONMENT || 'sandbox';
const MOMO_CURRENCY = process.env.MOMO_CURRENCY || 'EUR';
const MOMO_CALLBACK_URL = process.env.MOMO_CALLBACK_URL || '';

// Token cache to avoid requesting a new token on every call
let cachedToken: { token: string; expiresAt: number } | null = null;

/**
 * Get an OAuth2 access token for the Collections API.
 * Caches the token until it expires.
 */
export async function getAccessToken(): Promise<string> {
  // Return cached token if still valid (with 60s buffer)
  if (cachedToken && Date.now() < cachedToken.expiresAt - 60000) {
    return cachedToken.token;
  }

  const credentials = Buffer.from(`${MOMO_API_USER_ID}:${MOMO_API_KEY}`).toString('base64');

  const response = await fetch(`${MOMO_BASE_URL}/collection/token/`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Ocp-Apim-Subscription-Key': MOMO_SUBSCRIPTION_KEY,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('MoMo token error:', response.status, errorText);
    throw new Error(`Failed to get MoMo access token: ${response.status}`);
  }

  const data = await response.json();

  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in * 1000),
  };

  return cachedToken.token;
}

/**
 * Initiate a Request to Pay (Collection).
 *
 * @param params Payment details
 * @param referenceId A UUID v4 that uniquely identifies this transaction
 * @returns The referenceId for status polling
 */
export async function requestToPay(params: {
  amount: string;
  currency?: string;
  phoneNumber: string;
  externalId: string;
  payerMessage?: string;
  payeeNote?: string;
}, referenceId: string): Promise<string> {
  const token = await getAccessToken();

  const body = {
    amount: params.amount,
    currency: params.currency || MOMO_CURRENCY,
    externalId: params.externalId,
    payer: {
      partyIdType: 'MSISDN',
      partyId: params.phoneNumber,
    },
    payerMessage: params.payerMessage || 'Donation to Jeannine and Emmanuel Foundation',
    payeeNote: params.payeeNote || 'Thank you for your generous donation',
  };

  const response = await fetch(`${MOMO_BASE_URL}/collection/v1_0/requesttopay`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'X-Reference-Id': referenceId,
      'X-Target-Environment': MOMO_ENVIRONMENT,
      'Ocp-Apim-Subscription-Key': MOMO_SUBSCRIPTION_KEY,
      'Content-Type': 'application/json',
      ...(MOMO_CALLBACK_URL ? { 'X-Callback-Url': MOMO_CALLBACK_URL } : {}),
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('MoMo requestToPay error:', response.status, errorText);
    throw new Error(`MoMo requestToPay failed: ${response.status} — ${errorText}`);
  }

  // 202 Accepted — payment request has been submitted
  return referenceId;
}

/**
 * Check the status of a Request to Pay transaction.
 *
 * @param referenceId The UUID used when initiating the request
 * @returns Transaction status object
 */
export async function getTransactionStatus(referenceId: string): Promise<{
  amount: string;
  currency: string;
  financialTransactionId?: string;
  externalId: string;
  payer: { partyIdType: string; partyId: string };
  payerMessage: string;
  payeeNote: string;
  status: 'PENDING' | 'SUCCESSFUL' | 'FAILED';
  reason?: { code: string; message: string };
}> {
  const token = await getAccessToken();

  const response = await fetch(
    `${MOMO_BASE_URL}/collection/v1_0/requesttopay/${referenceId}`,
    {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'X-Target-Environment': MOMO_ENVIRONMENT,
        'Ocp-Apim-Subscription-Key': MOMO_SUBSCRIPTION_KEY,
      },
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error('MoMo status check error:', response.status, errorText);
    throw new Error(`MoMo status check failed: ${response.status}`);
  }

  return response.json();
}
