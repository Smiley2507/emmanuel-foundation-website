'use client';

import { motion } from 'framer-motion';
import { XCircle, RotateCcw, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function DonateCancelPage() {
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
                    {/* Cancel icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
                        className="mx-auto mb-[32px]"
                    >
                        <div className="w-[120px] h-[120px] mx-auto rounded-full bg-gray-50 border-2 border-gray-200 flex items-center justify-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.6, type: 'spring', stiffness: 300 }}
                            >
                                <XCircle size={64} className="text-gray-400" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-[20px] mb-[40px]"
                    >
                        <h1 className="h2 text-[var(--color-text-primary)]">
                            {t('cancel_title')}
                        </h1>
                        <p className="body-large text-[var(--color-text-secondary)] max-w-[480px] mx-auto">
                            {t('cancel_desc')}
                        </p>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-[16px]"
                    >
                        <Link
                            href="/donate"
                            className="btn-primary flex items-center gap-[10px] px-[32px]"
                        >
                            <RotateCcw size={18} />
                            {t('cancel_btn_retry')}
                        </Link>
                        <Link
                            href="/contact"
                            className="btn-ghost flex items-center gap-[10px] px-[32px]"
                        >
                            <Mail size={18} />
                            {t('cancel_btn_contact')}
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}
