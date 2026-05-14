'use client';

import { PageHeader } from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { Link } from '@/lib/navigation';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { slideInLeft, slideInRight, fadeUp } from '@/lib/animations';
import { useTranslations } from 'next-intl';

export default function ProjectsPage() {
    const t = useTranslations('Projects');
    
    const programmes = [
        {
            key: 'p1',
            activityCount: 4,
            image: '/community-2.jpg',
        },
        {
            key: 'p2',
            activityCount: 6,
            image: '/plant-tree.jpg',
        },
        {
            key: 'p3',
            activityCount: 5,
            image: '/kid-edu-2.jpg',
        },
        {
            key: 'p4',
            activityCount: 4,
            image: '/bg-1.jpeg',
        },
        {
            key: 'p5',
            activityCount: 4,
            image: '/community-1.jpg',
        },
        {
            key: 'p6',
            activityCount: 4,
            image: '/youth-empower.jpg',
        },
        {
            key: 'p7',
            activityCount: 4,
            image: '/africa-sport.jpg',
        },
    ];

    const getProgramData = (p: any) => ({
        title: t(`${p.key}_title`),
        description: t(`${p.key}_desc`),
        activities: Array.from({ length: p.activityCount }, (_, i) => t(`${p.key}_act${i + 1}`)),
        image: p.image
    });
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title={t('header_title')} subtitle={t('header_subtitle')} />

            {/* Intro Section */}
            <section className="bg-[var(--color-primary)] relative overflow-hidden">
                <div className="absolute rounded-full blur-[140px] opacity-40 mix-blend-screen pointer-events-none z-0 bg-[var(--color-primary-light)] top-[-20%] left-[10%] w-[600px] h-[600px]" />
                <div className="flex flex-col lg:flex-row-reverse relative z-10">
                    <div className="w-full lg:w-1/2 min-h-[480px]">
                        <img
                            src="/farmers.jpg"
                            alt="Programs overview"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center">
                        <div className="py-[40px] px-[24px] lg:py-[80px] lg:px-[64px] max-w-[720px] ml-auto">
                            <span className="overline-label text-white/70">{t('intro_label')}</span>
                            <h2 className="h2 mb-[24px] text-white mt-2">
                                {t('intro_title')}
                            </h2>
                            <p className="body-large text-white/70">
                                {t('intro_desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* All 7 Programmes */}
            <div className="flex flex-col border-t border-gray-200">
                {programmes.map((programme, index) => {
                    const isEven = index % 2 === 0;
                    const programmeData = getProgramData(programme);
                    return (
                        <section key={programmeData.title} className="bg-[var(--color-bg-white)] border-b border-gray-200">
                            <div className={`flex flex-col lg:flex-row ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                                <div className="w-full lg:w-1/2 min-h-[480px] lg:border-x border-gray-100 overflow-hidden relative group">
                                    <img
                                        src={programmeData.image}
                                        alt={programmeData.title}
                                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-[var(--color-primary-dark)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-[800ms] pointer-events-none" />
                                </div>
                                <div className="w-full lg:w-1/2 flex items-center">
                                    <div className="py-[40px] px-[24px] lg:py-[80px] lg:px-[64px] max-w-[720px] mx-auto">
                                        <AnimateOnScroll variants={isEven ? slideInRight : slideInLeft}>
                                            <span className="text-[20px] font-sans font-bold text-[var(--color-primary-vibrant)] mb-[16px] block tracking-wider drop-shadow-sm">0{index + 1}</span>
                                            <h2 className="h2 mb-[24px] text-[var(--color-text-primary)]">
                                                {programmeData.title}
                                            </h2>
                                            <p className="body-large text-[var(--color-text-secondary)] mb-[32px]">
                                                {programmeData.description}
                                            </p>
                                            
                                            <motion.div
                                                whileInView={{ y: 0, opacity: 1 }}
                                                initial={{ y: 20, opacity: 0 }}
                                                viewport={{ once: true }}
                                                className="bg-[var(--color-bg-light)] p-[32px] rounded-[var(--radius-ui)] border border-[var(--color-border)]"
                                            >
                                                <h4 className="overline-label mb-[16px]">{t('activities_label')}</h4>
                                                <ul className="space-y-[16px]">
                                                    {programmeData.activities.map((activity) => (
                                                        <li key={activity} className="flex items-start text-[16px] text-[var(--color-text-secondary)] font-medium">
                                                            <div className="w-[8px] h-[8px] mt-[8px] rounded-full bg-[var(--color-primary-vibrant)] shrink-0 mr-[16px]" />
                                                            <span>{activity}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        </AnimateOnScroll>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* Unified Current Initiative Section — Rusizi District */}
            <section className="py-[120px] bg-[var(--color-bg-dark)] text-white relative overflow-hidden">
                {/* Background accents */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary-vibrant)]/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-primary-vibrant)]/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-[80px] flex flex-col items-center">
                        <span className="overline-label text-[var(--color-primary-light)] mb-4">{t('rusizi_label')}</span>
                        <div className="inline-block px-4 py-1 rounded-full bg-[var(--color-primary-vibrant)] text-white text-[14px] font-bold tracking-wider uppercase mb-6 shadow-lg shadow-primary/20">
                            {t('rusizi_badge')}
                        </div>
                        <h2 className="h2 max-w-[900px] mx-auto text-white leading-tight">
                            {t('rusizi_title')}
                        </h2>
                    </div>

                    <div className="space-y-[120px]">
                        {/* Part 1: Launch & Goals (Text Left, Image Right) */}
                        <AnimateOnScroll variants={fadeUp}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center">
                                <div className="space-y-[48px]">
                                    <div className="space-y-[24px]">
                                        <h3 className="h3 text-[var(--color-primary-light)]">{t('rusizi_subtitle')}</h3>
                                        <p className="body-large text-white/90 leading-relaxed">
                                            {t('rusizi_desc')}
                                        </p>
                                    </div>

                                    <ul className="space-y-[20px]">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <li key={i} className="flex items-start gap-[16px] text-white/80 group">
                                                <div className="mt-1.5 w-[20px] h-[20px] rounded-full bg-[var(--color-primary-vibrant)]/20 border border-[var(--color-primary-vibrant)]/40 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary-vibrant)] transition-colors duration-300">
                                                    <div className="w-[6px] h-[6px] rounded-full bg-white" />
                                                </div>
                                                <span className="text-[17px] font-medium leading-relaxed">{t(`rusizi_bullet${i}`)}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="body-large text-white/70 italic leading-relaxed border-l-2 border-[var(--color-primary-vibrant)] pl-6">
                                        {t('rusizi_closing')}
                                    </p>
                                </div>
                                <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px] rounded-[24px] overflow-hidden group shadow-2xl">
                                    <img
                                        src="/bg-1.jpeg"
                                        alt="Rusizi District project"
                                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-dark)]/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-8 left-8">
                                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 max-w-[280px]">
                                            <span className="overline-label text-white/60 block mb-2">Location</span>
                                            <span className="text-xl font-bold text-white">Rusizi District, Rwanda</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        {/* Part 2: Formal Overview (Image Left, Text Right) */}
                        <AnimateOnScroll variants={fadeUp}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center">
                                <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px] rounded-[24px] overflow-hidden group shadow-2xl order-2 lg:order-1">
                                    <img
                                        src="/community-1.jpg"
                                        alt="Rusizi Community"
                                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-dark)]/60 via-transparent to-transparent" />
                                </div>
                                <div className="space-y-[48px] order-1 lg:order-2">
                                    <div className="space-y-[32px]">
                                        <h4 className="overline-label text-[var(--color-primary-light)]">{t('rusizi_summary_label')}</h4>
                                        <div className="space-y-6">
                                            {[1, 2, 3].map((i) => (
                                                <p key={i} className="body-large text-white/80 leading-relaxed">
                                                    {t(`rusizi_formal_desc${i}`)}
                                                </p>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white/5 p-[32px] rounded-[24px] border border-white/10 backdrop-blur-sm">
                                        <p className="text-white/60 text-[16px] italic leading-relaxed">
                                            The project addresses interconnected challenges of youth unemployment, social exclusion, poor waste management, and environmental degradation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Final Action Buttons at the Bottom */}
                    <AnimateOnScroll variants={fadeUp}>
                        <div className="mt-[100px] pt-[80px] border-t border-white/10 flex flex-col items-center space-y-[32px]">
                            <div className="text-center space-y-4">
                                <h3 className="h3 text-white">Ready to make a difference?</h3>
                                <p className="body-large text-white/60 max-w-[600px]">Join us in Rusizi District to turn waste into wealth and create lasting impact for the community.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-[24px]">
                                <Link href="/donate">
                                    <button className="btn-primary px-[48px] py-[20px] text-[18px] w-full sm:w-auto">
                                        {t('btn_support')}
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="btn-ghost text-white border-white/30 hover:bg-white/10 px-[48px] py-[20px] text-[18px] w-full sm:w-auto">
                                        {t('btn_partner')}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-[96px] bg-[var(--color-primary)] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 max-w-[800px] mx-auto px-4 text-center text-white space-y-[40px]">
                    <h2 className="h2 text-white">{t('cta_title')}</h2>
                    <p className="body-large text-white/85">
                        {t('cta_desc')}
                    </p>
                    <div>
                        <Link href="/donate">
                            <button className="btn-inverse">
                                {t('cta_btn')}
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
