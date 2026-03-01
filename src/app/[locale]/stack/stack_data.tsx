export const stack_data = {
  frameworks: [
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "Spring Boot", icon: "SiSpringboot" },
    { name: "Django", icon: "SiDjango" },
    { name: "DRF", icon: "SiDjango" },
    { name: "FastAPI", icon: "SiFastapi" },
    { name: "TailwindCSS", icon: "SiTailwindcss" },
  ],
  languages: [
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "JavaScript", icon: "FaJsSquare" },
    { name: "Python", icon: "FaPython" },
    { name: "Java", icon: "FaJava" },
    { name: "HTML5", icon: "FaHtml5" },
    { name: "CSS3", icon: "FaCss3Alt" },
  ],
  devops: [
    { name: "Docker", icon: "FaDocker" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "Git & GitHub", icon: "FaGithub" },
    { name: "Linux", icon: "FaLinux" },
    { name: "Postman", icon: "SiPostman" },
    { name: "VS Code", icon: "SiVisualstudiocode" },
  ],
};

export type StackCategory = keyof typeof stack_data;
export type StackItem = (typeof stack_data)[StackCategory][number];
