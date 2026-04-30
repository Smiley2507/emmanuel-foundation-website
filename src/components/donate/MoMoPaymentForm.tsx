'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Loader2, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface MoMoPaymentFormProps {
  amount: number | null;
}

type PaymentStatus = 'idle' | 'submitting' | 'pending' | 'success' | 'failed';

export default function MoMoPaymentForm({ amount }: MoMoPaymentFormProps) {
  const t = useTranslations('Donate');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<PaymentStatus>('idle');
  const [error, setError] = useState('');
  const pollingRef = useRef<NodeJS.Timeout | null>(null);
  const referenceIdRef = useRef<string>('');

  // Cleanup polling on unmount
  useEffect(() => {
    return () => {
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
      }
    };
  }, []);

  const pollStatus = useCallback(() => {
    if (!referenceIdRef.current) return;

    pollingRef.current = setInterval(async () => {
      try {
        const response = await fetch(
          `/api/momo/status?referenceId=${referenceIdRef.current}`
        );
        const data = await response.json();

        if (data.status === 'SUCCESSFUL') {
          setStatus('success');
          if (pollingRef.current) clearInterval(pollingRef.current);
        } else if (data.status === 'FAILED') {
          setStatus('failed');
          setError(data.reason?.message || t('momo_failed'));
          if (pollingRef.current) clearInterval(pollingRef.current);
        }
        // If still PENDING, continue polling
      } catch {
        // Silently continue polling on network errors
      }
    }, 3000); // Poll every 3 seconds
  }, [t]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || amount <= 0) return;
    if (!phoneNumber) return;

    setStatus('submitting');
    setError('');

    try {
      const response = await fetch('/api/momo/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          phoneNumber,
          email: email || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Payment request failed');
      }

      referenceIdRef.current = data.referenceId;
      setStatus('pending');

      // Start polling for status
      pollStatus();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setError(message);
      setStatus('failed');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setError('');
    referenceIdRef.current = '';
    if (pollingRef.current) clearInterval(pollingRef.current);
  };

  const isDisabled = !phoneNumber || !amount || amount <= 0 || status === 'submitting' || status === 'pending';

  return (
    <div className="space-y-[20px]">
      <AnimatePresence mode="wait">
        {/* Status displays */}
        {status === 'pending' && (
          <motion.div
            key="pending"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center gap-[20px] p-[32px] rounded-[var(--radius-ui)] bg-amber-50 border border-amber-200 text-center"
          >
            <div className="relative">
              <div className="w-[64px] h-[64px] rounded-full bg-amber-100 flex items-center justify-center">
                <Smartphone size={32} className="text-amber-600" />
              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-[24px] h-[24px] rounded-full bg-amber-500 flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Loader2 size={14} className="text-white animate-spin" />
              </motion.div>
            </div>
            <div>
              <p className="font-bold text-amber-800 text-[16px] mb-[4px]">{t('momo_pending')}</p>
              <p className="text-amber-600 text-[14px]">{t('momo_pending_desc')}</p>
            </div>
          </motion.div>
        )}

        {status === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center gap-[16px] p-[32px] rounded-[var(--radius-ui)] bg-green-50 border border-green-200 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
            >
              <CheckCircle size={56} className="text-green-500" />
            </motion.div>
            <div>
              <p className="font-bold text-green-800 text-[18px] mb-[4px]">{t('momo_success')}</p>
              <p className="text-green-600 text-[14px]">{t('momo_success_desc')}</p>
            </div>
          </motion.div>
        )}

        {status === 'failed' && (
          <motion.div
            key="failed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center gap-[16px] p-[32px] rounded-[var(--radius-ui)] bg-red-50 border border-red-200 text-center"
          >
            <XCircle size={56} className="text-red-400" />
            <div>
              <p className="font-bold text-red-800 text-[16px] mb-[4px]">{t('momo_failed')}</p>
              {error && <p className="text-red-600 text-[14px]">{error}</p>}
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="btn-ghost text-[14px] py-[10px] px-[20px] flex items-center gap-[8px]"
            >
              <RotateCcw size={16} />
              {t('momo_retry')}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form — visible when idle or submitting */}
      {(status === 'idle' || status === 'submitting') && (
        <form onSubmit={handleSubmit} className="space-y-[20px]">
          {/* Phone number input */}
          <div>
            <label htmlFor="momo-phone" className="overline-label mb-[10px] block">
              {t('momo_phone_label')}
            </label>
            <div className="relative">
              <span className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[15px] font-bold text-gray-500 pointer-events-none">
                +250
              </span>
              <input
                type="tel"
                id="momo-phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/[^\d]/g, ''))}
                className="w-full pl-[72px] pr-[20px] py-[14px] rounded-[var(--radius-ui)] bg-[var(--color-bg-light)] border-2 border-transparent focus:border-[var(--color-primary)] focus:bg-white focus:outline-none transition-all text-[16px] font-medium placeholder:text-gray-400 text-[var(--color-text-primary)]"
                placeholder={t('momo_phone_ph')}
                maxLength={10}
                required
              />
            </div>
          </div>

          {/* Optional email */}
          <div>
            <label htmlFor="momo-email" className="overline-label mb-[10px] block">
              {t('form_email_label')} <span className="text-gray-400 font-normal normal-case tracking-normal">({t('momo_email_optional')})</span>
            </label>
            <input
              type="email"
              id="momo-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-[20px] py-[14px] rounded-[var(--radius-ui)] bg-[var(--color-bg-light)] border-2 border-transparent focus:border-[var(--color-primary)] focus:bg-white focus:outline-none transition-all text-[16px] font-medium placeholder:text-gray-400 text-[var(--color-text-primary)]"
              placeholder={t('form_email_ph')}
            />
          </div>

          {/* Error message */}
          {error && status === 'idle' && (
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
            className="w-full py-[18px] text-[17px] font-medium rounded-[var(--radius-ui)] transition-all duration-300 flex items-center justify-center gap-[10px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: 'linear-gradient(135deg, #FFCC00 0%, #FFA500 100%)',
              color: '#1a1a1a',
              border: 'none',
            }}
          >
            {status === 'submitting' ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                <span>{t('momo_processing')}</span>
              </>
            ) : (
              <>
                <Smartphone size={20} />
                <span>{t('momo_btn')}</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
