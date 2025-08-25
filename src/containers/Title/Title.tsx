import React from 'react';
import './Title.scss';
import developerImage from '../../assets/images/Devloper.png';

interface TitleProps {}

const Title: React.FC<TitleProps> = () => {
  return (
    <section className="title" id="home">
      <div>
        <p className="title__intro">👋Hey! I'm Matthew Hughes</p>
        <h1 className="title__title">
          A Junior Software Developer based in the UK.
        </h1>
      </div>

      <img
        className="title__img"
        src={developerImage}
        alt="developer coding"
      />
    </section>
  );
};

export default Title;