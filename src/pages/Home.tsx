import Header from '../sections/Header'
import Hero from '../sections/Hero'
import Works from '../sections/Works'
import Studio from '../sections/Studio'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <Header />
      <main>
        <Hero />
        <Works />
        <Studio />
      </main>
      <Contact />
    </div>
  )
}
