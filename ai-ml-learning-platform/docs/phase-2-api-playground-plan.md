# Phase 2 API Playground Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task when expanding beyond the initial Phase 2 seed.

**Goal:** Add a curated API Playground that uses APIs discovered from the public-apis repository to teach real frontend API integration.

**Architecture:** Keep Phase 2 frontend-only and safe: a typed `apiCatalog.ts` stores curated no-auth APIs, `ApiPlayground.tsx` renders the catalog, executes browser `fetch` requests, shows JSON, and tracks practiced APIs in localStorage. API-key and paid/free-tier APIs are postponed until a backend/proxy phase.

**Tech Stack:** Vite, React, TypeScript, browser fetch, localStorage, GitHub Pages.

---

## Scope

Phase 2 seed includes:
- API Playground section.
- Curated APIs from the public-apis repo: Cat Facts, Dog CEO, REST Countries, Open-Meteo, GitHub, JSONPlaceholder, DummyJSON, PokéAPI, Jikan, Open Trivia DB.
- Beginner/developer/fun explanations for every API.
- Live request runner with endpoint preview, JSON response panel, timeout, loading/error states.
- API progress tracking via localStorage.

## Safety Rules

1. Use the public-apis repo as a discovery source, not a blind import.
2. Include only no-auth browser-safe APIs in this frontend-only phase.
3. Never expose OpenAI, Gemini, Hugging Face, or other private API keys in React code.
4. Move key-based APIs to a later backend/proxy phase.
5. Every API must teach a concrete concept and include a practice task.

## Implementation Tasks

### Task 1: Create typed API catalog

**Files:**
- Create: `src/data/apiCatalog.ts`

**Steps:**
1. Define `ApiCatalogItem` type.
2. Add curated APIs with endpoint builder functions.
3. Include source repo status, teaching concepts, explanations, render hints, practice task, and safety note.
4. Export `apiLearningModules` and `apiPhaseRules`.

**Verification:** `npm run build` should typecheck the catalog.

### Task 2: Build API Playground component

**Files:**
- Create: `src/components/ApiPlayground.tsx`

**Steps:**
1. Render API list and search filter.
2. Render selected API details and input examples.
3. Build endpoint preview from user input.
4. Run `fetch` with timeout and JSON/text parsing.
5. Show loading, success, and error states.
6. Call `onMarkTried(api.id)` after successful request or manual practice marking.

**Verification:** Browser can run at least Cat Facts and Open-Meteo successfully.

### Task 3: Wire playground into main app

**Files:**
- Modify: `src/App.tsx`

**Steps:**
1. Import `ApiPlayground` and `apiCatalog`.
2. Add `activeMode` state for Lessons vs API Playground.
3. Add localStorage-backed `triedApiIds` state.
4. Add mode buttons to the sidebar.
5. Render `ApiPlayground` when active mode is `apis`.

**Verification:** Switching between Lessons and API Playground preserves lesson and API progress.

### Task 4: Style Phase 2 UI

**Files:**
- Modify: `src/App.css`

**Steps:**
1. Add sidebar mode button styles.
2. Add API hero, catalog list, workbench, detail card, response panel, and responsive styles.
3. Reuse existing progress and card visual language.

**Verification:** UI remains usable on desktop and mobile widths.

### Task 5: Build, browser-test, and deploy

**Commands:**
- `npm run build`
- `npm run dev -- --host 127.0.0.1`
- Browser-test API Playground.
- `MSYS_NO_PATHCONV=1 VITE_BASE=/Learning/ npm run build`
- Deploy `dist/` to `gh-pages`.

**Verification:** Live GitHub Pages app loads Phase 2 and can run no-auth APIs from the browser.
