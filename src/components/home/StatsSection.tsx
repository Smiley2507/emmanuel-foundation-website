'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { CountUp } from '@/components/CountUp';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function StatsSection() {
    const t = useTranslations('Stats');
    
    const stats = [
        { value: 7, label: t('stat1_label') },
        { value: 12000, suffix: '+', label: t('stat2_label') },
        { value: 24, suffix: ' months', label: t('stat3_label') },
        { value: 2024, prefix: t('stat4_prefix'), label: t('stat4_label') },
    ];

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -40]);

    return (
        <section ref={sectionRef} className="bg-[var(--color-bg-white)] py-[120px] overflow-hidden relative">
            <div className="bg-blob bg-blob-primary top-[20%] right-[10%] w-[600px] h-[600px] opacity-20" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    style={{ y: yParallax }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            className="flex flex-col items-center lg:items-start text-center lg:text-left"
                        >
                            <span className="text-[40px] md:text-[56px] lg:text-[64px] font-fraunces font-bold text-[var(--color-primary-vibrant)] leading-none mb-3 tracking-tighter">
                                {stat.prefix && <span className="text-[15px] align-top mt-2 inline-block mr-1 opacity-60 font-fraunces">{stat.prefix}</span>}
                                <CountUp end={stat.value} suffix={stat.suffix} />
                            </span>
                            <span className="text-[12px] font-bold uppercase tracking-wider text-[var(--color-text-secondary)] opacity-80 max-w-[200px]">
                                {stat.label}
                            </span>
                            <div className="w-12 h-1 bg-[var(--color-primary-vibrant)] mt-6 opacity-20" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
