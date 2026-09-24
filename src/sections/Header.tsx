import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

const links = [
  { label: 'Work', hash: 'work' },
  { label: 'Studio', hash: 'studio' },
  { label: 'Contact', hash: 'contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (hash: string) => {
    const scroll = () =>
      hash === 'top'
        ? window.scrollTo({ top: 0, behavior: 'smooth' })
        : document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })

    if (pathname !== '/') {
      navigate('/')
      window.setTimeout(scroll, 150)
    } else {
      scroll()
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-[#f7f5f0]/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-baseline justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6 md:px-12 md:py-8">
        <button
          onClick={() => goTo('top')}
          className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.14em] text-[#141414] sm:text-[12px] sm:tracking-[0.18em] md:text-[13px] md:tracking-[0.22em]"
        >
          Hald&nbsp;Atelier
        </button>
        <nav className="flex items-baseline gap-4 sm:gap-6 md:gap-10">
          {links.map((link) => (
            <button
              key={link.hash}
              onClick={() => goTo(link.hash)}
              className="link-sweep whitespace-nowrap text-[11px] uppercase tracking-[0.14em] text-[#6f6c64] transition-colors duration-300 hover:text-[#141414] sm:text-[12px] sm:tracking-[0.18em] md:text-[13px] md:tracking-[0.22em]"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
