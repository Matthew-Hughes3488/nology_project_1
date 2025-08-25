import React from 'react';
import './Header.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <h1 className="header__h1">Matthew Hughes</h1>
      <button className="header__link" onClick={() => scrollToSection('home')}>
        Home
      </button>
      <button className="header__link" onClick={() => scrollToSection('about-me')}>
        About
      </button>
      <button className="header__link" onClick={() => scrollToSection('projects')}>
        Projects
      </button>
      <button className="header__link header__link--button" onClick={() => scrollToSection('footer')}>
        Get in Touch
      </button>
    </header>
  );
};

export default Header;