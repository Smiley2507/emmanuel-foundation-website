'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { useTranslations } from 'next-intl';

export function TeamSection() {
    const t = useTranslations('Team');
    
    const teamMembers = [
        {
            name: t('member_name_founder'),
            role: t('role_founder'),
            place: t('council_guardian'),
            image: '/emmanuel.jpeg',
        },
        {
            name: t('member_name_president'),
            role: t('role_president'),
            place: t('council_founding'),
            image: '/solange.jpeg',
        },
        {
            name: t('member_name_vp'),
            role: t('role_vp'),
            place: t('council_founding'),
            image: '/maurice.jpeg',
        },
        {
            name: t('member_name_treasurer'),
            role: t('role_treasurer'),
            place: t('council_founding'),
            image: '/pie.jpeg',
        },
        {
            name: t('member_name_secretary'),
            role: t('role_secretary'),
            place: t('council_founding'),
            image: '/valerie.jpeg',
        },
        {
            name: t('member_name_advisor'),
            role: t('role_advisor'),
            place: t('council_founding'),
            image: '/poliphile.jpeg',
        },
        {
            name: t('member_name_exec_sec'),
            role: t('role_exec_sec'),
            place: t('council_exec'),
            image: '/janvier.jpeg',
        },
    ];
    return (
        <section className="py-[96px] bg-[var(--color-bg-white)]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-[64px]">
                    <span className="overline-label">{t('label')}</span>
                    <h2 className="h2 text-[var(--color-text-primary)] mt-2">{t('title')}</h2>
                </div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[40px]"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            variants={fadeUp}
                            className="group flex flex-col items-center"
                        >
                            <div className="w-full aspect-[4/5] overflow-hidden rounded-[var(--radius-ui)] mb-[24px] relative shadow-sm group-hover:shadow-md transition-shadow">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-all duration-700 hover:scale-[1.05]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <div className="text-center w-full">
                                <h3 className="h4 text-[var(--color-text-primary)] mb-[4px]">{member.name}</h3>
                                <p className="body-small text-[var(--color-text-secondary)] font-bold uppercase tracking-wider">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
