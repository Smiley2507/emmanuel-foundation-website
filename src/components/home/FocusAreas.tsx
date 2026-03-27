'use client';

import { motion } from 'framer-motion';
import { Heart, Leaf, GraduationCap, Droplets } from 'lucide-react';

const focusAreas = [
    {
        title: "Community & Social Protection",
        description: "Supporting vulnerable groups — teen mothers, the elderly, and low-income households — through humanitarian support, capacity-building, and livelihood initiatives.",
        icon: Heart,
        color: "bg-red-50 text-red-600 border-red-100"
    },
    {
        title: "Environmental Protection",
        description: "Protecting Rwanda's rivers, wetlands, and ecosystems through tree planting, buffer zone conservation, and community-led climate awareness.",
        icon: Leaf,
        color: "bg-green-50 text-green-600 border-green-100"
    },
    {
        title: "Education & Vocational Training",
        description: "Expanding access to education and practical skills for youth and disadvantaged groups through scholarships, mentorship, and partnerships with training institutions.",
        icon: GraduationCap,
        color: "bg-amber-50 text-amber-600 border-amber-100"
    },
    {
        title: "Water & Community Resilience",
        description: "Protecting and sustainably managing water resources through community water projects, conservation training, and safe water access support.",
        icon: Droplets,
        color: "bg-blue-50 text-blue-600 border-blue-100"
    }
];

export function FocusAreas() {
    return (
        <section className="py-48 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-8 mb-32"
                >
                    <span className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-secondary">Our Specialization</span>
                    <h2 className="text-5xl md:text-7xl font-heading font-black text-primary leading-tight">What We Stand For</h2>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-sans font-medium">
                        Our core pillars define how we approach community growth and planetary care.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {focusAreas.map((area, index) => (
                        <motion.div
                            key={area.title}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center relative"
                        >
                            <div className="absolute top-0 right-6 w-16 h-16 bg-primary/5 rounded-full -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
                            <div className={`w-16 h-16 ${area.color} border-none rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-md relative z-10`}>
                                <area.icon size={32} />
                            </div>
                            <h3 className="text-lg font-heading font-black text-primary mb-4 underline underline-offset-4 decoration-secondary/30">{area.title}</h3>
                            <p className="text-foreground/70 leading-relaxed font-sans font-medium text-sm">
                                {area.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
