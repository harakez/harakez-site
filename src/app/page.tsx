// src/app/page.tsx
import HeroSection from '@/components/HeroSection';
import InspirationSection from '@/components/InspirationSection'; // <-- Новая уникальная секция
import SupportSection from '@/components/SupportSection';
// import FloatingControls from '@/components/FloatingControls';
import Footer from '@/components/Footer';
import PrintsSection from '@/components/PrintsSection';export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <InspirationSection />
      <SupportSection />
      <PrintsSection />
      {/* <FeedbackSection /> */}
      {/* <FloatingControls /> */}
      <Footer />
    </main>
  );
}
