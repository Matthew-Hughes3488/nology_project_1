import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/portfolioData';
import './Projects.scss';

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section className="project" id="projects">
      <h2 className="project__title">Projects</h2>

      <section className="project-cards">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </section>
  );
};

export default Projects;