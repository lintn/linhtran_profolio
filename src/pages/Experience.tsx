import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HeaderNav } from '../components/HeaderNav'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'

type ExperienceItem = {
  year: string
  role: string
  company: string
  type?: string
  description: string
  current?: boolean
}

const items: ExperienceItem[] = [
  {
    year: '2018 — Present',
    role: 'Frontend Developer',
    company: 'FPT Software',
    type: 'Full-time',
    current: true,
    description:
      'Working as a frontend developer building scalable web applications using React and modern tooling. Focused on performance optimization, reusable component systems, and delivering high-quality user experiences across projects.',
  },
  {
    year: '2024 — Present',
    role: 'Freelance Frontend Developer',
    company: 'Independent',
    type: 'Freelance',
    description:
      'Collaborating with clients on various web projects, delivering responsive and performant user interfaces. Handling end-to-end frontend development from UI implementation to optimization and deployment.',
  },
  {
    year: 'Graduated 2018',
    role: 'Bachelor of Engineering',
    company: 'FPT University',
    description:
      'Completed studies in Software Engineering, building a strong foundation in software development and problem solving.',
  },
]

function TimelineItem({
  item,
  index,
  inView,
}: {
  item: ExperienceItem
  index: number
  inView: boolean
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.15,
      }}
      className="relative pl-10 md:pl-12"
    >
      {/* dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : undefined}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
          delay: index * 0.15 + 0.05,
        }}
        className={[
          'absolute left-[13px] top-7 h-3 w-3 -translate-x-1/2 rounded-full',
          item.current ? 'bg-primary' : 'bg-white/25',
          'shadow-[0_0_18px_rgba(222,219,200,0.18)]',
        ].join(' ')}
      />

      <motion.div
        animate={
          item.current && inView
            ? { scale: [1, 1.05, 1] }
            : { scale: 1 }
        }
        transition={
          item.current
            ? { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.2 }
        }
        className={[
          'rounded-2xl border bg-[#101010] p-5 md:p-6',
          item.current
            ? 'border-white/20 shadow-[0_0_40px_rgba(222,219,200,0.12)]'
            : 'border-white/10',
        ].join(' ')}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm text-gray-500">{item.year}</div>
          {item.current ? (
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] text-primary/70">
              Current
            </span>
          ) : null}
        </div>

        <div className="mt-3">
          <div className="text-lg font-medium text-primary">{item.role}</div>
          <div className="mt-1 text-sm text-gray-400">
            <span>{item.company}</span>
            {item.type ? <span className="text-gray-500"> • {item.type}</span> : null}
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-gray-400">
          {item.description}
        </p>
      </motion.div>
    </motion.article>
  )
}

export function Experience() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <main className="relative min-h-screen bg-black px-4 pb-20 pt-28 md:px-6 md:pb-28">
      <HeaderNav className="fixed left-1/2 top-0 z-50 -translate-x-1/2" />

      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="text-2xl font-normal text-[#E1E0CC] sm:text-3xl md:text-4xl lg:text-5xl">
            <WordsPullUpMultiStyle
              className="justify-center"
              segments={[{ text: 'Experience', className: '' }]}
            />
          </div>
          <div className="mt-2 text-2xl font-normal text-gray-500 sm:text-3xl md:text-4xl lg:text-5xl">
            <WordsPullUpMultiStyle
              className="justify-center"
              segments={[{ text: 'Building and scaling real-world products.', className: '' }]}
            />
          </div>
        </div>

        <section
          ref={ref}
          className="relative mx-auto mt-12 max-w-4xl rounded-2xl bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] p-6 md:rounded-3xl md:p-8"
        >
          {/* timeline line */}
          <div className="pointer-events-none absolute left-6 top-8 bottom-8 w-px md:left-8">
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={inView ? { scaleY: 1, opacity: 1 } : undefined}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full w-px origin-top bg-white/10"
            />
          </div>

          <div className="space-y-6 md:space-y-8">
            {items.map((item, idx) => (
              <TimelineItem key={`${item.year}-${item.role}`} item={item} index={idx} inView={inView} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

