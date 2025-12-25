'use client';

import { PageHeader } from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from '@/lib/navigation';

// Mock blog posts - will be replaced with Sanity CMS data
const mockPosts = [
    {
        id: 1,
        title: 'Building Sustainable Communities Through Local Action',
        excerpt: 'Discover how our community-led initiatives are creating lasting change in rural Rwanda through education, health awareness, and youth empowerment programs.',
        date: '12th July 2025',
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
        category: 'Community'
    },
    {
        id: 2,
        title: 'Tree Planting Initiative: 10,000 Trees and Counting',
        excerpt: 'Our environmental conservation efforts have reached a major milestone. Learn about the impact of our reforestation program and how you can get involved.',
        date: '12th July 2025',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
        category: 'Environment'
    },
    {
        id: 3,
        title: 'Empowering Youth Through Education and Skills Training',
        excerpt: 'Meet the young leaders who are transforming their communities through our education programs and skills development workshops.',
        date: '12th July 2025',
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
        category: 'Education'
    },
    {
        id: 4,
        title: 'Clean Water Access: A Fundamental Right',
        excerpt: 'Our latest water and sanitation project brings clean drinking water to 500 families. Read about the journey and the lives transformed.',
        date: '12th July 2025',
        image: 'https://images.unsplash.com/photo-1541544181051-e46607bc22a4?q=80&w=800&auto=format&fit=crop',
        category: 'Health'
    },
    {
        id: 5,
        title: 'Wetland Restoration: Protecting Rwanda\'s Natural Heritage',
        excerpt: 'Join us as we work to restore critical wetland ecosystems that support biodiversity and provide essential resources for local communities.',
        date: '12th July 2025',
        image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop',
        category: 'Conservation'
    },
    {
        id: 6,
        title: 'Sustainable Agriculture: Growing Food, Growing Hope',
        excerpt: 'Our sustainable farming initiatives are helping families achieve food security while protecting the environment for future generations.',
        date: '12th July 2025',
        image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop',
        category: 'Development'
    }
];

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <PageHeader title="Blog" subtitle="Stories, insights, and updates from the field." />

            {/* Blog Grid */}
            <section className="py-48 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {mockPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                            >
                                <Link href={`/blog/${post.id}`}>
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-secondary text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8 space-y-6">
                                        <h3 className="text-2xl font-heading font-black text-primary leading-tight group-hover:text-secondary transition-colors">
                                            {post.title}
                                        </h3>

                                        <p className="text-foreground/70 leading-relaxed font-medium line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex items-center space-x-2 text-sm text-foreground/60 font-medium">
                                                <Calendar size={16} />
                                                <span>{post.date}</span>
                                            </div>

                                            <div className="flex items-center space-x-2 text-primary font-bold group-hover:text-secondary transition-colors">
                                                <span className="text-sm">Read More</span>
                                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-48 bg-[#FAFAF8]">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
                    <div className="space-y-6">
                        <span className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-secondary">Stay Connected</span>
                        <h2 className="text-5xl md:text-6xl font-heading font-black text-primary">
                            Subscribe to Our Newsletter
                        </h2>
                        <p className="text-xl text-foreground/70 leading-relaxed font-medium max-w-2xl mx-auto">
                            Get the latest stories, updates, and impact reports delivered directly to your inbox.
                        </p>
                    </div>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-6 py-4 rounded-xl bg-white border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all text-lg font-medium placeholder:text-gray-400"
                        />
                        <button
                            type="submit"
                            className="bg-primary text-white px-10 py-4 rounded-xl font-heading font-black text-lg hover:bg-secondary hover:text-primary transition-all shadow-lg active:scale-95 hover:-translate-y-1"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
