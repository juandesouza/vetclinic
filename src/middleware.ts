import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, isValidLocale } from './i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If there's no locale in the pathname, redirect to default locale
  if (!pathnameHasLocale) {
    // Get the locale from cookie or use default
    const cookieLocale = request.cookies.get('locale')?.value;
    const detectedLocale = isValidLocale(cookieLocale || '') ? cookieLocale : defaultLocale;
    
    // Redirect to locale-prefixed path
    const newUrl = new URL(`/${detectedLocale}${pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|.*\\..*|images|reviews).*)',
  ],
};

