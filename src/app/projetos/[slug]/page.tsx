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
        <div className="relative border-b border-border px-6 py-20 md:px-10 md:py-32">
          {project.cover_image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.cover_image}
              alt=""
              className="absolute inset-0 -z-10 size-full object-cover opacity-30"
            />
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
            <div className="prose prose-invert mt-6 max-w-none text-sm leading-relaxed text-muted-foreground md:text-base">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
              >
                {project.description_long || project.description}
              </ReactMarkdown>
            </div>
          </div>
          <div className="p-8 md:p-10">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              Estado
            </h2>
            <p className="mt-6 text-sm text-muted-foreground">
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
