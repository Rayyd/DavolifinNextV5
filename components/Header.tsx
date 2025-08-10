'use client'
import Header from '@/components/Header'

export default function Header({ locale }: { locale: 'fr'|'nl'|'en' }){
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4">
        <Link href={`/${locale}`} className="flex items-center gap-2 font-semibold">
          <Logo />
          <span>Davolifin</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-gray-600">Services</a>
          <a href="#sectors" className="hover:text-gray-600">Secteurs</a>
          <a href="#resources" className="hover:text-gray-600">Ressources</a>
          <a href="#pricing" className="hover:text-gray-600">Tarifs</a>
          <a href="#faq" className="hover:text-gray-600">FAQ</a>
          <a href="#contact" className="hover:text-gray-600">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitcher locale={locale} />
          <a href="https://calendly.com/ton-lien" className="hidden sm:inline rounded-2xl border px-4 py-2 text-sm hover:bg-gray-50">Prendre rendez‑vous</a>
        </div>
      </div>
    </header>
  )
}
