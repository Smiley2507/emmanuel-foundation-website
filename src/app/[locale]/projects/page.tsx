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
        image: '/community-1.jpg',
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
        image: '/bg-2.jpeg',
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
        image: '/bg-1.jpeg',
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
        image: '/farmers.jpg',
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
        image: '/community-1.jpg',
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
        image: '/bg-2.jpeg',
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
        image: '/bg-1.jpeg',
    },
];

export default function ProjectsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Our Programs" subtitle="Seven programmes. One mission: to uplift the vulnerable and protect the environment." />

            {/* Intro Section */}
            <section className="bg-[var(--color-bg-light)]">
                <div className="flex flex-col lg:flex-row-reverse">
                    <div className="w-full lg:w-1/2 min-h-[480px]">
                        <img
                            src="/farmers.jpg"
                            alt="Programs overview"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center">
                        <div className="py-[40px] px-[24px] lg:py-[80px] lg:px-[64px] max-w-[720px] ml-auto">
                            <span className="overline-label">Our Focus</span>
                            <h2 className="h2 mb-[24px] text-[var(--color-text-primary)] mt-2">
                                Our Work, Grounded in Rwanda's Reality
                            </h2>
                            <p className="body-large text-[var(--color-text-secondary)]">
                                Emmanuel Foundation operates across seven programme areas, each designed to address a specific and interconnected challenge facing Rwanda's most vulnerable communities. Our work in Rusizi District represents our first integrated project — bringing these programmes to life simultaneously to maximize impact for at least 12,000 direct beneficiaries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* All 7 Programmes */}
            <div className="flex flex-col border-t border-gray-200">
                {programmes.map((programme, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <section key={programme.title} className="bg-[var(--color-bg-white)] border-b border-gray-200">
                            <div className={`flex flex-col lg:flex-row ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                                <div className="w-full lg:w-1/2 min-h-[480px] lg:border-x border-gray-100">
                                    <img
                                        src={programme.image}
                                        alt={programme.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-full lg:w-1/2 flex items-center">
                                    <div className="py-[40px] px-[24px] lg:py-[80px] lg:px-[64px] max-w-[720px] mx-auto">
                                        <motion.div
                                            initial={{ x: isEven ? 50 : -50, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.8 }}
                                            viewport={{ once: true }}
                                        >
                                            <span className="text-[20px] font-heading font-black text-[var(--color-primary-light)] mb-[16px] block tracking-wider">0{index + 1}</span>
                                            <h2 className="h2 mb-[24px] text-[var(--color-text-primary)]">
                                                {programme.title}
                                            </h2>
                                            <p className="body-large text-[var(--color-text-secondary)] mb-[32px]">
                                                {programme.description}
                                            </p>
                                            
                                            <div className="bg-[var(--color-bg-light)] p-[32px] rounded-[12px] border border-gray-100">
                                                <h4 className="overline-label mb-[16px]">Key Activities</h4>
                                                <ul className="space-y-[16px]">
                                                    {programme.activities.map((activity) => (
                                                        <li key={activity} className="flex items-start text-[16px] text-[var(--color-text-secondary)] font-medium">
                                                            <div className="w-[8px] h-[8px] mt-[8px] rounded-full bg-[var(--color-primary)] shrink-0 mr-[16px]" />
                                                            <span>{activity}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* Current Initiative — Rusizi District */}
            <section className="py-[96px] bg-[var(--color-bg-dark)] text-white">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-[64px]">
                        <span className="overline-label text-[var(--color-primary-light)]">Current Initiative</span>
                        <h2 className="h2 mt-2 max-w-[800px] mx-auto text-white">
                            Strengthening Community Well-Being, Environmental Protection, and Sustainable Water Management in Rusizi District
                        </h2>
                    </div>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white/10 rounded-[12px] border border-white/20 overflow-hidden"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            <div className="p-[48px] space-y-[40px]">
                                <p className="body-large text-white/85">
                                    Rusizi District faces environmental degradation, water stress, sanitation challenges, and limited livelihood opportunities for youth and vulnerable households. Emmanuel Foundation is implementing a 24-month integrated project to protect the environment, promote sustainable water use, and strengthen community well-being through education, empowerment, and resilience-building.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                                    {[
                                        { label: 'Location', value: 'Rusizi District, Rwanda' },
                                        { label: 'Duration', value: '24 months' },
                                        { label: 'Target Beneficiaries', value: 'At least 12,000 direct beneficiaries' },
                                        { label: 'Status', value: 'In development — seeking funding partners' },
                                    ].map((item) => (
                                        <div key={item.label} className="bg-white/5 p-[24px] rounded-[8px] border border-white/10">
                                            <span className="overline-label text-white/60 block mb-[8px]">{item.label}</span>
                                            <span className="h4 text-white">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-[var(--color-primary)] p-[24px] rounded-[8px]">
                                    <span className="overline-label text-white/80 block mb-[8px]">Focus Areas</span>
                                    <p className="text-white font-medium text-[16px]">Environmental conservation, WASH, youth empowerment, community health, sports, and local sustainability</p>
                                </div>
                                <div className="bg-white/10 p-[24px] rounded-[8px] border border-white/10">
                                    <span className="overline-label text-white/80 block mb-[8px]">Funding</span>
                                    <p className="text-white font-medium text-[16px]">Open to national, bilateral, multilateral donors, foundations, and private-sector partners</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-[16px] pt-[16px]">
                                    <Link href="/donate">
                                        <button className="btn-primary w-full sm:w-auto h-full px-[32px] py-[16px]">
                                            Support This Project
                                        </button>
                                    </Link>
                                    <Link href="/contact">
                                        <button className="btn-ghost text-white border-white hover:bg-white/10 w-full sm:w-auto px-[32px] py-[16px]">
                                            Partner With Us
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative min-h-[400px] lg:min-h-0">
                                <img
                                    src="/bg-1.jpeg"
                                    alt="Rusizi District project"
                                    className="w-full h-full object-cover grayscale-[30%]"
                                />
                                <div className="absolute inset-0 bg-black/40" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-[96px] bg-[var(--color-primary)] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 max-w-[800px] mx-auto px-4 text-center text-white space-y-[40px]">
                    <h2 className="h2 text-white">Help Launch Our First Programs</h2>
                    <p className="body-large text-white/85">
                        As a new foundation with ambitious goals, we need partners, donors, and volunteers who believe in community-driven change. Your support — at any level — helps turn these programmes from plans into impact.
                    </p>
                    <div>
                        <Link href="/donate">
                            <button className="btn-inverse">
                                Donate to Support Our Work
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
