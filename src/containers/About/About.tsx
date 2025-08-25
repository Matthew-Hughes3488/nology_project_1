import React from 'react';
import './About.scss';
import profileImage from '../../assets/images/Profile-Picture.jpeg';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className="about" id="about-me">
      <h2 className="about__title">About Me</h2>
      <img
        className="about__img"
        src={profileImage}
        alt="Picture of me"
      />
      <p className="about__text">
        👋 Hi, I'm Matthew, a Birmingham University graduate with a degree in
        Artificial Intelligence and Computer Science. I've been coding for over
        a decade, blending education and personal projects. Explore my portfolio
        to see how I turn ideas into elegant, functional code. Let's innovate
        together!
      </p>
    </section>
  );
};

export default About;