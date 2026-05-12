import { BriefcaseBusiness, GraduationCap, NotebookTabs } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const typeIcon = {
  education: GraduationCap,
  internship: BriefcaseBusiness,
  workshop: NotebookTabs
}

export default function Journey({ items }) {
  return (
    <AnimatedSection id="education" className="section">
      <p className="section-kicker">Education Pipeline</p>
      <h2 className="section-title">Academic journey, internships, and workshops.</h2>

      <div className="timeline">
        {items.map((item) => {
          const Icon = typeIcon[item.type] ?? GraduationCap

          return (
            <article className="timeline-card" key={`${item.title}-${item.period}`}>
              <div className="timeline-head">
                <span className="timeline-icon icon-glow" aria-hidden="true">
                  <Icon size={18} />
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
