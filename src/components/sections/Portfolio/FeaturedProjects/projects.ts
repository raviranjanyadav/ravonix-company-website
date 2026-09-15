export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise CRM Platform",
    category: "Web Application",
    description:
      "A modern CRM platform with customer management, analytics, sales pipeline, and reporting.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/images/projects/crm.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Hospital Management System",
    category: "Healthcare",
    description:
      "Complete hospital management including appointments, billing, EMR, and pharmacy.",
    technologies: ["React", "Java", "Spring Boot"],
    image: "/images/projects/hospital.jpg",
  },
  {
    id: 3,
    title: "Restaurant POS",
    category: "POS",
    description:
      "Cloud POS solution for restaurants with inventory, billing, kitchen, and reports.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/images/projects/restaurant.jpg",
  },
  {
    id: 4,
    title: "Inventory Management",
    category: "Enterprise",
    description:
      "Warehouse and inventory tracking with barcode support and analytics.",
    technologies: ["Angular", ".NET", "SQL Server"],
    image: "/images/projects/inventory.jpg",
  },
  {
    id: 5,
    title: "HRMS Platform",
    category: "HR Tech",
    description:
      "Employee onboarding, payroll, attendance, and leave management.",
    technologies: ["React", "Express", "MongoDB"],
    image: "/images/projects/hrms.jpg",
  },
  {
    id: 6,
    title: "AI Customer Assistant",
    category: "Artificial Intelligence",
    description:
      "AI-powered chatbot with document search and multilingual support.",
    technologies: ["React", "Python", "OpenAI API"],
    image: "/images/projects/ai-chatbot.jpg",
  },
];