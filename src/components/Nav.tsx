import { useEffect, useState } from 'react';
import { siteConfig } from '../content/siteConfig';
import './Nav.css';

/**
 * Top navigation bar. Pure markup driven by siteConfig.
 * On phones it shows just the brand + a "Let's talk" pill (links are reachable
 * by scrolling); on wider screens the full section links appear.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav__inner container">
        <a className="nav__brand" href="#main" aria-label={`${siteConfig.brand} — home`}>
          <span className="nav__brand-mark" aria-hidden="true" />
          <span>{siteConfig.brand}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {siteConfig.nav.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav__cta" href={siteConfig.primaryCta.href}>
          Let’s talk
        </a>
      </div>
    </header>
  );
}
