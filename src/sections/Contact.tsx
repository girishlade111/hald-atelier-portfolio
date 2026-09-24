import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <footer id="contact" className="mx-auto max-w-[1600px] scroll-mt-24 px-5 pb-12 sm:px-6 md:px-12">
      <Reveal>
        <p className="mb-10 text-[12px] uppercase tracking-[0.3em] text-[#6f6c64] md:mb-14">
          Contact
        </p>
      </Reveal>
      <Reveal delay={100}>
        <a
          href="mailto:studio@haldatelier.dk"
          className="link-sweep inline-block max-w-full break-all text-[9vw] font-light leading-[1.05] tracking-[-0.03em] text-[#141414] md:text-[6vw]"
        >
          studio@haldatelier.dk
        </a>
      </Reveal>

      <Reveal delay={180}>
        <div className="mt-20 grid gap-10 text-[13px] leading-[1.9] text-[#6f6c64] sm:grid-cols-3 md:mt-32">
          <div>
            <p className="mb-3 text-[12px] uppercase tracking-[0.22em] text-[#141414]">Studio</p>
            <p>
              Strandgade 27B, 3rd
              <br />
              1401 Copenhagen K
              <br />
              Denmark
            </p>
          </div>
          <div>
            <p className="mb-3 text-[12px] uppercase tracking-[0.22em] text-[#141414]">Enquiries</p>
            <p>
              +45 33 12 40 90
              <br />
              studio@haldatelier.dk
            </p>
          </div>
          <div>
            <p className="mb-3 text-[12px] uppercase tracking-[0.22em] text-[#141414]">Elsewhere</p>
            <p>
              <a href="#top" className="link-sweep">Instagram</a>
              <br />
              <a href="#top" className="link-sweep">Are.na</a>
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-20 flex items-baseline justify-between gap-4 border-t border-[#141414]/10 pt-6 text-[10px] uppercase tracking-[0.14em] text-[#6f6c64] sm:text-[12px] sm:tracking-[0.22em] md:mt-28">
        <span>© 2026 Hald Atelier</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="link-sweep uppercase tracking-[0.22em]"
        >
          Back to top
        </button>
      </div>
    </footer>
  )
}
