'use client';

import { motion } from 'framer-motion';
import { Heart, Leaf, GraduationCap, Droplets } from 'lucide-react';
import { Link } from '@/lib/navigation';
import { staggerContainer, scaleIn } from '@/lib/animations';

const focusAreas = [
    {
        title: "Community & Social Protection",
        description: "Supporting vulnerable groups — teen mothers, the elderly, and low-income households — through humanitarian support, capacity-building, and livelihood initiatives.",
        icon: Heart,
    },
    {
        title: "Environmental Protection",
        description: "Protecting Rwanda's rivers, wetlands, and ecosystems through tree planting, buffer zone conservation, and community-led climate awareness.",
        icon: Leaf,
    },
    {
        title: "Education & Vocational Training",
        description: "Expanding access to education and practical skills for youth and disadvantaged groups through scholarships, mentorship, and partnerships with training institutions.",
        icon: GraduationCap,
    },
    {
        title: "Water & Community Resilience",
        description: "Protecting and sustainably managing water resources through community water projects, conservation training, and safe water access support.",
        icon: Droplets,
    }
];

export function FocusAreas() {
    return (
        <section className="py-[96px] bg-[var(--color-bg-white)]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-40px' }}
                    className="mb-[64px]"
                >
                    <span className="overline-label">Our Pillars</span>
                    <h2 className="h2 text-[var(--color-text-primary)] mt-2">What We Stand For</h2>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[32px] text-left"
                >
                    {focusAreas.map((area, index) => (
                        <motion.div key={index} variants={scaleIn}>
                            <Link href="/projects" className="block h-full">
                                <motion.div
                                    whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }}
                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                    className="ui-card flex flex-col items-start p-[32px] h-full"
                                >
                                    <div className="w-[56px] h-[56px] rounded-full bg-[var(--color-primary-light)] flex items-center justify-center mb-[24px]">
                                        <area.icon size={32} className="text-[var(--color-primary)]" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="h3 mb-[16px] text-[var(--color-text-primary)]">{area.title}</h3>
                                    <p className="body-base text-[var(--color-text-secondary)]">
                                        {area.description}
                                    </p>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
