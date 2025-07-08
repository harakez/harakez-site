// src/app/page.tsx
import HeroSection from '@/components/HeroSection';
import ManifestoSection from '@/components/ManifestoSection';
import InspirationSection from '@/components/InspirationSection'; // <-- Новая уникальная секция
import SupportSection from '@/components/SupportSection';
import FeedbackSection from '@/components/FeedbackSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ManifestoSection />
      <InspirationSection />
      <SupportSection />
      <FeedbackSection />
      <Footer />
    </main>
  );
}