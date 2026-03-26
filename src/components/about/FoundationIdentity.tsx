import React from 'react';

export default function FoundationIdentity() {
    return (
        <section className="py-48 bg-[#FAFAF8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Tagline */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">
                        Driven by compassion. Rooted in community. Focused on lasting impact.
                    </h2>
                </div>
                {/* Mission */}
                <div className="mb-12">
                    <h3 className="text-3xl font-heading font-bold text-primary mb-4">Mission</h3>
                    <p className="text-xl text-foreground/80 leading-relaxed">
                        To promote the well‑being of communities, protect the environment, and support sustainable development.
                    </p>
                </div>
                {/* Vision */}
                <div className="mb-12">
                    <h3 className="text-3xl font-heading font-bold text-primary mb-4">Vision</h3>
                    <p className="text-xl text-foreground/80 leading-relaxed">
                        A healthy, empowered, and environmentally responsible society where all people, especially the most vulnerable, have the opportunity to thrive and contribute to sustainable development.
                    </p>
                </div>
                {/* Core Values */}
                <div>
                    <h3 className="text-3xl font-heading font-bold text-primary mb-6">Core Values</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <li className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h4 className="font-heading font-semibold text-lg text-primary mb-2">Integrity &amp; Accountability</h4>
                            <p className="text-foreground/70">We act with transparency, responsibility, and ethical integrity in all our programmes, partnerships, and resource use.</p>
                        </li>
                        <li className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h4 className="font-heading font-semibold text-lg text-primary mb-2">Human Dignity</h4>
                            <p className="text-foreground/70">We place people at the heart of our work, promoting compassion, respect, and dignity for all individuals and communities we serve.</p>
                        </li>
                        <li className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h4 className="font-heading font-semibold text-lg text-primary mb-2">Social Responsibility</h4>
                            <p className="text-foreground/70">We are committed to positive social impact by acting responsibly, promoting ethical practices, and contributing to community well‑being.</p>
                        </li>
                        <li className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h4 className="font-heading font-semibold text-lg text-primary mb-2">Partnership &amp; Collaboration</h4>
                            <p className="text-foreground/70">We work closely with communities, institutions, and development partners to deliver inclusive and locally driven solutions.</p>
                        </li>
                        <li className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h4 className="font-heading font-semibold text-lg text-primary mb-2">Equity &amp; Inclusion</h4>
                            <p className="text-foreground/70">We ensure equal opportunities and meaningful participation for all, with special focus on women, youth, children, and vulnerable groups.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
