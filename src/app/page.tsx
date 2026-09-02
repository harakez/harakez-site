import Hero from '@/components/home/Hero';
import Marquee from '@/components/home/Marquee';
import Drops from '@/components/home/Drops';
import Process from '@/components/home/Process';
import Authenticity from '@/components/home/Authenticity';
import ManifestoTeaser from '@/components/home/ManifestoTeaser';
import Faq from '@/components/home/Faq';
import Waitlist from '@/components/home/Waitlist';

/* ------------------------------------------------------------
   Главная.

   Порядок: заявление → вещи → положение дел → правила → гарантии.

   Никаких выдуманных вещей: пока нет настоящих фотографий дропов,
   сайт обходится без изображений одежды. Лучше сдержанно, чем
   нарисованные эскизы вместо товара.
   ------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Drops />
      <Process />
      <Authenticity />
      <ManifestoTeaser />
      <Faq />
      <Waitlist />
    </>
  );
}
