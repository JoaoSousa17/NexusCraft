import { Logo } from "@/components/logo";
import { login } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const { error, next } = await searchParams;

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-6">
      <Logo className="max-h-36" />

      <form
        action={login}
        className="mt-12 w-full max-w-sm border border-border bg-muted/30 p-8"
      >
        <h1 className="font-display text-2xl uppercase tracking-tight">
          Acesso admin
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Entra com a tua conta para gerir o site.
        </p>

        <input type="hidden" name="next" value={next ?? "/admin"} />

        <label className="mt-8 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
        />

        <label className="mt-6 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Password
        </label>
        <input
          type="password"
          name="password"
          required
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
        />

        {error && (
          <p className="mt-4 text-sm text-accent">{error}</p>
        )}

        <button
          type="submit"
          className="mt-8 w-full border border-accent bg-accent px-4 py-3 text-xs font-semibold uppercase tracking-wide text-background transition-opacity hover:opacity-90"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
