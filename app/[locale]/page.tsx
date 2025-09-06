import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function Home() {
  const t = await getTranslations();
  return (
    <div className="container py-12 space-y-10">
      <section className="card text-center space-y-4">
        <h1 className="h1">{t('hero.title')}</h1>
        <p className="lead">{t('hero.subtitle')}</p>
        <div>
          <Link href="/ko/product/addgel" className="underline px-4 py-2">
            {t('hero.cta')}
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="card space-y-2">
          <h2 className="h2">{t('home.valuesTitle')}</h2>
          <p className="lead">{t('home.valuesDesc')}</p>
        </div>
        <div className="card space-y-2">
          <h2 className="h2">NEWS</h2>
          <ul className="list-disc pl-6">
            <li><Link href="/ko/news">2025… 뉴스 샘플 1</Link></li>
            <li><Link href="/ko/news">2025… 뉴스 샘플 2</Link></li>
          </ul>
        </div>
      </section>
    </div>
  );
}
