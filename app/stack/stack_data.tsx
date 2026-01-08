export const stack_data = {
  frontend: [
    { name: "HTML5", icon: "fa-brands fa-html5" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt" },
    { name: "JavaScript", icon: "fa-brands fa-square-js" },
    { name: "TypeScript", icon: "fa-brands bi-filetype-tsx" },
    { name: "Next.js", icon: "bi bi-filetype-tsx" },
    { name: "TailwindCSS", icon: "bi bi-palette" },
  ],
  backend: [
    { name: "Python", icon: "fa-brands fa-python" },
    { name: "Django", icon: "bi bi-filetype-py" },
    { name: "DRF", icon: "bi bi-filetype-py" },
    { name: "FastAPI", icon: "bi bi-filetype-py" },
    { name: "PostgreSQL", icon: "bi bi-database" },
  ],
  devops: [
    { name: "Git & GitHub", icon: "fa-brands fa-github" },
    { name: "Docker", icon: "fa-brands fa-docker" },
    { name: "Postman", icon: "bi bi-rocket-takeoff" },
    { name: "VS Code", icon: "bi bi-code-square" },
    { name: "Linux", icon: "fa-brands fa-linux" },
  ],
}

export type StackCategory = keyof typeof stack_data
export type StackItem = (typeof stack_data)[StackCategory][number]
