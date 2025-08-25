import type { Skill, Project, SocialLink } from '../types';

export const skills: Skill[] = [
  {
    id: 'git',
    name: 'Git',
    image: '/src/assets/images/Git.png',
    alt: 'git logo'
  },
  {
    id: 'html',
    name: 'HTML5',
    image: '/src/assets/images/Html.png',
    alt: 'html logo'
  },
  {
    id: 'css',
    name: 'CSS3',
    image: '/src/assets/images/Css.png',
    alt: 'css logo'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    image: '/src/assets/images/Javascript.png',
    alt: 'javascript logo'
  },
  {
    id: 'scss',
    name: 'SCSS',
    image: '/src/assets/images/Scss.png',
    alt: 'scss logo'
  },
  {
    id: 'bem',
    name: 'BEM',
    image: '/src/assets/images/BEM.png',
    alt: 'bem logo'
  },
  {
    id: 'react',
    name: 'React',
    image: '/src/assets/images/React.png',
    alt: 'react logo'
  },
  {
    id: 'java',
    name: 'Java',
    image: '/src/assets/images/Java.png',
    alt: 'java logo'
  },
  {
    id: 'springboot',
    name: 'Spring Boot',
    image: '/src/assets/images/Logo.png',
    alt: 'spring boot logo'
  }
];

export const projects: Project[] = [
  {
    id: 'calculator',
    title: 'Calculator',
    technology: 'Typescript',
    description: 'A web based calculator built using HTML, CSS, and Typescript. It is built using a calculator class and features both basic and more advanced arithmatic cacluations. It implements a shunting yard algorithm in order to calcuate longer expression in the correct order.',
    image: '/src/assets/images/calculator-image.png',
    codeLink: 'https://github.com/Matthew-Hughes3488/nology-calculator',
    previewLink: 'https://matthew-hughes3488.github.io/nology-calculator/'
  },
  {
    id: 'ye-old-invaders',
    title: 'Ye old invaders',
    technology: 'Typescript',
    description: 'A web game made using HTML, CSS, and Typescript. Inspired by space invaderes but with a wizard and goblins instead of a spaceship and aliens. Features sound effects, animations, and a happy wizard should you win.',
    image: '/src/assets/images/ye-old-invader-img.png',
    codeLink: 'https://github.com/Matthew-Hughes3488/ye-old-invaders',
    previewLink: 'https://matthew-hughes3488.github.io/ye-old-invaders/'
  },
  {
    id: 'punk-beers',
    title: 'Punk Beers',
    technology: 'React',
    description: 'A project that uses react and API calling in order to allow the user to search the the full punk beers catalaog. It features sorting by ABV content, aciditiy, classic range, and by name.',
    image: '/src/assets/images/punk-api.png',
    codeLink: 'https://github.com/Matthew-Hughes3488/punk-api-project',
    previewLink: 'https://matthew-hughes3488.github.io/punk-api-project/#/'
  },
  {
    id: 'client-project',
    title: 'Client Project',
    technology: 'React',
    description: 'Developed website used by a company to book and manage meetings with clients as well as manage their own inventory',
    image: '/src/assets/images/client_project_img.png',
    codeLink: 'https://github.com/nology-tech/verde-client-project',
    previewLink: 'https://verde-client-project.web.app'
  },
  {
    id: 'hangman',
    title: 'Hangman',
    technology: 'Java',
    description: 'A hangman game progammed in Java played in the terminal. Used serveral OOP concepts and principles, as well as implementing interfaces to decouple classes and ensuring that the code is easily extendable and maintainble.',
    image: '/src/assets/images/hangman.png',
    codeLink: 'https://github.com/Matthew-Hughes3488/java-hangman',
    previewLink: ''
  },
  {
    id: 'project-placeholder',
    title: 'Client Project',
    technology: 'React',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit aliquid harum reiciendis, eius distinctio vel natus aut facere labore voluptatum! Voluptas nulla vel qui similique iure dolorum distinctio reiciendis aliquam?',
    image: '/src/assets/images/Project-image.png',
    codeLink: '',
    previewLink: ''
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/Matthew-Hughes3488',
    image: '/src/assets/images/GithubLink.png',
    alt: 'github logo'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/matthew-hughes-5716ab23b/',
    image: '/src/assets/images/indeed.png',
    alt: 'linkedin logo'
  },
  {
    id: 'cv',
    name: 'CV',
    url: '',
    image: '/src/assets/images/cv.png',
    alt: 'CV link'
  }
];