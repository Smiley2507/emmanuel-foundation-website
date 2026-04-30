'use client';

import { motion } from 'framer-motion';
import { CreditCard, Smartphone } from 'lucide-react';
import { useTranslations } from 'next-intl';

type PaymentMethod = 'stripe' | 'momo';

interface PaymentMethodSelectorProps {
  selected: PaymentMethod;
  onChange: (method: PaymentMethod) => void;
}

export default function PaymentMethodSelector({ selected, onChange }: PaymentMethodSelectorProps) {
  const t = useTranslations('Donate');

  const methods = [
    {
      id: 'stripe' as PaymentMethod,
      icon: CreditCard,
      title: t('method_card'),
      desc: t('method_card_desc'),
    },
    {
      id: 'momo' as PaymentMethod,
      icon: Smartphone,
      title: t('method_momo'),
      desc: t('method_momo_desc'),
    },
  ];

  return (
    <div>
      <h4 className="overline-label mb-[16px]">{t('method_title')}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
        {methods.map((method) => {
          const isSelected = selected === method.id;
          return (
            <motion.button
              key={method.id}
              type="button"
              onClick={() => onChange(method.id)}
              whileTap={{ scale: 0.98 }}
              className={`relative flex flex-col items-center gap-[12px] p-[20px] rounded-[var(--radius-ui)] border-2 transition-all duration-300 cursor-pointer text-center ${
                isSelected
                  ? 'border-[var(--color-primary-vibrant)] bg-blue-50 shadow-sm'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {/* Selection indicator */}
              {isSelected && (
                <motion.div
                  layoutId="payment-indicator"
                  className="absolute top-[10px] right-[10px] w-[8px] h-[8px] rounded-full bg-[var(--color-primary-vibrant)]"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}

              <div
                className={`w-[48px] h-[48px] rounded-[var(--radius-ui)] flex items-center justify-center transition-colors ${
                  isSelected
                    ? 'bg-[var(--color-primary-vibrant)] text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                <method.icon size={24} />
              </div>

              <div>
                <p
                  className={`font-bold text-[15px] transition-colors ${
                    isSelected ? 'text-[var(--color-primary-vibrant)]' : 'text-[var(--color-text-primary)]'
                  }`}
                >
                  {method.title}
                </p>
                <p className="text-[13px] text-[var(--color-text-muted)] mt-[4px] leading-snug">
                  {method.desc}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
