import type { Metadata } from 'next';
import SubmitView from '@/components/submit/SubmitView';

export const metadata: Metadata = {
  title: 'Предложить дизайн',
  description:
    'Пришлите идею вещи: крой, ткань, деталь, силуэт. Отобранное уходит ' +
    'в ограниченный пронумерованный тираж HARAKEZ.',
};

export default function SubmitPage() {
  return <SubmitView />;
}
