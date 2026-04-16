'use client';

import { PageHeader } from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { Heart, Handshake, Users, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
    const t = useTranslations('Contact');
    
    const intentOptions = [
        {
            icon: Heart,
            title: t('intent1_title'),
            description: t('intent1_desc'),
        },
        {
            icon: Handshake,
            title: t('intent2_title'),
            description: t('intent2_desc'),
        },
        {
            icon: Users,
            title: t('intent3_title'),
            description: t('intent3_desc'),
        },
    ];
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title={t('header_title')} subtitle={t('header_subtitle')} />

            {/* Intent Cards */}
            <section className="py-[96px] bg-[var(--color-bg-white)] border-b border-gray-200">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-[48px]">
                        <h2 className="h2 text-[var(--color-text-primary)]">{t('intent_title')}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
                        {intentOptions.map((option, index) => (
                            <motion.div
                                key={option.title}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="ui-card p-[32px] text-center flex flex-col items-center hover:border-[var(--color-primary-vibrant)] transition-colors cursor-pointer group"
                            >
                                <div className="w-[64px] h-[64px] rounded-[var(--radius-ui)] bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary-vibrant)] mb-[24px] group-hover:bg-[var(--color-primary-vibrant)] group-hover:text-white transition-colors duration-300">
                                    <option.icon size={28} />
                                </div>
                                <h3 className="h4 text-[var(--color-text-primary)] mb-[12px]">{option.title}</h3>
                                <p className="body-base text-[var(--color-text-secondary)]">{option.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Info Split */}
            <section className="bg-[var(--color-bg-light)] border-b border-gray-200">
                <div className="flex flex-col lg:flex-row">
                    
                    {/* Left: Contact Info */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center p-[24px] lg:p-[80px]">
                        <div className="max-w-[500px] w-full space-y-[48px]">
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <span className="overline-label">{t('info_label')}</span>
                                <h2 className="h2 text-[var(--color-text-primary)] mt-2 mb-[24px]">{t('info_title')}</h2>
                                <p className="body-large text-[var(--color-text-secondary)]">
                                    {t('info_desc')}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="space-y-[32px]"
                            >
                                <div className="flex items-start space-x-[24px]">
                                    <div className="w-[48px] h-[48px] rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--color-primary)] shrink-0 border border-gray-100">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <span className="overline-label mb-[4px] block">{t('info_email')}</span>
                                        <a href="mailto:info@emmanuelfoundation.org" className="text-[18px] font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors">
                                            info@emmanuelfoundation.org
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-[24px]">
                                    <div className="w-[48px] h-[48px] rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--color-primary)] shrink-0 border border-gray-100">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <span className="overline-label mb-[4px] block">{t('info_phone')}</span>
                                        <a href="tel:+250788655112" className="text-[18px] font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors">
                                            +250 788 655 112
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-[24px]">
                                    <div className="w-[48px] h-[48px] rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--color-primary)] shrink-0 border border-gray-100">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <span className="overline-label mb-[4px] block">{t('info_location')}</span>
                                        <span className="text-[18px] font-medium text-[var(--color-text-primary)]">
                                            {t('info_location_val')}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-[24px] lg:p-[80px] border-l border-gray-100">
                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="w-full max-w-[500px]"
                        >
                            <form className="space-y-[32px]">
                                <div>
                                    <label htmlFor="fullname" className="overline-label mb-[12px] block">{t('form_name')}</label>
                                    <input
                                        type="text"
                                        id="fullname"
                                        className="input-field"
                                        placeholder={t('form_name_ph')}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="overline-label mb-[12px] block">{t('form_email')}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="input-field"
                                        placeholder={t('form_email_ph')}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="overline-label mb-[12px] block">{t('form_subject')}</label>
                                    <select
                                        id="subject"
                                        className="input-field appearance-none cursor-pointer"
                                    >
                                        <option value="">{t('form_subject_ph')}</option>
                                        <option value="donation">{t('form_subject_opt1')}</option>
                                        <option value="partnership">{t('form_subject_opt2')}</option>
                                        <option value="volunteering">{t('form_subject_opt3')}</option>
                                        <option value="media">{t('form_subject_opt4')}</option>
                                        <option value="general">{t('form_subject_opt5')}</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="overline-label mb-[12px] block">{t('form_message')}</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="input-field h-[160px] resize-none"
                                        placeholder={t('form_message_ph')}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary w-full"
                                >
                                    {t('form_btn')}
                                </button>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </section>
        </div>
    );
}
