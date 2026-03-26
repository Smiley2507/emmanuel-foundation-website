'use client';

import { PageHeader } from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { Link } from '@/lib/navigation';

const programmes = [
    {
        title: 'Community Support and Social Protection',
        description: 'We provide targeted assistance to vulnerable groups — including teen mothers, women, adolescents, the elderly, and low-income households — through humanitarian support, capacity-building, and livelihood initiatives that improve living conditions.',
        activities: [
            'Humanitarian support for vulnerable households',
            'Capacity-building and skills workshops',
            'Livelihood and income-generation initiatives',
            'Social assistance programs for teen mothers and the elderly',
        ],
        color: 'bg-red-50',
        accent: 'border-red-200',
    },
    {
        title: 'Mind the Environment',
        description: 'Our environmental programme promotes climate resilience and ecosystem protection across Rwanda. We work with communities to preserve river and lake buffer zones, restore degraded land, and build local knowledge around sustainable land and water management.',
        activities: [
            'Tree planting and reforestation',
            'Protection of river and lake buffer zones',
            'Ecosystem restoration',
            'Environmental education in schools and communities',
            'Climate change awareness campaigns',
            'Support for sustainable land and water management',
        ],
        color: 'bg-green-50',
        accent: 'border-green-200',
    },
    {
        title: 'Education and Vocational Training',
        description: 'We strengthen access to education and practical skills for youth and disadvantaged groups, creating pathways to employment and self-sufficiency through scholarships, mentorship, and partnerships with training institutions.',
        activities: [
            'Scholarships for vulnerable students',
            'School support for children in poverty',
            'Vocational training in technical and practical skills',
            'Mentorship programmes for youth',
            'Partnerships with training institutions to improve employability',
        ],
        color: 'bg-amber-50',
        accent: 'border-amber-200',
    },
    {
        title: 'Water and Community Resilience',
        description: 'Clean, safe, and sustainable water is foundational to community health and resilience. Our water programme protects water sources, trains communities in safe water management, and supports projects that improve access to reliable water.',
        activities: [
            'Community water access projects',
            'Water conservation awareness campaigns',
            'Training in safe water use and management',
            'Support for WASH (Water, Sanitation, and Hygiene) initiatives',
        ],
        color: 'bg-blue-50',
        accent: 'border-blue-200',
    },
    {
        title: 'Community Health, Nutrition, and Hygiene',
        description: 'We improve public health from the ground up — through prevention, awareness, and community outreach. Our health programme prioritizes hygiene, nutrition, and healthy lifestyles in the communities that need it most.',
        activities: [
            'Hygiene and sanitation campaigns',
            'Nutrition education and awareness',
            'Community health outreach programs',
            'Initiatives promoting healthy lifestyles in vulnerable communities',
        ],
        color: 'bg-purple-50',
        accent: 'border-purple-200',
    },
    {
        title: 'Youth Empowerment and Community Leadership',
        description: 'Young people are Rwanda\'s future — and our Youth Empowerment programme makes sure they have a voice in shaping it. We invest in leadership, entrepreneurship, and civic engagement so that youth can lead their own communities forward.',
        activities: [
            'Youth leadership training',
            'Volunteer networks and community service initiatives',
            'Entrepreneurship support and mentoring',
            'Civic engagement and community accountability programmes',
        ],
        color: 'bg-indigo-50',
        accent: 'border-indigo-200',
    },
    {
        title: 'Sports, Recreation, and Social Well-Being',
        description: 'Sport is a powerful tool for social cohesion and wellbeing. Our sports programme creates spaces for communities to come together, stay healthy, and engage with important social messages through the universal language of play.',
        activities: [
            'Community sports events and youth tournaments',
            'Recreational facility support',
            'Awareness campaigns combining sports with health and social messaging',
            'Inclusive sports programmes for girls and youth with disabilities',
        ],
        color: 'bg-orange-50',
        accent: 'border-orange-200',
    },
];

