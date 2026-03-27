'use client';

import { motion } from 'framer-motion';
import { Link } from '@/lib/navigation';

export function MissionSection() {
    return (
        <>
            {/* Mission Section */}
            <section className="bg-[var(--color-bg-white)]">
                <div className="flex flex-col lg:flex-row">
                    {/* Image Left */}
                    <div className="w-full lg:w-1/2 min-h-[480px]">
                        <img
                            src="/hands.jpg"
                            alt="Mission"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Content Right */}
                    <div className="w-full lg:w-1/2 flex items-center bg-[var(--color-bg-white)]">
                        <div className="py-[40px] px-[24px] lg:py-[80px] lg:px-[64px] max-w-[720px]">
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <span className="overline-label">Our Mission</span>
                                <h2 className="h2 mb-[24px] text-[var(--color-text-primary)]">Serving Communities. Protecting Nature. Building Futures.</h2>
                                <p className="body-large text-[var(--color-text-secondary)] mb-[40px]">
                                    Emmanuel Foundation was established to serve Rwanda's most vulnerable — those living in poverty, women and children, youth, the elderly, and socially disadvantaged groups. We work across environmental conservation, education, community health, and sustainable water management, always in partnership with the communities we serve.
                                </p>
                                <Link href="/about">
                                    <button className="btn-primary">
                                        Discover Our Story
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="bg-[var(--color-bg-white)]">
                <div className="flex flex-col lg:flex-row">
                    {/* Content Left */}
                    <div className="w-full lg:w-1/2 flex items-center bg-[var(--color-bg-white)] order-2 lg:order-1">
                        <div className="py-[40px] px-[24px] lg:py-[80px] lg:px-[64px] max-w-[720px] ml-auto">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <span className="overline-label">Who We Are</span>
                                <blockquote className="text-[22px] italic text-[var(--color-primary)] border-l-[3px] border-[var(--color-primary)] pl-[20px] mb-[32px] font-sans">
                                    "Driven by compassion. Rooted in community. Focused on lasting impact."
                                </blockquote>
                                <p className="body-large text-[var(--color-text-secondary)] mb-[40px]">
                                    Emmanuel Foundation (EF) is a public-interest, non-profit foundation established to promote community well-being, protect the environment, and support sustainable development across Rwanda. Guided by values of human dignity, integrity, partnership, and equity, we work with vulnerable groups — including people with limited financial resources, women and children in poverty, youth, adolescents, and socially disadvantaged communities — to generate lasting social impact.
                                </p>
                                <Link href="/about">
                                    <button className="btn-ghost">
                                        Learn About the Foundation
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                    {/* Image Right */}
                    <div className="w-full lg:w-1/2 min-h-[480px] order-1 lg:order-2">
                        <img
                            src="/bg-3.jpeg"
                            alt="About Emmanuel Foundation"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
