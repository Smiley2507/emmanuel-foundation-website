'use client';

import { motion } from 'framer-motion';
import { Link } from '@/lib/navigation';
import { urlFor } from '@/sanity/lib/image';
import { Calendar, ArrowRight } from 'lucide-react';

interface Post {
    title: string;
    slug: { current: string };
    mainImage: any;
    publishedAt: string;
    excerpt?: string;
    body?: any[];
    authorName?: string;
    categories?: string[];
}

interface BlogPreviewProps {
    posts: Post[];
}

export function BlogPreview({ posts }: BlogPreviewProps) {
    // Helper to get excerpt from body if not explicitly provided
    const getExcerpt = (post: Post) => {
        if (post.excerpt) return post.excerpt;
        if (post.body && post.body[0] && post.body[0].children && post.body[0].children[0]) {
            return post.body[0].children[0].text.substring(0, 150) + '...';
        }
        return 'Read the full story to learn more about our latest updates.';
    };

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

                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {posts.map((post, index) => (
                            <motion.article
                                key={post.slug.current}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                            >
                                <Link href={`/blog/${post.slug.current}`}>
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        {post.mainImage ? (
                                            <img
                                                src={urlFor(post.mainImage).url()}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-primary to-secondary" />
                                        )}
                                        {post.categories && post.categories.length > 0 && (
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-secondary text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                                                    {post.categories[0]}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-8 space-y-6">
                                        <h3 className="text-2xl font-heading font-black text-primary leading-tight group-hover:text-secondary transition-colors">
                                            {post.title}
                                        </h3>

                                        <p className="text-foreground/70 leading-relaxed font-medium line-clamp-3">
                                            {getExcerpt(post)}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex items-center space-x-2 text-sm text-foreground/60 font-medium">
                                                {/* Requires importing Calendar from lucide-react if not present, but it was removed in previous edit so I'll need to re-add imports if they are missing. I will check imports in next tool call or assume I need to fix them. */}
                                                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                            </div>

                                            <div className="flex items-center space-x-2 text-primary font-bold group-hover:text-secondary transition-colors">
                                                <span className="text-sm">Read More</span>
                                                {/* Requires ArrowRight */}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24">
                        <p className="text-xl text-gray-500 font-sans">No updates available at the moment. Check back soon!</p>
                    </div>
                )}
            </div>
        </section>
    );
}
