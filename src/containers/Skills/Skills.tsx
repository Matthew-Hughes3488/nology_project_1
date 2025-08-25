import React from 'react';
import SkillCard from '../../components/SkillCard/SkillCard';
import { skills } from '../../data/portfolioData';
import './Skills.scss';

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <section className="skills">
      <h2 className="skills__title">Technical Skills</h2>
      <p className="skills__text">
        💻 I've cultivated a diverse skill set through a combination of formal
        education and self-directed learning. Proficient in C, C++, and Python,
        my technical expertise extends beyond these languages. Explore the
        following list to discover the range of skills I bring to the table.
      </p>

      <section className="skill-cards">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </section>
    </section>
  );
};

export default Skills;