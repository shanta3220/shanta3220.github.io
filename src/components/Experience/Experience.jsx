import "./Experience.scss";

function Experience() {
  const experiences = [
    {
      company: "Nudge Nudge Games GmbH",
      role: "Freelance Game Programmer",
      duration: "Feb 2020 - Jun 2024",
      location: "Berlin, DE",
      description: [
        "Implemented UI into games, iterating to enhance usability and visual consistency.",
        "Mentored junior developers and collaborated with a 30-person team on a major project.",
        "Resolved 30% of reported bugs, improving game stability, and conducted code reviews.",
      ],
    },
    {
      company: "Arcade Studios",
      role: "Part-Time Software Engineer",
      duration: "Jan 2020 - Sep 2020",
      location: "Dhaka, BD",
      description: [
        "Led a personal project within a month, showcasing initiative and problem-solving skills.",
        "Collaborated with 10 engineers on GitHub, improving code quality and reducing integration issues by 25%.",
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="experience__title">Experience</h2>
      <div className="experience__list">
        {experiences.map((exp, index) => (
          <div className="experience__item" key={index}>
            <h3 className="experience__company">{exp.company}</h3>
            <p className="experience__role">{exp.role}</p>
            <p className="experience__duration">
              {exp.duration} | {exp.location}
            </p>
            <ul className="experience__description">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
