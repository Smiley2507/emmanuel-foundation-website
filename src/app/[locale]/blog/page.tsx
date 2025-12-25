import { PageHeader } from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from '@/lib/navigation';
import { client } from '@/lib/sanity/client';
import { postsQuery } from '@/lib/sanity/queries';
import { getImageUrl } from '@/lib/sanity/image';

// TypeScript interface for blog post
interface BlogPost {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    excerpt?: string;
    mainImage?: {
        asset: {
            _id: string;
            url: string;
        };
        alt?: string;
    };
    categories?: Array<{
        title: string;
        slug: { current: string };
        color?: string;
    }>;
    author?: {
        name: string;
    };
}

async function getPosts(): Promise<BlogPost[]> {
    const posts = await client.fetch(postsQuery, {}, { next: { revalidate: 60 } });
    return posts || [];
}

function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <PageHeader title="Blog" subtitle="Stories, insights, and updates from the field." />

            {/* Blog Grid */}
            <section className="py-48 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {posts.length === 0 ? (
                        <div className="text-center py-24">
                            <h3 className="text-3xl font-heading font-black text-primary mb-4">
                                No blog posts yet
                            </h3>
                            <p className="text-xl text-foreground/70">
                                Check back soon for inspiring stories from the field!
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {posts.map((post, index) => (
                                <article
                                    key={post._id}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                                >
                                    <Link href={`/blog/${post.slug.current}`}>
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            {post.mainImage?.asset ? (
                                                <img
                                                    src={getImageUrl(post.mainImage, 800)}
                                                    alt={post.mainImage.alt || post.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary" />
                                            )}
                                            {post.categories && post.categories[0] && (
                                                <div className="absolute top-4 left-4">
                                                    <span className={`${post.categories[0].color || 'bg-secondary text-primary'} px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider`}>
                                                        {post.categories[0].title}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-8 space-y-6">
                                            <h3 className="text-2xl font-heading font-black text-primary leading-tight group-hover:text-secondary transition-colors">
                                                {post.title}
                                            </h3>

                                            {post.excerpt && (
                                                <p className="text-foreground/70 leading-relaxed font-medium line-clamp-3">
                                                    {post.excerpt}
                                                </p>
                                            )}

                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <div className="flex items-center space-x-2 text-sm text-foreground/60 font-medium">
                                                    <Calendar size={16} />
                                                    <span>{formatDate(post.publishedAt)}</span>
                                                </div>

                                                <div className="flex items-center space-x-2 text-primary font-bold group-hover:text-secondary transition-colors">
                                                    <span className="text-sm">Read More</span>
                                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    )}
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
