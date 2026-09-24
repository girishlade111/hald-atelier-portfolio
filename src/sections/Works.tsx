import { Link } from 'react-router'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

export default function Works() {
  return (
    <section id="work" className="mx-auto max-w-[1600px] scroll-mt-24 px-5 py-28 sm:px-6 sm:py-32 md:px-12 md:py-56">
      <Reveal className="mb-14 flex items-baseline justify-between md:mb-20">
        <h2 className="text-[12px] uppercase tracking-[0.3em] text-[#6f6c64]">Selected Work</h2>
        <span className="text-[12px] uppercase tracking-[0.3em] text-[#6f6c64]">
          ({String(projects.length).padStart(2, '0')})
        </span>
      </Reveal>

      <ul className="divide-y divide-[#141414]/10 border-y border-[#141414]/10">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.slug} delay={i * 60}>
            <Link
              to={`/work/${project.slug}`}
              className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 py-7 transition-colors duration-500 hover:bg-[#141414]/[0.025] md:gap-x-8 md:py-9 lg:grid-cols-[3rem_1fr_1fr_1fr_auto]"
            >
              <span className="text-[11px] tabular-nums tracking-[0.2em] text-[#6f6c64] md:text-[12px]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-xl font-light tracking-[-0.02em] text-[#141414] transition-transform duration-500 ease-out group-hover:translate-x-3 sm:text-2xl md:text-3xl lg:text-4xl">
                  {project.name}
                </span>
                <span className="mt-1 block text-[12px] tracking-[0.08em] text-[#6f6c64] lg:hidden">
                  {project.type} — {project.location}
                </span>
              </span>
              <span className="hidden text-[13px] tracking-[0.08em] text-[#6f6c64] lg:block">
                {project.type}
              </span>
              <span className="hidden text-[13px] tracking-[0.08em] text-[#6f6c64] lg:block">
                {project.location}
              </span>
              <span className="text-[13px] tabular-nums tracking-[0.08em] text-[#6f6c64]">
                {project.year}
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
