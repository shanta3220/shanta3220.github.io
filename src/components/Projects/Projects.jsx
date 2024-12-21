import "./Projects.scss";

const projects = [
  { name: "JiffyGames", description: "A browser-based gaming platform." },
  { name: "Just for Laughs", description: "A personalized joke generator." },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <div key={index} className="projects__item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
