export interface Skill {
  id: string;
  name: string;
  image: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  technology: string;
  description: string;
  image: string;
  codeLink: string;
  previewLink: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  image: string;
  alt: string;
}