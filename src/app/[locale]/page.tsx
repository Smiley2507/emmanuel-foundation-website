import HeroSlideshow from '@/components/layout/HeroSlideshow';
import { MissionSection } from '@/components/home/MissionSection';
import { FocusAreas } from '@/components/home/FocusAreas';
import StatsSection from '@/components/home/StatsSection';
import { ImpactSection } from '@/components/home/ImpactSection';
import { BlogPreview } from '@/components/home/BlogPreview';
import { client } from '@/sanity/lib/client';
import { VideoFeature } from '@/components/VideoFeature';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('HomeVideo');
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
      <VideoFeature
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
        youtubeId="QWU8L6wvrh8"
        youtubeUrl="https://youtu.be/QWU8L6wvrh8?si=WW8DJrbaVNsTfnzR"
        primaryCta={{ label: t('primary_cta'), href: '/donate' }}
        secondaryCta={{ label: t('secondary_cta'), href: '/about' }}
        watchLabel={t('watch_cta')}
        iframeTitle={t('iframe_title')}
      />
      <FocusAreas />
      <StatsSection />
      <ImpactSection />
      <BlogPreview posts={posts} />
    </div>
  );
}
