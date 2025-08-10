import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TvaCalc from '../../components/TvaCalc'
import BrutNet from '../../components/BrutNet'
import NewsList from '../../components/NewsList'
import StickyCTA from '../../components/StickyCTA'
import Testimonials from '../../components/Testimonials'
import Cases from '../../components/Cases'

export const runtime = 'nodejs'

export default function Page() {
  return (
    <>
      <Header locale="fr" />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white" />
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl/tight sm:text-5xl/tight font-extrabold">
                Cabinet comptable & fiscal pour indépendants et PME en Belgique
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Tenue comptable, déclarations, conseil et accompagnement de la création à la croissance. Basé à Nivelles, actif partout en Belgique.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="https://calendly.com/ton-lien" className="rounded-2xl bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90">Prendre rendez‑vous</a>
                <a href="#services" className="rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-gray-50">Voir les services</a>
              </div>
              <div className="mt-3 flex gap-3">
                <a href="tel:+32xxxxxxxxx" className="rounded-2xl border px-5 py-3 text-sm">Appeler</a>
                <a href="https://wa.me/32xxxxxxxxx" className="rounded-2xl border px-5 py-3 text-sm">WhatsApp</a>
              </div>
              <div className="mt-6 text-xs text-gray-500">Membre ITAA • SRL fondée en 2018 • Dirigé par David Pluquet</div>
            </div>
            <div className="relative rounded-3xl border p-2 shadow-sm">
              <Image src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop" alt="Cabinet comptable" className="rounded-2xl" width={1200} height={800} priority />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 border-t">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-bold">Nos services</h2>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ['Comptabilité générale','Encodage, réconciliations, bilans et comptes annuels (NBB/CBSO).'],
                ['Fiscalité','TVA, IPP/ISOC, précomptes, optimisation conforme.'],
                ['Conseil & gestion','Tableaux de bord, cash‑flow, plan financier.'],
                ['Création d\'entreprise','Choix SRL, guichet, affiliations sociales.'],
                ['Digital & e‑facturation','Peppol, ClearFacts, BilltoBox, CodaBox.'],
                ['Accompagnement indép. & PME','Suivi adapté à votre stade et secteur.'],
              ].map(([t, d]) => (
                <div key={t as string} className="rounded-2xl border p-5 bg-white">
                  <div className="h-10 w-10 rounded-xl bg-gray-900 mb-4" />
                  <h3 className="font-semibold">{t}</h3>
                  <p className="mt-2 text-sm text-gray-600">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secteurs (style BDO) */}
        <section id="sectors" className="py-16 border-t bg-gray-50/50">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-bold">Expertise par secteur</h2>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ['IT & consultants','Acomptes, frais, optimum social.'],
                ['Construction','TVA 6%/21%, attestation, marges.'],
                ['E‑commerce','Flux plateformes, TVA OSS/IOSS.'],
                ['Horeca','Taux, tickets, pourboires.'],
                ['Services B2B','Facturation récurrente, cash-flow.'],
                ['Startups','Plan financier, SRL, subventions.'],
              ].map(([t, d]) => (
                <div key={t as string} className="rounded-2xl border p-5 bg-white">
                  <h3 className="font-semibold">{t}</h3>
                  <p className="mt-2 text-sm text-gray-600">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarifs + calculs */}
        <section id="pricing" className="py-16 border-t">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-bold">Tarifs</h2>
            <p className="mt-3 text-sm text-gray-600 max-w-3xl">
              Forfait dès 350 € — ajustable selon la demande. Devis unique ou régie pour dossiers complexes (avocat, notaire, etc.).
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                ['Indépendant','à partir de 350 €/mois',['Comptabilité simplifiée','TVA trimestrielle','Déclarations IPP','Support email']],
                ['PME','sur devis',['Comptabilité complète','TVA mensuelle','Tableau de bord trimestriel','RDV conseil inclus']],
                ['Régie','taux horaire',['Cas multi‑corps de métier','Coordination (avocat, notaire, etc.)','Pilotage fiscal','Livrables au fur et à mesure']],
              ].map(([name, price, items]) => (
                <div key={name as string} className="rounded-2xl border bg-white p-6">
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <div className="mt-2 text-3xl font-extrabold">{price}</div>
                  <ul className="mt-4 text-sm text-gray-700 space-y-2 list-disc pl-5">
                    {(items as string[]).map(it => <li key={it}>{it}</li>)}
                  </ul>
                  <a href="#contact" className="mt-6 inline-block rounded-2xl bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90">
                    Choisir {name}
                  </a>
                </div>
              ))}
            </div>
            <TvaCalc />
            <BrutNet />
          </div>
        </section>

        <Testimonials />
        <Cases />

        {/* Ressources (placeholder liens pages) */}
        <section id="resources" className="py-16 border-t bg-gray-50/50">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-bold">Ressources</h2>
            <ul className="mt-6 list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li><a className="underline" href="/fr/ressources/e-facturation-2026">E‑facturation obligatoire dès 2026</a></li>
              <li><a className="underline" href="/fr/ressources/barometre">Baromètre Davolifin</a></li>
              <li><a className="underline" href="/fr/ressources/alerts">News & Alerts fiscales</a></li>
            </ul>
          </div>
        </section>

        {/* Actus RSS auto */}
        <NewsList locale="fr" />

        {/* Contact */}
        <section id="contact" className="py-16 border-t">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold">Contact</h2>
            <form className="mt-6 grid gap-4" action="/api/contact" method="POST">
              <input className="rounded-xl border px-4 py-3" name="name" placeholder="Votre nom" required />
              <input className="rounded-xl border px-4 py-3" name="email" placeholder="Email" type="email" required />
              <input className="rounded-xl border px-4 py-3" name="company" placeholder="Société (optionnel)" />
              <textarea className="rounded-xl border px-4 py-3 min-h-[120px]" name="message" placeholder="Votre besoin" required />
              <button className="rounded-2xl bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90" type="submit">Envoyer</button>
            </form>
            <p className="mt-3 text-xs text-gray-500">Adresse: Faubourg de Bruxelles 11C/304, 1400 Nivelles • TVA: BE0690.882.401</p>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
