# BrightSprites

A playful, responsive education-game hub for children aged 4–12. Learners can browse by age and subject, then play focused learning games directly on the site.

## What is included

- Responsive homepage and game catalogue
- Age filters for 4–6, 7–9 and 10–12
- Subject filters for spelling, English and maths
- A complete five-round Word Builder spelling game
- Spell Quest with 30 Year 3/4 quests, path tests, weekly words, local child profiles, narrator controls and an initial confidence tracker
- Accessible semantic markup, keyboard-friendly controls and reduced setup
- No build step; Spell Quest uses an optional external spreadsheet reader for school lists

## Run locally

Open `index.html` in a browser, or serve the folder with any static web server.

## Publish

Live hub: https://brightsprites.pages.dev/

Spell Quest: https://brightsprites.pages.dev/games/spell-quest/

Cloudflare Pages project `brightsprites` automatically publishes the `main` branch of `eigroz/brightsprout`. Build command is empty and output directory is `.`. The GitHub repository retains its original name. The original `brightsprout` Cloudflare project is retained for existing links; these BrightSprites addresses are the current share links.

Child progress is saved locally per browser and site address; source-code backup on GitHub does not back up child records. Accounts and cross-device synchronisation are not active yet.

## Project direction

New games can be added to the catalogue in `app.js`. A future iteration can move each game into its own module while keeping the catalogue experience unchanged.
