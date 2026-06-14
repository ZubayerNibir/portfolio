import { bio } from '../content/bio';
import './About.css';

/** "About" — the story + a quick-scan list of strengths. From content/bio.ts */
export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="container about__grid">
        <header className="about__head" data-reveal>
          <p className="eyebrow">{bio.eyebrow}</p>
          <h2 id="about-heading" className="section-title about__heading">
            {bio.heading}
          </h2>
        </header>

        <div className="about__body">
          {bio.paragraphs.map((para, i) => (
            <p className="about__para" data-reveal key={i}>
              {para}
            </p>
          ))}

          <ul className="about__caps" data-reveal aria-label="What I do best">
            {bio.capabilities.map((cap) => (
              <li key={cap}>{cap}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
