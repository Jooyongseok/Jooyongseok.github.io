'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { LangSwitch } from './LangSwitch';

export function Navbar() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations();
  const base = `/${locale}`;

  const nav = [
    { href: `${base}/about`, label: t('nav.about') },
    { href: `${base}/product/addgel`, label: t('nav.product') },
    { href: `${base}/news`, label: t('nav.news') },
    { href: `${base}/contact`, label: t('nav.contact') },
  ];

  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4 gap-3">
        <Link href={base} className="font-semibold">haddscience</Link>
        <nav className="flex items-center gap-6">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}
              className={pathname===n.href ? 'underline' : ''}>{n.label}</Link>
          ))}
          <LangSwitch />
        </nav>
      </div>
    </header>
  );
}
