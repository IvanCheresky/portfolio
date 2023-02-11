interface Skill {
  fileName: string;
  description: string;
}

export const skills: Skill[] = [
  {
    fileName: "api.svg",
    description: "Rest API",
  },
  {
    fileName: "docker.svg",
    description: "Docker",
  },
  {
    fileName: "github.svg",
    description: "Github",
  },
  {
    fileName: "graphql.svg",
    description: "Graphql",
  },
  {
    fileName: "html.svg",
    description: "HTML/CSS",
  },
  {
    fileName: "javascript.svg",
    description: "Javascript",
  },
  {
    fileName: "net.svg",
    description: ".NET",
  },
  {
    fileName: "nextjs.svg",
    description: "Nextjs",
  },
  {
    fileName: "node.svg",
    description: "Node",
  },
  {
    fileName: "postgres.svg",
    description: "Postgres",
  },
  {
    fileName: "react.svg",
    description: "React",
  },
  {
    fileName: "typescript.svg",
    description: "Typescript",
  },
  {
    fileName: "git.svg",
    description: "Git",
  },
].sort((a, b) => (a.description > b.description ? 1 : -1));

export const interestedSkills: Skill[] = [
  {
    fileName: "rust.svg",
    description: "Rust",
  },
  {
    fileName: "mongodb.svg",
    description: "MongoDB",
  },
];
