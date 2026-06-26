import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Logo } from "@/components/logo";
import { ParallaxSection } from "@/components/parallax-section";
import { projects } from "@/lib/projects";

const values = [
  {
    title: "Rigor",
    description:
      "Construímos com cuidado técnico, testando e validando antes de lançar.",
  },
  {
    title: "Autonomia",
    description:
      "Cada projeto é independente, mas partilha os mesmos princípios e qualidade.",
  },
  {
    title: "Simplicidade",
    description:
      "Preferimos soluções diretas e sustentáveis a complexidade desnecessária.",
  },
  {
    title: "Iteração",
    description:
      "Lançamos, aprendemos e melhoramos de forma contínua, em ciclos curtos.",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Supabase",
  "PostgreSQL",
  "Node.js",
];

export default function Home() {
  return (
    <>
      {/* Banner principal */}
      <header className="relative flex min-h-screen w-full flex-col overflow-hidden border-b border-border">
        <ParallaxSection speed={60} className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 size-[36rem] rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 size-[28rem] rounded-full bg-accent/10 blur-3xl" />
        </ParallaxSection>

        <div className="relative z-10 px-6 py-8 md:px-10">
          <Logo />
        </div>

        <ParallaxSection
          speed={20}
          className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-20 md:px-10 md:pb-32"
        >
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Construímos os produtos que imaginamos.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            NexusCraft é o grupo que reúne os nossos projetos, aplicações e
            startups sob os mesmos princípios de engenharia e design.
          </p>
        </ParallaxSection>
      </header>

      <main className="flex-1">
        {/* Valores */}
        <section className="border-b border-border">
          <div className="border-b border-border px-6 py-6 md:px-10">
            <h2 className="text-sm font-mono uppercase tracking-widest text-accent">
              01 — Valores &amp; Princípios
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`border-b border-border p-8 md:border-b-0 ${
                  i !== values.length - 1 ? "md:border-r" : ""
                } border-border`}
              >
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-medium">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projetos */}
        <section className="border-b border-border">
          <div className="border-b border-border px-6 py-6 md:px-10">
            <h2 className="text-sm font-mono uppercase tracking-widest text-accent">
              02 — Projetos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projetos/${project.slug}`}
                className={`group relative flex flex-col justify-between border-b border-border p-8 transition-colors hover:bg-muted md:border-b-0 md:p-10 ${
                  i !== projects.length - 1 ? "md:border-r" : ""
                } border-border`}
              >
                <div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.status}
                  </span>
                  <h3 className="mt-4 text-xl font-medium">{project.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.tagline}
                  </p>
                </div>
                <ArrowUpRight className="mt-8 size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
              </Link>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section>
          <div className="border-b border-border px-6 py-6 md:px-10">
            <h2 className="text-sm font-mono uppercase tracking-widest text-accent">
              03 — Stack Tecnológica
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stack.map((tech, i) => (
              <div
                key={tech}
                className={`border-b border-border p-8 text-center font-mono text-sm md:p-10 ${
                  (i + 1) % 4 !== 0 ? "md:border-r" : ""
                } ${(i + 1) % 2 !== 0 ? "border-r" : ""} border-border`}
              >
                {tech}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-8 text-xs text-muted-foreground md:px-10">
        © {new Date().getFullYear()} NexusCraft. Todos os direitos reservados.
      </footer>
    </>
  );
}
