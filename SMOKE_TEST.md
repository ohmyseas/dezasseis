# Dezasseis — SMOKE TEST v1.0.0

Manual checklist before tagging a release. Run on Chrome (Android) + desktop Safari minimum.

---

## Global / Navigation

- [ ] Home screen loads without console errors
- [ ] All 16 tool tiles visible with correct Portuguese labels
- [ ] Clicking each tile opens the correct tool
- [ ] Back button (← Voltar) returns to home
- [ ] Usage banner appears after 1+ tool opens (shows "Abriste recentemente:")
- [ ] Header ℹ button opens About panel
- [ ] About panel shows v1.0.0, verify count, attributions, GitHub/Vercel links
- [ ] About panel closes with ✕, backdrop click, or Escape
- [ ] 🔊 Áudio chip opens Audio Setup modal
- [ ] Audio modal closes with ✕, backdrop click, or Escape

---

## Audio Setup

- [ ] Voice toggle: select Joana → test → hear female voice
- [ ] Voice toggle: select Paulo PT → test → hear male voice
- [ ] Preference persists after page reload
- [ ] Diagnostic panel shows "OK — voz=X, NNN bytes" on success
- [ ] Empty API key field: shows "Deixe em branco" hint
- [ ] Forvo link opens forvo.com in new tab

---

## Máquina de Verbos

- [ ] Opens verb list with category groups
- [ ] Search filters verbs in real time
- [ ] Category chip filters to single group
- [ ] Clicking a verb opens detail view with 9 tense sections
- [ ] 🔊 buttons on form rows trigger TTS
- [ ] ▶ Ouvir tudo speaks all 6 forms in sequence
- [ ] ℹ tense button reveals theory panel
- [ ] ▶ Praticar este verbo opens drill
- [ ] Drill: correct answer marks green + Próximo
- [ ] Drill: wrong answer marks red + shows correct form
- [ ] Accent-only mismatch shows "atenção ao acento" warning
- [ ] Drill score % updates each answer

---

## Estudo (16 Lições)

- [ ] Lesson list shows lições 1-8 unlocked, 9-16 locked
- [ ] Opening Lição 1 shows notes + vocab + tables
- [ ] Vocab 🔊 buttons speak Portuguese
- [ ] Quiz tab shows multiple-choice questions
- [ ] Correct answer highlights green, wrong highlights red
- [ ] Quiz result shows score % with pass/fail colour
- [ ] Lesson score badge appears after completion
- [ ] Unlock button reveals locked lessons

---

## Frases Essenciais

- [ ] Opens with category tabs (all, viagem, restaurante, etc.)
- [ ] Tab filter shows only matching phrases
- [ ] 🔊 button on phrase speaks TTS
- [ ] Clicking phrase row also speaks TTS

---

## Ouvido

- [ ] Pares Mínimos tab shows play button + two choices
- [ ] ▶ plays audio clip
- [ ] Clicking correct choice scores +1 correct
- [ ] Clicking wrong choice scores +1 wrong
- [ ] Fala Real tab shows audio clips with speed controls (1×/0.75×)
- [ ] Speed controls adjust playback rate

---

## Situação

- [ ] Situation picker shows 6+ scenario tiles
- [ ] Opening a scenario shows dialogue bubbles
- [ ] User bubble speak button triggers TTS
- [ ] User choice panel appears; selecting correct choice advances dialogue
- [ ] Incorrect choice gives feedback
- [ ] Dialogue completion shows success screen
- [ ] Script view shows full dialogue

---

## Do Espanhol (ES→PT Bridge)

- [ ] Sound Shifts tab shows comparison table
- [ ] 🔊 buttons in table speak PT word
- [ ] Vogais Nasais tab shows nasal pairs with play buttons
- [ ] Gramática Delta tab shows accordion flip-cards
- [ ] Clicking card header expands body
- [ ] Falsos Amigos tab shows ES/PT false friends

---

## Falsos Amigos

- [ ] Opens with filter tabs (Todos, PT↔ES, PT↔EN)
- [ ] Items show hot badge where hot:true
- [ ] verify badge visible on items marked verify:true

---

## Objetos

- [ ] Category tabs visible
- [ ] Noun tiles show article (o/a) + noun
- [ ] Masculine/feminine badge colour differs
- [ ] ES-diff badge visible where esGenderDiffers:true
- [ ] Clicking tile speaks TTS

---

## Ser vs Estar

- [ ] Rules card shows SER and ESTAR columns
- [ ] Examples list with SER/ESTAR/CONTRAST badges
- [ ] 🔊 speak buttons on examples
- [ ] ▶ Praticar opens ser/estar drill
- [ ] Drill choices highlight correct/incorrect

---

## Conjuntivo

- [ ] Intro card explains subjunctive triggers
- [ ] Trigger groups show examples with trigger word badges
- [ ] 🔊 buttons on examples speak TTS

---

## Cola Gramatical, Por vs Para, Números, Tempo e Datas

- [ ] Cola Gramatical: 7 category tabs each with 10+ items
- [ ] Por vs Para: intro + contractions table + 30 pairs side-by-side
- [ ] Números: number input converter works (type 42 → quarenta e dois)
- [ ] Tempo e Datas: all category tabs load correctly

---

## Calão de Portugal

- [ ] Filter chips filter by register/category
- [ ] verify badge visible on unconfirmed slang
- [ ] 🔊 button speaks TTS

---

## Ditados e Cultura

- [ ] Ditados tab shows 12+ proverbs
- [ ] Cultura tab shows 20+ cultural terms
- [ ] 🔊 button speaks culture term

---

## PWA

- [ ] Android Chrome: "Add to Home Screen" prompt appears or install available
- [ ] PWA installed: launches in standalone mode (no browser chrome)
- [ ] App icon shows on home screen
- [ ] Offline: service worker serves cached assets (home screen loads)
- [ ] Offline: TTS fails gracefully (network error toast shown)

---

## A11y

- [ ] All 16 home grid buttons have aria-label
- [ ] Tab navigation reaches all interactive elements
- [ ] Enter/Space activates role=button elements (audio chip, info button)
- [ ] Focus outlines visible on keyboard navigation
- [ ] Modals: focus moves to close button on open
- [ ] Screen reader: modal has role=dialog + aria-labelledby

---

## Error UX

- [ ] Invalid API key (simulate with bad key): red toast "Chave TTS inválida"
- [ ] Network offline during speak: error toast "Erro de rede"
- [ ] X-Voice-Fallback: sarah header → yellow toast "Voz indisponível — a usar Sarah"

---

**Total items: 82**

Last run: _not yet run_
Tester: _
Build: v1.0.0
