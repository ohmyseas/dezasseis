# Dezasseis — HANDOFF v1.0.0

Ship date: 2026-08-23  
Status: SHIPPED — 16 tools, PWA, TTS via ElevenLabs, Vercel deploy

---

## Overview

**Dezasseis** is a single-file PWA (`index.html`) for learning European Portuguese (pt-PT). Built for Ilya, targeting the 2026 Lisbon relocation. Zero dependencies, no build step, runs offline via service worker.

- Live: https://dezasseis.vercel.app  
- Repo: https://github.com/ohmyseas/dezasseis  
- Local: `D:\Projects\dezasseis`  
- API: `D:\Projects\dezasseis\api\speak.js` (Vercel serverless, ElevenLabs TTS)

---

## Stack

| Layer | Tech |
|-------|------|
| App | Single-file HTML/CSS/JS (`index.html`) |
| Hosting | Vercel (static + serverless) |
| TTS | ElevenLabs API via `/api/speak` serverless function |
| Offline | Service Worker (`service-worker.js`) |
| PWA | `manifest.json` + icons (192/512/maskable) |
| State | `localStorage['dezasseis:v1']` (verb weights, tool opens, voice pref) |
| Data | Inline JS constants (no external DB) |

---

## 16 Tool Inventory

| # | Tool key | Portuguese name | Type | Data block |
|---|----------|-----------------|------|------------|
| 1 | `do-espanhol` | Do Espanhol | 4-tab bridge | Inline (SHIFT_TABLE, NASAL_PAIRS, DELTA_CARDS, FALSE_FRIENDS_DATA bridge view) |
| 2 | `ouvido` | Ouvido | Pares Mínimos + Fala Real | `OUVIDO_DATA` (`OUVIDO_MINIMAL_PAIRS` + `OUVIDO_NATURAL`) |
| 3 | `situacao` | Situação | 6 dialogues | `SITUACAO_DATA` |
| 4 | `frases` | Frases Essenciais | 99 phrases, 7 categories | `PHRASES_DATA` |
| 5 | `estudo` | Estudo (16 lições) | 16-lesson module + quiz | `LESSONS` |
| 6 | `verbos` | Máquina de Verbos | 182 verbs × 9 tenses + drill | `VERBS`, `TENSE_META`, `VERB_CATEGORIES_PT` |
| 7 | `cola` | Cola Gramatical | 7 grammar categories | `GLUE_DATA` |
| 8 | `por-para` | Por vs Para | 30 pairs + rules | `POR_PARA_DATA` |
| 9 | `ser-estar` | Ser vs Estar | Examples + drill | `SER_ESTAR_DATA` |
| 10 | `conjuntivo` | Conjuntivo | Subjunctive triggers | `SUBJ_DATA` |
| 11 | `falsos` | Falsos Amigos | 51+ false friends | `FALSE_FRIENDS_DATA` |
| 12 | `objetos` | Objetos | 250+ nouns with gender | `OBJETOS_DATA` |
| 13 | `numeros` | Números | Number converter | `NUMBERS_LANDMARKS`, `ORDINALS_PT` |
| 14 | `tempo` | Tempo e Datas | Time/date vocab | `TIME_DATA` |
| 15 | `calao` | Calão de Portugal | 55 slang terms | `SLANG_DATA` |
| 16 | `ditados` | Ditados e Cultura | 12 proverbs + 40 cultural items | `CULTURAL_DATA` |

---

## Data Block Locations in index.html

