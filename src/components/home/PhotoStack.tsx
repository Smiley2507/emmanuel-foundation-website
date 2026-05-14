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

// Subtle, realistic rotations like photos casually placed
const stackRotations = [-2.5, 1.8, -1.2, 2.2, -1.8];

export function PhotoStack() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const advance = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(advance, 4000);
        return () => clearInterval(timer);
    }, [advance]);

    const getStackOrder = () => {
        const indices = [];
        for (let i = 0; i < photos.length; i++) {
            indices.push((currentIndex + i) % photos.length);
        }
        return indices;
    };

    const stack = getStackOrder();

    return (
        <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[560px] flex items-center justify-center">
            {/* Soft ground shadow */}
            <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-[75%] h-6 bg-black/8 rounded-full blur-2xl" />

            {stack.slice(0, 4).reverse().map((photoIndex, renderIndex) => {
                const depthIndex = 3 - renderIndex; // 0 = top, 3 = deepest
                const isTop = depthIndex === 0;
                const rotation = stackRotations[photoIndex % stackRotations.length];
                const scale = 1 - depthIndex * 0.03;
                const yOffset = depthIndex * 8;
                const xOffset = depthIndex * 3;

                return (
                    <AnimatePresence key={`presence-${photoIndex}`} mode="popLayout">
                        <motion.div
                            key={`photo-${photoIndex}-${currentIndex}`}
                            initial={isTop ? {
                                opacity: 0,
                                scale: 0.97,
                                y: 12,
                                rotate: rotation,
                            } : false}
                            animate={{
                                opacity: 1 - depthIndex * 0.12,
                                scale,
                                y: yOffset,
                                x: xOffset,
                                rotate: isTop ? 0 : rotation,
                                zIndex: 10 - depthIndex,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 1.02,
                                y: -40,
                                x: 60,
                                rotate: 8,
                                zIndex: 20,
                                transition: {
                                    duration: 0.9,
                                    ease: [0.25, 0.1, 0.25, 1],
                                },
                            }}
                            transition={{
                                duration: 0.85,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ zIndex: 10 - depthIndex }}
                        >
                            <div
                                className="relative w-[92%] sm:w-[88%] h-[94%] rounded-[1.25rem] overflow-hidden bg-white p-[6px]"
                                style={{
                                    boxShadow: isTop
                                        ? '0 20px 50px rgba(0,0,0,0.15), 0 8px 16px rgba(0,0,0,0.08)'
                                        : `0 ${10 + depthIndex * 4}px ${25 + depthIndex * 8}px rgba(0,0,0,${0.08 + depthIndex * 0.03})`,
                                }}
                            >
                                <img
                                    src={photos[photoIndex].src}
                                    alt={photos[photoIndex].alt}
                                    className="w-full h-full object-cover rounded-[0.9rem]"
                                    loading={depthIndex < 2 ? 'eager' : 'lazy'}
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                );
            })}

            {/* Progress indicator */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-[6px] z-30">
                {photos.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-[5px] rounded-full transition-all duration-700 ease-out ${
                            i === currentIndex
                                ? 'bg-[var(--color-primary-vibrant)] w-7'
                                : 'bg-[var(--color-primary-vibrant)]/25 w-[5px] hover:bg-[var(--color-primary-vibrant)]/40'
                        }`}
                        aria-label={`View photo ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
