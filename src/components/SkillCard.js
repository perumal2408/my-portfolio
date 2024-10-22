import React from 'react';

function SkillCard({ skill, logo }) {
  return (
    <div className="skill-card">
      <img src={logo} alt={`${skill} logo`} className="skill-logo" />
      <h3 className="skill-name">{skill}</h3>
    </div>
  );
}

export default SkillCard;