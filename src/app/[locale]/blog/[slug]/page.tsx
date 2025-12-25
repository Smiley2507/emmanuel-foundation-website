import { PageHeader } from '@/components/layout/PageHeader';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from '@/lib/navigation';
import { client } from '@/lib/sanity/client';
import { postQuery, postPathsQuery, relatedPostsQuery } from '@/lib/sanity/queries';
import { getImageUrl } from '@/lib/sanity/image';
import { PortableText } from '@/components/blog/PortableText';
import { notFound } from 'next/navigation';

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
    const date = new Date(dateString);
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
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    const categorySlug = post.categories?.[0]?.slug?.current || [];
    const relatedPosts = await getRelatedPosts(post._id, [categorySlug]);

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
                    <div className="space-y-8 mb-16">
                        {post.categories && post.categories[0] && (
                            <div className="inline-block">
                                <span className={`${post.categories[0].color || 'bg-secondary text-primary'} px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider`}>
                                    {post.categories[0].title}
                                </span>
                            </div>
                        )}

                        <h1 className="text-5xl md:text-6xl font-heading font-black text-primary leading-tight">
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
                        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-16 shadow-2xl">
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
                            <h3 className="text-2xl font-heading font-black text-primary">Share this story</h3>
                            <div className="flex items-center space-x-4">
                                <span className="text-foreground/60 font-medium">Coming soon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-24 bg-[#FAFAF8]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-heading font-black text-primary mb-16 text-center">Related Stories</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {relatedPosts.map((relatedPost: any) => (
                                <Link key={relatedPost._id} href={`/blog/${relatedPost.slug.current}`} className="group">
                                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            {relatedPost.mainImage?.asset ? (
                                                <img
                                                    src={getImageUrl(relatedPost.mainImage, 600)}
                                                    alt={relatedPost.mainImage.alt || relatedPost.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary" />
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-heading font-black text-primary group-hover:text-secondary transition-colors">
                                                {relatedPost.title}
                                            </h3>
                                            <p className="text-sm text-foreground/60 mt-2">{formatDate(relatedPost.publishedAt)}</p>
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
