import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function Hero({ profile }) {
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)

  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 18, mass: 0.8 })
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 18, mass: 0.8 })

  const textRotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6])
  const textRotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6])

  const photoRotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8])
  const photoRotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10])

  const chipDriftX = useTransform(smoothX, [-0.5, 0.5], [-14, 14])
  const chipDriftY = useTransform(smoothY, [-0.5, 0.5], [-10, 10])

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5

    pointerX.set(x)
    pointerY.set(y)
  }

  const handlePointerLeave = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section id="top" className="hero hero-creative" onMouseMove={handlePointerMove} onMouseLeave={handlePointerLeave}>
      <div className="hero-layers" aria-hidden="true">
        <div className="orb orb-a"></div>
        <div className="orb orb-b"></div>
        <div className="grid-mask"></div>
        <div className="hero-rings"></div>
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div className="hero-text hero-text-card" style={{ rotateX: textRotateX, rotateY: textRotateY }}>
          <p className="eyebrow">{profile.role}</p>
          <h1>{profile.name}</h1>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-metrics">
            <span>3+ Projects</span>
            <span>2 Internships</span>
            <span>93% UG Score</span>
          </div>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn btn-ghost" href="#contact">Contact Me</a>
          </div>
        </motion.div>

        <motion.figure
          className="hero-photo-frame hero-photo-shell"
          style={{ rotateX: photoRotateX, rotateY: photoRotateY }}
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-photo-glow" aria-hidden="true"></div>
          <img
            className="hero-photo"
            src="/images/1000218500.jpg.jpeg"
            alt="Portrait of Gunanarpavi A R"
          />
          <figcaption>Open to software and AI opportunities</figcaption>
        </motion.figure>

        <motion.div className="hero-floating-chips" style={{ x: chipDriftX, y: chipDriftY }}>
          <span>Python</span>
          <span>React</span>
          <span>Machine Learning</span>
          <span>Cybersecurity</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
