# Repository Guidelines

## Project Structure & Module Organization
- `app/` contains Next.js App Router entry points (layouts, route segments, loading/error boundaries).
- UI building blocks live in `components/` with co-located subfolders for auth, ui primitives, icons; cross-cutting contexts and hooks are under `contexts/` and `hooks/`.
- Domain-specific logic sits in `lib/` (Internet Identity, Solana client, Motoko API helpers) and is imported via the `@/` alias defined in `tsconfig.json`.
- Internet Computer artifacts live in `src/dropsland_backend` (Motoko canister) and `src/declarations/` (generated actors). The Solana Anchor workspace is isolated under `dropsland-solana/` with `programs/`, `migrations/`, and `tests/`.

## Build, Test, and Development Commands
- Frontend dev server: `npm run dev` (port 3003); ensure `dfx start --background` is running if you need local canister calls.
- Production bundle: `npm run build`; follow with `npm run start` to smoke-test the optimized build.
- Linting: `npm run lint` (Next.js ESLint configuration). In the Anchor workspace use `yarn lint` or `yarn lint:fix`.
- Solana program: `cd dropsland-solana && anchor build`; run `anchor test` to execute the TS integration tests defined in `tests/`.

## Coding Style & Naming Conventions
- TypeScript is in `strict` mode; prefer typed hooks/services and avoid `any`.
- Use two-space indentation, PascalCase React components in `components/`, camelCase functions/vars, and kebab-case file names unless matching existing patterns.
- Co-locate Tailwind classes with components; share reusable tokens via `styles/` and `app/globals.css`. Keep side effects in hooks or `lib/` utilities.

## Testing Guidelines
- Run `npm run lint` before every PR; treat lint warnings as blockers.
- Extend coverage by adding unit tests alongside new modules (Vitest/Playwright not yet wired—document the intended harness in your PR).
- For on-chain logic, run `anchor test` against localnet and capture noteworthy assertions in the PR description.

## Commit & Pull Request Guidelines
- Follow Conventional Commits (`feat:`, `fix:`, `chore:`); keep scope concise, mirroring existing history.
- Each PR should include context, test commands run, linked issue/Notion task, and screenshots or wallet flows for UI-facing changes.
- Rebase onto `main` before requesting review; avoid force-pushing after review starts unless coordinated.

## Deployment & Environment Notes
- Use `dfx deploy` to publish the Motoko canister; the generated canister IDs are written to `.env` (see mainnet IDs in `README.md`).
- Keep secrets and RPC endpoints out of git; rely on `.env.local` for frontend configuration and update contributors when keys rotate.
