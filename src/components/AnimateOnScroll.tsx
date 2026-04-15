'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'
import { fadeUp } from '@/lib/animations'

interface Props {
  children: ReactNode
  variants?: any
  className?: string
  delay?: number
}

export function AnimateOnScroll({ children, variants = fadeUp, className = '', delay = 0 }: Props) {
  const shouldReduce = useReducedMotion()

  if (shouldReduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...variants.visible.transition,
            delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
