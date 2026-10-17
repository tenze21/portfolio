import {projects} from "../data/projects"
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="featured-projects" id="projects">
      <h2 id="projects-heading">Featured Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}