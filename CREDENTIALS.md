# Credenciais de Acesso

> ⚠️ Este ficheiro contém informação sensível. Não commitar para repositórios públicos.

## Painel de Administração

| Campo    | Valor                         |
| -------- | ----------------------------- |
| URL      | `/login`                      |
| Email    | `joaopedro.2004@hotmail.com`  |
| Password | `admin1234`                   |

## Supabase

As chaves do projeto Supabase estão em `.env.local` (não versionado).
Para as obter: **Supabase Dashboard → Project Settings → API**.

| Variável                      | Onde obter                              |
| ----------------------------- | --------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`    | Project Settings → API → Project URL   |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Project Settings → API → anon / public |
| `SUPABASE_SERVICE_ROLE_KEY`   | Project Settings → API → service_role  |

## Notas

- A conta de admin é criada diretamente no Supabase (Authentication → Users)
  ou através do painel em `/admin/users`.
- A password é armazenada com hash bcrypt pelo Supabase Auth — nunca em texto
  simples na base de dados.
- Após o primeiro login recomenda-se alterar a password via Supabase Dashboard.
