import Reveal from '../components/Reveal'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1600px] px-5 pt-32 sm:px-6 sm:pt-36 md:px-12 md:pt-48">
      {/* Statement */}
      <div className="mb-16 md:mb-28">
        <Reveal>
          <p className="mb-8 text-[12px] uppercase tracking-[0.3em] text-[#6f6c64] md:mb-12">
            Architecture &amp; Interior — Copenhagen
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="max-w-[14ch] text-[13vw] font-light leading-[1.02] tracking-[-0.03em] text-[#141414] md:text-[7.5vw] lg:text-[6.2vw]">
            Buildings shaped by light and silence.
          </h1>
        </Reveal>
      </div>

      {/* The single hero image */}
      <Reveal delay={200}>
        <figure>
          <div className="overflow-hidden">
            <img
              src="/hero.jpg"
              alt="Horizon House — a white cantilevered villa above a still pool in Mallorca"
              className="hero-image block aspect-[4/3] w-full object-cover sm:aspect-[2048/1042]"
            />
          </div>
          <figcaption className="mt-5 flex items-baseline justify-between text-[12px] uppercase tracking-[0.22em] text-[#6f6c64]">
            <span>Horizon House — Mallorca, Spain</span>
            <span className="hidden sm:inline">Completed 2025</span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  )
}
