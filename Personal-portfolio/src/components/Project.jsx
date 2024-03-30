import React from 'react';
import ProjectCard from './ProjectCard';
import '../global.css'
 // And a corresponding CSS for styling

 const projectData = [
    // {
    //   title: 'Developing Webside',
    //   description: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nesciunt, officia ut animi ex fugiat natus dolore ipsum voluptatem, vero voluptas atque dicta deserunt quas cupiditate aspernatur porro consectetur aliquid.</p>  ,
      
    //   imageUrl: 'HTML.jpg'
    // },
    {
      title: 'C# Projects',
      description: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nesciunt, officia ut animi ex fugiat natus dolore ipsum voluptatem, vero voluptas atque dicta deserunt quas cupiditate aspernatur porro consectetur aliquid.</p>  ,
      imageUrl: 'c-sharp.webp'
     
    },
    {
      title: 'Jav projects',
      description: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nesciunt, officia ut animi ex fugiat natus dolore ipsum voluptatem, vero voluptas atque dicta deserunt quas cupiditate aspernatur porro consectetur aliquid.</p>  ,
      
      imageUrl: 'java1.jfif'
    },
    {
      title: 'Pythone projects',
      description: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nesciunt, officia ut animi ex fugiat natus dolore ipsum voluptatem, vero voluptas atque dicta deserunt quas cupiditate aspernatur porro consectetur aliquid.</p> ,
      
      imageUrl: 'pythone.png'
    },
  // Add more projects as needed
];
const Project = () => {
    return (
      <div id='Projects' className="my-projects">
        <h1>My Projects</h1>
        <div className="projects-container">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Project;