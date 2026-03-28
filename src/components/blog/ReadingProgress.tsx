'use client';

import { motion, useScroll } from 'framer-motion';

export function ReadingProgress() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-primary-vibrant)] origin-left z-[60]"
            style={{ scaleX: scrollYProgress }}
        />
    );
}
