'use client'
import { useState } from 'react'
export default function BrutNet() {
  const [revenue, setRevenue] = useState('')
  const [chargesPct, setChargesPct] = useState(30)
  const [socialPct, setSocialPct] = useState(20.5)
  const [taxPct, setTaxPct] = useState(20)
  const n = parseFloat(revenue || '0')
  const charges = isNaN(n) ? 0 : n * (chargesPct/100)
  const base = isNaN(n) ? 0 : n - charges
  const social = base * (socialPct/100)
  const taxable = base - social
  const tax = taxable * (taxPct/100)
  const net = n - charges - social - tax
  return (
    <div className="rounded-2xl border p-5 mt-10">
      <h3 className="font-semibold">Brut → Net indépendant (approx.)</h3>
      <p className="mt-1 text-xs text-gray-500">Estimation simplifiée — à valider au cas par cas.</p>
      <div className="mt-3 grid sm:grid-cols-2 gap-3">
        <div className="flex items-center gap-2"><label className="w-40 text-sm">CA HTVA (€)</label><input className="rounded-xl border px-3 py-2 w-full" value={revenue} onChange={e=>setRevenue(e.target.value)} /></div>
        <div className="flex items-center gap-2"><label className="w-40 text-sm">Charges (%)</label><input className="rounded-xl border px-3 py-2 w-full" type="number" value={chargesPct} onChange={e=>setChargesPct(parseFloat(e.target.value))} /></div>
        <div className="flex items-center gap-2"><label className="w-40 text-sm">Cotisations sociales (%)</label><input className="rounded-xl border px-3 py-2 w-full" type="number" value={socialPct} onChange={e=>setSocialPct(parseFloat(e.target.value))} /></div>
        <div className="flex items-center gap-2"><label className="w-40 text-sm">Impôts estimés (%)</label><input className="rounded-xl border px-3 py-2 w-full" type="number" value={taxPct} onChange={e=>setTaxPct(parseFloat(e.target.value))} /></div>
      </div>
      <div className="mt-4 text-sm text-gray-700 space-y-1">
        <div>Charges: {charges.toFixed(2)} €</div>
        <div>Base après charges: {base.toFixed(2)} €</div>
        <div>Cotisations sociales: {social.toFixed(2)} €</div>
        <div>Base imposable (approx.): {taxable.toFixed(2)} €</div>
        <div>Impôts (approx.): {tax.toFixed(2)} €</div>
        <div className="font-semibold">Net estimé: {net.toFixed(2)} €</div>
      </div>
    </div>
  )
}
