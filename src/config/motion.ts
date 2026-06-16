export const motionConfig = {
  duration: {
    instant: 0.1,
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  ease: {
    out: [0.22, 1, 0.36, 1] as const,
    inOut: [0.45, 0, 0.55, 1] as const,
  },
  stagger: {
    hero: 0.1,
    cards: 0.08,
  },
} as const

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const scaleHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
}
