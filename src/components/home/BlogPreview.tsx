'use client';

import { motion } from 'framer-motion';
import { Link } from '@/lib/navigation';
import { Calendar, User, ArrowRight } from 'lucide-react';

const mockPosts = [
    {
        title: 'Empowering Women in Rural Communities',
        excerpt: 'How our latest vocational training program is helping women in Eastern Province gain economic independence.',
        date: 'Oct 12, 2025',
        author: 'Foundation Team',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80',
        category: 'Community'
    },
    {
        title: 'The Green Initiative: 10,000 Trees Planted',
        excerpt: 'Celebrating a major milestone in our mission to restore local ecosystems and combat climate change.',
        date: 'Sep 28, 2025',
        author: 'John Doe',
        image: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&q=80',
        category: 'Environment'
    },
    {
        title: 'Sustainable Water Solutions for Schools',
        excerpt: 'Providing clean, accessible water to three primary schools, ensuring a healthier future for our children.',
        date: 'Sep 15, 2025',
        author: 'Jane Smith',
        image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80',
        category: 'Sustainability'
    }
];

export function BlogPreview() {
    return (
        <section className="py-48 bg-[#FAFAF8] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32 text-left">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <span className="text-xs font-sans font-bold uppercase tracking-[0.5em] text-secondary">Blog Preview</span>
                        <h2 className="text-5xl md:text-7xl font-heading font-black text-primary leading-tight">
                            Stories & Updates
                        </h2>
                        <p className="text-xl text-foreground/70 max-w-2xl font-sans font-medium leading-relaxed">
                            Stay up to date with our journey, the lives we're touching, and the environmental milestones we're achieving together.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/blog">
                            <button className="flex items-center space-x-6 text-primary font-heading font-bold text-xl group hover:text-secondary transition-colors">
                                <span>Read More Articles</span>
                                <div className="w-16 h-[2px] bg-secondary group-hover:w-24 transition-all duration-300" />
                            </button>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {mockPosts.map((post, index) => (
                        <motion.article
                            key={post.title}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 group"
                        >
                            <div className="aspect-[16/11] overflow-hidden relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute top-8 left-8 bg-secondary text-primary px-6 py-2 rounded-md font-heading font-black text-sm uppercase tracking-wider shadow-xl">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-12 space-y-8">
                                <div className="flex items-center space-x-6 text-sm text-foreground/40 font-sans font-bold uppercase tracking-widest">
                                    <span>{post.date}</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                    <span>{post.author}</span>
                                </div>
                                <h3 className="text-3xl font-heading font-black text-primary leading-tight group-hover:text-secondary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-lg text-foreground/70 leading-relaxed line-clamp-2 font-sans font-medium">
                                    {post.excerpt}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
