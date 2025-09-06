import { getTranslations } from 'next-intl/server';

export default async function FooterInner() {
  const t = await getTranslations();
  return (
    <footer className="border-t mt-12">
      <div className="container py-8 text-sm text-gray-500">
        <div>하드사이언스 · 대표전화 +82 031 8055 3780 · info@haddscience.com</div>
        <div className="mt-2">© 2025 HADD SCIENCE. {t('footer.copy')}</div>
      </div>
    </footer>
  );
}

export function Footer() { return <FooterInner />; }
