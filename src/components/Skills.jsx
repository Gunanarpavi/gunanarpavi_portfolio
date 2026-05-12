import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const skillMeta = {
  C: {
    iconUrl: 'https://img.icons8.com/color/96/c-programming.png',
    tone: 't-orange',
    detail: 'Structured problem-solving and systems thinking.'
  },
  Python: {
    iconUrl: 'https://img.icons8.com/color/96/python--v1.png',
    tone: 't-green',
    detail: 'Automation, AI/ML workflows, and backend scripting.'
  },
  Java: {
    iconUrl: 'https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png',
    tone: 't-red',
    detail: 'Object-oriented application design and implementation.'
  },
  HTML: {
    iconUrl: 'https://img.icons8.com/color/96/html-5--v1.png',
    tone: 't-orange',
    detail: 'Semantic interface structure and clean markup.'
  },
  CSS: {
    iconUrl: 'https://img.icons8.com/color/96/css3.png',
    tone: 't-cyan',
    detail: 'Responsive layouts and polished visual styling.'
  },
  JavaScript: {
    iconUrl: 'https://img.icons8.com/color/96/javascript--v1.png',
    tone: 't-yellow',
    detail: 'Dynamic logic and rich front-end interaction.'
  },
  React: {
    iconUrl: 'https://img.icons8.com/color/96/react-native.png',
    tone: 't-blue',
    detail: 'Component-first UI architecture and scalability.'
  },
  SQL: {
    iconUrl: 'https://img.icons8.com/color/96/sql.png',
    tone: 't-green',
    detail: 'Data querying, joins, and relational analysis.'
  }
}

export default function Skills({ skills }) {
  return (
    <AnimatedSection id="skills" className="section section-skills-fusion">
      <div className="skills-fusion-wrap">
        <div className="skills-fusion-panel">
          <span className="skills-side-label">Skills</span>

          <div className="skills-fusion-content">
            <p className="fusion-kicker">What I Do</p>
            <h2 className="fusion-title">Engineering Skillset</h2>
            <p className="fusion-copy">
              A combined visual style of bold contrast and neon polish, presenting my technical stack with interactive cards.
            </p>

            <div className="fusion-grid">
              {skills.map((skill, index) => {
                const meta = skillMeta[skill] ?? {
                  iconUrl: 'https://img.icons8.com/color/96/source-code.png',
                  tone: 't-blue',
                  detail: 'Adaptable technical capability.'
                }

                return (
                  <motion.article
                    className={`fusion-card ${meta.tone}`}
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.22 }}
                    transition={{ delay: index * 0.06, duration: 0.45 }}
                  >
                    <div className="fusion-icon icon-glow">
                      <img src={meta.iconUrl} alt={`${skill} icon`} loading="lazy" />
                    </div>
                    <h3>{skill}</h3>
                    <p>{meta.detail}</p>
                  </motion.article>
                )
              })}
            </div>
            <p className="icons-credit">
              Icons by <a href="https://icons8.com" target="_blank" rel="noreferrer noopener">Icons8</a>
            </p>
          </div>

          <span className="skills-side-dash" aria-hidden="true"></span>
        </div>
      </div>
    </AnimatedSection>
  )
}
