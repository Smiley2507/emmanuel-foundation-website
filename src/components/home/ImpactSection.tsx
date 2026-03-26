'use client';

import { motion } from 'framer-motion';
import { Link } from '@/lib/navigation';

export function ImpactSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-fixed bg-center bg-cover"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop")' }}
                />
                <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-16"
                    >
                        <div className="space-y-8">
                            <span className="text-xs font-sans font-bold uppercase tracking-[0.5em] text-secondary">Become Part of the Impact</span>
                            <h2 className="text-5xl md:text-8xl font-heading font-black text-white leading-tight text-balance">
                                Your Support Helps Us Begin
                            </h2>
                            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-sans font-medium text-balance">
                                As a new foundation, every contribution matters. Whether you donate, volunteer, or simply share our mission — you are helping build the foundation of something that will outlast all of us. Join us in Rusizi District and beyond.
                            </p>
                        </div>

                        <div className="pt-10">
                            <Link href="/donate">
                                <button className="bg-secondary text-primary px-16 py-6 rounded-md font-heading font-black text-2xl hover:bg-white hover:text-primary transition-all shadow-2xl active:scale-95">
                                    Support Our Mission
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
