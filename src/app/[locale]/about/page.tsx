'use client';

import { PageHeader } from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield, Leaf, Users } from 'lucide-react';
import { Link } from '@/lib/navigation';
import { TeamSection } from '@/components/about/TeamSection';

const values = [
    {
        icon: Heart,
        title: 'Integrity & Accountability',
        description: 'We act with transparency, responsibility, and ethical integrity in all our programmes, partnerships, and resource use.',
    },
    {
        icon: Users,
        title: 'Human Dignity',
        description: 'We place people at the heart of our work, promoting compassion, respect, and dignity for all individuals and communities we serve.',
    },
    {
        icon: Target,
        title: 'Social Responsibility',
        description: 'We are committed to positive social impact by acting responsibly, promoting ethical practices, and contributing to community well‑being.',
    },
    {
        icon: Shield,
        title: 'Partnership & Collaboration',
        description: 'We work closely with communities, institutions, and development partners to deliver inclusive and locally driven solutions.',
    },
    {
        icon: Leaf,
        title: 'Equity & Inclusion',
        description: 'We ensure equal opportunities and meaningful participation for all, with special focus on women, youth, children, and vulnerable groups.',
    }
];

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="About Us" subtitle="Driven by compassion. Rooted in community. Focused on lasting impact." />

            {/* Who We Are - Split Layout */}
            <section className="bg-[var(--color-bg-white)]">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 min-h-[600px]">
                        <img
                            src="/bg-2.jpeg"
                            alt="Who we are"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center bg-[var(--color-bg-white)]">
                        <div className="py-[40px] px-[24px] lg:py-[80px] lg:px-[64px] max-w-[720px]">
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <span className="overline-label">Who We Are</span>
                                <h2 className="h2 mb-[24px] text-[var(--color-text-primary)]">
                                    A foundation built on compassion, action, and impact.
                                </h2>
                                <div className="body-large text-[var(--color-text-secondary)] space-y-[24px]">
                                    <p>
                                        Emmanuel Foundation (EF) is a public-interest, non-profit foundation established to promote community well-being, protect the environment, and support sustainable development across Rwanda.
                                    </p>
                                    <p>
                                        Guided by values of human dignity, integrity, partnership and collaboration, social responsibility, and equity & inclusion, the Foundation works with vulnerable groups, including people with limited financial resources, women and children in poverty, youth, adolescents, and other socially disadvantaged groups.
                                    </p>
                                    <p>
                                        EF carries out activities in humanitarian support, environmental conservation, water resource management, education and vocational training, and community well-being initiatives, including sports, nutrition, and hygiene awareness. The Foundation collaborates with public institutions, private-sector partners, civil society, and community groups to implement projects that generate lasting social impact and contribute directly to Rwanda's development goals.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-[96px] bg-[var(--color-bg-light)]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="ui-card p-[48px]"
                        >
                            <div className="w-[56px] h-[56px] bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-[24px] text-[var(--color-primary)]">
                                <Target size={32} />
                            </div>
                            <h3 className="h3 mb-[16px] text-[var(--color-text-primary)]">Our Mission</h3>
                            <p className="body-large text-[var(--color-text-secondary)]">
                                To promote the well-being of communities, protect the environment, and support sustainable development.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="ui-card p-[48px]"
                        >
                            <div className="w-[56px] h-[56px] bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mb-[24px] text-[var(--color-primary)]">
                                <Eye size={32} />
                            </div>
                            <h3 className="h3 mb-[16px] text-[var(--color-text-primary)]">Our Vision</h3>
                            <p className="body-large text-[var(--color-text-secondary)]">
                                A healthy, empowered, and environmentally responsible society where all people, especially the most vulnerable, have the opportunity to thrive and contribute to sustainable development.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-[96px] bg-[var(--color-bg-white)]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-[64px]">
                        <span className="overline-label">Core Principles</span>
                        <h2 className="h2 text-[var(--color-text-primary)] mt-2">Our Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] text-left">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="ui-card flex flex-col items-start p-[32px] border-l-[3px] border-[var(--color-primary)]"
                            >
                                <div className="w-[56px] h-[56px] bg-[var(--color-primary-light)] rounded-full flex items-center justify-center text-[var(--color-primary)] mb-[24px]">
                                    <value.icon size={32} />
                                </div>
                                <h3 className="h3 text-[var(--color-text-primary)] mb-[16px]">{value.title}</h3>
                                <p className="body-base text-[var(--color-text-secondary)]">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <TeamSection />

            {/* Why We Exist - Split Layout */}
            <section className="bg-[var(--color-bg-white)]">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 min-h-[480px]">
                        <img
                            src="/bg-1.jpeg"
                            alt="Providing support"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center bg-[var(--color-bg-white)]">
                        <div className="py-[40px] px-[24px] lg:py-[80px] lg:px-[64px] max-w-[720px]">
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <span className="overline-label">Why We Exist</span>
                                <h2 className="h2 mb-[24px] text-[var(--color-text-primary)]">
                                    Addressing Today's Challenges with Tomorrow's Solutions
                                </h2>
                                <p className="body-large text-[var(--color-text-secondary)]">
                                    Communities across Rwanda — particularly in areas like Rusizi District — face overlapping challenges: environmental degradation, water stress, limited educational and economic opportunities, and insufficient social protection for the most vulnerable. Emmanuel Foundation was created not to offer temporary relief, but to build lasting systems that empower communities to sustain their own progress long after our programmes conclude.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach - Split Layout (Image Right) */}
            <section className="bg-[var(--color-bg-white)]">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 flex items-center bg-[var(--color-bg-white)] order-2 lg:order-1">
                        <div className="py-[40px] px-[24px] lg:py-[80px] lg:px-[64px] max-w-[720px] ml-auto">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <span className="overline-label">Our Approach</span>
                                <h2 className="h2 mb-[24px] text-[var(--color-text-primary)]">
                                    Community-First, Sustainability-Driven
                                </h2>
                                <ul className="space-y-[16px]">
                                    {[
                                        'Bottom-up solutions — We design programs with communities, not just for them.',
                                        'Holistic sustainability — Every intervention is designed to create lasting change, not dependency.',
                                        'Protecting the vulnerable — Women, children, youth, and the elderly are at the center of all we do.',
                                        'Gender equality — We actively promote women’s participation and leadership in all programs.',
                                        'Inclusive management — Local voices shape how programs are run and measured.'
                                    ].map((item) => (
                                        <li key={item} className="flex items-start text-[16px] text-[var(--color-text-secondary)] font-medium">
                                            <div className="w-[8px] h-[8px] mt-[8px] rounded-full bg-[var(--color-primary)] shrink-0 mr-[16px]" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 min-h-[480px] order-1 lg:order-2">
                        <img
                            src="/community-1.jpg"
                            alt="Community driven"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-[96px] bg-[var(--color-primary)] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 max-w-[800px] mx-auto px-4 text-center text-white space-y-[40px]">
                    <h2 className="h2">Be Part of Our Foundation</h2>
                    <p className="body-large text-white/85">
                        Emmanuel Foundation is at the beginning of its journey. Your early support — financial or otherwise — directly shapes what we are able to build. Join us now, when your contribution has the most impact.
                    </p>
                    <div>
                        <Link href="/donate">
                            <button className="btn-inverse">
                                Support Us Today
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
