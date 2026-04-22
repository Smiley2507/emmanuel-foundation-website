'use client';

import { motion } from 'framer-motion';
import { Heart, Leaf, GraduationCap, Droplets } from 'lucide-react';
import { Link } from '@/lib/navigation';
import { staggerContainer, scaleIn } from '@/lib/animations';
import { useTranslations } from 'next-intl';

export function FocusAreas() {
    const t = useTranslations('FocusAreas');
    
    const focusAreas = [
        {
            title: t('area1_title'),
            description: t('area1_desc'),
            icon: Heart,
        },
        {
            title: t('area2_title'),
            description: t('area2_desc'),
            icon: Leaf,
        },
        {
            title: t('area3_title'),
            description: t('area3_desc'),
            icon: GraduationCap,
        },
        {
            title: t('area4_title'),
            description: t('area4_desc'),
            icon: Droplets,
        }
    ];

    return (
        <section className="py-[96px] bg-[var(--color-bg-white)]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-40px' }}
                    className="mb-[64px]"
                >
                    <span className="overline-label">{t('top_label')}</span>
                    <h2 className="h2 text-[var(--color-text-primary)] mt-2">{t('top_title')}</h2>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[32px] text-left"
                >
                    {focusAreas.map((area, index) => (
                        <motion.div key={index} variants={scaleIn}>
                            <Link href="/projects" className="block h-full">
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                    className="ui-card flex flex-col items-start p-[32px] h-full group/card"
                                >
                                    <div className="w-[56px] h-[56px] rounded-[var(--radius-ui)] bg-[var(--color-primary-light)] flex items-center justify-center mb-[24px] group-hover/card:bg-[var(--color-primary-vibrant)] transition-colors duration-300">
                                        <area.icon size={28} className="text-[var(--color-primary-vibrant)] group-hover/card:text-white transition-colors duration-300" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="h4 mb-[12px] text-[var(--color-text-primary)]">{area.title}</h3>
                                    <p className="body-base text-[var(--color-text-secondary)]">
                                        {area.description}
                                    </p>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
