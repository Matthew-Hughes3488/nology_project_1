import type { Skill, Project, SocialLink } from '../types';

// Import all skill images
import gitImage from '../assets/images/Git.png';
import htmlImage from '../assets/images/Html.png';
import cssImage from '../assets/images/Css.png';
import javascriptImage from '../assets/images/Javascript.png';
import scssImage from '../assets/images/Scss.png';
import bemImage from '../assets/images/BEM.png';
import reactImage from '../assets/images/React.png';
import javaImage from '../assets/images/Java.png';
import springBootImage from '../assets/images/Logo.png';

export const skills: Skill[] = [
  {
    id: 'git',
    name: 'Git',
    image: gitImage,
    alt: 'git logo'
  },
  {
    id: 'html',
    name: 'HTML5',
    image: htmlImage,
    alt: 'html logo'
  },
  {
    id: 'css',
    name: 'CSS3',
    image: cssImage,
    alt: 'css logo'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    image: javascriptImage,
    alt: 'javascript logo'
  },
  {
    id: 'scss',
    name: 'SCSS',
    image: scssImage,
    alt: 'scss logo'
  },
  {
    id: 'bem',
    name: 'BEM',
    image: bemImage,
    alt: 'bem logo'
  },
  {
    id: 'react',
    name: 'React',
    image: reactImage,
    alt: 'react logo'
  },
  {
    id: 'java',
    name: 'Java',
    image: javaImage,
    alt: 'java logo'
  },
  {
    id: 'springboot',
    name: 'Spring Boot',
    image: springBootImage,
    alt: 'spring boot logo'
  }
];

// Import all project images
import calculatorImage from '../assets/images/calculator-image.png';
import yeOldInvaderImage from '../assets/images/ye-old-invader-img.png';
import punkApiImage from '../assets/images/punk-api.png';
import clientProjectImage from '../assets/images/client_project_img.png';
import hangmanImage from '../assets/images/hangman.png';
import projectPlaceholderImage from '../assets/images/Project-image.png';

export const projects: Project[] = [
  {
    id: 'calculator',
    title: 'Calculator',
    technology: 'Typescript',
    description: 'A web based calculator built using HTML, CSS, and Typescript. It is built using a calculator class and features both basic and more advanced arithmatic cacluations. It implements a shunting yard algorithm in order to calcuate longer expression in the correct order.',
    image: calculatorImage,
    codeLink: 'https://github.com/Matthew-Hughes3488/nology-calculator',
    previewLink: 'https://matthew-hughes3488.github.io/nology-calculator/'
  },
  {
    id: 'ye-old-invaders',
    title: 'Ye old invaders',
    technology: 'Typescript',
    description: 'A web game made using HTML, CSS, and Typescript. Inspired by space invaderes but with a wizard and goblins instead of a spaceship and aliens. Features sound effects, animations, and a happy wizard should you win.',
    image: yeOldInvaderImage,
    codeLink: 'https://github.com/Matthew-Hughes3488/ye-old-invaders',
    previewLink: 'https://matthew-hughes3488.github.io/ye-old-invaders/'
  },
  {
    id: 'punk-beers',
    title: 'Punk Beers',
    technology: 'React',
    description: 'A project that uses react and API calling in order to allow the user to search the the full punk beers catalaog. It features sorting by ABV content, aciditiy, classic range, and by name.',
    image: punkApiImage,
    codeLink: 'https://github.com/Matthew-Hughes3488/punk-api-project',
    previewLink: 'https://matthew-hughes3488.github.io/punk-api-project/#/'
  },
  {
    id: 'client-project',
    title: 'Client Project',
    technology: 'React',
    description: 'Developed website used by a company to book and manage meetings with clients as well as manage their own inventory',
    image: clientProjectImage,
    codeLink: 'https://github.com/nology-tech/verde-client-project',
    previewLink: 'https://verde-client-project.web.app'
  },
  {
    id: 'hangman',
    title: 'Hangman',
    technology: 'Java',
    description: 'A hangman game progammed in Java played in the terminal. Used serveral OOP concepts and principles, as well as implementing interfaces to decouple classes and ensuring that the code is easily extendable and maintainble.',
    image: hangmanImage,
    codeLink: 'https://github.com/Matthew-Hughes3488/java-hangman',
    previewLink: ''
  },
  {
    id: 'project-placeholder',
    title: 'Client Project',
    technology: 'React',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit aliquid harum reiciendis, eius distinctio vel natus aut facere labore voluptatum! Voluptas nulla vel qui similique iure dolorum distinctio reiciendis aliquam?',
    image: projectPlaceholderImage,
    codeLink: '',
    previewLink: ''
  }
];

// Import social link images
import githubImage from '../assets/images/GithubLink.png';
import linkedinImage from '../assets/images/indeed.png';
import cvImage from '../assets/images/cv.png';

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/Matthew-Hughes3488',
    image: githubImage,
    alt: 'github logo'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/matthew-hughes-5716ab23b/',
    image: linkedinImage,
    alt: 'linkedin logo'
  },
  {
    id: 'cv',
    name: 'CV',
    url: '',
    image: cvImage,
    alt: 'CV link'
  }
];