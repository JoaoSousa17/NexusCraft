import { SiteBanner } from "@/components/site-banner";
import { SiteFooter } from "@/components/site-footer";
import { listSiteLinks } from "@/lib/data/links";

export default async function ContactoPage() {
  const links = await listSiteLinks("contact");

  return (
    <>
      <SiteBanner back />

      <main className="flex-1">
        <div className="border-b border-border px-6 py-20 md:px-10 md:py-32">
          <h1 className="max-w-3xl font-display text-4xl uppercase tracking-tight md:text-6xl">
            Contacto
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Fala connosco através de qualquer um dos canais abaixo.
          </p>

          {links.length > 0 && (
            <div className="mt-10 flex flex-col gap-px border border-border bg-border md:inline-flex md:flex-row">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="bg-background px-6 py-4 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-muted hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
