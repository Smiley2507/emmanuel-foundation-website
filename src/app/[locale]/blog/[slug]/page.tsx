import { PageHeader } from '@/components/layout/PageHeader';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from '@/lib/navigation';
import { client } from '@/lib/sanity/client';
import { postQuery, postPathsQuery, relatedPostsQuery } from '@/lib/sanity/queries';
import { getImageUrl } from '@/lib/sanity/image';
import { PortableText } from '@/components/blog/PortableText';
import { ReadingProgress } from '@/components/blog/ReadingProgress';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

async function getPost(slug: string) {
    const post = await client.fetch(postQuery, { slug }, { next: { revalidate: 60 } });
    return post;
}

async function getRelatedPosts(postId: string, categories: string[]) {
    const posts = await client.fetch(
        relatedPostsQuery,
        { postId, categories },
        { next: { revalidate: 60 } }
    );
    return posts || [];
}

function formatDate(dateString: string) {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    return date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

export async function generateStaticParams() {
    const paths = await client.fetch(postPathsQuery);
    return paths;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    let post;
    try {
        post = await getPost(slug);
    } catch (error) {
        console.error('Error fetching post:', error);
        throw error;
    }

    if (!post) {
        notFound();
    }

    const categorySlug = post.categories?.[0]?.slug?.current;
    let relatedPosts = [];
    
    if (categorySlug) {
        try {
            relatedPosts = await getRelatedPosts(post._id, [categorySlug]);
        } catch (error) {
            console.error('Error fetching related posts:', error);
            relatedPosts = [];
        }
    }

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <ReadingProgress />

            {/* Back Button */}
            <section className="pt-24 pb-8 bg-white border-b border-gray-100">
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
                    <div className="space-y-8 mb-16">
                        {post.categories && post.categories[0] && (
                            <div className="inline-block">
                                <span className={`${post.categories[0].color || 'bg-[var(--color-primary-light)] text-[var(--color-primary)]'} px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider border border-[var(--color-primary-vibrant)]/20`}>
                                    {post.categories[0].title}
                                </span>
                            </div>
                        )}

                        <h1 className="h1 text-[var(--color-primary)] leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center space-x-6 text-foreground/60 font-medium">
                            <div className="flex items-center space-x-2">
                                <Calendar size={18} />
                                <span>{formatDate(post.publishedAt)}</span>
                            </div>
                            {post.author && (
                                <div className="flex items-center space-x-2">
                                    <User size={18} />
                                    <span>{post.author.name}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Featured Image */}
                    {post.mainImage?.asset && (
                        <div className="relative aspect-[21/9] rounded-[var(--radius-ui)] overflow-hidden mb-16 shadow-lg border border-gray-100">
                            <img
                                src={getImageUrl(post.mainImage, 1200)}
                                alt={post.mainImage.alt || post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* Article Body */}
                    <div className="prose prose-lg max-w-none">
                        {post.body && <PortableText value={post.body} />}
                    </div>

                    {/* Share Section */}
                    <div className="mt-24 pt-12 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                            <h3 className="h3 text-[var(--color-primary)]">Share this story</h3>
                            <div className="flex items-center space-x-4">
                                <span className="text-foreground/60 font-medium">Coming soon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-24 bg-[var(--color-bg-light)]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="h2 mb-16 text-center text-[var(--color-primary)]">Related Stories</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {relatedPosts.map((relatedPost: any) => (
                                <Link key={relatedPost._id} href={`/blog/${relatedPost.slug.current}`} className="group">
                                    <div className="ui-card h-full">
                                        <div className="relative aspect-[16/9] overflow-hidden">
                                            {relatedPost.mainImage?.asset ? (
                                                <img
                                                    src={getImageUrl(relatedPost.mainImage, 600)}
                                                    alt={relatedPost.mainImage.alt || relatedPost.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[var(--color-primary-light)]" />
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <h3 className="h4 text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary-vibrant)] transition-colors">
                                                {relatedPost.title}
                                            </h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] opacity-70">{formatDate(relatedPost.publishedAt)}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
