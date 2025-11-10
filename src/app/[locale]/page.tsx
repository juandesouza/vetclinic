import { Facebook, Instagram, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getMessages, isValidLocale, defaultLocale } from "@/i18n";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const t = getMessages(locale);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="w-full bg-blue-700 text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Facebook" className="hover:opacity-90">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:opacity-90">
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="h-4 w-4" /> {t.phone}</span>
            <span className="hidden sm:flex items-center gap-1"><MapPin className="h-4 w-4" /> {t.location}</span>
          </div>
        </div>
      </div>

      {/* Header / Navigation */}
      <header className="w-full bg-white sticky top-0 z-40 border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href={`/${locale}`} className="text-xl font-semibold text-blue-700">BlueCare Vet Clinic</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-blue-700">{t.nav.home}</a>
            <a href="#services" className="hover:text-blue-700">{t.nav.services}</a>
            <a href="#prices" className="hover:text-blue-700">{t.nav.prices}</a>
            <a href="#testimonials" className="hover:text-blue-700">{t.nav.testimonials}</a>
            <a href="#contact" className="hover:text-blue-700">{t.nav.contact}</a>
          </nav>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </header>

      <main id="home" className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 -z-10">
            <Image src="/images/hero-animals-fun.jpg" alt="Animals having fun" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 via-green-500/80 to-blue-600/80" />
          </div>
          <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28 md:py-32 text-white grid md:grid-cols-2 gap-10">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {t.hero.title}
              </h1>
              <p className="mt-4 text-white/90 text-base md:text-lg">
                {t.hero.subtitle}
              </p>
            </div>
            <Card className="bg-white/95 backdrop-blur text-slate-900">
              <CardHeader>
                <CardTitle>{t.hero.bookAppointment}</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid gap-3" action="/api/contact" method="post">
                  <Input name="name" placeholder={t.hero.form.name} required aria-label={t.hero.form.name} />
                  <Input name="phone" placeholder={t.hero.form.phone} required aria-label={t.hero.form.phone} />
                  <Input name="email" type="email" placeholder={t.hero.form.email} required aria-label={t.hero.form.email} />
                  <Textarea name="message" placeholder={t.hero.form.message} rows={4} aria-label={t.hero.form.message} />
                  <Button type="submit" className="bg-blue-700 hover:bg-blue-800">{t.hero.form.send}</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">{t.services.title}</h2>
          <p className="text-slate-600 mt-1">{t.services.subtitle}</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "/images/service-consult.jpg", ...t.services.consult },
              { img: "/images/service-vaccine-new.jpg", ...t.services.vaccine },
              { img: "/images/service-checkup.jpg", ...t.services.checkup },
              { img: "/images/service-groom.jpg", ...t.services.groom },
              { img: "/images/service-vaccine.jpg", ...t.services.surgery },
              { img: "/images/service-dental-new.jpg", ...t.services.dental },
            ].map((s) => (
              <Card key={s.title} className="overflow-hidden">
                <div className="relative h-40">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-900">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  <p>{s.desc}</p>
                  <p className="mt-2 font-medium text-slate-900">{s.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Prices Section */}
        <section id="prices" className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">{t.prices.title}</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { label: t.prices.consultation, price: "R$150" },
                { label: t.prices.vaccination, price: locale === 'en' ? "from R$100" : locale === 'es' ? "desde R$100" : "a partir de R$100" },
                { label: t.prices.checkup, price: "R$120" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-md border p-4 bg-white">
                  <span className="text-slate-700">{item.label}</span>
                  <span className="font-semibold text-slate-900">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">{t.testimonials.title}</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "/reviews/rev1.jpg", name: "Ana", text: t.testimonials.ana },
              { img: "/reviews/rev2.jpg", name: "Marcos", text: t.testimonials.marcos },
              { img: "/reviews/rev3.jpg", name: "Beatriz", text: t.testimonials.beatriz },
            ].map((r) => (
              <Card key={r.name}>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image src={r.img} alt={`Photo of ${r.name}`} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{r.name}</p>
                    <p className="text-slate-600 text-sm">{r.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-white" aria-label={t.map.ariaLabel}>
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">{t.map.title}</h2>
            <div className="mt-6 aspect-video w-full overflow-hidden rounded-md border">
              <iframe
                title={`Google Map - ${t.location}`}
                src="https://www.google.com/maps?q=Una%2C%20Bahia%2C%20Brazil&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">{t.contact.title}</h2>
          <p className="text-slate-600 mt-1">{t.contact.subtitle}</p>
          <div className="mt-6 max-w-xl">
            <Card>
              <CardContent className="p-6">
                <form className="grid gap-3" action="/api/contact" method="post">
                  <Input name="name" placeholder={t.hero.form.name} required aria-label={t.hero.form.name} />
                  <Input name="phone" placeholder={t.hero.form.phone} required aria-label={t.hero.form.phone} />
                  <Input name="email" type="email" placeholder={t.hero.form.email} required aria-label={t.hero.form.email} />
                  <Textarea name="message" placeholder={t.hero.form.message} rows={4} aria-label={t.hero.form.message} />
                  <Button type="submit" className="bg-blue-700 hover:bg-blue-800">{t.hero.form.send}</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <span>📞 {t.stickyBar.call} – {t.phone}</span>
          <Button asChild className="bg-white text-blue-700 hover:bg-white/90">
            <a href="tel:0720123123">{t.stickyBar.callNow}</a>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-6">
          <div>
            <p className="text-lg font-semibold text-white">{t.footer.clinic}</p>
            <p className="text-sm mt-2">{t.location}</p>
            <p className="text-sm">Phone: {t.phone}</p>
          </div>
          <div>
            <p className="font-semibold text-white">{t.footer.navigation}</p>
            <nav className="mt-2 flex flex-col gap-1 text-sm">
              <a href="#home" className="hover:text-white">{t.nav.home}</a>
              <a href="#services" className="hover:text-white">{t.nav.services}</a>
              <a href="#prices" className="hover:text-white">{t.nav.prices}</a>
              <a href="#testimonials" className="hover:text-white">{t.nav.testimonials}</a>
              <a href="#contact" className="hover:text-white">{t.nav.contact}</a>
            </nav>
          </div>
          <div>
            <p className="font-semibold text-white">{t.footer.followUs}</p>
            <div className="mt-2 flex items-center gap-3">
              <Link href="#" aria-label="Facebook" className="hover:opacity-90"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" aria-label="Instagram" className="hover:opacity-90"><Instagram className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-400">© {new Date().getFullYear()} {t.footer.clinic}. {t.footer.rights}</div>
        </div>
      </footer>
    </div>
  );
}
