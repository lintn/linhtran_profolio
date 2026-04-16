import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { HeaderNav } from '../components/HeaderNav'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'

type Project = {
  title: string
  subtitle: string
  description: string
  cta: { label: string; href: string }
  thumbnail: string
  chips: string[]
}

const projects: Project[] = [
  {
    title: 'Auction Platform',
    subtitle: 'Next.js • TypeScript • Tailwind',
    description:
      'A scalable auction system with real-time bidding, approval workflows, and admin dashboards. Focused on performance and clean architecture.',
    cta: { label: 'View Case Study', href: 'https://pionline.vn/' },
    thumbnail:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1600&q=85',
    chips: ['Real-time', 'Dashboards', 'Workflows'],
  },
  {
    title: 'Portfolio Builder App',
    subtitle: 'React • Vite • TypeScript',
    description:
      'A dynamic portfolio generator with drag-and-drop layout, multi-language support, and optimized rendering.',
    cta: { label: 'Live Demo', href: '#' },
    thumbnail:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1600&q=85',
    chips: ['Drag & drop', 'i18n', 'Perf'],
  },
  {
    title: 'E-commerce Frontend',
    subtitle: 'Next.js • SSR • Stripe',
    description:
      'High-performance storefront with optimized SEO, fast load times, and seamless checkout experience.',
    cta: { label: 'GitHub', href: '#' },
    thumbnail:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1600&q=85',
    chips: ['SSR', 'SEO', 'Checkout'],
  },
]

export function Projects() {
  const gridRef = useRef<HTMLDivElement | null>(null)
  const inView = useInView(gridRef, { once: true, margin: '-100px' })

  return (
    <main className="relative min-h-screen bg-black px-4 pb-16 pt-28 md:px-6 md:pb-24">
      <HeaderNav className="fixed left-1/2 top-0 z-50 -translate-x-1/2" />

      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="text-xl font-normal text-[#E1E0CC] sm:text-2xl md:text-3xl lg:text-4xl">
            <WordsPullUpMultiStyle
              className="justify-center"
              segments={[{ text: 'Selected Projects.', className: '' }]}
            />
          </div>
          <div className="mt-2 text-xl font-normal text-gray-500 sm:text-2xl md:text-3xl lg:text-4xl">
            <WordsPullUpMultiStyle
              className="justify-center"
              segments={[{ text: 'Real-world builds. Real impact.', className: '' }]}
            />
          </div>
        </div>

        <div
          ref={gridRef}
          className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-2 lg:grid-cols-3"
        >
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : undefined}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: idx * 0.12,
              }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-[#212121]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.thumbnail}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/55" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="text-lg font-normal text-[#E1E0CC]">{p.title}</div>
                <div className="mt-1 text-sm text-primary/70">{p.subtitle}</div>

                <p className="mt-4 text-sm leading-[1.35] text-gray-400">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-primary/70"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <a
                  href={p.cta.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm text-[#E1E0CC] transition-all group-hover:gap-3"
                >
                  <span className="text-primary/70">→</span>
                  <span className="text-primary/70">{p.cta.label}</span>
                  <ArrowRight className="h-4 w-4 -rotate-45 text-primary/70" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  )
}

