import { type Locale, defaultLocale, locales } from './config';
import { en } from './messages/en';
import { es } from './messages/es';
import { pt } from './messages/pt';

const messages = {
  en,
  es,
  pt,
} as const;

export function getMessages(locale: Locale) {
  return messages[locale] || messages[defaultLocale];
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export { locales, defaultLocale, type Locale };

