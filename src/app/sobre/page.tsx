import { SiteBanner } from "@/components/site-banner";
import { SiteFooter } from "@/components/site-footer";

export default function SobrePage() {
  return (
    <>
      <SiteBanner back />

      <main className="flex-1">
        <div className="border-b border-border px-6 py-20 md:px-10 md:py-32">
          <h1 className="max-w-3xl font-display text-4xl uppercase tracking-tight md:text-6xl">
            Sobre nós
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            A NexusCraft é um grupo independente de engenharia e design de
            produto, criado com um único propósito: transformar ideias em
            produtos reais. Não somos uma agência nem uma empresa de serviços
            — somos um estúdio de criação onde cada projeto nasce, é
            construído e lançado por quem o idealiza.
          </p>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Cada produto que desenvolvemos partilha os mesmos princípios base:
            rigor técnico, interfaces simples e decisões de engenharia que
            resistem ao tempo. Usamos uma stack moderna e deliberadamente
            enxuta, recusando complexidade que não serve o utilizador.
          </p>
        </div>

        <div className="grid grid-cols-1 border-b border-border md:grid-cols-3">
          {[
            {
              label: "Missão",
              text: "Criar produtos digitais que resolvem problemas reais com elegância técnica e clareza de propósito.",
            },
            {
              label: "Visão",
              text: "Ser uma referência em engenharia independente — projetos pequenos, construídos com a seriedade de grandes equipas.",
            },
            {
              label: "Contacto",
              text: "Para parcerias, questões técnicas ou simplesmente para dizer olá, escreve para joaopedro.2004@hotmail.com",
            },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col gap-4 p-8 md:p-10 ${
                i < 2
                  ? "border-b border-border md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                {item.label}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
