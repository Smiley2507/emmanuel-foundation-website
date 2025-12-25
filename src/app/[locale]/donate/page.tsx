'use client';

import { PageHeader } from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Heart } from 'lucide-react';

const presetAmounts = [5000, 10000, 25000, 50000, 100000];

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
            <PageHeader title="Donate" subtitle="Every contribution makes a difference." />

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
                                Your Support Changes Lives
                            </h2>

                            <p className="text-2xl text-white/90 leading-relaxed font-sans font-medium">
                                As a new foundation, your donation helps us build our first programs and create real impact in local communities. Every contribution strengthens our ability to support families, protect nature, and drive sustainable development across Rwanda.
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-8">
                                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                                    <div className="text-5xl font-heading font-black text-secondary mb-2">100%</div>
                                    <div className="text-white/80 font-medium">Goes to Programs</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                                    <div className="text-5xl font-heading font-black text-secondary mb-2">25K RWF</div>
                                    <div className="text-white/80 font-medium">Plants 50 Trees</div>
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

                                <p className="text-center text-sm text-gray-500 font-medium">
                                    Secure payment powered by Flutterwave
                                </p>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-48 bg-[#FAFAF8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-32">
                        <span className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-secondary">Your Impact</span>
                        <h2 className="text-5xl md:text-6xl font-heading font-black text-primary mt-6">Where Your Donation Goes</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                title: 'Community Programs',
                                percentage: '40%',
                                description: 'Supporting families and empowering youth through education and health initiatives.',
                                color: 'bg-blue-50 text-blue-500'
                            },
                            {
                                title: 'Environmental Conservation',
                                percentage: '35%',
                                description: 'Tree planting, wetland restoration, and sustainable waste management.',
                                color: 'bg-green-50 text-green-500'
                            },
                            {
                                title: 'Sustainable Development',
                                percentage: '25%',
                                description: 'Building resilient infrastructure and long-term community capacity.',
                                color: 'bg-amber-50 text-amber-500'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                            >
                                <div className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                                    <span className="text-3xl font-heading font-black">{item.percentage}</span>
                                </div>
                                <h3 className="text-2xl font-heading font-black text-primary mb-6">{item.title}</h3>
                                <p className="text-foreground/70 leading-relaxed font-medium">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
