import { createAdminClient } from "@/lib/supabase/admin";
import { createUser, deleteUser } from "./actions";

export default async function AdminUsersPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  let users: { id: string; email?: string; created_at: string }[] = [];
  let loadError: string | null = null;

  try {
    const supabase = createAdminClient();
    const { data, error: listError } = await supabase.auth.admin.listUsers();
    if (listError) loadError = listError.message;
    else users = data.users;
  } catch {
    loadError =
      "SUPABASE_SERVICE_ROLE_KEY não está configurada. Define-a em .env.local para gerir contas.";
  }

  return (
    <div>
      <h1 className="font-display text-3xl uppercase tracking-tight">
        Contas de admin
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Cria e gere as contas com acesso ao painel de administração.
      </p>

      {loadError && (
        <p className="mt-6 border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent">
          {loadError}
        </p>
      )}

      <form
        action={createUser}
        className="mt-10 flex max-w-xl flex-wrap items-end gap-3 border border-border bg-muted/30 p-6"
      >
        <div className="flex flex-1 flex-col gap-2">
          <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            minLength={8}
            className="border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </div>
        <button
          type="submit"
          className="border border-accent bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-background"
        >
          Criar conta
        </button>
      </form>

      {error && <p className="mt-4 text-sm text-accent">{error}</p>}

      <div className="mt-10 flex flex-col gap-px border border-border bg-border">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between gap-4 bg-background p-4"
          >
            <div>
              <p className="text-sm font-medium">{user.email}</p>
              <p className="text-xs text-muted-foreground">
                Criada em {new Date(user.created_at).toLocaleDateString("pt-PT")}
              </p>
            </div>
            <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id} />
              <button
                type="submit"
                className="border border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Remover
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
