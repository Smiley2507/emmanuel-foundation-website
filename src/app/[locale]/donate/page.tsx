'use client';

import { PageHeader } from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Heart, Shield, CheckCircle, Clock } from 'lucide-react';

const presetAmounts = [25, 50, 100, 250, 500];

const equivalencies = [
    { amount: '$25', impact: 'Supports a family\'s hygiene kit for one month' },
    { amount: '$50', impact: 'Plants 50 trees in Rusizi District' },
    { amount: '$100', impact: 'Sponsors one youth vocational training session' },
    { amount: '$500', impact: 'Funds one community health outreach day' },
];

export default function DonatePage() {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
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
        // TODO: Integrate with Stripe Checkout
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
                                <Heart className="text-[var(--color-primary-accent)]" size={24} />
                                <span className="text-white font-serif font-bold text-[18px]">Make an Impact Today</span>
                            </div>

                            <h2 className="h1 text-white">
                                Every Contribution Builds Something Real
                            </h2>

                            <p className="body-large text-white/90">
                                Jeanine and Emmanuel Foundation is at the start of its journey. Your donation directly funds our first integrated programme in Rusizi District — reaching over 12,000 people through environmental conservation, community health, education, and water resilience initiatives. Early supporters like you are the reason this work begins.
                            </p>

                            <div className="space-y-[32px] pt-[24px]">
                                {[
                                    { icon: Shield, title: 'Secure & Private', text: 'All transactions are encrypted and processed by Stripe.' },
                                    { icon: Heart, title: 'Direct Impact', text: '100% of your donation goes directly to our local programmes.' },
                                    { icon: Clock, title: 'Recurring Options', text: 'Support our long-term sustainability with monthly gifts.' }
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
                                                className={`py-[16px] px-[16px] rounded-[var(--radius-ui)] font-serif font-bold text-[18px] transition-all duration-300 border ${
                                                    selectedAmount === amount
                                                    ? 'bg-[var(--color-primary-vibrant)] text-white border-[var(--color-primary-vibrant)] shadow-md'
                                                    : 'bg-white text-[var(--color-text-primary)] border-gray-200 hover:border-[var(--color-primary-vibrant)] hover:text-[var(--color-primary-vibrant)]'
                                                }`}
                                            >
                                                {amount.toLocaleString()} USD
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="customAmount" className="overline-label mb-[12px] block text-[var(--color-text-secondary)]">
                                        Enter your own Amount
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-[24px] top-1/2 -translate-y-1/2 text-[18px] font-bold text-gray-500">$</span>
                                        <input
                                            type="number"
                                            id="customAmount"
                                            value={customAmount}
                                            onChange={(e) => handleCustomAmountChange(e.target.value)}
                                            className="w-full pl-[52px] pr-[24px] py-[16px] rounded-[var(--radius-ui)] bg-[var(--color-bg-white)] border-2 border-gray-200 focus:border-[var(--color-primary)] focus:bg-white focus:outline-none transition-all text-[18px] font-bold placeholder:font-medium placeholder:text-gray-400 text-[var(--color-text-primary)] shadow-sm"
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
                                        'Secure payment processed by Stripe',
                                        'Donations accepted in USD — international donors may easily process payments through their local banks',
                                        'Jeanine and Emmanuel Foundation is a registered public-interest foundation in Rwanda',
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
                        <div className="w-[80px] h-[80px] bg-[var(--color-primary-light)] rounded-[var(--radius-ui)] flex items-center justify-center mx-auto mb-[32px]">
                            <Shield className="text-[var(--color-primary-vibrant)]" size={40} />
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
