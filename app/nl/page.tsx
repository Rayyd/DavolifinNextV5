import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NewsList from '../../components/NewsList'
export const runtime = 'nodejs'
export default function Page() {
  return (<>
    <Header locale="nl" />
    <main>
      <section className="py-16"><div className="mx-auto max-w-7xl px-6">
        <h1 className="text-3xl font-bold">Welkom bij Davolifin</h1>
        <p className="mt-2 text-gray-600">This page mirrors the FR structure with localized content.</p>
      </div></section>
      <NewsList locale="nl" />
    </main>
    <Footer />
  </>)
}
