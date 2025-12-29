'use client';

import { PageHeader } from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { Link } from '@/lib/navigation';

const programs = [
    {
        title: 'Environmental Protection & Sustainable Water Management',
        description: 'Some part of Rwanda still face environmental degradation, water resource stress, and sanitation challenges. We are implementing integrated projects to protect the environment and promote sustainable water use.',
        examples: [
            'Nature reserves & systematic restoration',
            'Sustainable water management',
            'Clean water and sanitation advocacy',
            'Environmental conservation'
        ],
        image: '/bg-3.jpeg', // Nature/Water focus
        color: 'bg-green-50'
    },
    {
        title: 'Strengthening Community Well‑Being',
        description: 'We address limited livelihood opportunities for youth and vulnerable households through education, empowerment, and resilience-building programs. We focus on community health, sports, and hygiene.',
        examples: [
            'Community health and nutrition',
            'Youth empowerment',
            'Sports and recreation',
            'Local sustainability initiatives'
        ],
        image: '/3kids.jpg', 
        color: 'bg-blue-50'
    }
];

export default function ProjectsPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <PageHeader title="Our Programs" subtitle="Local Action. National Impact. Sustainable Change." />

            {/* Intro Section - Yellow */}
            <section className="py-48 bg-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-24">
                    <div className="md:w-1/2 space-y-10">
                        <span className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-primary/60">Our Focus</span>
                        <h2 className="text-5xl md:text-7xl font-heading font-black text-primary leading-tight">
                            Building a Future Where People and Nature Thrive Together
                        </h2>
                        <p className="text-2xl font-medium text-primary/80 leading-relaxed font-sans">
                            Our programs focus on improving lives and protecting the environment. While we are still growing, we are dedicated to creating programs that bring long-term community wellness and environmental conservation.
                        </p>
                    </div>
                    <div className="md:w-1/2 relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                        <img
                            src="/farmers.jpg"
                            alt="Programs overview"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
                    </div>
                </div>
            </section>

            {/* Featured Programs */}
            <section className="py-48 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-32">
                        <span className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-secondary">What We Do</span>
                        <h2 className="text-5xl md:text-6xl font-heading font-black text-primary mt-6">Featured Programs</h2>
                    </div>

                    <div className="space-y-48">
                        {programs.map((program, index) => (
                            <motion.div
                                key={program.title}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-24`}
                            >
                                <div className="lg:w-1/2 relative group">
                                    <div className={`absolute top-8 ${index % 2 === 0 ? '-left-8' : '-right-8'} w-full h-full ${program.color} rounded-[3rem] -z-10 transition-transform duration-500 group-hover:scale-105`} />
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="rounded-[3rem] shadow-2xl w-full aspect-[4/3] object-cover"
                                    />
                                </div>
                                <div className="lg:w-1/2 space-y-10">
                                    <h3 className="text-4xl md:text-5xl font-heading font-black text-primary leading-tight">{program.title}</h3>
                                    <p className="text-xl text-foreground/70 leading-relaxed font-sans font-medium">
                                        {program.description}
                                    </p>
                                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                        <h4 className="font-bold text-sm uppercase tracking-widest text-secondary mb-6 font-sans">Examples of current projects:</h4>
                                        <ul className="space-y-4">
                                            {program.examples.map((example) => (
                                                <li key={example} className="flex items-center space-x-4 text-foreground/80 font-medium font-sans text-lg">
                                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                                    <span>{example}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-48 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-fixed bg-center bg-cover"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop")' }}
                    />
                    <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white space-y-12">
                    <h2 className="text-5xl md:text-7xl font-heading font-black text-secondary leading-tight">Help us launch these initiatives and change lives.</h2>
                    <div className="pt-8">
                        <Link href="/donate">
                            <button className="bg-secondary text-primary px-16 py-6 rounded-xl font-heading font-black text-xl hover:bg-white transition-all shadow-2xl active:scale-95 hover:-translate-y-1">
                                Donate to Support Our Projects
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
