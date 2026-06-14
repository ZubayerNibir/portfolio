import { siteConfig } from '../content/siteConfig';
import { HeroCanvas } from './HeroCanvas';
import './Hero.css';

/** The hero section — the 8-second pitch. Content comes from siteConfig.hero. */
export function Hero() {
  const { hero, name, role, availability, primaryCta, secondaryCta, tools } =
    siteConfig;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <HeroCanvas />

      <div className="hero__inner container">
        <p className="hero__eyebrow" data-hero-extra>
          <span className="hero__status" aria-hidden="true" />
          {name} — {role}
        </p>

        <h1 id="hero-title" className="hero__title">
          <span className="hero__line">{hero.headlineA}</span>
          <span className="hero__line">{hero.headlineB}</span>
        </h1>

        <p className="hero__sub" data-hero-extra>
          {hero.subline}
        </p>

        <div className="hero__ctas" data-hero-extra>
          <a className="btn btn--primary" data-magnetic href={primaryCta.href}>
            {primaryCta.label}
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </a>
          <a className="btn btn--ghost" href={secondaryCta.href}>
            {secondaryCta.label}
          </a>
        </div>

        <ul className="hero__tools" data-hero-extra aria-label="Tools I work with">
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>

      <p className="hero__availability" data-hero-extra>
        {availability}
      </p>
    </section>
  );
}
