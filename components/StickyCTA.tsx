export default function StickyCTA(){
  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 md:hidden flex gap-3">
      <a href="https://calendly.com/ton-lien" className="flex-1 rounded-2xl bg-gray-900 text-white px-4 py-3 text-center text-sm font-medium">📅 Rendez‑vous</a>
      <a href="tel:+32xxxxxxxxx" className="flex-1 rounded-2xl border bg-white px-4 py-3 text-center text-sm font-medium">📞 Appeler</a>
    </div>
  )
}
