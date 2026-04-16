import { motion, type MotionValue, useTransform } from 'framer-motion'

type Props = {
  char: string
  index: number
  total: number
  progress: MotionValue<number>
  className?: string
}

export function AnimatedLetter({
  char,
  index,
  total,
  progress,
  className,
}: Props) {
  const charProgress = total <= 1 ? 0 : index / total
  const start = Math.max(0, charProgress - 0.1)
  const end = Math.min(1, charProgress + 0.05)
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <motion.span style={{ opacity }} className={className}>
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  )
}

