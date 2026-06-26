# NexusCraft

Site institucional da NexusCraft — o grupo que reúne os projetos, apps e
startups da casa sob os mesmos princípios de engenharia e design.

Design minimalista, sem barras de navegação, dividido em secções em forma
de grelha de retângulos com linhas retas (inspiração: [uptec](https://uptec.up.pt)
e [BuildUpLabs](https://builduplabs.com)), com um banner principal a ocupar
o ecrã inteiro e efeito de parallax por secção.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion) — efeito de parallax
- [Supabase](https://supabase.com) — base de dados e autenticação

## Estrutura

```
src/
  app/
    page.tsx                  Homepage (banner, valores, projetos, stack)
    projetos/[slug]/page.tsx  Página individual de cada projeto
  components/
    logo.tsx                  Wordmark da NexusCraft
    site-banner.tsx           Banner com back button (páginas de projeto)
    parallax-section.tsx      Wrapper de parallax baseado em scroll
    ui/                       Componentes shadcn/ui
  lib/
    projects.ts               Lista de projetos (atualmente com placeholders)
    supabase/                 Clientes Supabase (browser e servidor)
```

## Desenvolvimento

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

### Variáveis de ambiente

Copiar `.env.example` para `.env.local` e preencher as chaves do projeto
Supabase:

```bash
cp .env.example .env.local
```

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Scripts

| Comando         | Descrição                          |
| --------------- | ----------------------------------- |
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Build de produção                   |
| `npm run start` | Inicia o build de produção          |
| `npm run lint`  | Corre o ESLint                      |

## Conteúdo a atualizar

- `src/lib/projects.ts` — substituir os projetos placeholder pelos projetos
  reais (nome, descrição, estado).
- `public/` — adicionar o logo definitivo da NexusCraft e substituir o
  wordmark em `src/components/logo.tsx`.
