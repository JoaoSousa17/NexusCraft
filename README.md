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
    projetos/[slug]/page.tsx  Página individual de cada projeto (Markdown + HTML)
    login/                    Página de autenticação (Supabase)
    admin/                    Painel de administração (projetos, stack, links)
  components/
    logo.tsx                  Wordmark da NexusCraft
    site-banner.tsx           Banner com back button (páginas de projeto)
    parallax-section.tsx      Wrapper de parallax baseado em scroll
    ui/                       Componentes shadcn/ui
  lib/
    projects.ts               Fallback estático usado quando o Supabase não está configurado
    data/                     Acesso a dados (projetos, stack, links) com fallback estático
    supabase/                 Clientes Supabase (browser e servidor)
  proxy.ts                    Protege /admin e /login (auth Supabase)
supabase/
  migrations/                 Schema SQL (tabelas + storage bucket)
```

## Painel de administração

`/admin` (protegido por autenticação Supabase, redireciona para `/login`)
permite gerir:

- **Projetos** — CRUD completo: slug, título, tag/estado, descrição breve,
  descrição longa (Markdown com suporte a HTML/CSS embutido), foto principal,
  foto logo e foto de capa (upload para o Storage bucket `project-images`).
- **Stack tecnológica** — sempre exatamente 8 entradas fixas; só é possível
  editar o nome e o ícone (slug do pacote `simple-icons`) de cada uma.
- **Links** — links do banner principal (lojas) e da página de contacto.

Para criar um utilizador admin, usa o painel do Supabase (Authentication →
Add user) com email e password.

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

## Base de dados

Aplicar as migrations em `supabase/migrations/` ao projeto Supabase (SQL
editor ou `supabase db push`) para criar as tabelas `projects`,
`stack_items`, `site_links` e o bucket de Storage `project-images`. Sem
estas migrations o site usa os dados estáticos de fallback em
`src/lib/projects.ts` e nos módulos em `src/lib/data/`.
