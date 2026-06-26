import { SiteBanner } from "@/components/site-banner";
import { SiteFooter } from "@/components/site-footer";

export default function ContactoPage() {
  return (
    <>
      <SiteBanner back />

      <main className="flex-1">
        <div className="border-b border-border px-6 py-20 md:px-10 md:py-32">
          <h1 className="max-w-3xl font-display text-4xl uppercase tracking-tight md:text-6xl">
            Contacto
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Conteúdo placeholder. Substituir por formas de contacto reais
            (email, redes sociais, formulário, etc.).
          </p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
