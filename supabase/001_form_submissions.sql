create table public.form_submissions (
  id uuid primary key default gen_random_uuid(),
  form text not null check (form in ('diagnostico','registro_taller','evaluacion','satisfaccion')),
  payload jsonb not null,
  created_at timestamptz not null default now()
);

create index on public.form_submissions (form, created_at desc);

alter table public.form_submissions enable row level security;
