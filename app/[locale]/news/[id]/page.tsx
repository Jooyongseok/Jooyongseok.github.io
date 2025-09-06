import data from '@/content/news/news.json';
import { notFound } from 'next/navigation';

export default function NewsDetail({ params }: { params: { id: string } }) {
  const item = (data as any[]).find(x => x.id === params.id);
  if (!item) return notFound();
  return (
    <div className="container py-12">
      <article className="prose max-w-none">
        <h1>{item.title_ko}</h1>
        <p className="text-gray-500">{item.date}</p>
        <p>{item.excerpt_ko}</p>
        <hr className="my-6" />
        <p>본문 내용을 여기에 추가하세요.</p>
      </article>
    </div>
  );
}
