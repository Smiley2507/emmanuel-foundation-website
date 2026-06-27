'use client';

import { PageHeader } from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield, Leaf, Users } from 'lucide-react';
import { Link } from '@/lib/navigation';
import { TeamSection } from '@/components/about/TeamSection';
import { useTranslations } from 'next-intl';
import { VideoFeature } from '@/components/VideoFeature';

export default function AboutPage() {
    const t = useTranslations('About');
    const videoT = useTranslations('AboutVideo');
    
    const values = [
        {
            icon: Heart,
            title: t('v1_title'),
            description: t('v1_desc'),
        },
        {
            icon: Users,
            title: t('v2_title'),
            description: t('v2_desc'),
        },
        {
            icon: Target,
            title: t('v3_title'),
            description: t('v3_desc'),
        },
        {
            icon: Shield,
            title: t('v4_title'),
            description: t('v4_desc'),
        },
        {
            icon: Leaf,
            title: t('v5_title'),
            description: t('v5_desc'),
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title={t('header_title')} subtitle={t('header_subtitle')} />

            {/* Who We Are - Split Layout */}
            <section className="bg-[var(--color-bg-white)]">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 min-h-[600px]">
                        <img
                            src="/images/about-staff-lineup.jpg"
                            alt="JEF staff team at a community event in Rwanda"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center bg-[var(--color-bg-white)]">
                        <div className="py-[40px] px-[24px] lg:py-[80px] lg:px-[64px] max-w-[720px]">
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <span className="overline-label">{t('who_label')}</span>
                                <h2 className="h2 mb-[24px] text-[var(--color-text-primary)]">
                                    {t('who_title')}
                                </h2>
                                <div className="body-large text-[var(--color-text-secondary)] space-y-[24px]">
                                    <p>
                                        {t('who_desc1')}
                                    </p>
                                    <p>
                                        {t('who_desc2')}
                                    </p>
                                    <p>
                                        {t('who_desc3')}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <VideoFeature
                title={videoT('title')}
                description={videoT('description')}
                youtubeId="QWU8L6wvrh8"
                iframeTitle={videoT('iframe_title')}
            />

            {/* Mission & Vision */}
            <section className="py-[96px] bg-[var(--color-bg-light)] relative overflow-hidden">
                <div className="bg-blob bg-blob-primary top-[-10%] right-[-5%] w-[400px] h-[400px]" />
                <div className="bg-blob bg-blob-accent bottom-[-10%] left-[-5%] w-[500px] h-[500px]" />
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="ui-card p-[48px]"
                        >
                            <div className="w-[64px] h-[64px] bg-[var(--color-primary-light)] rounded-[var(--radius-ui)] flex items-center justify-center mb-[24px] text-[var(--color-primary-vibrant)]">
                                <Target size={32} />
                            </div>
                            <h3 className="h3 mb-[16px] text-[var(--color-text-primary)]">{t('mission_title')}</h3>
                            <p className="body-large text-[var(--color-text-secondary)]">
                                {t('mission_desc')}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="ui-card p-[48px]"
                        >
                            <div className="w-[64px] h-[64px] bg-[var(--color-primary-light)] rounded-[var(--radius-ui)] flex items-center justify-center mb-[24px] text-[var(--color-primary-vibrant)]">
                                <Eye size={32} />
                            </div>
                            <h3 className="h3 mb-[16px] text-[var(--color-text-primary)]">{t('vision_title')}</h3>
                            <p className="body-large text-[var(--color-text-secondary)]">
                                {t('vision_desc')}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-[96px] bg-[var(--color-bg-white)] relative overflow-hidden">
                <div className="bg-blob bg-blob-accent top-[20%] right-[10%] w-[600px] h-[600px] opacity-20" />
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="mb-[64px]">
                        <span className="overline-label">{t('values_label')}</span>
                        <h2 className="h2 text-[var(--color-text-primary)] mt-2">{t('values_title')}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] text-left">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="ui-card flex flex-col items-start p-[32px] group"
                            >
                                <div className="w-[64px] h-[64px] bg-[var(--color-primary-light)] rounded-[var(--radius-ui)] flex items-center justify-center text-[var(--color-primary-vibrant)] mb-[24px] group-hover:bg-[var(--color-primary-vibrant)] group-hover:text-white transition-colors duration-300">
                                    <value.icon size={32} />
                                </div>
                                <h3 className="h3 text-[var(--color-text-primary)] mb-[16px]">{value.title}</h3>
                                <p className="body-base text-[var(--color-text-secondary)]">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <TeamSection />

            {/* Why We Exist - Split Layout */}
            <section className="bg-[var(--color-bg-white)]">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 min-h-[480px]">
                        <img
                            src="/images/about-celebration.jpg"
                            alt="JEF presenting a trophy at a community celebration"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center bg-[var(--color-bg-white)]">
                        <div className="py-[40px] px-[24px] lg:py-[80px] lg:px-[64px] max-w-[720px]">
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <span className="overline-label">{t('exist_label')}</span>
                                <h2 className="h2 mb-[24px] text-[var(--color-text-primary)]">
                                    {t('exist_title')}
                                </h2>
                                <p className="body-large text-[var(--color-text-secondary)]">
                                    {t('exist_desc')}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach - Split Layout (Image Right) */}
            <section className="bg-[var(--color-bg-white)]">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 flex items-center bg-[var(--color-bg-white)] order-2 lg:order-1">
                        <div className="py-[40px] px-[24px] lg:py-[80px] lg:px-[64px] max-w-[720px] ml-auto">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <span className="overline-label">{t('approach_label')}</span>
                                <h2 className="h2 mb-[24px] text-[var(--color-text-primary)]">
                                    {t('approach_title')}
                                </h2>
                                <ul className="space-y-[16px]">
                                    {[
                                        t('approach_item1'),
                                        t('approach_item2'),
                                        t('approach_item3'),
                                        t('approach_item4'),
                                        t('approach_item5')
                                    ].map((item) => (
                                        <li key={item} className="flex items-start text-[16px] text-[var(--color-text-secondary)] font-medium">
                                            <div className="w-[8px] h-[8px] mt-[8px] rounded-full bg-[var(--color-primary-vibrant)] shrink-0 mr-[16px]" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 min-h-[480px] order-1 lg:order-2">
                        <img
                            src="/images/about-community-event.jpg"
                            alt="Large community gathering at a JEF sports tournament"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-[96px] bg-[var(--color-primary)] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 max-w-[800px] mx-auto px-4 text-center text-white space-y-[40px]">
                    <h2 className="h2 pb-4">{t('cta_title')}</h2>
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
