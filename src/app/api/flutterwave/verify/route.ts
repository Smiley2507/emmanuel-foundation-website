import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const transactionId = searchParams.get('transaction_id');

  if (!transactionId) {
    return NextResponse.json({ error: 'Transaction ID is required' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.flutterwave.com/v3/transactions/${transactionId}/verify`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
        },
      }
    );

    const data = await response.json();

    if (data.status === 'success' && data.data.status === 'successful') {
      // Transaction is verified
      // Here you could save to database (Sanity, etc.)
      return NextResponse.json({ verified: true, data: data.data });
    } else {
      return NextResponse.json({ verified: false, message: 'Transaction verification failed' }, { status: 400 });
    }
  } catch (error) {
    console.error('Flutterwave verification error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
