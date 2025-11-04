# Repository Guidelines

## Project Structure & Module Organization
Dropsland is a Next.js App Router project. Routes and API handlers live in `app/`. Shared UI belongs to `components/`. Reusable logic sits in `hooks/`, providers in `contexts/`, web3 helpers in `lib/`, and static datasets in `data/`. Global contracts reside in `types/`, while long-lived assets should stay in `public/`. Update `components.json`, `tailwind.config.ts`, and `postcss.config.mjs` together whenever you extend design tokens.

## Build, Test, and Development Commands
- `npm run dev` (or `pnpm dev`): start the Next.js dev server.
- `npm run build`: create an optimized production bundle.
- `npm run start`: serve the built app locally for smoke tests.
- `npm run lint`: run ESLint, TypeScript checks, and Tailwind class validation.

## Coding Style & Naming Conventions
Use TypeScript everywhere and rely on the strict settings in `tsconfig.json`. Keep indentation at two spaces. Name React components, contexts, and providers with `PascalCase`; use `camelCase` for hooks (`useWalletSession`) and utilities; prefer kebab-case for file names inside feature folders (`artist-profile/page.tsx`). Tailwind is the default styling layer—add utility variants through `class-variance-authority` when needed and avoid custom CSS unless updating the design system. Run `npm run lint` before each PR; fix or justify any warnings.

## Testing Guidelines
No automated test runner ships today. Until Jest or Playwright land, combine `npm run lint` with manual QA for wallet auth, token purchase, and gated content flows. When adding tests, colocate them using a `__tests__` folder next to the source (`components/foo/__tests__/foo.test.tsx`) or add `*.spec.ts` files in `lib/`. Strive to cover critical formatting, pricing, and chain interaction logic. Update this guide with the command you introduce (`npm run test`, `pnpm test:watch`, etc.).

## Commit & Pull Request Guidelines
History mixes plain statements and Conventional Commits; prefer the latter (`feat(artist): add bonding curve card`). Keep each commit focused and add context (manual steps, follow-ups) in the body. Pull requests should include a concise summary, linked Linear/GitHub issues, before/after visuals for UI updates, and a checklist of commands run (`npm run lint`, manual test notes). Tag the relevant domain owner and wait for green CI before merging.

## Environment & Security Notes
Store secrets in `.env.local` and keep this file gitignored. Prefix client-visible values with `NEXT_PUBLIC_` and keep sensitive handling inside server-only modules (`app/api/`, route handlers, or `lib/`). Rotate any leaked keys immediately and document new environment variables in `README.md` so setup stays frictionless.
