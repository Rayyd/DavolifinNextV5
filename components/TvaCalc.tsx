'use client'
import { useState } from 'react'
export default function TvaCalc() {
  const [htva, setHtva] = useState('')
  const [rate, setRate] = useState(21)
  const n = parseFloat(htva || '0')
  const vat = isNaN(n) ? 0 : n * (rate/100)
  const tvac = isNaN(n) ? 0 : n + vat
  return (
    <div className="rounded-2xl border p-5 mt-10">
      <h3 className="font-semibold">Calculateur TVA</h3>
      <div className="mt-3 flex gap-3 items-center">
        <input className="rounded-xl border px-3 py-2 w-40" placeholder="Montant HTVA" value={htva} onChange={e=>setHtva(e.target.value)} />
        <select className="rounded-xl border px-3 py-2" value={rate} onChange={e=>setRate(parseInt(e.target.value))}>
          <option value={6}>6%</option>
          <option value={12}>12%</option>
          <option value={21}>21%</option>
        </select>
      </div>
      <div className="mt-3 text-sm text-gray-700">TVA: {vat.toFixed(2)} € — TVAC: <b>{tvac.toFixed(2)} €</b></div>
    </div>
  )
}
