import { projects, workIntro } from '../content/projects';
import { ProjectCard } from './ProjectCard';
import './Work.css';

/** The "Work" section — the proof. Reads everything from content/projects.ts */
export function Work() {
  return (
    <section id="work" className="section work" aria-labelledby="work-heading">
      <div className="container">
        <header className="work__intro" data-reveal>
          <p className="eyebrow">{workIntro.eyebrow}</p>
          <h2 id="work-heading" className="section-title">
            {workIntro.heading}
          </h2>
          <p className="lead work__subheading">{workIntro.subheading}</p>
        </header>

        <div className="work__list">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
