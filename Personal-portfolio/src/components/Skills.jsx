import React from 'react';
import '../global.css'

const Skills = () => {
    const skills = [
      { name: 'networking', level: '80%' },
      { name: 'graphic', level: '85%' },
      { name: 'Programing', level: '89%'},
      
    ];
    const skill = [
        { name:"html&javascript", level : '67%'},
        { name: 'animation', level: '75%' },
        { name: 'FullStack', level: '85%' },
      
    ]
      
  
    return (
        
      <div id='Skills' className="professional-skills">
        <h1>My Skills</h1>
        
        <div className="skills-container">
          {skills.map(skill => (
            <div className="skill-circle" key={skill.name}>
              <span className="skill-percentage">{skill.level}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="skills-containers">
          {skill.map(skill => (
            <div className="skill-circle" key={skill.name}>
              <span className="skill-percentage">{skill.level}</span>
              <span className="skill-name">{skill.name}</span>
            
            </div>
          ))}
        </div>

        
    </div>

      
    );
  };
  

export default Skills;
