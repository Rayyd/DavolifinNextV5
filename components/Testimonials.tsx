export default function Testimonials(){
  return (
    <section className="py-16 border-t bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold">Témoignages</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            ['A. Martin, Indépendant IT','“Suivi réactif et conseils pragmatiques.”'],
            ['L. Dupont, PME','“On comprend enfin nos chiffres, et on agit.”'],
            ['S. Vermeulen, Starter','“Création SRL sans stress, super accompagnement.”']
          ].map(([n, t],i)=>(
            <div key={i} className="rounded-2xl border p-5 bg-white">
              <div className="font-semibold">{n}</div>
              <p className="mt-2 text-sm text-gray-600">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
