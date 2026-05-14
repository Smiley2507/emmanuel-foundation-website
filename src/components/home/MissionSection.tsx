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
            {/* Who We Are Section — comes first */}
            <section className="py-[96px] bg-[var(--color-bg-light)] overflow-hidden relative">
                <div className="bg-blob bg-blob-accent bottom-[-10%] right-[-5%] w-[500px] h-[500px]" />
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center relative z-10">

                    {/* Content Left */}
                    <AnimateOnScroll variants={slideInLeft} delay={0.15}>
                        <div className="flex flex-col gap-[24px] lg:pr-[32px]">
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

                    {/* Collage Right */}
                    <AnimateOnScroll variants={slideInRight}>
                        <div className="relative w-full h-[420px] lg:h-[520px]">

                            {/* Top-left: Community Wellbeing */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="absolute top-0 left-0 w-[58%] h-[52%] rounded-[var(--radius-ui)] overflow-hidden shadow-xl group"
                            >
                                <img
                                    src="/community-2.jpg"
                                    alt="Community Wellbeing"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <span className="absolute bottom-3 left-4 text-white text-[11px] font-bold uppercase tracking-widest opacity-90">
                                    {t('collage_label1')}
                                </span>
                            </motion.div>

                            {/* Top-right: Environmental Protection */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.25 }}
                                viewport={{ once: true }}
                                className="absolute top-0 right-0 w-[40%] h-[36%] rounded-[var(--radius-ui)] overflow-hidden shadow-xl group"
                            >
                                <img
                                    src="/plant-tree.jpg"
                                    alt="Environmental Protection"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <span className="absolute bottom-3 left-3 text-white text-[11px] font-bold uppercase tracking-widest opacity-90">
                                    {t('collage_label2')}
                                </span>
                            </motion.div>

                            {/* Bottom: Sustainability — spans most of the width */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="absolute bottom-0 right-0 w-[76%] h-[45%] rounded-[var(--radius-ui)] overflow-hidden shadow-xl group"
                            >
                                <img
                                    src="/farmers.jpg"
                                    alt="Sustainability"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <span className="absolute bottom-3 left-4 text-white text-[11px] font-bold uppercase tracking-widest opacity-90">
                                    {t('collage_label3')}
                                </span>
                            </motion.div>

                            {/* Decorative dot accent */}
                            <div className="absolute bottom-[46%] left-[55%] w-3 h-3 rounded-full bg-[var(--color-primary-vibrant)] opacity-70 shadow-md" />
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Mission Section — comes second */}
            <section className="py-[96px] bg-[var(--color-bg-white)] overflow-hidden relative">
                <div className="bg-blob bg-blob-primary top-[-5%] left-[-5%] w-[400px] h-[400px]" />
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-center relative z-10">
                    {/* Image Left */}
                    <AnimateOnScroll variants={slideInLeft}>
                        <div className="relative h-[280px] lg:h-[480px] rounded-[var(--radius-ui)] overflow-hidden w-full">
                            <img
                                src="/hands.jpg"
                                alt="Mission"
                                className="w-full h-full object-cover"
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
        </>
    );
}
