import data from '@/content/news/news.json';
import Link from 'next/link';

type Item = typeof data[number];

export default function NewsIndex() {
  const items = (data as Item[]).sort((a,b) => a.date < b.date ? 1 : -1);
  return (
    <div className="container py-12 space-y-6">
      <h1 className="h1">NEWS</h1>
      <ul className="grid gap-4">
        {items.map((it) => (
          <li key={it.id} className="card">
            <div className="text-sm text-gray-500">{it.date}</div>
            <h3 className="text-xl font-semibold">{it.title_ko}</h3>
            <p className="text-gray-600">{it.excerpt_ko}</p>
            <Link href={`/ko/news/${it.id}`} className="underline mt-2 inline-block">자세히</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
