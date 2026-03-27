'use client';

import { motion } from 'framer-motion';
import { Link } from '@/lib/navigation';

export function MissionSection() {
    return (
        <>
            {/* Mission Section */}
            {/* Mission Section */}
            <section className="py-[96px] bg-[var(--color-bg-white)]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-center">
                    {/* Image — contained */}
                    <div className="relative h-[280px] lg:h-[480px] rounded-[12px] overflow-hidden w-full">
                        <img
                            src="/hands.jpg"
                            alt="Mission"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Content Right */}
                    <div className="flex flex-col gap-[24px] lg:pl-[32px]">
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
            </section>

            {/* About Preview Section */}
            <section className="py-[96px] bg-[var(--color-bg-light)]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-center">
                    {/* Content Left */}
                    <div className="flex flex-col gap-[24px] lg:pr-[32px] order-2 lg:order-1">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="overline-label">Who We Are</span>
                            <blockquote className="pull-quote text-[22px] text-[var(--color-primary)] border-l-[3px] border-[var(--color-primary)] pl-[20px] mb-[32px]">
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
                    {/* Image Right — contained */}
                    <div className="relative h-[280px] lg:h-[480px] rounded-[12px] overflow-hidden w-full order-1 lg:order-2">
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
