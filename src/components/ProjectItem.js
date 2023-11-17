import React from "react";
import ProjectList from "./ProjectList";
import user from "../data/user";


function ProjectItem({ name, about, technologies }) {
 
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
         {/* Map over the technologies array */}
         {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
        
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
