import { motion, useInView } from 'framer-motion'
import { BarChart, Code, Code2, PenTool, RefreshCw } from 'lucide-react'
import { useRef } from 'react'
import { HeaderNav } from '../components/HeaderNav'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'

type Category = {
  title: string
  items: string[]
}

const categories: Category[] = [
  { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  {
    title: 'State & Data',
    items: ['Redux Toolkit', 'Zustand', 'React Query', 'REST APIs'],
  },
  {
    title: 'Performance',
    items: ['Code Splitting', 'Lazy Loading', 'Memoization', 'Core Web Vitals'],
  },
  { title: 'Tools', items: ['Git', 'Vite', 'Webpack', 'Figma'] },
]

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`

const skillIconSrc: Record<string, string> = {
  React: devicon('react/react-original.svg'),
  'Next.js': devicon('nextjs/nextjs-original.svg'),
  TypeScript: devicon('typescript/typescript-original.svg'),
  'Tailwind CSS': devicon('tailwindcss/tailwindcss-original.svg'),
  'Redux Toolkit': devicon('redux/redux-original.svg'),
  Zustand: devicon('react/react-original.svg'),
  'React Query': devicon('react/react-original.svg'),
  'REST APIs': devicon('nodejs/nodejs-original.svg'),
  Git: devicon('git/git-original.svg'),
  Vite: devicon('vitejs/vitejs-original.svg'),
  Webpack: devicon('webpack/webpack-original.svg'),
  Figma: devicon('figma/figma-original.svg'),
  'Code Splitting': devicon('javascript/javascript-original.svg'),
  'Lazy Loading': devicon('javascript/javascript-original.svg'),
  Memoization: devicon('javascript/javascript-original.svg'),
  'Core Web Vitals': devicon('google/google-original.svg'),
}

type StepKey = 'design' | 'build' | 'optimize' | 'iterate'

type Step = {
  key: StepKey
  label: string
  Icon: typeof PenTool
}

const steps: Step[] = [
  { key: 'design', label: 'Design', Icon: PenTool },
  { key: 'build', label: 'Build', Icon: Code },
  { key: 'optimize', label: 'Optimize', Icon: BarChart },
  { key: 'iterate', label: 'Iterate', Icon: RefreshCw },
]

function StepChip({
  step,
  index,
  active,
  inView,
}: {
  step: Step
  index: number
  active: boolean
  inView: boolean
}) {
  const { Icon } = step

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      whileHover={{ scale: 1.05, y: -2, opacity: 1 }}
      className={[
        'relative z-10 grid w-[92px] place-items-center gap-2 rounded-2xl px-3 py-3 text-center transition-colors sm:w-[112px] sm:px-4 sm:py-4',
        active
          ? 'bg-primary text-black shadow-[0_0_0_1px_rgba(222,219,200,0.2),0_12px_50px_rgba(222,219,200,0.18)]'
          : 'border border-white/10 bg-transparent text-gray-400',
      ].join(' ')}
    >
      <motion.div
        initial={false}
        animate={active && inView ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="grid place-items-center"
      >
        <Icon className="h-[18px] w-[18px]" />
      </motion.div>
      <div className="text-[11px] sm:text-xs">{step.label}</div>
    </motion.div>
  )
}

function WorkflowSection() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const activeKey: StepKey = 'build'

  return (
    <section
      ref={ref}
      className="mt-10 rounded-2xl bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] p-6 md:rounded-3xl md:p-8"
    >
      <div className="text-lg font-normal text-[#E1E0CC] text-center">Workflow</div>

      <div className="relative mt-6 flex items-center justify-center gap-3 sm:gap-4">
        {steps.map((step, i) => (
          <StepChip
            key={step.key}
            step={step}
            index={i}
            active={step.key === activeKey}
            inView={inView}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.55,
        }}
        className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-500 sm:text-sm"
      >
        {['Accessibility-first', 'Type-safe', 'Performance-driven', 'Clean architecture'].map(
          (t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1"
            >
              {t}
            </span>
          ),
        )}
      </motion.div>
    </section>
  )
}

export function Skills() {
  const gridRef = useRef<HTMLDivElement | null>(null)
  const inView = useInView(gridRef, { once: true, margin: '-100px' })

  return (
    <main className="relative min-h-screen bg-black px-4 pb-20 pt-28 md:px-6 md:pb-28">
      <HeaderNav className="fixed left-1/2 top-0 z-50 -translate-x-1/2" />

      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="text-2xl font-normal text-[#E1E0CC] sm:text-3xl md:text-4xl lg:text-5xl">
            <WordsPullUpMultiStyle
              className="justify-center"
              segments={[{ text: 'Skills & Tools.', className: '' }]}
            />
          </div>
          <div className="mt-2 text-2xl font-normal text-gray-500 sm:text-3xl md:text-4xl lg:text-5xl">
            <WordsPullUpMultiStyle
              className="justify-center"
              segments={[{ text: 'Built for modern frontend development.', className: '' }]}
            />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-[1.35] text-primary/70 sm:text-base">
            A practical toolkit for shipping fast, scaling cleanly, and keeping UX tight under real
            constraints.
          </p>
        </div>

        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {categories.map((cat, idx) => (
            <motion.section
              key={cat.title}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: idx * 0.12,
              }}
              className="group rounded-2xl bg-[#212121] p-6 transition-all duration-300 hover:-translate-y-1 hover:opacity-95"
            >
              <div className="text-lg font-normal text-[#E1E0CC]">{cat.title}</div>
              <div className="mt-5 space-y-3">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-400 transition-colors group-hover:text-gray-300 sm:text-base"
                  >
                    {skillIconSrc[item] ? (
                      <img
                        src={skillIconSrc[item]}
                        alt=""
                        className="h-[18px] w-[18px] flex-none opacity-90"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      <Code2 className="h-[18px] w-[18px] flex-none text-primary/70" />
                    )}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
        <WorkflowSection />
      </div>
    </main>
  )
}

