import HeroSlideshow from '@/components/layout/HeroSlideshow';
import { MissionSection } from '@/components/home/MissionSection';
import { FocusAreas } from '@/components/home/FocusAreas';
import StatsSection from '@/components/home/StatsSection';
import { ImpactSection } from '@/components/home/ImpactSection';
import { BlogPreview } from '@/components/home/BlogPreview';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSlideshow />
      <MissionSection />
      <FocusAreas />
      <StatsSection />
      <ImpactSection />
      <BlogPreview />
    </div>
  );
}
