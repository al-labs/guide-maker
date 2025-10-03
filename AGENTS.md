Guide‑Maker — Agent Instructions

Scope
- This file applies to the entire `guide-maker` directory tree.

Project Overview
- Tech stack: Vite + React 18 + TypeScript 5.
- UI libs: BlockNote (`@blocknote/*`), Mantine (`@mantine/*`), React PDF (`@react-pdf/renderer`).
- Client-only app: no backend calls; all data stays in the browser until export.

Runbook
- Node: use Node 20 (matches CI). Use `npm ci` for clean installs.
- Dev: `npm run dev` (Vite dev server).
- Build: `npm run build` (outputs `dist/`).
- Preview build: `npm run preview` (serves `dist/` locally on port 5050).

Deployment
- GitHub Pages via Actions (`.github/workflows/deploy.yml`).
- On push to `main`, CI runs `npm ci && npm run build` and publishes `dist/`.
- Do not rely on committed `dist/`; prefer CI-generated builds.

Source Layout
- Entry HTML: `index.html` (keeps inline styles for print/export behavior).
- App entry: `src/main.tsx` → mounts `App` into `#root`.
- Main UI/logic: `src/ui/App.tsx`.
- Custom BlockNote blocks: `src/ui/customBlocks/*.tsx` (e.g., alert, annotatedImage, imageWithConvert).
- Static assets: `public/` (served at site root).

Coding Guidelines
- Language: TypeScript with strict mode (see `tsconfig.json`).
- React: functional components + hooks only. Avoid class components.
- Styling: Keep the existing approach (global styles in `index.html`; inline styles in components where needed for exports/print). Avoid introducing CSS frameworks beyond Mantine/BlockNote.
- File naming: Components in PascalCase when appropriate (`App.tsx`); custom blocks follow existing camelCase filenames (e.g., `annotatedImage.tsx`). Be consistent with current patterns.
- Imports for export-time CSS: use the `?raw` pattern as already implemented in `App.tsx` for BlockNote/Mantine styles.
- Image/file handling: keep uploads as data URLs (no external/network storage) to preserve the "client-only" model.
- Keys and local storage: preserve `DRAFT_KEY` and `NAME_KEY` semantics used for autosave and dirty tracking.
- Vite config: keep `base: './'` so the app works under GitHub Pages project paths.
- Performance: if adding heavy deps used at runtime, consider Vite `optimizeDeps.include` updates in `vite.config.ts` to avoid dev-time dynamic import issues.

What Not To Do (unless explicitly requested)
- Do not add any network calls, telemetry, or backend integration.
- Do not commit build artifacts (`dist/`) or local logs; rely on CI for deployment artifacts.
- Do not remove or rename `#root`, `index.html` structural elements that the app depends on.
- Do not change the print/preview CSS defaults that ensure A4 layout without discussing impact.

PR / Change Expectations
- Keep changes minimal and focused; match existing code style (2 spaces, semicolons, named exports where used).
- Include short, imperative commit messages.
- If a change affects import/export formats (JSON/HTML/MDX) or print output, call this out in the description.

Local QA Checklist
- Dev server starts (`npm run dev`) without console errors.
- Basic flows work: new doc, import JSON, export JSON/HTML/MDX, autosave and restore prompt, image paste/drag, custom blocks behaviors.
- Print preview still renders to A4 width; PDF preview toggle continues to work if applicable.

Notes for Future Enhancements (optional)
- If adding new custom blocks, place them under `src/ui/customBlocks/` and register them in the schema in `App.tsx`.
- Consider adding ESLint/Prettier only if requested; there is no linter configured today.

