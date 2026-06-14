import { useState } from 'react';
import type { Project } from '../content/types';

/**
 * CLICK-TO-LOAD video. On page load it shows ONLY a static poster image
 * (lazy-loaded). The actual <video> or YouTube/Vimeo <iframe> is created only
 * after the visitor clicks play — this is what keeps the page fast.
 */
export function VideoPlayer({ project }: { project: Project }) {
  const [active, setActive] = useState(false);

  return (
    <div className={`player player--${project.aspect}`}>
      {active ? (
        project.kind === 'embed' ? (
          <iframe
            className="player__media"
            src={withAutoplay(project.videoSrc)}
            title={`${project.title} — ${project.tagline}`}
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
          />
        ) : (
          <video
            className="player__media"
            src={project.videoSrc}
            poster={project.poster}
            controls
            autoPlay
            playsInline
            preload="auto"
            aria-label={`${project.title} — ${project.tagline}`}
          />
        )
      ) : (
        <button
          type="button"
          className="player__poster"
          onClick={() => setActive(true)}
          aria-label={`Play video: ${project.title} — ${project.tagline}`}
        >
          <img src={project.poster} alt="" loading="lazy" decoding="async" />
          <span className="player__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="player__duration" aria-hidden="true">
            {project.duration}
          </span>
        </button>
      )}
    </div>
  );
}

/** Add an autoplay flag to a YouTube/Vimeo embed URL after the user clicks. */
function withAutoplay(url: string): string {
  return url + (url.includes('?') ? '&' : '?') + 'autoplay=1';
}
