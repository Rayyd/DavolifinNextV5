import './globals.css'
export const metadata = {
  title: 'Davolifin — Cabinet comptable & fiscal (Nivelles, Belgique)',
  description: 'Comptabilité, fiscalité et conseil pour indépendants & PME. Forfait dès 350 €, FR/NL/EN. Davolifin — Nivelles, Belgique.',
}
export default function RootLayout({ children }: { children: React.ReactNode }){
  return (<html lang="fr"><body>{children}</body></html>)
}
