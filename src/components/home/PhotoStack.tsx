'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
    { src: '/community-2.jpg', alt: 'Community Wellbeing' },
    { src: '/plant-tree.jpg', alt: 'Environmental Protection' },
    { src: '/farmers.jpg', alt: 'Sustainability' },
    { src: '/3kids.jpg', alt: 'Children of Rwanda' },
    { src: '/happy.jpg', alt: 'Community Joy' },
];

// Slight random rotations for the "stacked" look
const stackRotations = [-3, 2, -1.5, 1, -2.5];

export function PhotoStack() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const advance = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(advance, 5000);
        return () => clearInterval(timer);
    }, [advance]);

    // Get the visible stack (current + next 2 behind it)
    const getStackOrder = () => {
        const indices = [];
        for (let i = 0; i < photos.length; i++) {
            indices.push((currentIndex + i) % photos.length);
        }
        return indices;
    };

    const stack = getStackOrder();

    return (
        <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[520px] flex items-center justify-center">
            {/* Shadow base to ground the stack */}
            <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[70%] h-8 bg-black/10 rounded-full blur-xl" />

            {/* Render bottom-to-top: last items rendered on top */}
            {stack.slice(0, 4).reverse().map((photoIndex, renderIndex) => {
                const depthIndex = 3 - renderIndex; // 0 = top, 3 = bottom
                const isTop = depthIndex === 0;
                const rotation = stackRotations[photoIndex % stackRotations.length];
                const scale = 1 - depthIndex * 0.04;
                const yOffset = depthIndex * 12;
                const xOffset = depthIndex * 4;

                return (
                    <AnimatePresence key={`presence-${photoIndex}`} mode="popLayout">
                        <motion.div
                            key={`photo-${photoIndex}-${currentIndex}`}
                            initial={isTop ? { 
                                opacity: 0, 
                                scale: 0.95, 
                                y: 20, 
                                rotate: rotation * 2 
                            } : false}
                            animate={{
                                opacity: 1 - depthIndex * 0.15,
                                scale,
                                y: yOffset,
                                x: xOffset,
                                rotate: isTop ? 0 : rotation,
                                zIndex: 10 - depthIndex,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 1.05,
                                y: -60,
                                x: 80,
                                rotate: 15,
                                zIndex: 20,
                                transition: { duration: 0.6, ease: 'easeInOut' },
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ zIndex: 10 - depthIndex }}
                        >
                            <div 
                                className="relative w-[85%] sm:w-[80%] h-[90%] rounded-[1.5rem] overflow-hidden shadow-2xl bg-white p-3"
                                style={{
                                    boxShadow: isTop 
                                        ? '0 25px 60px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.1)' 
                                        : '0 15px 40px rgba(0,0,0,0.15)',
                                }}
                            >
                                <img
                                    src={photos[photoIndex].src}
                                    alt={photos[photoIndex].alt}
                                    className="w-full h-full object-cover rounded-[1rem]"
                                    loading={depthIndex < 2 ? 'eager' : 'lazy'}
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                );
            })}

            {/* Progress dots */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {photos.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${
                            i === currentIndex
                                ? 'bg-[var(--color-primary-vibrant)] w-6'
                                : 'bg-[var(--color-primary-vibrant)]/30 hover:bg-[var(--color-primary-vibrant)]/50'
                        }`}
                        aria-label={`View photo ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
