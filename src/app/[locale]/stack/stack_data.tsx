export const stack_data = {
  frontend: [
    { name: "HTML5", icon: "FaHtml5" },
    { name: "CSS3", icon: "FaCss3Alt" },
    { name: "JavaScript", icon: "FaJsSquare" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "TailwindCSS", icon: "SiTailwindcss" },
  ],
  backend: [
    { name: "Python", icon: "FaPython" },
    { name: "Django", icon: "SiDjango" },
    { name: "DRF", icon: "bi bi-filetype-py" },
    { name: "FastAPI", icon: "SiFastapi" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
  ],
  devops: [
    { name: "Git & GitHub", icon: "FaGithub" },
    { name: "Docker", icon: "FaDocker" },
    { name: "Postman", icon: "SiPostman" },
    { name: "VS Code", icon: "SiVisualstudiocode" },
    { name: "Linux", icon: "FaLinux" },
  ],
};

export type StackCategory = keyof typeof stack_data;
export type StackItem = (typeof stack_data)[StackCategory][number];
