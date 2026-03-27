'use client';

import { motion } from 'framer-motion';

const stats = [
    { value: '7', label: 'Active Programmes', delay: 0 },
    { value: '12,000+', label: 'Targeted beneficiaries in Rusizi District', delay: 0.1 },
    { value: '24 months', label: 'Duration of our first integrated project', delay: 0.2 },
    { value: 'Est. 2024', label: 'Founded with a long-term vision', delay: 0.3 },
];

export default function StatsSection() {
    return (
        <section className="bg-[var(--color-bg-light)] py-[64px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: stat.delay }}
                            viewport={{ once: true }}
                            className="border-l-[3px] border-[var(--color-primary)] pl-[20px] flex flex-col justify-center"
                        >
                            <span className="text-[48px] font-sans font-semibold text-[var(--color-primary)] leading-tight mb-2">
                                {stat.value}
                            </span>
                            <span className="text-[14px] font-sans text-[var(--color-text-secondary)] leading-snug pr-4">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
