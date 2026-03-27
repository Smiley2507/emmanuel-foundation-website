'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from '@/lib/navigation';

export default function HeroSlideshow() {
    return (
        <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="/bg-1.jpeg"
                    alt="Emmanuel Foundation Community"
                    className="h-full w-full object-cover"
                    loading="eager"
                />
                <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.1) 100%)' }}
                />
            </div>

            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-start w-full max-w-[640px]"
                >
                    <span 
                        className="text-[12px] font-medium tracking-[0.1em] uppercase mb-[12px] text-white/85"
                    >
                        Emmanuel Foundation · Rusizi District, Rwanda
                    </span>

                    <h1 className="h1 text-white mb-6 max-w-[580px] text-balance">
                        Driven by Compassion. Empowering Communities. Creating Lasting Impact.
                    </h1>

                    <p className="text-[18px] text-white/85 font-sans leading-relaxed mb-10 text-balance">
                        We work with Rwanda's most vulnerable communities — protecting the environment, strengthening livelihoods, and building a more equitable future.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <Link href="/donate" className="w-full sm:w-auto">
                            <button className="btn-inverse w-full flex justify-center !text-[15px]">
                                Donate Now
                            </button>
                        </Link>
                        <Link href="/projects" className="w-full sm:w-auto">
                            <button className="btn-ghost !border-white !text-white hover:!bg-white hover:!text-[var(--color-primary)] w-full flex justify-center !text-[15px]">
                                See Our Work
                            </button>
                        </Link>
                    </div>
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
