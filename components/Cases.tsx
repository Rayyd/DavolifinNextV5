export default function Cases(){
  return (
    <section className="py-16 border-t">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold">Études de cas</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            ['Consultant IT → +15% net','Optimisation des charges & acomptes.'],
            ['E‑commerce → TVA maîtrisée','Automatisation e‑facturation & rapprochements.'],
            ['SRL en croissance','Tableau de bord mensuel & RDV conseil.']
          ].map(([t, d],i)=>(
            <div key={i} className="rounded-2xl border p-5 bg-white">
              <div className="font-semibold">{t}</div>
              <p className="mt-2 text-sm text-gray-600">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
