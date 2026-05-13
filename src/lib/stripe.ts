import Stripe from 'stripe';

const key = process.env.STRIPE_SECRET_KEY || '';

// We don't throw here to avoid build failures if keys are missing in Vercel during build time.
// Real validation happens when we try to use it in API routes.
export const stripe = key 
  ? new Stripe(key, {
      typescript: true,
      apiVersion: '2025-01-27.acacia' as any, // Use latest stable or the one you have
    })
  : null;
