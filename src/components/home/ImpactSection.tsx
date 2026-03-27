'use client';

import { motion } from 'framer-motion';
import { Link } from '@/lib/navigation';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { scaleIn, staggerContainer, fadeUp } from '@/lib/animations';

export function ImpactSection() {
    return (
        <AnimateOnScroll variants={scaleIn}>
            <section className="py-[96px] bg-[var(--color-bg-dark)] relative overflow-hidden">
                {/* Subtle background overlay to darken further if needed */}
                <div className="absolute inset-0 bg-black/20" />
                
                <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="flex flex-col items-center"
                    >
                        <motion.h2 variants={fadeUp} className="h2 text-white mb-[24px]">
                            Join Us in Building a Better Future
                        </motion.h2>
                        
                        <motion.p variants={fadeUp} className="body-large text-white/85 mb-[40px]">
                            As a new foundation, every contribution matters. Whether you donate, volunteer, or simply share our mission — you are helping build the foundation of something that will outlast all of us. Join us in Rusizi District and beyond.
                        </motion.p>
                        
                        <motion.div variants={fadeUp}>
                            <Link href="/donate">
                                <button className="btn-inverse">
                                    Support Our Mission
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </AnimateOnScroll>
    );
}
