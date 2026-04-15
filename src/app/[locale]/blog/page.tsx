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
                            <h3 className="h3 text-[var(--color-primary-vibrant)] mb-4">
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
                                    className="ui-card h-full"
                                >
                                    <Link href={`/blog/${post.slug.current}`} className="flex flex-col h-full">
                                        <div className="relative aspect-[16/9] overflow-hidden">
                                            {post.mainImage?.asset ? (
                                                <img
                                                    src={getImageUrl(post.mainImage, 800)}
                                                    alt={post.mainImage.alt || post.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[var(--color-primary-light)]" />
                                            )}
                                        </div>

                                        <div className="p-8 flex flex-col flex-grow">
                                            {post.categories && post.categories[0] && (
                                                <div className="mb-4">
                                                    <span className="overline-label !mb-0 !text-[11px] !text-[var(--color-primary-vibrant)]">
                                                        {post.categories[0].title}
                                                    </span>
                                                </div>
                                            )}
                                            <h3 className="h4 text-[var(--color-text-primary)] mb-4">
                                                {post.title}
                                            </h3>

                                            {post.excerpt && (
                                                <p className="body-base text-[var(--color-text-secondary)] mb-6 flex-grow line-clamp-3">
                                                    {post.excerpt}
                                                </p>
                                            )}

                                            <div className="flex items-center text-[13px] font-medium text-[var(--color-text-secondary)] mt-auto pt-4 border-t border-gray-100">
                                                <div className="flex items-center space-x-2">
                                                    <Calendar size={14} className="opacity-60" />
                                                    <span>{formatDate(post.publishedAt)}</span>
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
        </div>
    );
}
