'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { CountUp } from '@/components/CountUp';

const stats = [
    { value: 7, label: 'Active Programmes' },
    { value: 12000, suffix: '+', label: 'Targeted beneficiaries in Rusizi District' },
    { value: 24, suffix: ' months', label: 'Duration of our first integrated project' },
    { value: 2024, prefix: 'Est. ', label: 'Founded with a long-term vision' },
];

export default function StatsSection() {
    return (
        <section className="bg-[var(--color-bg-light)] py-[64px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            className="border-l-[3px] border-[var(--color-primary)] pl-[20px] flex flex-col justify-center"
                        >
                            <span className="text-[48px] font-sans font-semibold text-[var(--color-primary)] leading-tight mb-2">
                                {stat.prefix && <span>{stat.prefix}</span>}
                                <CountUp end={stat.value} suffix={stat.suffix} />
                            </span>
                            <span className="text-[14px] font-sans text-[var(--color-text-secondary)] leading-snug pr-4">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
