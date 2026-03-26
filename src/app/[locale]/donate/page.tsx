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
        <div className="flex flex-col min-h-screen font-sans">
            <PageHeader title="Donate" subtitle="Every contribution builds something real." />

            <section className="relative min-h-[800px] lg:h-[900px] bg-white">
                {/* Background Image Section */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop"
                        alt="Children in community"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 h-full items-center py-24 lg:py-0">

                        {/* Left Column: Impact Message */}
                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-white space-y-12"
                        >
                            <div className="inline-flex items-center space-x-3 bg-secondary/20 backdrop-blur-sm px-6 py-3 rounded-full border border-secondary/30">
                                <Heart className="text-secondary" size={24} />
                                <span className="text-secondary font-heading font-black text-lg">Make an Impact Today</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-heading font-black leading-tight text-secondary">
                                Every Contribution Builds Something Real
                            </h2>

                            <p className="text-2xl text-white/90 leading-relaxed font-sans font-medium">
                                Emmanuel Foundation is at the start of its journey. Your donation directly funds our first integrated programme in Rusizi District — reaching over 12,000 people through environmental conservation, community health, education, and water resilience initiatives. Early supporters like you are the reason this work begins.
                            </p>

                            {/* Transparent by Design + Equivalencies */}
                            <div className="grid grid-cols-1 gap-6 pt-4">
                                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Shield className="text-secondary" size={28} />
                                        <span className="text-2xl font-heading font-black text-secondary">Transparent by Design</span>
                                    </div>
                                    <p className="text-white/80 font-medium text-base leading-relaxed">
                                        We are committed to publishing how every franc donated is spent. Our operational costs are funded separately so your donation goes directly to programme activities.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {equivalencies.map((eq) => (
                                        <div key={eq.amount} className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20">
                                            <div className="text-xl font-heading font-black text-secondary mb-1">{eq.amount}</div>
                                            <div className="text-white/70 font-medium text-sm">{eq.impact}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Donation Form */}
                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-bl-full" />

                            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                                <div>
                                    <h3 className="text-3xl font-heading font-black text-primary mb-8">Choose an amount</h3>
                                    <div className="grid grid-cols-3 gap-4">
                                        {presetAmounts.map((amount) => (
                                            <button
                                                key={amount}
                                                type="button"
                                                onClick={() => handleAmountSelect(amount)}
                                                className={`py-4 px-6 rounded-2xl font-heading font-black text-xl transition-all duration-300 ${selectedAmount === amount
                                                    ? 'bg-primary text-white shadow-xl scale-105'
                                                    : 'bg-gray-100 text-primary hover:bg-gray-200 hover:scale-105'
                                                    }`}
                                            >
                                                {amount.toLocaleString()} RWF
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="customAmount" className="block text-sm font-sans font-bold text-primary uppercase tracking-wider mb-3">
                                        Enter your own Amount
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xl font-bold text-gray-400">RWF</span>
                                        <input
                                            type="number"
                                            id="customAmount"
                                            value={customAmount}
                                            onChange={(e) => handleCustomAmountChange(e.target.value)}
                                            className="w-full pl-20 pr-6 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-secondary focus:bg-white focus:outline-none transition-all text-lg font-medium placeholder:text-gray-300"
                                            placeholder="Enter amount"
                                            min="1"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-sans font-bold text-primary uppercase tracking-wider mb-3">
                                        Enter your email address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-secondary focus:bg-white focus:outline-none transition-all text-lg font-medium placeholder:text-gray-300"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={!email || (!selectedAmount && !customAmount)}
                                    className="bg-primary text-white px-12 py-6 rounded-xl font-heading font-black text-xl hover:bg-secondary hover:text-primary transition-all shadow-2xl active:scale-95 w-full hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:text-white disabled:hover:translate-y-0"
                                >
                                    Continue to Donate
                                </button>

                                {/* Trust Block */}
                                <div className="border-t border-gray-100 pt-6 space-y-3">
                                    {[
                                        'Secure payment processed by Flutterwave',
                                        'Donations accepted in RWF — international donors may contact us at info@emmanuelfoundation.org',
                                        'Emmanuel Foundation is a registered public-interest foundation in Rwanda',
                                        'Questions? Write to us before donating — we\'re happy to answer',
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-2 text-sm text-gray-500 font-medium">
                                            <CheckCircle size={16} className="text-secondary mt-0.5 shrink-0" />
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
            <section className="py-48 bg-[#FAFAF8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-secondary">Your Impact</span>
                        <h2 className="text-5xl md:text-6xl font-heading font-black text-primary mt-6">Where Your Support Goes</h2>
                    </div>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto bg-white p-14 rounded-[3rem] shadow-sm border border-gray-100 text-center"
                    >
                        <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                            <Shield className="text-primary" size={40} />
                        </div>
                        <p className="text-xl text-foreground/70 leading-relaxed font-sans font-medium">
                            We are finalising our programme budget for Rusizi District. As soon as it is confirmed, we will publish a complete, transparent breakdown of how donations are allocated. In the meantime, all funds received are held in trust for programme activities.
                        </p>
                        <p className="mt-6 text-sm text-gray-500 font-medium">
                            Have questions? Contact us at <span className="text-secondary font-bold">info@emmanuelfoundation.org</span>
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
