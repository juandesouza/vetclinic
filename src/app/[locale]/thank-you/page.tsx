import Link from "next/link";
import { getMessages, isValidLocale, defaultLocale } from "@/i18n";

export default async function ThankYou({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const t = getMessages(locale);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-semibold text-slate-900">{t.thankYou.title}</h1>
        <p className="text-slate-600 mt-2">
          {t.thankYou.message}
        </p>
        <Link href={`/${locale}`} className="text-blue-700 underline mt-4 inline-block">{t.thankYou.goBack}</Link>
      </div>
    </div>
  );
}

