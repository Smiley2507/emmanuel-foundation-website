'use client';

import { motion } from 'framer-motion';
import { Link } from '@/lib/navigation';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { scaleIn, staggerContainer, fadeUp } from '@/lib/animations';
import { useTranslations } from 'next-intl';

export function ImpactSection() {
    const t = useTranslations('Impact');
    return (
        <AnimateOnScroll variants={scaleIn}>
            <section className="py-[96px] bg-[var(--color-bg-dark)] relative overflow-hidden">
                {/* Subtle background overlay to darken further if needed */}
                <div className="absolute inset-0 bg-black/20" />
                
                <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="flex flex-col items-center"
                    >
                        <motion.h2 variants={fadeUp} className="h2 text-white mb-[24px]">
                            {t('title')}
                        </motion.h2>
                        
                        <motion.p variants={fadeUp} className="body-large text-white/85 mb-[40px]">
                            {t('desc')}
                        </motion.p>
                        
                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-[16px]">
                            <Link href="/donate">
                                <button className="btn-primary">
                                    {t('btn_support')}
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="btn-inverse !bg-transparent !border-white !text-white hover:!bg-white/10">
                                    {t('btn_partner')}
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </AnimateOnScroll>
    );
}
