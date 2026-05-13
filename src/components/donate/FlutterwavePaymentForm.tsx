'use client';

import React, { useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useTranslations } from 'next-intl';
import { Loader2, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface FlutterwavePaymentFormProps {
  amount: number | null;
  paymentMethod: 'card' | 'momo';
  locale: string;
}

export default function FlutterwavePaymentForm({
  amount,
  paymentMethod,
  locale,
}: FlutterwavePaymentFormProps) {
  const t = useTranslations('Donate');
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Map our internal IDs to Flutterwave payment options
  const paymentOptionsMap = {
    card: 'card',
    momo: 'mobilemoneyrwanda,mobilemoneyghana,mobilemoneyuganda,mobilemoneyzambia',
  };

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY || '',
    tx_ref: `EF-${Date.now()}-${Math.floor(Math.random() * 1000000)}`,
    amount: amount || 0,
    currency: 'RWF',
    payment_options: paymentOptionsMap[paymentMethod],
    customer: {
      email: email,
      name: name,
      phone_number: '', // Optional
    },
    customizations: {
      title: t('header_title'),
      description: t('impact_label'),
      logo: 'https://emmanuelfoundation.org/logo.png', // Update with real logo later
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || amount <= 0 || !email) return;

    setIsProcessing(true);

    handleFlutterPayment({
      callback: (response) => {
        console.log('Flutterwave Response:', response);
        if (response.status === 'successful' || response.status === 'completed') {
          // In a real app, you would verify this on the server here
          router.push(`/${locale}/donate/success?tx_ref=${response.tx_ref}`);
        } else {
          router.push(`/${locale}/donate/cancel`);
        }
        closePaymentModal();
        setIsProcessing(false);
      },
      onClose: () => {
        setIsProcessing(false);
      },
    });
  };

  const isDisabled = !amount || amount <= 0 || !email || isProcessing;

  return (
    <form onSubmit={handleSubmit} className="space-y-[24px]">
      <div className="space-y-[16px]">
        <div>
          <label htmlFor="name" className="overline-label mb-[8px] block">
            {t('form_name_label')}
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-[16px] py-[12px] rounded-[var(--radius-ui)] border-2 border-gray-100 focus:border-[var(--color-primary)] focus:outline-none transition-all"
            placeholder={t('form_name_ph')}
          />
        </div>
        <div>
          <label htmlFor="email" className="overline-label mb-[8px] block">
            {t('form_email_label')}
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-[16px] py-[12px] rounded-[var(--radius-ui)] border-2 border-gray-100 focus:border-[var(--color-primary)] focus:outline-none transition-all"
            placeholder="email@example.com"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isDisabled}
        className={`w-full py-[16px] rounded-[var(--radius-ui)] font-serif font-bold text-[18px] transition-all duration-300 flex items-center justify-center gap-[10px] ${
          isDisabled
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
            : 'bg-[var(--color-primary-vibrant)] text-white hover:bg-[var(--color-primary-dark)] shadow-lg hover:shadow-xl'
        }`}
      >
        {isProcessing ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            {t('processing')}
          </>
        ) : (
          <>
            <Lock size={18} />
            {t('donate_button', { amount: amount ? new Intl.NumberFormat('en-RW').format(amount) : '0', currency: 'RWF' })}
          </>
        )}
      </button>

      <p className="text-center text-[12px] text-gray-400 font-medium">
        {t('secure_notice')}
      </p>
    </form>
  );
}
