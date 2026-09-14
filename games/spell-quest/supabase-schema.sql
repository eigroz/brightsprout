-- Run this in a new Supabase project's SQL editor before enabling cloud accounts.
create table public.child_profiles (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references auth.users(id) on delete cascade,
  display_name text not null check (char_length(display_name) between 1 and 40),
  year_band text not null default '3-4',
  progress jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.child_profiles enable row level security;

create policy "Parents read their children" on public.child_profiles
  for select using (auth.uid() = parent_id);
create policy "Parents create their children" on public.child_profiles
  for insert with check (auth.uid() = parent_id);
create policy "Parents update their children" on public.child_profiles
  for update using (auth.uid() = parent_id) with check (auth.uid() = parent_id);
create policy "Parents delete their children" on public.child_profiles
  for delete using (auth.uid() = parent_id);

create index child_profiles_parent_id_idx on public.child_profiles(parent_id);

