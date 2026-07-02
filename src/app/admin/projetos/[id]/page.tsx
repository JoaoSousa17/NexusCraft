import { notFound } from "next/navigation";

import { getProjectById } from "@/lib/data/projects";
import { ProjectForm } from "../project-form";

export default async function EditProjectPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { id } = await params;
  const { error } = await searchParams;
  const project = await getProjectById(id);

  if (!project) notFound();

  return (
    <div>
      <h1 className="font-display text-3xl uppercase tracking-tight">
        Editar projeto
      </h1>
      {error && (
        <p className="mt-4 text-sm text-accent">Erro ao guardar: {error}</p>
      )}
      <ProjectForm project={project} />
    </div>
  );
}
