import React from 'react';
import type { Skill } from '../../types';
import './SkillCard.scss';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="skill-card">
      <img className="skill-card__img" src={skill.image} alt={skill.alt} />
      <h3 className="skill-card__title">{skill.name}</h3>
    </div>
  );
};

export default SkillCard;