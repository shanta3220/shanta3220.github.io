import "./Skills.scss";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "REST APIs",
  "Knex.js",
  "MySQL",
  "Sass",
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">Skills</h2>
      <ul className="skills__list">
        {skills.map((skill, index) => (
          <li key={index} className="skills__item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
