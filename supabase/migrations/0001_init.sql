-- NexusCraft schema: stack technologies, projects, and site links.

create table if not exists stack_items (
  id smallint primary key check (id between 1 and 8),
  name text not null,
  icon_slug text not null,
  sort_order smallint not null default 1
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  tagline text not null default '',
  description text not null default '',
  description_long text not null default '',
  status text not null default 'Em planeamento'
    check (status in ('Em planeamento', 'Em desenvolvimento', 'Lançado')),
  main_image text,
  logo_image text,
  cover_image text,
  sort_order smallint not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists site_links (
  id uuid primary key default gen_random_uuid(),
  category text not null check (category in ('store', 'contact')),
  label text not null,
  href text not null default '#',
  icon_slug text not null default 'globe',
  sort_order smallint not null default 0
);

-- Seed the 8 fixed stack slots and the default store links.
insert into stack_items (id, name, icon_slug, sort_order) values
  (1, 'Next.js', 'siNextdotjs', 1),
  (2, 'React', 'siReact', 2),
  (3, 'TypeScript', 'siTypescript', 3),
  (4, 'Tailwind CSS', 'siTailwindcss', 4),
  (5, 'shadcn/ui', 'siShadcnui', 5),
  (6, 'Supabase', 'siSupabase', 6),
  (7, 'PostgreSQL', 'siPostgresql', 7),
  (8, 'Node.js', 'siNodedotjs', 8)
on conflict (id) do nothing;

insert into site_links (category, label, href, icon_slug, sort_order) values
  ('store', 'Google Play', '#', 'smartphone', 1),
  ('store', 'App Store', '#', 'apple', 2),
  ('store', 'Chrome Web Store', '#', 'globe', 3)
on conflict do nothing;

alter table stack_items enable row level security;
alter table projects enable row level security;
alter table site_links enable row level security;

-- Public read access for the site, writes restricted to authenticated admins.
create policy "public read stack_items" on stack_items for select using (true);
create policy "public read projects" on projects for select using (true);
create policy "public read site_links" on site_links for select using (true);

create policy "admin write stack_items" on stack_items for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin write projects" on projects for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin write site_links" on site_links for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
