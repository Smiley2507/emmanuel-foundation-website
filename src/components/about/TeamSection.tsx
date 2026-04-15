'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/lib/animations';

const teamMembers = [
    {
        name: 'Emmanuel NGENDAHAYO',
        role: 'Founder & Guardian',
        place: 'Founder & Guardian',
        image: '/emanuel.png',
    },
    {
        name: 'Dr. Marie Solange UWINEZA',
        role: 'President',
        place: 'Founding Council',
        image: '/solange.jpeg',
    },
    {
        name: 'Abbee Maurice TUYIZERE',
        role: 'Vice President',
        place: 'Founding Council',
        image: '/maurice.jpeg',
    },
    {
        name: 'Pie UKURIKIYIMFURA',
        role: 'Treasurer',
        place: 'Founding Council',
        image: '/pie.jpeg',
    },
    {
        name: 'Valerie ISHIMWE',
        role: 'Secretary',
        place: 'Founding Council',
        image: '/valerie.jpeg',
    },
    {
        name: 'Poliphile NIZEYIMANA',
        role: 'Advisor',
        place: 'Founding Council',
        image: '/poliphile.jpeg',
    },
    {
        name: 'Janvier SINDIKUBWABO',
        role: 'Executive Secretary',
        place: 'Executive Secretary',
        image: '/janvier.jpeg',
    },
];

export function TeamSection() {
    return (
        <section className="py-[96px] bg-[var(--color-bg-white)]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-[64px]">
                    <span className="overline-label">Our People</span>
                    <h2 className="h2 text-[var(--color-text-primary)] mt-2">Meet the Team</h2>
                </div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[40px]"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            variants={fadeUp}
                            className="group flex flex-col items-center"
                        >
                            <div className="w-full aspect-[4/5] overflow-hidden rounded-[var(--radius-ui)] mb-[24px] relative shadow-sm group-hover:shadow-md transition-shadow">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-all duration-700 hover:scale-[1.05]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[12px] font-bold text-white uppercase tracking-widest border border-white/20">
                                        {member.place}
                                    </span>
                                </div>
                            </div>
                            <div className="text-center w-full">
                                <h3 className="h4 text-[var(--color-text-primary)] mb-[4px]">{member.name}</h3>
                                <p className="body-small text-[var(--color-text-secondary)] font-bold uppercase tracking-wider">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
