'use client';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function LangSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const other = locale === 'ko' ? 'en' : 'ko';
  const href = `/${other}${pathname?.slice(3) || ''}` || `/${other}`;
  return (
    <Link href={href} className="px-3 py-1 rounded-xl border">
      {other.toUpperCase()}
    </Link>
  );
}
