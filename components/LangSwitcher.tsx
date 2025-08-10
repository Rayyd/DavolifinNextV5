'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function LangSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname() || '/fr'
  const without = pathname.replace(/^\/(fr|nl|en)/, '')
  const href = (l: string) => `/${l}${without || ''}`
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-500">Langue</span>
      <div className="flex items-center gap-1 text-sm">
        <Link href={href('fr')} className={locale==='fr'?'font-semibold underline':''}>FR</Link>
        <span>·</span>
        <Link href={href('nl')} className={locale==='nl'?'font-semibold underline':''}>NL</Link>
        <span>·</span>
        <Link href={href('en')} className={locale==='en'?'font-semibold underline':''}>EN</Link>
      </div>
    </div>
  )
}
