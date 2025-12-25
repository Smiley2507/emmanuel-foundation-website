'use client';

import { motion } from 'framer-motion';

const stats = [
    { label: 'Trees Planted', value: '10,000+', delay: 0 },
    { label: 'Lives Touched', value: '5,000+', delay: 0.1 },
    { label: 'Communities Served', value: '12', delay: 0.2 },
    { label: 'Volunteers', value: '250+', delay: 0.3 },
];

export default function StatsSection() {
    return (
        <section className="py-20 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-primary/10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: stat.delay }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center p-4"
                        >
                            <span className="text-4xl md:text-5xl font-heading font-black text-primary mb-2">
                                {stat.value}
                            </span>
                            <span className="text-sm md:text-base font-sans font-bold uppercase tracking-widest text-primary/80">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
