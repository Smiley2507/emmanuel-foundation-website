'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Loader2, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface StripePaymentFormProps {
  amount: number | null;
  locale: string;
}

export default function StripePaymentForm({ amount, locale }: StripePaymentFormProps) {
  const t = useTranslations('Donate');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || amount <= 0) return;
    if (!email) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, email, locale }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // Redirect to Stripe Hosted Checkout
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setError(message);
      setLoading(false);
    }
  };

  const isDisabled = !email || !amount || amount <= 0 || loading;

  return (
    <form onSubmit={handleSubmit} className="space-y-[20px]">
      {/* Email input */}
      <div>
        <label htmlFor="stripe-email" className="overline-label mb-[10px] block">
          {t('form_email_label')}
        </label>
        <input
          type="email"
          id="stripe-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-[20px] py-[14px] rounded-[var(--radius-ui)] bg-[var(--color-bg-light)] border-2 border-transparent focus:border-[var(--color-primary)] focus:bg-white focus:outline-none transition-all text-[16px] font-medium placeholder:text-gray-400 text-[var(--color-text-primary)]"
          placeholder={t('form_email_ph')}
        />
      </div>

      {/* Error message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-[12px] rounded-[var(--radius-ui)] bg-red-50 border border-red-200 text-red-700 text-[14px] font-medium"
        >
          {error}
        </motion.div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={isDisabled}
        className="btn-primary w-full py-[18px] text-[17px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-[10px]"
      >
        {loading ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            <span>{t('stripe_processing')}</span>
          </>
        ) : (
          <>
            <CreditCard size={20} />
            <span>{t('stripe_btn')}</span>
            <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
}
