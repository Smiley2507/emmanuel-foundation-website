'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from '@/lib/navigation';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { useTranslations } from 'next-intl';
import { useState, useEffect, useCallback } from 'react';

const SLIDES = [
    {
        src: '/images/hero-staff-team.jpg',
        alt: 'JEF staff team at a community field event in Rwanda',
    },
    {
        src: '/images/hero-youth-football.jpg',
        alt: 'Youth football team supported by JEF programmes in Rwanda',
    },
    {
        src: '/images/hero-tournament.jpg',
        alt: 'Community sports tournament bringing together youth across Rwanda',
    },
    {
        src: '/images/hero-award-ceremony.jpg',
        alt: 'JEF presenting a trophy at a community awards ceremony',
    },
    {
        src: '/images/hero-youth-goal.jpg',
        alt: 'Youth football team posing at the goalpost during a JEF sports programme',
    },
];

const SLIDE_DURATION = 6000; // ms per slide

export default function HeroSlideshow() {
    const t = useTranslations('Hero');
    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, []);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    }, []);

    const goTo = useCallback((index: number) => {
        setCurrent(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), SLIDE_DURATION * 2);
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(next, SLIDE_DURATION);
        return () => clearInterval(timer);
    }, [isAutoPlaying, next]);

    const handleManualNav = (fn: () => void) => {
        fn();
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), SLIDE_DURATION * 2);
    };

    return (
        <section className="relative min-h-[100dvh] md:min-h-[90vh] w-full overflow-hidden flex items-center pt-28 pb-20">

            {/* Slides */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.4, ease: 'easeOut' }}
                    className="absolute inset-0"
                >
                    <img
                        src={SLIDES[current].src}
                        alt={SLIDES[current].alt}
                        className="h-full w-full object-cover"
                        loading="eager"
                    />
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.1) 100%)' }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Hero text content */}
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

            {/* Prev / Next arrows */}
            <button
                aria-label="Previous slide"
                onClick={() => handleManualNav(prev)}
                className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-200"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                aria-label="Next slide"
                onClick={() => handleManualNav(next)}
                className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-200"
            >
                <ChevronRight size={20} />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => goTo(i)}
                        className={`transition-all duration-300 rounded-full ${
                            i === current
                                ? 'w-6 h-2 bg-white'
                                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                        }`}
                    />
                ))}
            </div>

            {/* Progress bar */}
            {isAutoPlaying && (
                <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] bg-white/10">
                    <motion.div
                        key={`progress-${current}`}
                        className="h-full bg-white/50"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                    />
                </div>
            )}

            {/* Scroll cue */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-white/60"
                >
                    <ArrowDown size={24} />
                </motion.div>
            </div>

        </section>
    );
}
