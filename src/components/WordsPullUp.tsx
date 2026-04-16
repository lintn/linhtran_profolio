import { motion, useInView } from 'framer-motion'
import { useMemo, useRef } from 'react'

type Props = {
  text: string
  className?: string
  showAsterisk?: boolean
}

export function WordsPullUp({ text, className, showAsterisk }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true })

  const words = useMemo(() => text.trim().split(/\s+/), [text])

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        const shouldAsterisk =
          Boolean(showAsterisk) && isLast && /a$/i.test(word)

        return (
          <motion.span
            key={`${word}-${i}`}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : undefined}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.08,
            }}
            className="inline-block"
          >
            <span className={shouldAsterisk ? 'relative inline-block' : undefined}>
              {word}
              {shouldAsterisk ? (
                <span className="pointer-events-none absolute top-[0.65em] -right-[0.3em] text-[0.31em]">
                  *
                </span>
              ) : null}
            </span>
            {i !== words.length - 1 ? <span>&nbsp;</span> : null}
          </motion.span>
        )
      })}
    </span>
  )
}

