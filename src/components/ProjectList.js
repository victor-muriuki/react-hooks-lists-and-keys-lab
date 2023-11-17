import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
         {/* Map over the projects array  */}
         {projects.map((project) => (
          <ProjectItem
            key={project.id} // Use the project id as the key
            name={project.name}
            about={project.about}
            technologies={project.technologies}
          />
         ))}

        {/* render ProjectItem components here */}
      </div>


    </div>
  );
}

export default ProjectList;
