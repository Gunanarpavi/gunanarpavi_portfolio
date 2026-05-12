import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Sparkles, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import AnimatedSection from './AnimatedSection'

export default function Projects({ projects }) {
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    if (!activeProject) {
      return undefined
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProject(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeProject])

  return (
    <>
      <AnimatedSection id="projects" className="section">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Applied work across ML, security, and software engineering.</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={`${project.title}-${item}`}>{item}</span>
                ))}
              </div>

              <div className="project-actions">
                <a className="project-link icon-glow" href={project.repoUrl} target="_blank" rel="noreferrer noopener">
                  <ExternalLink size={15} />
                  GitHub Repo
                </a>
                <button className="project-pop" type="button" onClick={() => setActiveProject(project)}>
                  <Sparkles size={15} />
                  Quick View
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.aside
              className="project-modal"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button className="modal-close" type="button" onClick={() => setActiveProject(null)}>
                <X size={18} />
              </button>
              <p className="modal-kicker">Project Overview</p>
              <h3>{activeProject.title}</h3>
              <p>{activeProject.description}</p>
              <ul className="modal-points">
                {activeProject.highlights?.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a
                className="project-link icon-glow"
                href={activeProject.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <ExternalLink size={16} />
                Open GitHub Repository
              </a>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
