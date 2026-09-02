import type { Metadata } from 'next';
import ManifestoView from '@/components/manifesto/ManifestoView';

export const metadata: Metadata = {
  title: 'Манифест',
  description:
    'Почему HARAKEZ отдаёт дизайн сообществу и закрывает тиражи на последнем номере.',
};

export default function ManifestoPage() {
  return <ManifestoView />;
}
