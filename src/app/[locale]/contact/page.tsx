'use client';

import { PageHeader } from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { Heart, Handshake, Users } from 'lucide-react';

const intentOptions = [
    {
        icon: Heart,
        title: 'Donate or Fund a Programme',
        description: 'Support our work in Rusizi District financially.',
    },
    {
        icon: Handshake,
        title: 'Partner or Collaborate',
        description: 'Explore institutional or community partnerships.',
    },
    {
        icon: Users,
        title: 'Volunteer or Get Involved',
        description: 'Join our growing network of community supporters.',
    },
];

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Contact Us" />

            <section className="relative lg:h-[1000px] bg-primary">
                {/* Background Section */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2000&auto=format&fit=crop"
                        alt="Contact background"
                        className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 h-full items-center py-24 lg:py-0">

                        {/* Left Column: Text & Info */}
                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-white space-y-12"
                        >
                            <h2 className="text-5xl md:text-6xl font-heading font-black leading-tight text-secondary">
                                Let&apos;s Build Something Together
                            </h2>
                            <p className="text-xl text-white/80 leading-relaxed font-sans font-medium">
                                Whether you&apos;re a potential donor, a community partner, a volunteer, or a journalist — we welcome every conversation. Reach out and let&apos;s explore how we can work together.
                            </p>

                            {/* Intent Options */}
                            <div className="grid grid-cols-1 gap-4">
                                {intentOptions.map((option) => (
                                    <div key={option.title} className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20">
                                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                                            <option.icon size={22} />
                                        </div>
                                        <div>
                                            <p className="font-heading font-bold text-white text-lg">{option.title}</p>
                                            <p className="text-white/60 text-sm font-sans">{option.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 text-white max-w-lg shadow-2xl">
                                <div className="space-y-8 text-xl font-sans font-medium">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                        </div>
                                        <div>
                                            <span className="font-bold text-secondary uppercase tracking-widest text-sm block mb-1">Email</span>
                                            info@emmanuelfoundation.org
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                        </div>
                                        <div>
                                            <span className="font-bold text-secondary uppercase tracking-widest text-sm block mb-1">Phone</span>
                                            +250 788 655 112
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                        </div>
                                        <div>
                                            <span className="font-bold text-secondary uppercase tracking-widest text-sm block mb-1">Location</span>
                                            Kigali, Rwanda
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Contact Form */}
                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full" />
                            <form className="space-y-8 relative z-10">
                                <div>
                                    <label htmlFor="fullname" className="block text-sm font-sans font-bold text-primary uppercase tracking-wider mb-3">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullname"
                                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-secondary focus:bg-white focus:outline-none transition-all text-lg font-medium placeholder:text-gray-300"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-sans font-bold text-primary uppercase tracking-wider mb-3">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-secondary focus:bg-white focus:outline-none transition-all text-lg font-medium placeholder:text-gray-300"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-sans font-bold text-primary uppercase tracking-wider mb-3">Subject</label>
                                    <select
                                        id="subject"
                                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-secondary focus:bg-white focus:outline-none transition-all text-lg font-medium text-gray-700 appearance-none cursor-pointer"
                                    >
                                        <option value="">Select a subject...</option>
                                        <option value="donation">Donation Inquiry</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="volunteering">Volunteering</option>
                                        <option value="media">Media</option>
                                        <option value="general">General</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-sans font-bold text-primary uppercase tracking-wider mb-3">Your Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-secondary focus:bg-white focus:outline-none transition-all text-lg font-medium resize-none placeholder:text-gray-300"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="bg-primary text-white px-10 py-5 rounded-xl font-heading font-black text-xl hover:bg-secondary hover:text-primary transition-all shadow-xl active:scale-95 w-full hover:-translate-y-1"
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}
