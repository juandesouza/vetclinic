import Link from "next/link";
import { getMessages, isValidLocale, defaultLocale, type Locale } from "@/i18n";

export default function ThankYou({ params }: { params: { locale: string } }) {
  const locale = isValidLocale(params.locale) ? params.locale : defaultLocale;
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

