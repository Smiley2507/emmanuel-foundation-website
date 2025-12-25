'use client';

import { motion } from 'framer-motion';
import { Link } from '@/lib/navigation';

export function MissionSection() {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    {/* Mission Image */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-secondary/10 rounded-2xl group-hover:bg-secondary/20 transition-all duration-500" />
                        <img
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                            alt="Mission"
                            className="relative w-full aspect-[4/5] object-cover rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                    </motion.div>

                    {/* Mission Text */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-16"
                    >
                        <div className="space-y-8">
                            <span className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-secondary">Our Impact in Action</span>
                            <h2 className="text-4xl md:text-6xl font-heading font-black text-primary leading-[1.15]">
                                Building Stronger Communities. Restoring Nature. Inspiring Change.
                            </h2>
                            <p className="text-xl text-foreground/70 leading-relaxed font-sans font-medium">
                                We believe that true development begins with dignity, opportunity, and care. Our programs focus on uplifting families, protecting natural resources, and creating sustainable solutions that last.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link href="/about">
                                <button className="group flex items-center space-x-6 text-primary font-heading font-bold text-xl hover:text-secondary transition-colors">
                                    <span>Discover Our Story</span>
                                    <div className="w-16 h-[2px] bg-secondary group-hover:w-24 transition-all duration-300" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-64 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    {/* About Text */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-16 order-2 lg:order-1"
                    >
                        <div className="space-y-8">
                            <span className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-secondary">About Emmanuel Foundation</span>
                            <h2 className="text-4xl md:text-6xl font-heading font-black text-primary leading-[1.15]">
                                Changing Lives, One Community at a Time
                            </h2>
                            <p className="text-xl text-primary/80 font-sans font-bold italic border-l-4 border-secondary pl-8 leading-relaxed py-2">
                                “Guteza imbere imibereho y’abaturage hagamijwe iterambere rirambye.”
                            </p>
                            <p className="text-xl text-foreground/70 leading-relaxed font-sans font-medium">
                                Founded with a vision for a better, greener, and more compassionate Rwanda, Emmanuel Foundation works to bring hope to vulnerable communities and protect the environment we all depend on.
                            </p>
                        </div>
                    </motion.div>

                    {/* About Image */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative group order-1 lg:order-2"
                    >
                        <div className="absolute -inset-4 bg-primary/5 rounded-2xl group-hover:bg-primary/10 transition-all duration-500" />
                        <img
                            src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&q=80"
                            alt="About"
                            className="relative w-full aspect-[4/5] object-cover rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
