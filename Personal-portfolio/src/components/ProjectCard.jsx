import React from 'react';
 // Make sure to have corresponding CSS

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default ProjectCard;
