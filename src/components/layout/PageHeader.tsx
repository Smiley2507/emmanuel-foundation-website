'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <section className="bg-[var(--color-bg-dark)] text-white pt-[160px] pb-[96px] relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
                <div className="max-w-[800px]">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="h1 mb-[24px]"
                    >
                        {title}
                    </motion.h1>
                    {subtitle && (
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-[20px] text-white/85 font-sans font-medium"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            </div>
        </section>
    );
}
