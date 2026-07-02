import { ProjectForm } from "../project-form";

export default async function NewProjectPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div>
      <h1 className="font-display text-3xl uppercase tracking-tight">
        Novo projeto
      </h1>
      {error && (
        <p className="mt-4 text-sm text-accent">Erro ao guardar: {error}</p>
      )}
      <ProjectForm />
    </div>
  );
}
