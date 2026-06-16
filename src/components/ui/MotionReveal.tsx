import { type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, motionConfig } from '@/config/motion'
import { cn } from '@/lib/utils'

interface MotionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article'
}

export function MotionReveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: MotionRevealProps) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as]

  if (reduceMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeUp}
      transition={{
        duration: motionConfig.duration.normal,
        ease: motionConfig.ease.out,
        delay,
      }}
    >
      {children}
    </Component>
  )
}

interface MotionStaggerProps {
  children: ReactNode
  className?: string
}

export function MotionStagger({ children, className }: MotionStaggerProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ staggerChildren: motionConfig.stagger.cards }}
    >
      {children}
    </motion.div>
  )
}

export function MotionStaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  )
}
