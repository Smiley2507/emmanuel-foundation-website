'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';

export default function HeroSlideshow() {
    const t = useTranslations('Hero');
    const [current, setCurrent] = useState(0);

    const slides = [
        {
            image: '/bg-1.jpeg', // Greenery/Rusizi
            title: "Driven by Integrity",
            description: "We act with transparency and responsibility, ensuring that every resource is used to build a better future for Rwanda."
        },
        {
            image: '/bg-2.jpeg', // Local community context
            title: "Rooted in Community",
            description: "We place people at the heart of our work, empowering families and vulnerable groups to thrive with dignity."
        },
        {
            image: '/bg-3.jpeg', // Nature/Water
            title: "Focused on Impact",
            description: "From environmental conservation to sustainable development, we deliver solutions that create lasting change."
        }
    ];

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-primary">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1, opacity: 0 }}
                    transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 bg-primary"
                >
                    <img
                        src={slides[current].image}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                    {/* Balanced overlay - not too dark, but enough for readability */}
                    <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-primary/40" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                <div className="max-w-5xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -30, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-center"
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[1.1] tracking-tight drop-shadow-2xl mb-10 text-balance">
                                {slides[current].title}
                            </h1>

                            <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-sans font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md mb-14 text-balance">
                                {slides[current].description}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                                <Link href="/donate" className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto bg-secondary text-primary px-12 py-5 rounded-md font-heading font-bold text-xl hover:bg-white hover:text-primary transition-all shadow-2xl active:scale-95">
                                        {t('cta_donate')}
                                    </button>
                                </Link>
                                <Link href="/about" className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-12 py-5 rounded-md font-heading font-bold text-xl hover:bg-white/10 transition-all shadow-xl active:scale-95">
                                        {t('cta_learn')}
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Controls - Bottom Right */}
            <div className="absolute bottom-12 right-12 z-20 flex space-x-4 hidden md:flex">
                <button
                    onClick={prevSlide}
                    className="p-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-primary transition-all backdrop-blur-sm"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-primary transition-all backdrop-blur-sm"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Slide Indicators - Bottom Center */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1.5 transition-all duration-700 rounded-full ${current === i ? 'w-16 bg-secondary' : 'w-6 bg-white/30'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
