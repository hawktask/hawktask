# 5. Technical Execution Workflow

**Project:** Hawktask  
**Owner:** Technical Lead  
**Status:** Reference

---

## Tech Stack (from external docs)

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript, Tailwind, packages/ui (external/tweak as needed, monorepo).  
- **Backend:** Next.js API Routes, Supabase Edge Functions (OpenClaw proxy).  
- **Database:** Supabase Postgres, RLS.  
- **Auth:** Supabase Auth (OAuth + email).  
- **AI:** OpenClaw Gateway (Node 22+), Docker.  
- **Payments:** Stripe Billing.  
- **Hosting:** Vercel (app), Hetzner (Gateway).  
- **CI/CD:** GitHub Actions (external/devops.md): ci-web, deploy-web-staging/prod, ci-db, deploy-db, ci-gateway, deploy-gateway; Stripe webhook tests with fixtures.

---

## Monorepo Structure (from external/monorepo.md and Architecture)

```
hawktask/
├── apps/web/           # Next.js SaaS
├── apps/openclaw/      # OpenClaw config + skills
├── packages/db/        # Supabase types
├── packages/ui/        # Shared components + design tokens
├── packages/animations/ # Anime.js hooks
├── docker-compose.yml # Local Gateway (and optional stack)
├── pnpm-workspace.yaml
```

Commands: `pnpm dev` (web), `pnpm docker:up` or `docker-compose up` (Gateway). Supabase local: `npx supabase start`.

---

## Development Workflow

- **Branching:** feature branches → staging → main; tags for production (devops.md).  
- **Code standards:** TypeScript strict; ESLint/Prettier; no secrets in client; validate OpenClaw outputs before sending to email/Slack (Technical Details & Tradeoffs).  
- **Testing:** Unit and integration tests; Stripe webhook handler tests with stored payloads; Gateway smoke tests.  
- **Deploy:** Staging on push to staging; production on tag or merge to main. Migrations via Supabase CLI in CI.

---

## Do / Don’t (from Technical Details & Tradeoffs)

**Do:** Enforce plan limits server-side before OpenClaw; one session/workspace per client; RLS on all tables; validate agent outputs before external I/O; log key events.  
**Don’t:** Expose Gateway to public without auth; put Supabase/Stripe secrets in client; allow arbitrary system commands; share one session across clients; create Stripe customers before upgrade.

---

## Declarative Integration (from external/declarative design)

- Treat OpenClaw as pinned, replaceable dependency; thin integration in Hawktask (e.g. packages or apps/openclaw).  
- Config isolation: OpenClaw config in apps/openclaw; app env and DB separate.  
- Upgrade flow: chore branch, bump OpenClaw version, run regression, then merge.  
- Resources and operations for integrations; shared helpers for OAuth, pagination, rate limiting where applicable.

---

## CI/CD Summary (from external/devops)

- **Web:** ci-web.yml on PR (lint, typecheck, test, build); deploy-web-staging on push to staging; deploy-web-prod on tag/main.  
- **DB:** ci-db on PR (migrations); deploy-db-staging/prod on push/tag; backup before prod migration.  
- **Gateway/workers:** ci-gateway, build and push Docker images; deploy via compose or orchestration; smoke tests.  
- **Secrets:** CI secrets for Supabase, Stripe, Vercel, registry, Gateway auth; rotate regularly; least privilege.

---

**Connected to:** [3-Scope-Definition](3-Scope-Definition.md), [4-System-Architecture-Design](4-System-Architecture-Design.md), [6-Project-Phases-Timeline](6-Project-Phases-Timeline.md)
