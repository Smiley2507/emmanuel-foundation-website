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
            {/* Mission Section */}
            <section className="py-[96px] bg-[var(--color-bg-white)] overflow-hidden relative">
                <div className="bg-blob bg-blob-primary top-[-5%] left-[-5%] w-[400px] h-[400px]" />
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-center relative z-10">
                    {/* Image — contained */}
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

            {/* About Preview Section */}
            <section className="py-[96px] bg-[var(--color-bg-light)] overflow-hidden relative">
                <div className="bg-blob bg-blob-accent bottom-[-10%] right-[-5%] w-[500px] h-[500px]" />
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-center relative z-10">
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
                    {/* Image Right — contained */}
                    <AnimateOnScroll variants={slideInRight}>
                        <div className="relative h-[280px] lg:h-[480px] rounded-[12px] overflow-hidden w-full order-1 lg:order-2">
                            <img
                                src="/bg-3.jpeg"
                                alt="About Jeannine and Emmanuel Foundation"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
