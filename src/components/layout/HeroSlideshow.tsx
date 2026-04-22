'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from '@/lib/navigation';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { useTranslations } from 'next-intl';

export default function HeroSlideshow() {
    const t = useTranslations('Hero');
    return (
        <section className="relative min-h-[100dvh] md:min-h-[90vh] w-full overflow-hidden flex items-center pt-28 pb-20">
            <motion.div
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, ease: 'easeOut' }}
                className="absolute inset-0"
            >
                <img
                    src="/bg-1.jpeg"
                    alt="Jeannine and Emmanuel Foundation Community"
                    className="h-full w-full object-cover"
                    loading="eager"
                />
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.1) 100%)' }}
                />
            </motion.div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="flex flex-col items-start w-full max-w-[640px]"
                >
                    <motion.span
                        variants={fadeUp}
                        className="text-[10px] sm:text-[12px] font-bold tracking-[0.15em] uppercase mb-[8px] sm:mb-[12px] text-white/90"
                    >
                        {t('subtitle')}
                    </motion.span>

                    <motion.h1 variants={fadeUp} className="h2 text-white mb-4 sm:mb-6 max-w-[580px] text-balance">
                        {t('title')}
                    </motion.h1>

                    <motion.p variants={fadeUp} className="text-[16px] sm:text-[18px] text-white/85 font-sans leading-relaxed mb-8 sm:mb-10 text-balance">
                        {t('description')}
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <Link href="/donate" className="w-full sm:w-auto">
                            <button className="btn-inverse w-full flex justify-center !text-[15px]">
                                {t('btn_donate')}
                            </button>
                        </Link>
                        <Link href="/projects" className="w-full sm:w-auto">
                            <button className="btn-ghost !border-white !text-white hover:!bg-white hover:!text-[var(--color-primary)] w-full flex justify-center !text-[15px]">
                                {t('btn_work')}
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-white/60"
                >
                    <ArrowDown size={24} />
                </motion.div>
            </div>

        </section>
    );
}
