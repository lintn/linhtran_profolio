import { motion, useInView } from 'framer-motion'
import { useMemo, useRef } from 'react'

export type MultiStyleSegment = {
  text: string
  className?: string
}

type Word = {
  word: string
  className?: string
}

type Props = {
  segments: MultiStyleSegment[]
  className?: string
}

export function WordsPullUpMultiStyle({ segments, className }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true })

  const words = useMemo<Word[]>(() => {
    const out: Word[] = []
    for (const seg of segments) {
      const split = seg.text.trim().split(/\s+/).filter(Boolean)
      for (const w of split) out.push({ word: w, className: seg.className })
    }
    return out
  }, [segments])

  return (
    <span
      ref={ref}
      className={[
        'inline-flex flex-wrap justify-center',
        className ?? '',
      ].join(' ')}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w.word}-${i}`}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : undefined}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: i * 0.08,
          }}
          className={['inline-block', w.className ?? ''].join(' ')}
        >
          {w.word}
          {i !== words.length - 1 ? <span>&nbsp;</span> : null}
        </motion.span>
      ))}
    </span>
  )
}

