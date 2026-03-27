'use client';

import { motion } from 'framer-motion';
import { Link } from '@/lib/navigation';

export function ImpactSection() {
    return (
        <section className="py-[96px] bg-[var(--color-primary)] relative overflow-hidden">
            {/* Subtle background overlay to darken further if needed */}
            <div className="absolute inset-0 bg-black/20" />
            
            <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <h2 className="h2 text-white mb-[24px]">
                        Join Us in Building a Better Future
                    </h2>
                    
                    <p className="body-large text-white/85 mb-[40px]">
                        As a new foundation, every contribution matters. Whether you donate, volunteer, or simply share our mission — you are helping build the foundation of something that will outlast all of us. Join us in Rusizi District and beyond.
                    </p>
                    
                    <Link href="/donate">
                        <button className="btn-inverse">
                            Support Our Mission
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
