import { Facebook, Instagram, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
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
            <span className="flex items-center gap-1"><Phone className="h-4 w-4" /> 0720.123.123</span>
            <span className="hidden sm:flex items-center gap-1"><MapPin className="h-4 w-4" /> Una, Bahia, Brazil</span>
          </div>
        </div>
      </div>

      {/* Header / Navigation */}
      <header className="w-full bg-white sticky top-0 z-40 border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="#" className="text-xl font-semibold text-blue-700">BlueCare Vet Clinic</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-blue-700">Home</a>
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#prices" className="hover:text-blue-700">Prices</a>
            <a href="#testimonials" className="hover:text-blue-700">Testimonials</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </nav>
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
                Caring for Your Family&apos;s Pets with Love and Expertise.
              </h1>
              <p className="mt-4 text-white/90 text-base md:text-lg">
                Professional veterinary care for every member of your furry family.
              </p>
            </div>
            <Card className="bg-white/95 backdrop-blur text-slate-900">
              <CardHeader>
                <CardTitle>Book an Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid gap-3" action="/api/contact" method="post">
                  <Input name="name" placeholder="Name" required aria-label="Name" />
                  <Input name="phone" placeholder="Phone" required aria-label="Phone" />
                  <Input name="email" type="email" placeholder="Email" required aria-label="Email" />
                  <Textarea name="message" placeholder="Message" rows={4} aria-label="Message" />
                  <Button type="submit" className="bg-blue-700 hover:bg-blue-800">Send</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Our Services</h2>
          <p className="text-slate-600 mt-1">High-quality care with transparent pricing.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "/images/service-consult.jpg", title: "Consultations", desc: "Comprehensive health assessments.", price: "R$150" },
              { img: "/images/service-vaccine-new.jpg", title: "Vaccinations", desc: "Core and optional vaccines.", price: "from R$100" },
              { img: "/images/service-checkup.jpg", title: "Check-up", desc: "Routine wellness exams.", price: "R$120" },
              { img: "/images/service-groom.jpg", title: "Grooming", desc: "Bathing, trimming, and more.", price: "R$120" },
              { img: "/images/service-vaccine.jpg", title: "Surgery", desc: "Safe procedures with care.", price: "Ask us" },
              { img: "/images/service-dental-new.jpg", title: "Dental Care", desc: "Cleanings and oral health.", price: "Ask us" },
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
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Prices</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {["Consultation – R$150","Vaccination – from R$100","Check-up – R$120"].map((line) => (
                <div key={line} className="flex items-center justify-between rounded-md border p-4 bg-white">
                  <span className="text-slate-700">{line.split(" – ")[0]}</span>
                  <span className="font-semibold text-slate-900">{line.split(" – ")[1]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">What our clients say</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "/reviews/rev1.jpg", name: "Ana", text: "Wonderful care and attention!" },
              { img: "/reviews/rev2.jpg", name: "Marcos", text: "They treated Luna like family." },
              { img: "/reviews/rev3.jpg", name: "Beatriz", text: "Professional and kind team." },
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
        <section className="bg-white" aria-label="Map of Una, Bahia, Brazil">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Find us</h2>
            <div className="mt-6 aspect-video w-full overflow-hidden rounded-md border">
              <iframe
                title="Google Map - Una, Bahia, Brazil"
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
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Contact</h2>
          <p className="text-slate-600 mt-1">We’re here to help. Send us a message.</p>
          <div className="mt-6 max-w-xl">
            <Card>
              <CardContent className="p-6">
                <form className="grid gap-3" action="/api/contact" method="post">
                  <Input name="name" placeholder="Name" required aria-label="Name" />
                  <Input name="phone" placeholder="Phone" required aria-label="Phone" />
                  <Input name="email" type="email" placeholder="Email" required aria-label="Email" />
                  <Textarea name="message" placeholder="Message" rows={4} aria-label="Message" />
                  <Button type="submit" className="bg-blue-700 hover:bg-blue-800">Send</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <span>📞 Call to make an appointment – 0720.123.123</span>
          <Button asChild className="bg-white text-blue-700 hover:bg-white/90">
            <a href="tel:0720123123">Call Now</a>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-6">
          <div>
            <p className="text-lg font-semibold text-white">BlueCare Vet Clinic</p>
            <p className="text-sm mt-2">Una, Bahia, Brazil</p>
            <p className="text-sm">Phone: 0720.123.123</p>
          </div>
          <div>
            <p className="font-semibold text-white">Navigation</p>
            <nav className="mt-2 flex flex-col gap-1 text-sm">
              <a href="#home" className="hover:text-white">Home</a>
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#prices" className="hover:text-white">Prices</a>
              <a href="#testimonials" className="hover:text-white">Testimonials</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
          </div>
          <div>
            <p className="font-semibold text-white">Follow us</p>
            <div className="mt-2 flex items-center gap-3">
              <Link href="#" aria-label="Facebook" className="hover:opacity-90"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" aria-label="Instagram" className="hover:opacity-90"><Instagram className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-400">© {new Date().getFullYear()} BlueCare Vet Clinic. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
