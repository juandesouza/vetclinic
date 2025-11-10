import { isValidLocale, defaultLocale } from "@/i18n";
import { LocaleScript } from "@/components/LocaleScript";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;
  const locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  
  return (
    <>
      <LocaleScript locale={locale} />
      {children}
    </>
  );
}
