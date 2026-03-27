'use client';

import { PageHeader } from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Heart, Shield, CheckCircle } from 'lucide-react';

const presetAmounts = [5000, 10000, 25000, 50000, 100000];

const equivalencies = [
    { amount: '10,000 RWF', impact: 'Supports a family\'s hygiene kit for one month' },
    { amount: '25,000 RWF', impact: 'Plants 50 trees in Rusizi District' },
    { amount: '50,000 RWF', impact: 'Sponsors one youth vocational training session' },
    { amount: '100,000 RWF', impact: 'Funds one community health outreach day' },
];

export default function DonatePage() {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(25000);
    const [customAmount, setCustomAmount] = useState('');
    const [email, setEmail] = useState('');

    const handleAmountSelect = (amount: number) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (value: string) => {
        setCustomAmount(value);
        setSelectedAmount(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const finalAmount = selectedAmount || parseFloat(customAmount);
        console.log('Donation:', { amount: finalAmount, email });
        // TODO: Integrate with Flutterwave payment gateway
    };

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Donate" subtitle="Every contribution builds something real." />

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
                                <Heart className="text-[var(--color-primary-light)]" size={24} />
                                <span className="text-[var(--color-primary-light)] font-heading font-black text-[18px]">Make an Impact Today</span>
                            </div>

                            <h2 className="h1 text-white">
                                Every Contribution Builds Something Real
                            </h2>

                            <p className="body-large text-white/90">
                                Emmanuel Foundation is at the start of its journey. Your donation directly funds our first integrated programme in Rusizi District — reaching over 12,000 people through environmental conservation, community health, education, and water resilience initiatives. Early supporters like you are the reason this work begins.
                            </p>

                            <div className="grid grid-cols-1 gap-[24px]">
                                <div className="bg-white/10 p-[32px] rounded-[16px] border border-white/20">
                                    <div className="flex items-center gap-[12px] mb-[16px]">
                                        <Shield className="text-[var(--color-primary-light)]" size={28} />
                                        <span className="h4 text-white">Transparent by Design</span>
                                    </div>
                                    <p className="body-base text-white/80">
                                        We are committed to publishing how every franc donated is spent. Our operational costs are funded separately so your donation goes directly to programme activities.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                                    {equivalencies.map((eq) => (
                                        <div key={eq.amount} className="bg-white/10 p-[24px] rounded-[12px] border border-white/20">
                                            <div className="h4 text-[var(--color-primary-light)] mb-[8px]">{eq.amount}</div>
                                            <div className="body-small text-white/80">{eq.impact}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Donation Form */}
                    <div className="w-full xl:w-1/2 bg-[var(--color-bg-light)] flex items-center justify-center p-[24px] lg:p-[64px]">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-[600px] ui-card p-[32px] md:p-[48px]"
                        >
                            <form onSubmit={handleSubmit} className="space-y-[40px]">
                                <div>
                                    <h3 className="h3 text-[var(--color-text-primary)] mb-[24px]">Choose an amount</h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-[16px]">
                                        {presetAmounts.map((amount) => (
                                            <button
                                                key={amount}
                                                type="button"
                                                onClick={() => handleAmountSelect(amount)}
                                                className={`py-[16px] px-[16px] rounded-[8px] font-heading font-black text-[18px] transition-all duration-300 border ${
                                                    selectedAmount === amount
                                                    ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-md'
                                                    : 'bg-white text-[var(--color-text-primary)] border-gray-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
                                                }`}
                                            >
                                                {amount.toLocaleString()} RWF
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="customAmount" className="overline-label mb-[12px] block">
                                        Enter your own Amount
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-[24px] top-1/2 -translate-y-1/2 text-[18px] font-bold text-gray-400">RWF</span>
                                        <input
                                            type="number"
                                            id="customAmount"
                                            value={customAmount}
                                            onChange={(e) => handleCustomAmountChange(e.target.value)}
                                            className="w-full pl-[72px] pr-[24px] py-[16px] rounded-[8px] bg-[var(--color-bg-light)] border-2 border-transparent focus:border-[var(--color-primary)] focus:bg-white focus:outline-none transition-all text-[18px] font-medium placeholder:text-gray-400 text-[var(--color-text-primary)]"
                                            placeholder="Enter amount"
                                            min="1"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="overline-label mb-[12px] block">
                                        Enter your email address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full px-[24px] py-[16px] rounded-[8px] bg-[var(--color-bg-light)] border-2 border-transparent focus:border-[var(--color-primary)] focus:bg-white focus:outline-none transition-all text-[18px] font-medium placeholder:text-gray-400 text-[var(--color-text-primary)]"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={!email || (!selectedAmount && !customAmount)}
                                    className="btn-primary w-full py-[20px] text-[20px] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Continue to Donate
                                </button>

                                {/* Trust Block */}
                                <div className="border-t border-gray-200 pt-[24px] space-y-[12px]">
                                    {[
                                        'Secure payment processed by Flutterwave',
                                        'Donations accepted in RWF — international donors may contact us at info@emmanuelfoundation.org',
                                        'Emmanuel Foundation is a registered public-interest foundation in Rwanda',
                                        'Questions? Write to us before donating — we\'re happy to answer',
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-[8px] text-[14px] text-[var(--color-text-secondary)] font-medium">
                                            <CheckCircle size={16} className="text-[var(--color-primary)] mt-[2px] shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Where Donations Go — Transparency Statement */}
            <section className="py-[96px] bg-[var(--color-bg-white)]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-[64px]">
                        <span className="overline-label">Your Impact</span>
                        <h2 className="h2 text-[var(--color-text-primary)] mt-2">Where Your Support Goes</h2>
                    </div>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-[800px] mx-auto ui-card p-[48px] text-center"
                    >
                        <div className="w-[80px] h-[80px] bg-[var(--color-primary-light)] rounded-[16px] flex items-center justify-center mx-auto mb-[32px]">
                            <Shield className="text-[var(--color-primary)]" size={40} />
                        </div>
                        <p className="body-large text-[var(--color-text-secondary)]">
                            We are finalising our programme budget for Rusizi District. As soon as it is confirmed, we will publish a complete, transparent breakdown of how donations are allocated. In the meantime, all funds received are held in trust for programme activities.
                        </p>
                        <p className="mt-[24px] text-[16px] text-gray-500 font-medium tracking-wide">
                            Have questions? Contact us at <span className="text-[var(--color-primary)] font-bold">info@emmanuelfoundation.org</span>
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
