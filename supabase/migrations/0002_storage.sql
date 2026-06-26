-- Storage bucket for project images (main, logo, cover photos).

insert into storage.buckets (id, name, public)
values ('project-images', 'project-images', true)
on conflict (id) do nothing;

create policy "public read project-images" on storage.objects for select
  using (bucket_id = 'project-images');

create policy "admin write project-images" on storage.objects for all
  using (bucket_id = 'project-images' and auth.role() = 'authenticated')
  with check (bucket_id = 'project-images' and auth.role() = 'authenticated');
