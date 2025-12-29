import HeroSlideshow from '@/components/layout/HeroSlideshow';
import { MissionSection } from '@/components/home/MissionSection';
import { FocusAreas } from '@/components/home/FocusAreas';
import StatsSection from '@/components/home/StatsSection';
import { ImpactSection } from '@/components/home/ImpactSection';
import { BlogPreview } from '@/components/home/BlogPreview';
import { client } from '@/sanity/lib/client';

export default async function Home() {
  const query = `*[_type == "blogPost"] | order(publishedAt desc)[0...3] {
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    body,
    "authorName": author->name,
    "categories": categories[]->title
  }`;

  const posts = await client.fetch(query, {}, { next: { revalidate: 60 } });

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSlideshow />
      <MissionSection />
      <FocusAreas />
      <StatsSection />
      <ImpactSection />
      <BlogPreview posts={posts} />
    </div>
  );
}
