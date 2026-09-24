import Reveal from '../components/Reveal'

const facts = [
  { label: 'Founded', value: '2011, Copenhagen' },
  { label: 'Practice', value: 'Architecture, Interior, Landscape' },
  { label: 'Recognition', value: 'Mies van der Rohe Nominee, 2024' },
  { label: 'Team', value: 'Twelve architects, one dog' },
]

export default function Studio() {
  return (
    <section id="studio" className="mx-auto max-w-[1600px] scroll-mt-24 px-5 pb-28 sm:px-6 sm:pb-32 md:px-12 md:pb-56">
      <div className="grid gap-16 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-3">
          <h2 className="text-[12px] uppercase tracking-[0.3em] text-[#6f6c64]">Studio</h2>
        </Reveal>

        <div className="md:col-span-8 md:col-start-5">
          <Reveal>
            <p className="max-w-[26ch] text-3xl font-light leading-[1.25] tracking-[-0.02em] text-[#141414] md:text-5xl">
              We work with few materials and long perspectives — buildings that ask for nothing but
              attention.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-12 max-w-[52ch] text-[15px] leading-[1.9] text-[#6f6c64] md:mt-16">
              Hald Atelier is a small practice with a deliberate pace. Each project begins with the
              site — its light, its weather, its silence — and ends only when nothing more can be
              removed. We believe restraint is not the absence of ambition, but its clearest form.
            </p>
          </Reveal>

          <dl className="mt-20 divide-y divide-[#141414]/10 border-y border-[#141414]/10 md:mt-28">
            {facts.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 60}>
                <div className="grid grid-cols-1 gap-1 py-6 sm:grid-cols-2 sm:gap-4 md:grid-cols-[1fr_2fr]">
                  <dt className="text-[12px] uppercase tracking-[0.22em] text-[#6f6c64]">
                    {fact.label}
                  </dt>
                  <dd className="text-[15px] font-light text-[#141414]">{fact.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
