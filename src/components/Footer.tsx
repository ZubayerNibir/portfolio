import { siteConfig } from '../content/siteConfig';
import './Footer.css';

/** Footer — brand, contact links, and an honest "how this was built" line. */
export function Footer() {
  const { brand, name, email, linkedin } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__mark" aria-hidden="true" />
          <span>{brand}</span>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <a href={`mailto:${email}`}>Email</a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="#main">Back to top</a>
        </nav>

        <p className="footer__note">
          © {year} {name}. Built in code with React, Vite &amp; Remotion.
        </p>
      </div>
    </footer>
  );
}
