import { motion, useInView, useScroll } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { useMemo, useRef } from 'react'
import { AnimatedLetter } from '../components/AnimatedLetter'
import { HeaderNav } from '../components/HeaderNav'
import { WordsPullUp } from '../components/WordsPullUp'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'

export function Home() {
  const aboutText =
    'Over the past few years, I have worked on building scalable web applications using React, Next.js, and modern frontend tooling. I focus on performance optimization, clean architecture, and delivering seamless user experiences across devices. My work bridges design and engineering to create products that are both functional and visually refined.'

  const aboutChars = useMemo(() => Array.from(aboutText), [aboutText])
  const aboutRef = useRef<HTMLParagraphElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  const featuresGridRef = useRef<HTMLDivElement | null>(null)
  const featuresInView = useInView(featuresGridRef, {
    once: true,
    margin: '-100px',
  })

  return (
    <main className="min-h-screen bg-black">
      {/* HERO */}
      <section className="h-screen p-4 md:p-6">
        <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

          <HeaderNav className="absolute left-1/2 top-0 z-10 -translate-x-1/2" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-6">
            <div className="grid grid-cols-12 items-end gap-6">
              <div className="col-span-12 lg:col-span-8">
                <WordsPullUp
                  text="I'm Linh"
                  showAsterisk
                  className="block font-medium leading-[0.85] tracking-[-0.07em] text-[#E1E0CC] text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                />
              </div>

              <div className="col-span-12 lg:col-span-4">
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.5,
                  }}
                  className="text-xs leading-[1.2] text-primary/70 sm:text-sm md:text-base"
                >
                  I build modern, high-performance web applications with a focus
                  on clean architecture, scalability, and seamless user
                  experience across platforms.
                </motion.p>

                <motion.a
                  href="/contact"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.7,
                  }}
                  className="group mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
                >
                  <span>Get In Touch</span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                    <ArrowRight className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-black px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl rounded-2xl bg-[#101010] px-6 py-12 text-center md:rounded-[2rem] md:px-10 md:py-16">
          <div className="text-[10px] text-primary sm:text-xs"></div>

          <div className="mx-auto mt-5 max-w-3xl text-3xl font-normal leading-[0.95] text-[#E1E0CC] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'I am Linh Tran,', className: 'font-normal' },
                {
                  text: 'a Frontend Developer.',
                  className: 'font-serif italic',
                },
                {
                  text: 'I build modern web applications with a focus on performance, scalability, and user experience.',
                  className: 'font-normal',
                },
              ]}
            />
          </div>

          <p
            ref={aboutRef}
            className="mx-auto mt-7 max-w-4xl whitespace-pre-wrap break-words text-xs text-[#DEDBC8] sm:text-sm md:text-base"
          >
            {aboutChars.map((char, idx) => (
              <AnimatedLetter
                key={`${char}-${idx}`}
                char={char}
                index={idx}
                total={aboutChars.length}
                progress={scrollYProgress}
              />
            ))}
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative min-h-screen bg-black px-4 py-16 md:px-6 md:py-24">
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-xl font-normal text-[#E1E0CC] sm:text-2xl md:text-3xl lg:text-4xl">
              <WordsPullUpMultiStyle
                className="justify-center"
                segments={[
                  {
                    text: 'Production-ready frontend solutions.',
                    className: '',
                  },
                ]}
              />
            </div>
            <div className="mt-2 text-xl font-normal text-gray-500 sm:text-2xl md:text-3xl lg:text-4xl">
              <WordsPullUpMultiStyle
                className="justify-center"
                segments={[
                  { text: 'Built for performance. Designed for users.', className: '' },
                ]}
              />
            </div>
          </div>

          <div
            ref={featuresGridRef}
            className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4"
          >
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                featuresInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0 * 0.15,
              }}
              className="relative overflow-hidden rounded-2xl bg-[#212121]"
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
              <div className="relative flex h-full flex-col justify-end p-6">
                <div className="text-sm font-normal text-[#E1E0CC] sm:text-base">
                  Build fast. Ship faster.
                </div>
              </div>
            </motion.div>

            {[
              {
                num: '01',
                title: 'Component Architecture.',
                icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
                items: [
                  'Reusable UI systems',
                  'Scalable folder structure',
                  'Type-safe components',
                  'Design system integration',
                ],
              },
              {
                num: '02',
                title: 'Performance Optimization.',
                icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
                items: [
                  'Code splitting & lazy loading',
                  'Lighthouse optimization',
                  'Core Web Vitals improvements',
                  'Efficient state management',
                ],
              },
              {
                num: '03',
                title: 'Developer Experience.',
                icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
                items: [
                  'Clean and maintainable code',
                  'Automation & tooling',
                  'CI/CD integration',
                  'Cross-team collaboration',
                ],
              },
            ].map((card, idx) => (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  featuresInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.95 }
                }
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: (idx + 1) * 0.15,
                }}
                className="flex flex-col rounded-2xl bg-[#212121] p-6"
              >
                <img
                  src={card.icon}
                  alt=""
                  className="h-10 w-10 rounded sm:h-12 sm:w-12"
                  loading="lazy"
                />

                <div className="mt-6 flex items-baseline gap-3">
                  <div className="text-sm text-primary/70">{card.num}</div>
                  <div className="text-base font-normal text-[#E1E0CC]">
                    {card.title}
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {card.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check className="mt-[2px] h-4 w-4 flex-none text-primary" />
                      <div className="text-sm text-gray-400">{item}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm text-primary/70 transition-colors hover:text-primary"
                >
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 -rotate-45" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

