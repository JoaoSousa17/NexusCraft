import { SiteBanner } from "@/components/site-banner";
import { SiteFooter } from "@/components/site-footer";

const milestones = [
  {
    year: "2023",
    title: "A ideia",
    text: "Tudo começou com uma pergunta simples: por que razão os nossos próprios projetos nunca saíam do papel? A resposta foi criar uma estrutura — um grupo que desse forma e consistência ao que até então era só intenção.",
  },
  {
    year: "2024",
    title: "A stack e os primeiros protótipos",
    text: "Definimos os alicerces técnicos da NexusCraft: uma stack coesa entre Next.js, TypeScript, Tailwind CSS e Supabase. Os primeiros protótipos começaram a tomar forma, com foco em qualidade de código e experiência de utilizador desde o início.",
  },
  {
    year: "2025",
    title: "Lançamento público",
    text: "O site da NexusCraft vai a público e os primeiros projetos entram em fase de desenvolvimento ativo. A identidade visual é consolidada — vermelho, preto e branco — e a metodologia de trabalho é documentada.",
  },
  {
    year: "2026",
    title: "Expansão do portfólio",
    text: "Com projetos em diferentes fases de maturidade, a NexusCraft consolida-se como um grupo multidisciplinar. Cada novo produto alimenta o seguinte: a experiência acumula-se, a stack evolui e os processos tornam-se cada vez mais eficientes.",
  },
];

export default function HistoriaPage() {
  return (
    <>
      <SiteBanner back />

      <main className="flex-1">
        <div className="border-b border-border px-6 py-20 md:px-10 md:py-32">
          <h1 className="max-w-3xl font-display text-4xl uppercase tracking-tight md:text-6xl">
            A nossa história
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            A NexusCraft não nasceu de um plano de negócios nem de uma ronda
            de investimento. Nasceu da vontade de construir — e de perceber
            que construir bem exige estrutura, consistência e um grupo que
            partilhe os mesmos princípios.
          </p>
        </div>

        <div className="flex flex-col border-b border-border">
          {milestones.map((m, i) => (
            <div
              key={m.year}
              className={`grid grid-cols-1 gap-6 p-8 md:grid-cols-4 md:gap-10 md:p-10 ${
                i < milestones.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex flex-col gap-1">
                <span className="font-display text-3xl text-accent md:text-4xl">
                  {m.year}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {m.title}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:col-span-3 md:text-base">
                {m.text}
              </p>
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
