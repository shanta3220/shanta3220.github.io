import * as Icons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

export const getTransition = (delay, duration) => {
  if (!duration) {
    duration = 0.8;
  }
  return {
    initial: { opacity: 0, y: 20, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration, ease: "easeOut", delay },
    exit: { opacity: 0, y: 20, scale: 0.96 },
  };
};

export function getContrastColor(bgColor) {
  const rgba = bgColor.match(/\d+/g).map(Number);
  const [r, g, b] = rgba;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 125 ? "#000000" : "#FFFFFF"; // Black for bright backgrounds, white for dark ones
}

const skillDetails = [
  { name: "JavaScript", icon: Icons.FaJs, bgColor: "rgba(247, 223, 30, 1)" },
  { name: "React", icon: Icons.FaReact, bgColor: "rgba(97, 218, 251, 1)" },
  { name: "Node.js", icon: Icons.FaNode, bgColor: "rgba(51, 153, 51, 1)" },
  { name: "Python", icon: Icons.FaPython, bgColor: "rgba(55, 118, 171, 1)" },
  { name: "HTML", icon: Icons.FaHtml5, bgColor: "rgba(227, 79, 38, 1)" },
  { name: "CSS", icon: Icons.FaCss3Alt, bgColor: "rgba(38, 77, 227, 1)" },
  { name: "Sass", icon: Icons.FaSass, bgColor: "rgba(204, 102, 153, 1)" },
  { name: "Express", icon: Icons.FaNodeJs, bgColor: "rgba(51, 153, 51, 1)" },
  { name: "Knex.js", icon: Icons.FaJs, bgColor: "rgba(247, 223, 30, 1)" },
  { name: "MySQL", icon: Icons.FaDatabase, bgColor: "rgba(68, 121, 161, 1)" },
  { name: "Git", icon: Icons.FaGitAlt, bgColor: "rgba(240, 80, 51, 1)" },
  { name: "GitHub", icon: Icons.FaGithub, bgColor: "rgba(60, 60, 60, 1)" },
  {
    name: "Postman",
    icon: Icons.FaPaperPlane,
    bgColor: "rgba(255, 153, 51, 1)",
  },
  { name: "Trello", icon: Icons.FaTrello, bgColor: "rgba(0, 121, 191, 1)" },
  { name: "Heroku", icon: Icons.FaCloud, bgColor: "rgba(103, 58, 183, 1)" },
  { name: "Unity3D", icon: Icons.FaUnity, bgColor: "rgba(78, 75, 75, 1)" },
  { name: "C#", icon: Icons.FaMicrosoft, bgColor: "rgba(65, 138, 158, 1)" },
  {
    name: "Visual Studio Code",
    icon: Icons.FaCode,
    bgColor: "rgba(0, 122, 204, 1)",
  },
  {
    name: "Microsoft Office",
    icon: Icons.FaFileWord,
    bgColor: "rgba(0, 115, 207, 1)",
  },
  {
    name: "Google Docs",
    icon: Icons.FaGoogle,
    bgColor: "rgba(66, 133, 244, 1)",
  },
  {
    name: "Photoshop",
    icon: SiIcons.SiAdobephotoshop,
    bgColor: "rgba(227, 38, 54, 1)",
  },
  { name: "SourceTree", icon: Icons.FaGitAlt, bgColor: "rgba(240, 80, 51, 1)" },
  {
    name: "Problem-Solving",
    icon: Icons.FaLightbulb,
    bgColor: "rgba(255, 223, 0, 1)",
  },
  {
    name: "Task Prioritization",
    icon: Icons.FaTasks,
    bgColor: "rgba(67, 160, 71, 1)",
  },
  {
    name: "Team Collaboration",
    icon: Icons.FaUsers,
    bgColor: "rgba(3, 155, 229, 1)",
  },
  {
    name: "Mentoring",
    icon: Icons.FaChalkboardTeacher,
    bgColor: "rgba(255, 112, 67, 1)",
  },
];

export function GetSkill(skillName) {
  const skill = skillDetails.find(
    (s) => s.name.toLowerCase() === skillName.toLowerCase()
  );
  if (!skill) {
    console.error(`Skill "${skillName}" not found`);
    return null;
  }

  return {
    ...skill,
    color: getContrastColor(skill.bgColor),
  };
}
