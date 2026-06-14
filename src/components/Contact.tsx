import { siteConfig } from '../content/siteConfig';
import './Contact.css';

/** "Contact" — the conversion moment. mailto + LinkedIn (+ optional scheduling). */
export function Contact() {
  const { email, linkedin, schedulingUrl, primaryCta, location, availability } =
    siteConfig;

  return (
    <section
      id="contact"
      className="section contact"
      aria-labelledby="contact-heading"
    >
      <div className="container contact__inner">
        <p className="eyebrow" data-reveal>
          Contact
        </p>
        <h2 id="contact-heading" className="contact__title" data-reveal>
          Have a video or an agent that needs building?
        </h2>
        <p className="contact__sub" data-reveal>
          Tell me what you’re shipping and the timeline. I reply to every
          serious inquiry — usually within a day.
        </p>

        <div className="contact__actions" data-reveal>
          <a className="btn btn--primary" data-magnetic href={primaryCta.href}>
            {primaryCta.label}
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </a>
          <a
            className="btn btn--ghost"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {schedulingUrl ? (
            <a
              className="btn btn--ghost"
              href={schedulingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
            </a>
          ) : null}
        </div>

        <ul className="contact__meta" data-reveal>
          <li>
            <span className="contact__meta-label">Email</span>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <span className="contact__meta-label">Based in</span>
            {location}
          </li>
          <li>
            <span className="contact__meta-label">Availability</span>
            {availability}
          </li>
        </ul>
      </div>
    </section>
  );
}