export default function ProjectsPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <PageHeader title="Our Programs" subtitle="Seven programmes. One mission: to uplift the vulnerable and protect the environment." />

            {/* Intro Section */}
            <section className="py-48 bg-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-24">
                    <div className="md:w-1/2 space-y-10">
                        <span className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-primary/60">Our Focus</span>
                        <h2 className="text-5xl md:text-7xl font-heading font-black text-primary leading-tight">
                            Our Work, Grounded in Rwanda&apos;s Reality
                        </h2>
                        <p className="text-2xl font-medium text-primary/80 leading-relaxed font-sans">
                            Emmanuel Foundation operates across seven programme areas, each designed to address a specific and interconnected challenge facing Rwanda&apos;s most vulnerable communities. Our work in Rusizi District represents our first integrated project — bringing these programmes to life simultaneously to maximize impact for at least 12,000 direct beneficiaries.
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

            {/* All 7 Programmes */}
            <section className="py-48 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-32">
                        <span className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-secondary">What We Do</span>
                        <h2 className="text-5xl md:text-6xl font-heading font-black text-primary mt-6">Our Seven Programmes</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {programmes.map((programme, index) => (
                            <motion.div
                                key={programme.title}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                                viewport={{ once: true }}
                                className={`${programme.color} border ${programme.accent} rounded-3xl p-10 space-y-6`}
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl font-heading font-black text-primary/20 leading-none">0{index + 1}</span>
                                    <h3 className="text-2xl md:text-3xl font-heading font-black text-primary leading-tight">{programme.title}</h3>
                                </div>
                                <p className="text-foreground/70 leading-relaxed font-sans font-medium text-lg">
                                    {programme.description}
                                </p>
                                <div className="bg-white/60 p-6 rounded-2xl">
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-secondary mb-4 font-sans">Activities</h4>
                                    <ul className="space-y-3">
                                        {programme.activities.map((activity) => (
                                            <li key={activity} className="flex items-start space-x-3 text-foreground/80 font-medium font-sans">
                                                <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
                                                <span>{activity}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Initiative — Rusizi District */}
            <section className="py-48 bg-[#FAFAF8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-secondary">Current Initiative</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mt-6 max-w-4xl mx-auto leading-tight">
                            Strengthening Community Well-Being, Environmental Protection, and Sustainable Water Management in Rusizi District
                        </h2>
                    </div>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            <div className="p-14 space-y-8">
                                <p className="text-xl text-foreground/70 leading-relaxed font-sans font-medium">
                                    Rusizi District faces environmental degradation, water stress, sanitation challenges, and limited livelihood opportunities for youth and vulnerable households. Emmanuel Foundation is implementing a 24-month integrated project to protect the environment, promote sustainable water use, and strengthen community well-being through education, empowerment, and resilience-building.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { label: 'Location', value: 'Rusizi District, Rwanda' },
                                        { label: 'Duration', value: '24 months' },
                                        { label: 'Target Beneficiaries', value: 'At least 12,000 direct beneficiaries' },
                                        { label: 'Status', value: 'In development — seeking funding partners' },
                                    ].map((item) => (
                                        <div key={item.label} className="bg-[#FAFAF8] p-6 rounded-2xl">
                                            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2 font-sans">{item.label}</span>
                                            <span className="text-primary font-heading font-black text-lg">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-secondary/10 p-6 rounded-2xl">
                                    <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2 font-sans">Focus Areas</span>
                                    <p className="text-primary font-medium">Environmental conservation, WASH, youth empowerment, community health, sports, and local sustainability</p>
                                </div>
                                <div className="bg-primary/5 p-6 rounded-2xl">
                                    <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2 font-sans">Funding</span>
                                    <p className="text-primary font-medium">Open to national, bilateral, multilateral donors, foundations, and private-sector partners</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Link href="/donate">
                                        <button className="bg-primary text-white px-10 py-4 rounded-xl font-heading font-black text-lg hover:bg-secondary hover:text-primary transition-all shadow-lg active:scale-95">
                                            Support This Project
                                        </button>
                                    </Link>
                                    <Link href="/contact">
                                        <button className="bg-transparent border-2 border-primary text-primary px-10 py-4 rounded-xl font-heading font-black text-lg hover:bg-primary hover:text-white transition-all active:scale-95">
                                            Partner With Us
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative min-h-[400px] lg:min-h-0">
                                <img
                                    src="/bg-1.jpeg"
                                    alt="Rusizi District project"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                            </div>
                        </div>
                    </motion.div>
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
                    <h2 className="text-5xl md:text-7xl font-heading font-black text-secondary leading-tight">Help Launch Our First Programs</h2>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-sans font-medium">
                        As a new foundation with ambitious goals, we need partners, donors, and volunteers who believe in community-driven change. Your support — at any level — helps turn these programmes from plans into impact.
                    </p>
                    <div className="pt-8">
                        <Link href="/donate">
                            <button className="bg-secondary text-primary px-16 py-6 rounded-xl font-heading font-black text-xl hover:bg-white transition-all shadow-2xl active:scale-95 hover:-translate-y-1">
                                Donate to Support Our Work
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
