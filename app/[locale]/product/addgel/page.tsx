import { getTranslations } from 'next-intl/server';

export default async function Addgel() {
  const t = await getTranslations();
  return (
    <div className="container py-12 space-y-8">
      <div className="card">
        <h1 className="h1">{t('product.title')}</h1>
        <p className="mt-2">Ready-to-use, room temperature. 제품 타입과 사양 정보를 여기에 구성하세요.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card"><h3 className="font-semibold mb-2">Syringe</h3><p>20/10/5 mL</p></div>
        <div className="card"><h3 className="font-semibold mb-2">Bottle</h3><p>20/10/5 mL</p></div>
        <div className="card"><h3 className="font-semibold mb-2">Lyophilized</h3><p>10/5 mL</p></div>
      </div>

      <div className="card space-y-2">
        <h2 className="h2">FAQ</h2>
        <details className="border rounded-lg p-4"><summary className="font-medium">샘플 신청</summary><p>하단 버튼을 통해 구글폼으로 연결됩니다.</p></details>
        <a className="underline" href="https://docs.google.com" target="_blank" rel="noreferrer">샘플 신청</a>
      </div>
    </div>
  );
}
