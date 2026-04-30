import { NextRequest, NextResponse } from 'next/server';

/**
 * MTN MoMo Callback Handler
 *
 * This endpoint receives asynchronous payment notifications from MTN MoMo.
 * In production, MTN sends a POST to this URL when a transaction status changes.
 *
 * For sandbox testing, the callback may not be triggered — use polling instead.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log('📱 MoMo callback received:', JSON.stringify(body, null, 2));

    // Extract transaction details
    const {
      financialTransactionId,
      externalId,
      amount,
      currency,
      payer,
      status,
      reason,
    } = body;

    if (status === 'SUCCESSFUL') {
      console.log('✅ MoMo payment successful:', {
        financialTransactionId,
        externalId,
        amount,
        currency,
        payer: payer?.partyId,
      });
      // TODO: Save donation record to database
      // TODO: Send confirmation email/SMS
    } else if (status === 'FAILED') {
      console.log('❌ MoMo payment failed:', {
        externalId,
        reason,
      });
    }

    // Always return 200 to acknowledge receipt
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('MoMo callback error:', error);
    // Still return 200 to prevent retries
    return NextResponse.json({ received: true });
  }
}
