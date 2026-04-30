'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Home, Heart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function DonateSuccessPage() {
    const t = useTranslations('Donate');

    return (
        <div className="flex flex-col min-h-screen">
            <section className="flex-1 flex items-center justify-center bg-[var(--color-bg-light)] py-[80px] px-[24px]">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-[600px] w-full text-center"
                >
                    {/* Success icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
                        className="mx-auto mb-[32px]"
                    >
                        <div className="w-[120px] h-[120px] mx-auto rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.6, type: 'spring', stiffness: 300 }}
                            >
                                <CheckCircle size={64} className="text-green-500" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-[20px]"
                    >
                        <h1 className="h2 text-[var(--color-text-primary)]">
                            {t('success_title')}
                        </h1>
                        <p className="body-large text-[var(--color-text-secondary)] max-w-[480px] mx-auto">
                            {t('success_desc')}
                        </p>
                    </motion.div>

                    {/* Decorative hearts */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center justify-center gap-[8px] mt-[32px] mb-[40px]"
                    >
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ y: [0, -6, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    delay: i * 0.3,
                                    ease: 'easeInOut',
                                }}
                            >
                                <Heart
                                    size={20}
                                    className="text-[var(--color-primary-accent)]"
                                    fill="currentColor"
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-[16px]"
                    >
                        <Link
                            href="/"
                            className="btn-primary flex items-center gap-[10px] px-[32px]"
                        >
                            <Home size={18} />
                            {t('success_btn_home')}
                        </Link>
                        <Link
                            href="/donate"
                            className="btn-ghost flex items-center gap-[10px] px-[32px]"
                        >
                            <Heart size={18} />
                            {t('success_btn_another')}
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}
