import { isValidLocale, defaultLocale, type Locale } from "@/i18n";
import { LocaleScript } from "@/components/LocaleScript";

export default function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const locale = isValidLocale(params.locale) ? params.locale : defaultLocale;
  
  return (
    <>
      <LocaleScript locale={locale} />
      {children}
    </>
  );
}
