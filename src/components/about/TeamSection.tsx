'use client';

import { motion } from 'framer-motion';

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
        <section className="py-48 bg-[#FAFAF8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <span className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-secondary">Our People</span>
                    <h2 className="text-5xl md:text-6xl font-heading font-black text-primary mt-6">Meet the Team</h2>
                </div>

                <div className="space-y-24">
                    {organGroups.map((group) => (
                        <div key={group.organ}>
                            <h3 className="text-center text-xl font-sans font-bold uppercase tracking-[0.3em] text-secondary mb-12 border-b border-secondary/20 pb-4">
                                {group.organ}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-center">
                                {group.members.map((member, index) => (
                                    <motion.div
                                        key={member.name}
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                                    >
                                        <div className="aspect-[4/5] overflow-hidden relative">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                            />
                                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                                <p className="text-white font-sans text-sm font-medium">
                                                </p>
                                            </div>
                                        </div>
                                        <div className="p-8 text-center bg-white relative z-10">
                                            <h3 className="text-2xl font-heading font-black text-primary mb-2">{member.name}</h3>
                                            <p className="text-sm font-sans font-bold uppercase tracking-widest text-secondary">{member.role}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
