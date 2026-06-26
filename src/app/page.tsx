import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Logo } from "@/components/logo";
import { ParallaxBackground, ParallaxAccent } from "@/components/parallax-section";
import { StoreLinks } from "@/components/store-links";
import { SiteFooter } from "@/components/site-footer";
import { SectionTitle } from "@/components/section-title";
import { TechIcon, resolveIcon } from "@/components/tech-icon";
import { listProjects } from "@/lib/data/projects";
import { listStackItems } from "@/lib/data/stack";
import { listSiteLinks } from "@/lib/data/links";

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

export default async function Home() {
  const [projects, techs, storeLinks] = await Promise.all([
    listProjects(),
    listStackItems(),
    listSiteLinks("store"),
  ]);

  return (
    <>
      {/* Banner principal */}
      <header className="relative flex min-h-screen w-full flex-col overflow-hidden border-b border-border">
        <ParallaxBackground src="/images/parallax-hero.svg" speed={160} />
        <ParallaxAccent
          speed={120}
          rotate={25}
          className="-right-24 top-24 size-72 border border-accent/30 md:size-96"
        />

        <div className="relative z-10 border-b border-border px-6 py-6 md:px-10">
          <SectionTitle index="00">NexusCraft</SectionTitle>
        </div>

        <div className="relative z-10 grid flex-1 grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col justify-center border-b border-border p-8 md:col-span-2 md:border-b-0 md:border-r md:p-10">
            <Logo size="lg" className="mb-10" />
            <h1 className="max-w-xl font-display text-5xl uppercase leading-[1.05] tracking-tight md:text-6xl">
              Construímos os produtos que imaginamos.
            </h1>
            <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
              NexusCraft é o grupo que reúne os nossos projetos, aplicações e
              startups sob os mesmos princípios de engenharia e design.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-6 p-8 md:p-10">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Disponível em
            </span>
            <StoreLinks links={storeLinks} />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Valores */}
        <section className="relative flex min-h-screen w-full flex-col overflow-hidden border-b border-border">
          <ParallaxBackground src="/images/parallax-values.svg" speed={100} />

          <div className="relative z-10 border-b border-border px-6 py-6 md:px-10">
            <SectionTitle index="01">Valores &amp; Princípios</SectionTitle>
          </div>
          <div className="relative z-10 grid flex-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`flex flex-col justify-center border-b border-border p-8 md:border-b-0 ${
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
        <section className="relative flex min-h-screen w-full flex-col overflow-hidden border-b border-border">
          <ParallaxBackground src="/images/parallax-projects.svg" speed={100} />

          <div className="relative z-10 border-b border-border px-6 py-6 md:px-10">
            <SectionTitle index="02">Projetos</SectionTitle>
          </div>
          <div className="relative z-10 grid flex-1 grid-cols-1 md:grid-cols-3">
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projetos/${project.slug}`}
                className={`group relative flex flex-col justify-between border-b border-border p-8 transition-colors hover:bg-accent md:border-b-0 md:p-10 ${
                  i !== projects.length - 1 ? "md:border-r" : ""
                } border-border`}
              >
                <div>
                  <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-background/70">
                    {project.status}
                  </span>
                  <h3 className="mt-4 text-xl font-medium transition-colors group-hover:text-background">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-background/80">
                    {project.tagline}
                  </p>
                </div>
                <ArrowUpRight className="mt-8 size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-background" />
              </Link>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
          <ParallaxBackground src="/images/parallax-stack.svg" speed={100} />

          <div className="relative z-10 border-b border-border px-6 py-6 md:px-10">
            <SectionTitle index="03">Stack Tecnológica</SectionTitle>
          </div>
          <div className="relative z-10 grid flex-1 grid-cols-2 md:grid-cols-4">
            {techs.map((tech, i) => (
              <div
                key={tech.id}
                className={`flex flex-col items-center justify-center gap-3 border-border p-8 text-center ${
                  i % 2 === 0 ? "border-r" : ""
                } ${i < techs.length - 2 ? "border-b" : ""} ${
                  i % 4 !== 3 ? "md:border-r" : ""
                } ${i < techs.length - 4 ? "md:border-b" : "md:border-b-0"}`}
              >
                <TechIcon
                  icon={resolveIcon(tech.icon_slug)}
                  className="size-10 text-muted-foreground transition-colors hover:text-accent md:size-12"
                />
                <span className="font-mono text-xs text-muted-foreground md:text-sm">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
