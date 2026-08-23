# Dezasseis

A Portuguese learning PWA for European Portuguese (pt-PT), built for the Lisbon move.

**Live:** https://dezasseis.vercel.app

---

## What It Is

Dezasseis teaches **português europeu** — Portugal Portuguese, not Brazilian. Vocabulary, spelling, pronouns, and verb forms reflect Lisbon usage. The name is Portuguese for "sixteen" (16 tools).

Single-file PWA. No framework. No build step. Installs on Android/iOS home screen, works partially offline.

---

## 16 Tools

| Category | Tools |
|----------|-------|
| Start here | Do Espanhol (ES→PT bridge), Ouvido (listening), Situação (dialogues), Frases Essenciais (99 phrases) |
| Study | Estudo (16 lessons), Máquina de Verbos (182 verbs × 9 tenses + drill) |
| Grammar | Cola Gramatical, Por vs Para, Ser vs Estar, Conjuntivo, Falsos Amigos |
| Reference | Objetos (250+ nouns), Números, Tempo e Datas |
| Living Portuguese | Calão de Portugal (slang), Ditados e Cultura |

---

## Voices

TTS via ElevenLabs: **Joana** (female, pt-PT default) and **Paulo PT** (male). Switch in the 🔊 Áudio menu. ElevenLabs API key required on the server (set via Vercel env var `ELEVENLABS_API_KEY`).

---

## Stack

- Vanilla HTML/CSS/JS — no build step, no dependencies
- Vercel (static hosting + serverless `/api/speak`)
- ElevenLabs for text-to-speech
- Service Worker for offline caching

---

## Local Development

```bash
# Install Vercel CLI
npm i -g vercel

# Run locally (with TTS proxy)
vercel dev

# Open http://localhost:3000
```

Set `ELEVENLABS_API_KEY` in `.env.local` for TTS to work locally.

---

## Deploy

```bash
git push origin main   # auto-deploys to Vercel on push
```

---

## Audio Credits

The Ouvido (listening) tool uses 15 audio clips from Wikimedia Commons / Lingua Libre under CC BY-SA:

- **Nelson Ricardo 2500** — 10 clips (CC BY-SA 4.0 / Wikimedia Lingua Libre)
- **Santamarcanda** — 2 clips (CC BY-SA 4.0 / Wikimedia Lingua Libre)
- **Malafaya** — 3 clips (CC BY-SA 3.0 / Wikimedia Commons)

Full attribution list in the app's About panel (ℹ button).

---

## v1.0.0

Released 2026-08-23. All 16 tools functional. 182 verbs × 9 tenses. 16 lessons (8 fully authored, 8 locked stubs). 99 phrases. 250+ nouns. Offline-capable PWA.
