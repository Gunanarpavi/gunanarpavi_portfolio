import AnimatedSection from './AnimatedSection'

export default function About({ about }) {
  return (
    <AnimatedSection id="about" className="section">
      <p className="section-kicker">About Me</p>
      <h2 className="section-title">A focused learner building the future through technology.</h2>
      <div className="about-copy">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </AnimatedSection>
  )
}
