# AI/ML/LLM Learning Platform Implementation Plan

> For Hermes: use Claude Code for curriculum architecture/review and Codex or direct edits for fast React implementation.

Goal: Build an interactive local learning platform for a complete beginner to learn AI, ML, Deep Learning, LLMs, agents, tooling, and production architecture from the supplied sources.

Architecture: A Vite + React + TypeScript single-page app with local structured lesson data. Lessons are original teaching material with source links, quizzes, glossary callouts, formula breakdowns, algorithm steps, mistake warnings, and exercises. The first version is a polished offline-capable MVP; later ingestion scripts can expand the full curriculum from cloned/source-indexed material.

Tech Stack: Vite, React, TypeScript, CSS modules/plain CSS, local JSON/TS content files.

---

## Task 1: Source map and curriculum skeleton

Objective: Store the provided sources and define curriculum modules.

Files:
- Create: docs/source-map.md
- Create: src/data/curriculum.ts

Steps:
1. List every source URL with category.
2. Define lesson schema: module, lesson, sections, glossary, quiz, exercises, references.
3. Define beginner-to-advanced learning path.
4. Verify TypeScript build passes.

## Task 2: App shell and navigation

Objective: Replace starter Vite UI with learning dashboard.

Files:
- Modify: src/App.tsx
- Modify: src/App.css
- Modify: src/index.css

Steps:
1. Create sidebar/module navigation.
2. Create lesson detail view.
3. Add search/filter by concept and jargon.
4. Add progress state via localStorage.
5. Verify with npm run build.

## Task 3: Lesson content components

Objective: Render beginner + developer explanations deeply.

Files:
- Create: src/components/LessonView.tsx
- Create: src/components/QuizCard.tsx
- Create: src/components/GlossaryTerm.tsx
- Create: src/components/FormulaBreakdown.tsx

Steps:
1. Render sections: simple explanation, developer explanation, jargon, formulas, algorithms, approaches, mistakes, worked example, practice ladder.
2. Add interactive quiz with immediate feedback.
3. Add collapsible glossary and sample answers.
4. Verify with build.

## Task 4: Seed foundational content

Objective: Add first complete beginner lessons with the required depth.

Files:
- Modify: src/data/curriculum.ts

Seed lessons:
1. What AI, ML, Deep Learning, and LLMs are.
2. Supervised learning and linear regression.
3. Gradient descent and loss functions.
4. Neural networks and backpropagation.
5. Embeddings, tokens, transformers, and attention.
6. Prompting, tools/function calling, RAG, agents, MCP.
7. Production AI systems: evaluation, safety, observability, cost, architecture.

## Task 5: Verification

Objective: Ensure project works locally.

Commands:
- npm run build
- npm run dev

Expected:
- Build succeeds.
- The app opens with curriculum modules, interactive quiz cards, glossary, formulas, and practice problems.
