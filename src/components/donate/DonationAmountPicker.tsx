'use client';

import { useTranslations } from 'next-intl';

interface DonationAmountPickerProps {
  selectedAmount: number | null;
  customAmount: string;
  onAmountSelect: (amount: number) => void;
  onCustomAmountChange: (value: string) => void;
  currency?: string;
}

export default function DonationAmountPicker({
  selectedAmount,
  customAmount,
  onAmountSelect,
  onCustomAmountChange,
  currency = 'RWF',
}: DonationAmountPickerProps) {
  const t = useTranslations('Donate');

  const presetAmounts = [5000, 10000, 25000, 50000, 100000];

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-RW').format(amount);
  };

  return (
    <div className="space-y-[20px]">
      <h3 className="h4 text-[var(--color-text-primary)]">{t('form_title')}</h3>

      {/* Preset amounts */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-[12px]">
        {presetAmounts.map((amount) => (
          <button
            key={amount}
            type="button"
            onClick={() => onAmountSelect(amount)}
            className={`py-[14px] px-[12px] rounded-[var(--radius-ui)] font-bold text-[16px] transition-all duration-300 border cursor-pointer ${
              selectedAmount === amount
                ? 'bg-[var(--color-primary-vibrant)] text-white border-[var(--color-primary-vibrant)] shadow-md'
                : 'bg-white text-[var(--color-text-primary)] border-gray-200 hover:border-[var(--color-primary-vibrant)] hover:text-[var(--color-primary-vibrant)]'
            }`}
          >
            {formatAmount(amount)} {currency}
          </button>
        ))}
      </div>

      {/* Custom amount */}
      <div>
        <label
          htmlFor="customAmount"
          className="overline-label mb-[10px] block text-[var(--color-text-secondary)]"
        >
          {t('form_custom_label')}
        </label>
        <div className="relative">
          <span className="absolute right-[20px] top-1/2 -translate-y-1/2 text-[15px] font-bold text-gray-400 pointer-events-none">
            {currency}
          </span>
          <input
            type="number"
            id="customAmount"
            value={customAmount}
            onChange={(e) => onCustomAmountChange(e.target.value)}
            className="w-full pl-[20px] pr-[64px] py-[14px] rounded-[var(--radius-ui)] bg-[var(--color-bg-white)] border-2 border-gray-200 focus:border-[var(--color-primary)] focus:bg-white focus:outline-none transition-all text-[18px] font-bold placeholder:font-medium placeholder:text-gray-400 text-[var(--color-text-primary)] shadow-sm"
            placeholder={t('form_custom_ph')}
            min="1"
          />
        </div>
      </div>
    </div>
  );
}
