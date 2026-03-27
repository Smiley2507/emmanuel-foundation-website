'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/lib/animations';

const organGroups = [
    {
        organ: 'Founder & Guardian',
        members: [
            {
                name: 'Emmanuel NGENDAHAYO',
                role: 'Founder & Guardian',
                image: '/emanuel.png',
            },
        ]
    },
    {
        organ: 'Foundation Council',
        members: [
            {
                name: 'Dr. Marie Solange UWINEZA',
                role: 'President',
                image: '/solange.jpeg',
            },
            {
                name: 'Abbee Maurice TUYIZERE',
                role: 'Vice President',
                image: '/maurice.jpeg',
            },
            {
                name: 'Pie UKURIKIYIMFURA',
                role: 'Treasurer',
                image: '/pie.jpeg',
            },
            {
                name: 'Valerie ISHIMWE',
                role: 'Secretary',
                image: '/valerie.jpeg',
            },
            {
                name: 'Poliphile NIZEYIMANA',
                role: 'Advisor',
                image: '/poliphile.jpeg',
            },
        ]
    },
    {
        organ: 'Executive Secretary',
        members: [
            {
                name: 'Janvier SINDIKUBWABO',
                role: 'Executive Secretary',
                image: '/janvier.jpeg',
            },
        ]
    }
];

export function TeamSection() {
    return (
        <section className="py-[96px] bg-[var(--color-bg-white)]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-[64px]">
                    <span className="overline-label">Our People</span>
                    <h2 className="h2 text-[var(--color-text-primary)] mt-2">Meet the Team</h2>
                </div>

                <div className="space-y-[96px]">
                    {organGroups.map((group) => (
                        <div key={group.organ}>
                            <h3 className="text-center text-[18px] font-sans font-bold uppercase tracking-[0.2em] text-[var(--color-text-primary)] mb-[48px] border-b border-gray-200 pb-[16px]">
                                {group.organ}
                            </h3>
                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }}
                                variants={staggerContainer}
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[32px] justify-center"
                            >
                                {group.members.map((member, index) => (
                                    <motion.div
                                        key={member.name}
                                        variants={fadeUp}
                                        className="group flex flex-col items-center"
                                    >
                                        <div className="w-full aspect-[4/5] overflow-hidden rounded-[6px] mb-[16px]">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-all duration-700 grayscale hover:grayscale-0 hover:scale-[1.03]"
                                            />
                                        </div>
                                        <div className="text-center w-full">
                                            <h3 className="h4 text-[var(--color-text-primary)] mb-[4px]">{member.name}</h3>
                                            <p className="body-small text-[var(--color-text-secondary)] font-bold uppercase tracking-wider">{member.role}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
