import { SiteBanner } from "@/components/site-banner";
import { SiteFooter } from "@/components/site-footer";
import { listSiteLinks } from "@/lib/data/links";

const directContacts = [
  {
    label: "Email geral",
    value: "joaopedro.2004@hotmail.com",
    href: "mailto:joaopedro.2004@hotmail.com",
    note: "Para questões gerais, parcerias e propostas.",
  },
  {
    label: "Suporte técnico",
    value: "joaopedro.2004@hotmail.com",
    href: "mailto:joaopedro.2004@hotmail.com?subject=Suporte%20T%C3%A9cnico",
    note: "Bugs, problemas de acesso ou questões sobre os produtos.",
  },
  {
    label: "Media & press",
    value: "joaopedro.2004@hotmail.com",
    href: "mailto:joaopedro.2004@hotmail.com?subject=Media",
    note: "Pedidos de imprensa, entrevistas e conteúdo editorial.",
  },
];

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
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Preferimos comunicação direta e objetiva. Se tens uma ideia,
            uma proposta ou uma questão sobre algum dos nossos produtos,
            escreve-nos — respondemos a todas as mensagens.
          </p>
        </div>

        <div className="grid grid-cols-1 border-b border-border md:grid-cols-3">
          {directContacts.map((c, i) => (
            <div
              key={c.label}
              className={`flex flex-col gap-3 p-8 md:p-10 ${
                i < directContacts.length - 1
                  ? "border-b border-border md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                {c.label}
              </span>
              <a
                href={c.href}
                className="text-sm font-semibold transition-colors hover:text-accent"
              >
                {c.value}
              </a>
              <p className="text-xs text-muted-foreground">{c.note}</p>
            </div>
          ))}
        </div>

        {links.length > 0 && (
          <div className="border-b border-border px-6 py-12 md:px-10">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Redes & plataformas
            </span>
            <div className="mt-6 flex flex-wrap gap-px border border-border bg-border">
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
          </div>
        )}
      </main>

      <SiteFooter />
    </>
  );
}
