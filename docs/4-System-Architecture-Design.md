# 4. System Architecture & Technical Design

**Connected to:** Section 3 (Scope), Section 5 (Timeline), Section 7 (Risk), Section 12 (Documentation)

---

## Architecture Vision

Hawktask is a three-layer system: (1) Presentation (Next.js on Vercel) for marketing and dashboard, (2) Application and data (Supabase + Stripe) for auth, multi-tenant data, and billing, (3) AI and automation (OpenClaw Gateway on Hetzner) for client-aware agents, sessions, and skills. The architecture prioritizes client isolation (one workspace per client), server-side orchestration only, and freemium enforcement in the backend. All components use well-defined interfaces (API routes, Edge Functions, webhooks).

---

## High-Level Architecture

```
User → Next.js (Vercel) → Supabase Auth + DB + Edge Functions
                ↓
         OpenClaw Gateway (Hetzner Docker)
                ↓
         Stripe (webhooks → Supabase tier)
```

**Detailed (from external/Architecture.md and tweak as needed):**
- **Vercel:** Next.js app (marketing, dashboard, API routes).  
- **Supabase:** Postgres (users, clients, proposals, events), Auth, RLS, Edge Functions as proxy to OpenClaw.  
- **OpenClaw Gateway:** Workspaces = user/client mapping; Channels = email/Slack; Sessions = client conversations; Skills = proposal/automation; Tools = browser, email, Slack.  
- **Stripe:** Checkout, Billing, webhooks → update tier in Supabase → enforce limits.

---

## Component Summary

| Component | Tech | Purpose |
|-----------|------|---------|
| apps/web | Next.js 15+, React 19, TypeScript | Frontend, server actions, API routes |
| packages/ui | Tailwind, design tokens | Shared components, bento/clay/glass/neumorphic |
| packages/db | TypeScript types | Supabase schema types (users, clients, proposals, events) |
| packages/animations | Anime.js | Fade-in, hover (optional) |
| apps/openclaw | Config, skills | Gateway config, proposal/automation skills |
| Supabase | Postgres, Auth, RLS, Edge | Data, auth, proxy to OpenClaw |
| OpenClaw Gateway | Node 22+, Docker | Sessions, tools, skills |
| Stripe | Billing API, webhooks | Subscriptions, tier enforcement |

---

## Architecture Decisions (ADRs)

### ADR-001: OpenClaw as orchestration core
**Status:** Accepted.  
**Context:** Need multi-channel, session-aware agents. Alternatives: custom LangChain/LangGraph.  
**Decision:** Use OpenClaw Gateway for sessions, tools, skills. Self-host on Hetzner.  
**Consequences:** Control and flexibility; we own Gateway reliability and upgrades. See external/Technical Details & Tradeoffs.

### ADR-002: Supabase for multi-tenant SaaS
**Status:** Accepted.  
**Context:** Need Auth, Postgres, and tenant isolation.  
**Decision:** Supabase with RLS on all tables; tier and usage in Supabase.  
**Consequences:** Faster delivery; dependent on Supabase SLA. Backups and migration path if needed.

### ADR-003: Freemium fixed limits (not metered)
**Status:** Accepted.  
**Context:** Simple vs usage-based billing.  
**Decision:** Fixed limits (clients, proposals/month, channels); Stripe for subscriptions; enforce server-side.  
**Consequences:** Clear UX and conversion path; usage-based add-ons possible later.

### ADR-004: Vertical focus (freelancers only in v1)
**Status:** Accepted.  
**Context:** Vertical vs horizontal product.  
**Decision:** All features and UX for freelancers/solopreneurs; other verticals only after PMF.  
**Consequences:** Stronger fit and conversion; smaller initial TAM.

### ADR-005: No direct client-to-OpenClaw or client-to-Stripe
**Status:** Accepted.  
**Context:** Security and consistency.  
**Decision:** All OpenClaw and Stripe access via backend (API routes, Edge Functions).  
**Consequences:** No secret leakage; single place for tier and limit checks.

---

## Non-Functional Requirements

| Requirement | Target | Owner |
|-------------|--------|-------|
| API response (p95) | &lt;500ms | DevOps |
| OpenClaw Gateway uptime | 99.5%+ | DevOps |
| Error rate | &lt;1% | Tech Lead |
| Proposal generation | &lt;120s | Tech Lead |
| Security | Zero critical vulnerabilities; RLS on all tables | Security / Tech Lead |
| Code coverage | 80%+ (target) | QA / Tech Lead |

---

## Technology Stack Summary

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Frontend | Next.js 15+, React 19, TypeScript, Tailwind | Existing stack, Vercel deploy |
| UI | packages/ui, design tokens | Single design system |
| Backend API | Next.js API Routes, Supabase Edge | Business logic, OpenClaw proxy |
| Database | Supabase (Postgres 15+) | Auth, RLS, realtime |
| Auth | Supabase Auth (OAuth + email) | Built-in, multi-tenant |
| AI | OpenClaw Gateway (Node 22+) | Multi-channel, sessions, skills |
| Payments | Stripe Billing | Freemium, subscriptions |
| Hosting | Vercel (frontend), Hetzner (Gateway) | Cost, scale path |
| CI/CD | GitHub Actions | Lint, test, deploy (see external/devops.md) |

---

**Connected to:** [3-Scope-Definition](3-Scope-Definition.md), [5-Technical-Execution-Workflow](5-Technical-Execution-Workflow.md), [6-Project-Phases-Timeline](6-Project-Phases-Timeline.md), [8-Risk-Management](8-Risk-Management.md)
