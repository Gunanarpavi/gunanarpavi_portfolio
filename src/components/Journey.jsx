import { useEffect, useRef } from 'react'
import { BriefcaseBusiness, GraduationCap, NotebookTabs } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedSection from './AnimatedSection'

gsap.registerPlugin(ScrollTrigger)

const typeIcon = {
  education: GraduationCap,
  internship: BriefcaseBusiness,
  workshop: NotebookTabs
}

const typeColors = {
  education: '#6366f1',
  internship: '#f97316',
  workshop: '#22c55e'
}

export default function Journey({ items }) {
  const timelineRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    // Animate timeline cards on scroll
    if (cardsRef.current.length > 0) {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: -60,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.12,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 0.5,
              markers: false,
            },
          }
        )
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <AnimatedSection id="education" className="section">
      <p className="section-kicker">Education Pipeline</p>
      <h2 className="section-title">Academic journey, internships, and workshops.</h2>

      <div className="timeline" ref={timelineRef}>
        {items.map((item, index) => {
          const Icon = typeIcon[item.type] ?? GraduationCap

          return (
            <article
              className={`timeline-card ${item.type}`}
              key={`${item.title}-${item.period}`}
              ref={el => cardsRef.current[index] = el}
            >
              <div className="timeline-head">
                <span className="timeline-icon icon-glow" aria-hidden="true">
                  <Icon size={18} style={{ color: typeColors[item.type] }} />
                </span>
                <span className="timeline-period">{item.period}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="timeline-org">{item.organization}</p>
              <p>{item.details}</p>
              {item.metric ? <p className="timeline-metric">{item.metric}</p> : null}
            </article>
          )
        })}
      </div>
    </AnimatedSection>
  )
}
