'use client';

import { motion } from 'framer-motion';
import { Link } from '@/lib/navigation';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { slideInLeft, slideInRight } from '@/lib/animations';
import { useTranslations } from 'next-intl';

export function MissionSection() {
    const t = useTranslations('Mission');
    return (
        <>
            {/* Mission Section — comes first */}
            <section className="py-[96px] bg-[var(--color-bg-white)] overflow-hidden relative">
                <div className="bg-blob bg-blob-primary top-[-5%] left-[-5%] w-[400px] h-[400px]" />
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-center relative z-10">
                    
                    {/* Artistic Collage Left */}
                    <AnimateOnScroll variants={slideInLeft}>
                        <div className="relative w-full h-[450px] lg:h-[550px] flex items-center justify-center">
                            {/* Decorative background shape */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="absolute inset-0 bg-[var(--color-primary-light)] opacity-30 rounded-full blur-3xl"
                            />

                            {/* Image 1: Main (Community) */}
                            <motion.div
                                initial={{ opacity: 0, x: -30, rotate: -5 }}
                                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="absolute left-0 top-[10%] w-[55%] h-[65%] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white z-10"
                            >
                                <img
                                    src="/community-2.jpg"
                                    alt="Community Wellbeing"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>

                            {/* Image 2: Top Right (Environmental) */}
                            <motion.div
                                initial={{ opacity: 0, y: -30, rotate: 5 }}
                                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute right-0 top-0 w-[45%] h-[45%] rounded-full overflow-hidden shadow-2xl border-8 border-white z-20"
                            >
                                <img
                                    src="/plant-tree.jpg"
                                    alt="Environmental Protection"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>

                            {/* Image 3: Bottom Right (Sustainability) */}
                            <motion.div
                                initial={{ opacity: 0, x: 30, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="absolute right-[5%] bottom-[5%] w-[60%] h-[50%] rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-2xl border-8 border-white z-30"
                            >
                                <img
                                    src="/farmers.jpg"
                                    alt="Sustainability"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>

                            {/* Decorative element */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                viewport={{ once: true }}
                                className="absolute left-[45%] top-[50%] w-6 h-6 rounded-full bg-[var(--color-primary-vibrant)] z-40"
                            />
                        </div>
                    </AnimateOnScroll>

                    {/* Content Right */}
                    <AnimateOnScroll variants={slideInRight} delay={0.15}>
                        <div className="flex flex-col gap-[24px] lg:pl-[32px]">
                            <span className="overline-label">{t('label_mission')}</span>
                            <h2 className="h2 mb-[24px] text-[var(--color-text-primary)]">{t('title_mission')}</h2>
                            <p className="body-large text-[var(--color-text-secondary)] mb-[40px]">
                                {t('desc_mission')}
                            </p>
                            <Link href="/about">
                                <button className="btn-primary">
                                    {t('btn_story')}
                                </button>
                            </Link>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Who We Are Section — comes second */}
            <section className="py-[96px] bg-[var(--color-bg-light)] overflow-hidden relative">
                <div className="bg-blob bg-blob-accent bottom-[-10%] right-[-5%] w-[500px] h-[500px]" />
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center relative z-10">
                    {/* Content Left */}
                    <AnimateOnScroll variants={slideInLeft} delay={0.15}>
                        <div className="flex flex-col gap-[24px] lg:pr-[32px] order-2 lg:order-1">
                            <span className="overline-label">{t('label_who')}</span>
                            <blockquote className="pull-quote text-[22px] border-l-4 border-[var(--color-primary-vibrant)] pl-[20px] mb-[32px]">
                                {t('quote_who')}
                            </blockquote>
                            <p className="body-large text-[var(--color-text-secondary)] mb-[40px]">
                                {t('desc_who')}
                            </p>
                            <Link href="/about">
                                <button className="btn-ghost">
                                    {t('btn_about')}
                                </button>
                            </Link>
                        </div>
                    </AnimateOnScroll>
                    
                    {/* Image Right */}
                    <AnimateOnScroll variants={slideInRight}>
                        <div className="relative h-[280px] lg:h-[480px] rounded-[var(--radius-ui)] overflow-hidden w-full order-1 lg:order-2">
                            <img
                                src="/3kids.jpg"
                                alt="Who We Are"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
