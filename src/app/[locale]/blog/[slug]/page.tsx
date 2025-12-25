'use client';

import { PageHeader } from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from '@/lib/navigation';

export default function BlogPostPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <PageHeader title="Blog Post" subtitle="Stories from the field" />

            {/* Back Button */}
            <section className="py-8 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/blog" className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition-colors font-bold">
                        <ArrowLeft size={20} />
                        <span>Back to Blog</span>
                    </Link>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Article Header */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8 mb-16"
                    >
                        <div className="inline-block">
                            <span className="bg-secondary text-primary px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider">
                                Community
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-heading font-black text-primary leading-tight">
                            Building Sustainable Communities Through Local Action
                        </h1>

                        <div className="flex items-center space-x-6 text-foreground/60 font-medium">
                            <div className="flex items-center space-x-2">
                                <Calendar size={18} />
                                <span>12th July 2025</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <User size={18} />
                                <span>Emmanuel Foundation</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-16 shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop"
                            alt="Blog post"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Article Body */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="prose prose-lg max-w-none"
                    >
                        <div className="space-y-8 text-foreground/80 leading-relaxed text-xl">
                            <p className="text-2xl font-medium text-primary leading-relaxed">
                                In the heart of rural Rwanda, a quiet revolution is taking place. Communities are coming together to create lasting change through education, health awareness, and youth empowerment programs.
                            </p>

                            <p>
                                Our community-led initiatives are built on a simple but powerful principle: sustainable change comes from within. By working directly with local leaders and community members, we're creating programs that address real needs and build on existing strengths.
                            </p>

                            <h2 className="text-4xl font-heading font-black text-primary mt-16 mb-8">The Power of Local Leadership</h2>

                            <p>
                                Every successful program starts with listening. We spend time in communities, understanding their challenges, their dreams, and their existing resources. This approach has led to some of our most impactful initiatives.
                            </p>

                            <p>
                                From health awareness campaigns that have reached over 1,000 families to youth education programs that are creating the next generation of community leaders, the results speak for themselves.
                            </p>

                            <h2 className="text-4xl font-heading font-black text-primary mt-16 mb-8">Looking Forward</h2>

                            <p>
                                As we continue to grow, our commitment remains the same: to support communities in creating their own sustainable futures. With your support, we can expand these programs and reach even more families across Rwanda.
                            </p>

                            <div className="bg-secondary/10 border-l-4 border-secondary p-8 rounded-r-2xl my-12">
                                <p className="text-2xl font-heading font-black text-primary italic">
                                    "The best solutions come from the people who understand the challenges firsthand. Our role is to support, not to impose."
                                </p>
                            </div>

                            <p>
                                Join us in this journey. Whether through donations, volunteering, or simply spreading the word, every contribution helps us build stronger, more resilient communities.
                            </p>
                        </div>
                    </motion.div>

                    {/* Share Section */}
                    <div className="mt-24 pt-12 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-heading font-black text-primary">Share this story</h3>
                            <div className="flex items-center space-x-4">
                                {/* Social share buttons would go here */}
                                <span className="text-foreground/60 font-medium">Coming soon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            <section className="py-24 bg-[#FAFAF8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-heading font-black text-primary mb-16 text-center">Related Stories</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[1, 2, 3].map((i) => (
                            <Link key={i} href="/blog/1" className="group">
                                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={`https://images.unsplash.com/photo-${i === 1 ? '1542601906990-b4d3fb778b09' : i === 2 ? '1593113598332-cd288d649433' : '1497633762265-9d179a990aa6'}?q=80&w=800&auto=format&fit=crop`}
                                            alt="Related post"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-heading font-black text-primary group-hover:text-secondary transition-colors">
                                            Related Story Title {i}
                                        </h3>
                                        <p className="text-sm text-foreground/60 mt-2">12th July 2025</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
