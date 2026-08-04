export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  experience: string;
  type: "Full Time" | "Part Time" | "Internship" | "Contract";
  description: string;
  skills: string[];
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Pune / Remote",
    experience: "2 - 4 Years",
    type: "Full Time",
    description:
      "Build modern React & TypeScript applications with a strong focus on performance and UI quality.",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "Engineering",
    location: "Remote",
    experience: "3 - 5 Years",
    type: "Full Time",
    description:
      "Design scalable APIs and backend systems using Node.js and cloud technologies.",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Pune",
    experience: "2+ Years",
    type: "Full Time",
    description:
      "Create intuitive user experiences and pixel-perfect interfaces for web and mobile products.",
    skills: ["Figma", "Design System", "Prototyping"],
  },
  {
    id: 4,
    title: "QA Engineer",
    department: "Engineering",
    location: "Remote",
    experience: "2+ Years",
    type: "Full Time",
    description:
      "Ensure product quality through manual and automated testing strategies.",
    skills: ["Playwright", "Automation", "API Testing"],
  },
  {
    id: 5,
    title: "Business Analyst",
    department: "Business",
    location: "Hybrid",
    experience: "3+ Years",
    type: "Full Time",
    description:
      "Gather requirements, prepare user stories and bridge the gap between clients and engineering.",
    skills: ["Agile", "Jira", "Documentation"],
  },
  {
    id: 6,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    experience: "4+ Years",
    type: "Full Time",
    description:
      "Build CI/CD pipelines and manage scalable cloud infrastructure.",
    skills: ["AWS", "Docker", "Kubernetes"],
  },
];