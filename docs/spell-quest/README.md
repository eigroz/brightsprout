# Spell Quest MVP

Open `site/index.html` in a modern browser. No installation, account or internet connection is required for the game itself. (The optional display font falls back gracefully when offline.)

Progress and the parent’s weekly spelling list are stored only in that browser on that device. Use the cog button for the grown-up area.

The code separates word data, session scheduling, question rendering and reporting so later versions can add worlds, profiles, richer spaced repetition, audio recordings or school-list photo import.

Only the contents of `site/` are published to the shareable GitHub Pages test site. Project notes and future private workspace files remain private.

## Production learning model

- 30 playable Year 3/4 quests grouped into six five-quest worlds.
- Quests 5, 10, 15, 20, 25 and 30 are cumulative Path Tests.
- Secure recall unlocks the next quest; completed quests remain replayable.
- Weekly school words remain a separate parent-assigned sidequest.
- Local child profiles keep progress separate on a shared device.

The progression follows the English national curriculum spelling appendix: phoneme–grapheme relationships, prefixes, suffixes, morphology, homophones and statutory Year 3/4 words.

## Cloud accounts

The repository includes `site/supabase-schema.sql` and `site/cloud-config.example.js` as the secure starting point for parent sign-up and cross-device child profiles. Before enabling accounts:

1. Create a Supabase project.
2. Run `supabase-schema.sql` in its SQL editor.
3. Configure allowed site URLs and email authentication.
4. Copy `cloud-config.example.js` to `cloud-config.js` and add the project URL and publishable anon key.
5. Keep Row Level Security enabled. Never place a service-role key in the website.

