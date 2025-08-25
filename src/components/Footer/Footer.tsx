import React from 'react';
import { socialLinks } from '../../data/portfolioData';
import './Footer.scss';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer" id="footer">
      <nav>
        {socialLinks.map((link) => (
          <a key={link.id} className="footer__link" href={link.url} target="_blank" rel="noopener noreferrer">
            <img src={link.image} alt={link.alt} />
          </a>
        ))}
      </nav>
      <a className="footer__email" href="mailto:12hughesm@gmail.com">
        12hughesm@gmail.com
      </a>
    </footer>
  );
};

export default Footer;