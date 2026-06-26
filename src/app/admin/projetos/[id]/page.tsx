import { notFound } from "next/navigation";

import { getProjectById } from "@/lib/data/projects";
import { ProjectForm } from "../project-form";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) notFound();

  return (
    <div>
      <h1 className="font-display text-3xl uppercase tracking-tight">
        Editar projeto
      </h1>
      <ProjectForm project={project} />
    </div>
  );
}
