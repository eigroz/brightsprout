# Spell Quest production direction

## Product promise

Spell Quest combines explicit, curriculum-aligned spelling instruction with a motivating adventure loop. Accuracy and durable recall come first; speed is optional and never required.

## Learning loop

1. **Teach:** hear the word in a sentence and notice its sound, grapheme and morpheme chunks.
2. **Practise:** retrieve it through several representations (Hear & Spell, Missing Letters and recognition).
3. **Respond:** after an error, pause, expose the correct form, open sound/chunk support and require an active retry.
4. **Revisit:** return missed words inside the session and in cumulative Path Tests.
5. **Check:** every fifth quest is a low-stakes, primarily aural retrieval test across the preceding world.
6. **Report:** show adults first-attempt recall, errors, helpful patterns and later retention—not just a score.

## What we learn from established products

### From SpellingFrame

- Organise learning by spelling rule and curriculum stage.
- Allow teacher/parent-assigned lists alongside the core sequence.
- Diagnose at word and pattern level.
- Make sound–letter relationships and word structure visible after an error.
- Keep tests scheduled and results attributable to an individual child.

### From Times Tables Rock Stars

- Prefer “little and often” sessions.
- Give each child an identity, persistent journey and visible rank.
- Reward correct practice with virtual currency and cosmetic choices, never purchases.
- Use several modes: calm untimed learning, adaptive practice and occasional low-stakes checks.
- Make progress obvious to the child and data actionable to the adult.
- Include accessibility controls and avoid forcing speed or public comparison.

### Spell Quest’s own version

- **Trail Practice:** the core untimed teaching quests.
- **Rescue Mission:** an adaptive short session built from words in the Practice Backpack.
- **Path Test:** cumulative retrieval after each five-quest world.
- **Weekly Sidequest:** school-assigned words, separate from curriculum progression.
- **Camp:** spend earned coins on a dragon companion, outfits, lanterns and map decorations.
- **Explorer Rank:** progress from Seedling to Wordwood Champion based on secure quests and retained words, not speed.

## Content coverage

The Year 3/4 pathway currently contains 30 quests, 300 planned exposures and 230 distinct words. It covers sound–grapheme patterns, suffixes, prefixes, morphology, homophones, tricky spellings, statutory words and cumulative recall.

## Account and data model

A parent account owns one or more child profiles. Each child stores:

- year band and accessibility settings;
- completed quests and per-quest results;
- word-level attempts, first-attempt recall and help used;
- Practice Backpack scheduling state;
- weekly words, coins, stars, rank and cosmetic inventory.

The included Supabase schema uses parent ownership and Row Level Security. Children should use a nickname/avatar or child-safe access code; their email address is neither needed nor desirable. The next cloud phase must include parental consent, privacy/retention wording and account deletion/export before accepting real children’s data.

## Primary references

- Department for Education, English programmes of study and spelling appendix: https://www.gov.uk/government/publications/national-curriculum-in-england-primary-curriculum
- Times Tables Rock Stars schools and families product descriptions: https://ttrockstars.com/schools/ and https://ttrockstars.com/parents/
- SpellingFrame: https://spellingframe.co.uk/

