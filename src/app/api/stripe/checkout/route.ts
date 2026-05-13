import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  if (!stripe) {
    return NextResponse.json(
      { error: 'Stripe is not configured' },
      { status: 500 }
    );
  }

  try {
    const { amount, email, locale = 'en' } = await request.json();

    // Validate input
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid donation amount' },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Amount is in RWF — Stripe expects the smallest currency unit
    // For RWF, 1 RWF = 1 (no decimal subdivision)
    const amountInSmallestUnit = Math.round(amount);

    const origin = request.headers.get('origin') || '';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'rwf',
            product_data: {
              name: 'Donation to Jeannine and Emmanuel Foundation',
              description: 'Supporting community programmes in Rusizi District, Rwanda',
            },
            unit_amount: amountInSmallestUnit,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/${locale}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/${locale}/donate/cancel`,
      metadata: {
        donation_type: 'one-time',
        locale,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
