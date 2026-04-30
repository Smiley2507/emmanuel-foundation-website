import { NextRequest, NextResponse } from 'next/server';
import { requestToPay } from '@/lib/momo';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    const { amount, phoneNumber, email } = await request.json();

    // Validate input
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid donation amount' },
        { status: 400 }
      );
    }

    if (!phoneNumber) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      );
    }

    // Normalize phone number: ensure it starts with country code
    let normalizedPhone = phoneNumber.replace(/\s+/g, '').replace(/^0/, '');
    if (!normalizedPhone.startsWith('250')) {
      normalizedPhone = `250${normalizedPhone}`;
    }

    const referenceId = uuidv4();
    const externalId = uuidv4();

    await requestToPay(
      {
        amount: String(Math.round(amount)),
        phoneNumber: normalizedPhone,
        externalId,
        payerMessage: 'Donation to Jeannine and Emmanuel Foundation',
        payeeNote: `Donation from ${email || 'anonymous'}`,
      },
      referenceId
    );

    return NextResponse.json({
      referenceId,
      message: 'Payment request sent. Please check your phone to confirm.',
    });
  } catch (error) {
    console.error('MoMo pay error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `MoMo payment failed: ${message}` },
      { status: 500 }
    );
  }
}
