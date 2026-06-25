export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "Em desenvolvimento" | "Em produção" | "Em planeamento";
};

export const projects: Project[] = [
  {
    slug: "projeto-01",
    name: "Projeto 01",
    tagline: "Descrição breve a definir.",
    description:
      "Conteúdo placeholder. Substituir por uma descrição detalhada deste projeto, objetivos e estado atual.",
    status: "Em desenvolvimento",
  },
  {
    slug: "projeto-02",
    name: "Projeto 02",
    tagline: "Descrição breve a definir.",
    description:
      "Conteúdo placeholder. Substituir por uma descrição detalhada deste projeto, objetivos e estado atual.",
    status: "Em planeamento",
  },
  {
    slug: "projeto-03",
    name: "Projeto 03",
    tagline: "Descrição breve a definir.",
    description:
      "Conteúdo placeholder. Substituir por uma descrição detalhada deste projeto, objetivos e estado atual.",
    status: "Em planeamento",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
