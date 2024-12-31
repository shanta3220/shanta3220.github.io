import profileImage from "../assets/images/Nusrat_Jahan_Shanta.jpg";
import profileImage2 from "../assets/images/pic01.jpg";

export const skillCategories = [
  {
    category: "Programming Languages & Frameworks",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "HTML",
      "CSS",
      "Sass",
      "Express",
      "Knex.js",
      "Python",
    ],
  },
  {
    category: "Databases",
    skills: ["MySQL"],
  },
  {
    category: "Collaboration & Design Tools",
    skills: ["Git", "GitHub", "Postman", "Trello", "Heroku"],
  },
  {
    category: "Game Development",
    skills: ["Unity3D", "C#"],
  },
  {
    category: "General Software & Productivity Tools",
    skills: [
      "Visual Studio Code",
      "Microsoft Office",
      "Google Docs",
      "Photoshop",
      "SourceTree",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Problem-Solving",
      "Task Prioritization",
      "Team Collaboration",
      "Mentoring",
    ],
  },
];

export const educationData = [
  {
    media: { type: "image", src: profileImage },
    title: "Diploma, Software Engineering",
    institution: "BrainStation",
    location: "Toronto, ON",
    year: "Sep 2024 - Dec 2024",
    technologies: ["C++", "Java"],
    description: ["Grade: 95%"],
    website: "https://brainstation.io/online/software-engineering-bootcamp",
  },
  {
    media: { type: "image", src: profileImage },
    title: "MSc in Management Information Systems",
    institution: "Metropolitan University",
    location: "Sylhet, BD",
    year: "May 2019 - Jan 2021",
    technologies: ["Python", "Data Analysis"],
    description: ["CGPA: 3.92/4.0"],
    website: "https://metrouni.edu.bd/sites/masters-programmes/msc-in-mis",
  },
  {
    media: { type: "image", src: profileImage },
    title: "BSc in Computer Science & Engineering",
    institution: "Metropolitan University",
    location: "Sylhet, BD",
    year: "Sep 2014 - Jan 2019",
    technologies: ["C++", "Java"],
    description: ["CGPA: 3.85/4.0"],
    website:
      "https://metrouni.edu.bd/sites/honours-programmes/bsc-in-computer-science-engineering",
  },
];

export const experienceData = [
  {
    media: { type: "image", src: profileImage2 },
    title: "Freelance Game Programmer",
    company: "Nudge Nudge Games GmbH",
    location: "Berlin, DE",
    year: "Feb 2020 - Jun 2024",
    description: [
      "Implemented UI into the game, iterating multiple times to enhance usability and visual consistency.",
      "Completed 949 tasks in Trello—the highest in the team due to long tenure.",
      "Mentored a junior developer to contribute significantly to key game features.",
      "Collaborated with a 30-person team on a major project, ensuring design consistency and cohesive execution.",
      "Resolved 30% of reported bugs, improving game stability, and conducted code reviews to ensure high-quality code.",
    ],
    website: "https://www.nimoyd.com",
  },
  {
    media: { type: "image", src: profileImage2 },
    title: "Part-Time Software Engineer",
    company: "Arcade Studios",
    location: "Dhaka, BD",
    year: "Jan 2020 - Sep 2020",
    description: [
      "Started with a small role in core feature development and quickly progressed to leading a personal project within a month.",
      "Collaborated with 10 engineers on GitHub, reviewing, testing, and ensuring seamless integration.",
      "Improved code quality and reduced integration issues by 25%.",
    ],
    website: "https://www.facebook.com/arcadestudiosbd",
  },
];
