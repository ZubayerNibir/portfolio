import {
  services,
  servicesIntro,
  servicesFootnote,
} from '../content/services';
import './Services.css';

/** "Services" — what you can be hired for. Reads from content/services.ts */
export function Services() {
  return (
    <section
      id="services"
      className="section services"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <header className="services__intro" data-reveal>
          <p className="eyebrow">{servicesIntro.eyebrow}</p>
          <h2 id="services-heading" className="section-title">
            {servicesIntro.heading}
          </h2>
          <p className="lead services__subheading">
            {servicesIntro.subheading}
          </p>
        </header>

        <ul className="services__list">
          {services.map((service) => (
            <li key={service.no} className="services__item" data-reveal>
              <span className="services__no" aria-hidden="true">
                {service.no}
              </span>
              <div className="services__body">
                <h3 className="services__title">{service.title}</h3>
                <p className="services__desc">{service.description}</p>
                <ul className="services__tags" aria-label="Tools">
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <p className="services__footnote" data-reveal>
          {servicesFootnote}
        </p>
      </div>
    </section>
  );
}
