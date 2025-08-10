import Footer from '@/components/Footer'

export default function Footer(){
  return (
    <footer className="border-t py-10">
      <div className="mx-auto max-w-7xl px-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} Davolifin. Tous droits réservés.</span>
        <div className="flex items-center gap-4">
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}