| Data block | Approximate line range |
|------------|----------------------|
| `TENSE_THEORY` | ~1745 |
| `PRONOUNS_PT`, `TENSE_META` | ~2519 |
| `VERB_CATEGORIES_PT`, `VERB_META` | ~2634 |
| `IRREGULAR_OVERRIDES` | ~2780 |
| `VERB_LIST` + `VERBS` build | ~3267 |
| `LESSONS` (16 lessons) | ~3348–4133 |
| `PHRASES_DATA` | ~4200–4623 |
| `OBJETOS_DATA` | ~4640–4986 |
| `FALSE_FRIENDS_DATA` | ~5000–5105 |
| `OUVIDO_MINIMAL_PAIRS` + `OUVIDO_NATURAL` | ~5120–5638 |
| `SITUACAO_DATA` | ~5660–6023 |
| `SLANG_DATA` | ~6030–6332 |
| `CULTURAL_DATA` | ~6340–6443 |
| `SER_ESTAR_DATA` | ~6450–6589 |
| `SUBJ_DATA` | ~6600–6720 |
| `NUMBERS_LANDMARKS`, `ORDINALS_PT` | ~6730–6881 |
| `TIME_DATA` | ~6890–7077 |
| `GLUE_DATA` | ~7080–7279 |
| `POR_PARA_DATA` | ~7280–7407 |

---

## Voice Config

| Voice | ElevenLabs ID | Gender |
|-------|--------------|--------|
| Joana (default) | `nJ5NFqyKb8kn9JBPmo6i` | Female, pt-PT |
| Paulo PT | `aLFUti4k8YKvtQGXv0UO` | Male, pt-PT |
| Sarah (fallback) | ElevenLabs default | Female, EN |

Voice preference stored in `localStorage['dezasseis:voice']` (`'joana'` or `'paulo'`).  
Fallback signalled via `X-Voice-Fallback: sarah` response header from `/api/speak`.

---

## Key Files

```
index.html          — entire app (~7900 lines)
api/speak.js        — ElevenLabs TTS serverless function
service-worker.js   — offline caching
manifest.json       — PWA manifest
audio/              — 15 pt-PT Wikimedia audio clips (CC BY-SA)
audio/manifest.json — clip metadata (speaker, license, transcript)
```

---

## localStorage Schema

Key: `dezasseis:v1`

```json
{
  "verb_weights": {
    "falar|presente|0": { "correct": 3, "wrong": 1 }
  },
  "tool_opens": {
    "verbos": 12,
    "frases": 5
  }
}
```

Separate keys:
- `dezasseis:voice` — `'joana'` or `'paulo'`
- `dezasseis:ttsKey` — optional debug API key

---

## Schema Validator

`SCHEMAS` object near line 7830 validates all data blocks on `DOMContentLoaded`. Failed schemas hide their tiles and print a console error. Any data edit should verify the schema validator passes.

---

## Non-Goals (v1.0)

- No user accounts or sync
- No server-side state
- No spaced repetition algorithm (verb drill uses simple weight = 1 + wrong×2)
- No Brazilian Portuguese content
- No audio recording / speech recognition
- No lesson progression gating (unlock button bypasses locks)
- No analytics
- No A/B testing

---

## Known Deferred Items

| Item | Notes |
|------|-------|
| `verify: true` items (107 total) | Falsos Amigos + Calão items flagged for native speaker review |
| Icon regeneration | Existing icons are placeholders from Dieciséis; need Portugal-themed v1.1 refresh |
| Fala Real audio | Currently using TTS placeholders; real recorded clips would improve authenticity |
| Lições 9-16 content | Locked stubs; locked behind "Em breve" — need authoring |
| Verb drill tense expansion | Currently drills 4 tenses; 5 recognize-only tenses excluded by design |
| Boot-time voice ping | `/api/speak?ping=1` endpoint not yet implemented on server; client handles gracefully |

---

## Deploy

```
git push origin main     # auto-deploys to Vercel
git tag v1.0.0
git push --tags
```

Vercel project: `dezasseis` — zero-config, root directory.

Environment variables required:
- `ELEVENLABS_API_KEY` — ElevenLabs API key (set in Vercel dashboard)

---

## Adding a New Tool

1. Add a `<button data-tool="new-tool" aria-label="...">` tile in appropriate `<section>` in `index.html`
2. Add `window.NEW_DATA = NEW_DATA` and `SCHEMAS.NEW_DATA = v => ...` entry
3. Add `} else if (name === 'new-tool') { renderNewTool(); }` to `openTool()` (bottom function, ~line 7785)
4. Add `NEW_DATA: 'new-tool'` to `toolFromBlock` in `hideToolFor()`
5. Author `renderNewTool()` function
6. Run schema validator in browser console: `validateAll()`
