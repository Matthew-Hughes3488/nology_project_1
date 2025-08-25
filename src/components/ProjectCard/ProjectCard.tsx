import React from 'react';
import type { Project } from '../../types';
import './ProjectCard.scss';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card">
      <img className="card__img" src={project.image} alt={project.title} />
      <h4 className="card__title">{project.technology}</h4>
      <h4 className="card__title card__title--project-title">{project.title}</h4>
      <p className="card__text">{project.description}</p>
      <nav>
        <a className="card__link" href={project.codeLink} target="_blank" rel="noopener noreferrer">
          Code &lt;/&gt;
        </a>
        {project.previewLink && (
          <a className="card__link" href={project.previewLink} target="_blank" rel="noopener noreferrer">
            Preview &lt;/&gt;
          </a>
        )}
      </nav>
    </div>
  );
};

export default ProjectCard;