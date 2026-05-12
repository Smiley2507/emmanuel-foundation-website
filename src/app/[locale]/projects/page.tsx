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

            {/* Current Initiative — Rusizi District */}
            <section className="py-[96px] bg-[var(--color-bg-dark)] text-white">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-[64px]">
                        <span className="overline-label text-[var(--color-primary-light)]">{t('rusizi_label')}</span>
                        <h2 className="h2 mt-2 max-w-[800px] mx-auto text-white">
                            {t('rusizi_title')}
                        </h2>
                    </div>

                    <AnimateOnScroll variants={fadeUp}>
                        <div className="bg-white/10 rounded-[12px] border border-white/20 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            <div className="p-[48px] space-y-[40px]">
                                <p className="body-large text-white/85">
                                    {t('rusizi_desc')}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                                    {[
                                        { label: t('rusizi_loc_label'), value: t('rusizi_loc_val') },
                                        { label: t('rusizi_dur_label'), value: t('rusizi_dur_val') },
                                        { label: t('rusizi_ben_label'), value: t('rusizi_ben_val') },
                                        { label: t('rusizi_stat_label'), value: t('rusizi_stat_val') },
                                    ].map((item) => (
                                        <div key={item.label} className="bg-white/5 p-[24px] rounded-[8px] border border-white/10">
                                            <span className="overline-label text-white/60 block mb-[8px]">{item.label}</span>
                                            <span className="h4 text-white">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-[var(--color-primary-vibrant)] p-[24px] rounded-[var(--radius-ui)]">
                                    <span className="overline-label !text-white/80 block mb-[8px]">{t('rusizi_focus_label')}</span>
                                    <p className="text-white font-bold text-[16px]">{t('rusizi_focus_val')}</p>
                                </div>
                                <div className="bg-white/10 p-[24px] rounded-[8px] border border-white/10">
                                    <span className="overline-label text-white/80 block mb-[8px]">{t('rusizi_fund_label')}</span>
                                    <p className="text-white font-medium text-[16px]">{t('rusizi_fund_val')}</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-[16px] pt-[16px]">
                                    <Link href="/donate">
                                        <button className="btn-primary w-full sm:w-auto h-full px-[32px] py-[16px]">
                                            {t('btn_support')}
                                        </button>
                                    </Link>
                                    <Link href="/contact">
                                        <button className="btn-ghost text-white border-white hover:bg-white/10 w-full sm:w-auto px-[32px] py-[16px]">
                                            {t('btn_partner')}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative min-h-[400px] lg:min-h-0">
                                <img
                                    src="/bg-1.jpeg"
                                    alt="Rusizi District project"
                                    className="w-full h-full object-cover grayscale-[30%]"
                                />
                                <div className="absolute inset-0 bg-black/40" />
                            </div>
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
