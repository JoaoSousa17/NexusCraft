import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { SiteBanner } from "@/components/site-banner";
import { listProjects, getProjectBySlug } from "@/lib/data/projects";

export async function generateStaticParams() {
  const projects = await listProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SiteBanner back />

      <main className="flex-1">
        {/* Hero / cover */}
        <div className="relative border-b border-border px-6 py-20 md:px-10 md:py-32">
          {project.cover_image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.cover_image}
              alt=""
              className="absolute inset-0 -z-10 size-full object-cover opacity-30"
            />
          )}

          {/* Logo avatar — bottom-right of hero */}
          {project.logo_image && (
            <div className="absolute bottom-0 right-8 translate-y-1/2 md:right-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.logo_image}
                alt={`${project.name} logo`}
                className="size-16 rounded-full border-2 border-accent bg-background object-cover shadow-lg md:size-20"
              />
            </div>
          )}

          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            {project.status}
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl uppercase tracking-tight md:text-6xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            {project.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="border-b border-border p-8 md:col-span-2 md:border-b-0 md:border-r md:p-10">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              Sobre o projeto
            </h2>

            {/* Short description */}
            {project.description && (
              <p className="mt-6 text-justify text-sm leading-relaxed text-muted-foreground md:text-base">
                {project.description}
              </p>
            )}

            {/* Main image between short and long description */}
            {project.main_image && (
              <figure className="my-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.main_image}
                  alt="Interface do projeto"
                  className="w-full border border-accent/60 object-cover shadow-[0_0_0_1px_hsl(var(--accent)/0.3),0_4px_24px_hsl(var(--accent)/0.15)]"
                />
                <figcaption className="mt-3 text-center font-mono text-xs uppercase tracking-widest text-accent/70">
                  Foto da interface
                </figcaption>
              </figure>
            )}

            {/* Long description (Markdown) */}
            {(project.description_long || (!project.main_image && project.description)) && (
              <div
                className="
                  prose prose-invert max-w-none
                  prose-p:text-justify prose-p:text-sm prose-p:leading-relaxed prose-p:text-muted-foreground md:prose-p:text-base
                  prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-foreground
                  prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-xl prose-h2:border-b prose-h2:border-border prose-h2:pb-2
                  prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-base
                  prose-strong:text-white prose-strong:font-semibold
                  prose-li:text-sm prose-li:leading-relaxed prose-li:text-muted-foreground md:prose-li:text-base
                  prose-ul:my-4 prose-ul:space-y-2
                  prose-ol:my-4 prose-ol:space-y-2
                  prose-code:text-accent prose-code:bg-muted/50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs
                  prose-pre:bg-muted/30 prose-pre:border prose-pre:border-border prose-pre:rounded-none
                  prose-blockquote:border-l-accent prose-blockquote:text-muted-foreground
                  prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                  prose-hr:border-border
                "
              >
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                >
                  {project.description_long || project.description}
                </ReactMarkdown>
              </div>
            )}
          </div>

          <div className="p-8 md:p-10">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              Estado
            </h2>
            <p className="mt-6 font-mono text-sm text-accent">
              {project.status}
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-border px-6 py-8 text-xs text-muted-foreground md:px-10">
        © {new Date().getFullYear()} NexusCraft. Todos os direitos reservados.
      </footer>
    </>
  );
}
