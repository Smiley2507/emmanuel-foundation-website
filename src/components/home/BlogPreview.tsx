'use client';

import { motion } from 'framer-motion';
import { Link } from '@/lib/navigation';
import { urlFor } from '@/sanity/lib/image';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { useTranslations } from 'next-intl';

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
    const t = useTranslations('BlogPreview');
    const realPosts = posts.filter(
        (post) => !post.title.toLowerCase().includes('test') && !post.title.toLowerCase().includes('lorem')
    ).slice(0, 3);

    const getExcerpt = (post: Post) => {
        if (post.excerpt) return post.excerpt;
        if (post.body && post.body[0] && post.body[0].children && post.body[0].children[0]) {
            return post.body[0].children[0].text.substring(0, 150) + '...';
        }
        return t('default_excerpt');
    };

    if (realPosts.length === 0) return null;

    return (
        <section className="py-[96px] bg-[var(--color-bg-white)]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px] mb-[64px]">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="overline-label">{t('label')}</span>
                        <h2 className="h2 text-[var(--color-text-primary)] mt-2">
                            {t('title')}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/blog">
                            <button className="btn-ghost">
                                {t('btn_view')}
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Grid */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]"
                >
                    {realPosts.map((post, index) => (
                        <motion.article
                            key={post.slug.current}
                            variants={fadeUp}
                            className="ui-card h-full"
                        >
                            <Link href={`/blog/${post.slug.current}`} className="flex flex-col h-full">
                                <div className="aspect-[16/9] overflow-hidden">
                                    {post.mainImage ? (
                                        <img
                                            src={urlFor(post.mainImage).url()}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-[var(--color-primary-light)]" />
                                    )}
                                </div>

                                <div className="p-[24px] flex flex-col flex-grow">
                                    {post.categories && post.categories.length > 0 && (
                                        <div className="mb-[12px]">
                                            <span className="overline-label !mb-0 !text-[11px] !text-[var(--color-primary-vibrant)]">
                                                {post.categories[0]}
                                            </span>
                                        </div>
                                    )}
                                    <h4 className="h4 text-[var(--color-text-primary)] mb-[16px]">
                                        {post.title}
                                    </h4>

                                    <p className="body-base text-[var(--color-text-secondary)] mb-[24px] flex-grow">
                                        {getExcerpt(post)}
                                    </p>

                                    <div className="flex items-center text-[13px] font-medium text-[var(--color-text-secondary)] mt-auto pt-[16px] border-t border-gray-100">
                                        <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
