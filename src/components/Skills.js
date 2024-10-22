import React from 'react';
import SkillCard from './SkillCard';

// Import logos
import htmlLogo from './assets/logos/html.png';
import cssLogo from './assets/logos/css.svg';
import jsLogo from './assets/logos/js.svg';
import reactLogo from './assets/logos/react.svg';
import flutterLogo from './assets/logos/flutter.svg';
import firebaseLogo from './assets/logos/firebase.svg';
import nodejsLogo from './assets/logos/nodejs.svg';
import mongodbLogo from './assets/logos/mongodb.svg';

const skills = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Flutter", logo: flutterLogo },
  { name: "Firebase", logo: firebaseLogo },
  { name: "NodeJS", logo: nodejsLogo },
  { name: "MongoDB", logo: mongodbLogo }
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className='container-fluid'>
      <h1 className="section-title">Skills</h1>
      <div className="skills-container">
        {skills.map(skill => (
          <SkillCard key={skill.name} skill={skill.name} logo={skill.logo} />
        ))}
      </div>
      </div>
    </section>
  );
}

export default Skills;