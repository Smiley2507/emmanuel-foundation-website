'use client';

import { PageHeader } from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Heart, Shield, CheckCircle, Clock } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import PaymentMethodSelector from '@/components/donate/PaymentMethodSelector';
import DonationAmountPicker from '@/components/donate/DonationAmountPicker';
import FlutterwavePaymentForm from '@/components/donate/FlutterwavePaymentForm';
type PaymentMethod = 'card' | 'momo';

export default function DonatePage() {
    const t = useTranslations('Donate');
    const locale = useLocale();
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
    const [selectedAmount, setSelectedAmount] = useState<number | null>(10000);
    const [customAmount, setCustomAmount] = useState('');

    const handleAmountSelect = (amount: number) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (value: string) => {
        setCustomAmount(value);
        setSelectedAmount(null);
    };

    const finalAmount = selectedAmount || (customAmount ? parseFloat(customAmount) : null);

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title={t('header_title')} subtitle={t('header_subtitle')} />

            <section className="bg-[var(--color-bg-light)]">
                <div className="flex flex-col xl:flex-row min-h-[800px]">
                    
                    {/* Left Column: Impact Message & Image Background */}
                    <div className="w-full xl:w-1/2 relative flex items-center justify-center p-[24px] lg:p-[64px]">
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop"
                                alt="Children in community"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[var(--color-primary)] opacity-95 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)] to-transparent opacity-80" />
                        </div>
                        
                        <div className="relative z-10 max-w-[600px] text-white space-y-[40px]">
                            <div className="inline-flex items-center space-x-[12px] bg-white/10 px-[24px] py-[12px] rounded-full border border-white/20">
                                <Heart className="text-[var(--color-primary-accent)]" size={24} />
                                <span className="text-white font-serif font-bold text-[18px]">{t('impact_label')}</span>
                            </div>

                            <h2 className="h1 text-white">
                                {t('impact_title')}
                            </h2>

                            <p className="body-large text-white/90">
                                {t('impact_desc')}
                            </p>

                            <div className="space-y-[32px] pt-[24px]">
                                {[
                                    { icon: Shield, title: t('feat1_title'), text: t('feat1_desc') },
                                    { icon: Heart, title: t('feat2_title'), text: t('feat2_desc') },
                                    { icon: Clock, title: t('feat3_title'), text: t('feat3_desc') }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-[20px]">
                                        <div className="w-[48px] h-[48px] bg-white/10 backdrop-blur-sm rounded-[var(--radius-ui)] flex items-center justify-center flex-shrink-0 text-white border border-white/20">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-[4px]">{item.title}</h4>
                                            <p className="body-small text-white/80">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Donation Form */}
                    <div className="w-full xl:w-1/2 bg-[var(--color-bg-light)] flex items-center justify-center p-[24px] lg:p-[64px]">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-[600px] ui-card p-[28px] md:p-[40px]"
                            style={{ transform: 'none' }} // prevent ui-card hover transform
                        >
                            <div className="space-y-[32px]">
                                {/* Payment Method Selector */}
                                <PaymentMethodSelector
                                    selected={paymentMethod}
                                    onChange={setPaymentMethod}
                                />

                                {/* Divider */}
                                <div className="border-t border-gray-100" />

                                {/* Amount Picker */}
                                <DonationAmountPicker
                                    selectedAmount={selectedAmount}
                                    customAmount={customAmount}
                                    onAmountSelect={handleAmountSelect}
                                    onCustomAmountChange={handleCustomAmountChange}
                                    currency="RWF"
                                />

                                {/* Divider */}
                                <div className="border-t border-gray-100" />

                                {/* Unified Flutterwave Form */}
                                <FlutterwavePaymentForm
                                    amount={finalAmount}
                                    paymentMethod={paymentMethod}
                                    locale={locale}
                                />

                                {/* Trust Block */}
                                <div className="border-t border-gray-200 pt-[20px] space-y-[10px]">
                                    {[
                                        t('trust_generic'),
                                        t('trust2_rwf'),
                                        t('trust3'),
                                        t('trust4')
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-[8px] text-[13px] text-[var(--color-text-secondary)] font-medium">
                                            <CheckCircle size={15} className="text-[var(--color-primary)] mt-[2px] shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Where Donations Go — Transparency Statement */}
            <section className="py-[96px] bg-[var(--color-bg-white)]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-[64px]">
                        <span className="overline-label">{t('where_label')}</span>
                        <h2 className="h2 text-[var(--color-text-primary)] mt-2">{t('where_title')}</h2>
                    </div>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-[800px] mx-auto ui-card p-[48px] text-center"
                    >
                        <div className="w-[80px] h-[80px] bg-[var(--color-primary-light)] rounded-[var(--radius-ui)] flex items-center justify-center mx-auto mb-[32px]">
                            <Shield className="text-[var(--color-primary-vibrant)]" size={40} />
                        </div>
                        <p className="body-large text-[var(--color-text-secondary)]">
                            {t('where_desc')}
                        </p>
                        <p className="mt-[24px] text-[16px] text-gray-500 font-medium tracking-wide">
                            {t('where_contact', { email: 'info@jef-foundation.org' })}
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
