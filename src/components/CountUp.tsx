'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export function CountUp({ end, prefix = '', suffix = '' }: { end: number, prefix?: string, suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1800 // ms
    const steps = 60
    const increment = end / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, end])

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}
