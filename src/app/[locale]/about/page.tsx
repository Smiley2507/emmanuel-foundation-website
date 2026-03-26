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
        color: 'bg-red-50 text-red-500'
    },
    {
        icon: Users,
        title: 'Human Dignity',
        description: 'We place people at the heart of our work, promoting compassion, respect, and dignity for all individuals and communities we serve.',
        color: 'bg-blue-50 text-blue-500'
    },
    {
        icon: Target,
        title: 'Social Responsibility',
        description: 'We are committed to positive social impact by acting responsibly, promoting ethical practices, and contributing to community well‑being.',
        color: 'bg-green-50 text-green-500'
    },
    {
        icon: Shield,
        title: 'Partnership & Collaboration',
        description: 'We work closely with communities, institutions, and development partners to deliver inclusive and locally driven solutions.',
        color: 'bg-amber-50 text-amber-500'
    },
    {
        icon: Leaf,
        title: 'Equity & Inclusion',
        description: 'We ensure equal opportunities and meaningful participation for all, with special focus on women, youth, children, and vulnerable groups.',
        color: 'bg-purple-50 text-purple-500'
    }
];

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <PageHeader title="About Us" subtitle="Driven by compassion. Rooted in community. Focused on lasting impact." />

            {/* Who We Are Section */}
            <section className="py-48 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-32">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <span className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-secondary block">Who We Are</span>
                            <h2 className="text-5xl md:text-7xl font-heading font-black text-primary leading-tight">
                                A foundation built on compassion, action, and impact.                            </h2>
                        </motion.div>
                    </div>

                    <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden mb-32 shadow-2xl">
                        <motion.img
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1.5 }}
                            src="/bg-2.jpeg"
                            alt="Who we are"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                    </div>

                    <div className="max-w-4xl mx-auto text-xl md:text-2xl text-foreground/70 leading-relaxed space-y-12 text-center font-sans font-medium">
                        <p>
                            Emmanuel Foundation (EF) is a public-interest, non-profit foundation established to promote community well-being, protect the environment, and support sustainable development across Rwanda.
                        </p>
                        <p>
                            Guided by values of human dignity, integrity, partnership and collaboration, social responsibility, and equity & inclusion, the Foundation works with vulnerable groups, including people with limited financial resources, women and children in poverty, youth, adolescents, and other socially disadvantaged groups.
                        </p>
                        <p>
                            EF carries out activities in humanitarian support, environmental conservation, water resource management, education and vocational training, and community well-being initiatives, including sports, nutrition, and hygiene awareness. The Foundation collaborates with public institutions, private-sector partners, civil society, and community groups to implement projects that generate lasting social impact and contribute directly to Rwanda&apos;s development goals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-48 bg-[#FAFAF8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
                        {/* Decorative background circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10" />

                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group bg-white p-14 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[4rem] group-hover:scale-110 transition-transform duration-500" />
                            <div className="w-24 h-24 bg-secondary/10 rounded-2xl flex items-center justify-center mb-10 text-primary group-hover:scale-110 transition-transform duration-500">
                                <Target size={40} />
                            </div>
                            <h3 className="text-4xl font-heading font-black text-primary mb-8">Our Mission</h3>
                            <p className="text-foreground/70 leading-relaxed text-xl font-sans font-medium">
                                To promote the well-being of communities, protect the environment, and support sustainable development.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="group bg-white p-14 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-[4rem] group-hover:scale-110 transition-transform duration-500" />
                            <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center mb-10 text-primary group-hover:scale-110 transition-transform duration-500">
                                <Eye size={40} />
                            </div>
                            <h3 className="text-4xl font-heading font-black text-primary mb-8">Our Vision</h3>
                            <p className="text-foreground/70 leading-relaxed text-xl font-sans font-medium">
                                A healthy, empowered, and environmentally responsible society where all people, especially the most vulnerable, have the opportunity to thrive and contribute to sustainable development.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Values */}
            <section className="py-48 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-32">
                        <span className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-secondary">Core Principles</span>
                        <h2 className="text-5xl md:text-7xl font-heading font-black text-primary mt-6">Our Values</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-10 bg-white rounded-3xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center relative"
                            >
                                <div className={`w-20 h-20 ${value.color} rounded-2xl flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                                    <value.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-heading font-black text-primary mb-6 group-hover:text-secondary transition-colors">{value.title}</h3>
                                <p className="text-base text-foreground/60 font-sans font-medium tracking-wider">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <TeamSection />

            {/* Challenges & Solutions */}
            <section className="py-48 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-24 mb-48">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute top-8 left-8 w-full h-full bg-secondary rounded-[3rem] -z-10" />
                            <img
                                src="/bg-1.jpeg"
                                alt="Providing support"
                                className="rounded-[3rem] shadow-2xl w-full"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-12">
                            <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Why We Exist</span>
                            <h2 className="text-5xl md:text-6xl font-heading font-black text-primary leading-tight">
                                Addressing Today's Challenges with Tomorrow's Solutions
                            </h2>
                            <p className="text-xl text-foreground/70 leading-relaxed font-medium font-sans">
                                Communities across Rwanda — particularly in areas like Rusizi District — face overlapping challenges: environmental degradation, water stress, limited educational and economic opportunities, and insufficient social protection for the most vulnerable. Emmanuel Foundation was created not to offer temporary relief, but to build lasting systems that empower communities to sustain their own progress long after our programmes conclude.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute top-8 right-8 w-full h-full bg-primary/10 rounded-[3rem] -z-10" />
                            <img
                                src="/community-1.jpg"
                                alt="Community driven"
                                className="rounded-[3rem] shadow-2xl w-full"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-12">
                            <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Our Approach</span>
                            <h2 className="text-5xl md:text-6xl font-heading font-black text-primary leading-tight">
                                Community-First, Sustainability-Driven
                            </h2>
                            <ul className="space-y-6">
                                {[
                                    'Bottom-up solutions — We design programs with communities, not just for them.',
                                    'Holistic sustainability — Every intervention is designed to create lasting change, not dependency.',
                                    'Protecting the vulnerable — Women, children, youth, and the elderly are at the center of all we do.',
                                    'Gender equality — We actively promote women\u2019s participation and leadership in all programs.',
                                    'Inclusive management — Local voices shape how programs are run and measured.'
                                ].map((item) => (
                                    <li key={item} className="flex items-start space-x-4 text-xl text-foreground/70 font-medium">
                                        <div className="w-3 h-3 mt-2 rounded-full bg-secondary shadow-lg shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-fixed bg-center bg-cover"
                        style={{ backgroundImage: 'url("/bg-3.jpeg")' }}
                    />
                    <div className="absolute inset-0 bg-primary/90" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white space-y-8">
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-secondary">Be Part of Our Foundation</h2>
                    <p className="text-xl md:text-2xl opacity-90 leading-relaxed font-sans font-medium">
                        Emmanuel Foundation is at the beginning of its journey. Your early support — financial or otherwise — directly shapes what we are able to build. Join us now, when your contribution has the most impact.
                    </p>
                    <div className="pt-8">
                        <Link href="/donate">
                            <button className="bg-secondary text-primary px-12 py-5 rounded-md font-heading font-black text-xl hover:bg-white transition-all shadow-xl active:scale-95">
                                Support Us Today
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
