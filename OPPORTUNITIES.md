# Top Opportunities

1. Restore the unsaved-changes prompt by letting the `beforeunload` handler observe the live `dirty` state rather than the initial false value (`src/ui/App.tsx:171`).
2. Fix the image Convert button visibility so it only shows on hover; the `display` logic currently keeps it always on (`src/ui/customBlocks/imageWithConvert.tsx:50`).
3. Use a relative favicon path so GitHub Pages deployments under `/project/` resolve it correctly (`index.html:8`).
4. Guard every `localStorage` access with try/catch (and optional existence checks) to prevent crashes in browsers that restrict storage (`src/ui/App.tsx:57`, `src/ui/App.tsx:151`, `src/ui/App.tsx:205`, `src/ui/App.tsx:562`).
5. Validate imported JSON against the BlockNote schema before calling `replaceBlocks` to avoid runtime errors from malformed files (`src/ui/App.tsx:229`).
6. Add pointer/touch support for annotation dragging so tablets and phones can reposition dots/arrows (`src/ui/customBlocks/annotatedImage.tsx:53`).
7. Replace the global `Buffer` polyfill with a lighter base64 helper so the main bundle doesn’t ship the full `buffer` package (`src/ui/App.tsx:52`).
8. Refactor `App` into composable hooks/modules; the current 600+ line component mixes editor setup, storage, exports, and UI concerns (`src/ui/App.tsx:53`).
9. Replace pervasive `any` casts with precise BlockNote/React types to surface regressions at compile time (`src/ui/App.tsx:86`, `src/ui/App.tsx:103`, `src/ui/App.tsx:301`, `src/ui/App.tsx:489`, `src/ui/customBlocks/annotatedImage.tsx:34`, `src/ui/customBlocks/imageWithConvert.tsx:6`).
10. Provide user feedback or disabling for long-running export actions so users do not double-trigger or assume the app froze (`src/ui/App.tsx:251`).

## Additional Opportunities (2025-10-02)

1. Extend the editor with explicit page-break markers that map to `@media print { break-before: page; }` so long guides can be structured intentionally before using the exact print export (`src/ui/App.tsx:558`).
2. Remember the PDF preview toggle in localStorage (or similar) so the constrained layout preference survives reloads and multi-tab editing sessions (`src/ui/App.tsx:59`, `src/ui/App.tsx:200`).
3. Throttle autosave writes; serialising the entire document on every keystroke is expensive for multi-page guides—buffer changes and commit on idle to keep typing responsive (`src/ui/App.tsx:566`).
4. Make “Clear Local Draft” safer by confirming the action and clearing both `DRAFT_KEY` and `NAME_KEY`; right now it silently leaves the filename behind (`src/ui/App.tsx:515`).
5. Add a maximum upload size (and friendly error) before converting images to data URLs so gigantic assets don’t stall the browser or blow past localStorage limits (`src/ui/App.tsx:75`).
6. Improve `slugify` to transliterate accented and non-Latin characters instead of stripping them outright; today `“Guía Álgebra”` becomes `untitled` (`src/ui/App.tsx:31`).
7. Expose the image “Convert” button to keyboard users—treat the wrapper as focusable and show the action on focus, not just pointer hover (`src/ui/customBlocks/imageWithConvert.tsx:25`).
8. Rework annotated image handles into actual buttons with keyboard equivalents (arrow-key nudging, Enter to pick up/drop) so non-pointer users can place annotations accurately (`src/ui/customBlocks/annotatedImage.tsx:129`).
9. Replace the blocking `window.confirm` prompts with a Mantine modal so confirmations match the app’s styling and remain accessible (`src/ui/App.tsx:210`, `src/ui/App.tsx:224`).
10. Extract the repeated `<img>` width-style injection into a shared helper so the HTML and MDX exporters stay in sync (`src/ui/App.tsx:257`, `src/ui/App.tsx:279`).
