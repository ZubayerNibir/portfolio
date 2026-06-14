import type { Project } from '../content/types';
import { VideoPlayer } from './VideoPlayer';

/** One project row: the video on one side, the write-up on the other. */
export function ProjectCard({
  project,
  reverse,
}: {
  project: Project;
  reverse: boolean;
}) {
  return (
    <article
      className={`work__item${reverse ? ' work__item--reverse' : ''}`}
      data-reveal
    >
      <div className="work__media">
        <VideoPlayer project={project} />
      </div>

      <div className="work__meta">
        <h3 className="work__title">{project.title}</h3>
        <p className="work__tagline">{project.tagline}</p>
        <p className="work__desc">{project.description}</p>
        <ul className="work__tags" aria-label="Built with">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
