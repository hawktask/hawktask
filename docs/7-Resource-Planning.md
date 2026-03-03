# 7. Resource Planning

**Project:** Hawktask  
**Owner:** Project Lead  
**Status:** Planning

---

## Team Composition (Target)

| Role | Allocation | Responsibilities |
|------|------------|------------------|
| Product Lead | 100% | Vision, scope, prioritization, success metrics |
| Technical Lead | 100% | Architecture, OpenClaw/Supabase/Stripe, security |
| Full-stack / Frontend | 100% | Next.js, packages/ui, dashboard, integrations |
| Backend / DevOps | 50–100% | API, Edge Functions, Gateway deploy, CI/CD |

Extended: Security consultant (audit); legal (compliance) as needed. Team size at peak to be set by budget and timeline.

---

## Skills Required

| Skill | Level | Notes |
|-------|--------|-------|
| Next.js, React, TypeScript | Mid–Senior | App and server actions |
| Supabase (Postgres, Auth, RLS) | Mid | Multi-tenant data |
| OpenClaw (or similar agent runtime) | Mid | Config, skills, Gateway |
| Stripe Billing | Mid | Checkout, webhooks, tier |
| Docker, CI/CD | Mid | Gateway, GitHub Actions |
| Security (RLS, auth, secrets) | Mid | Policies, audits |

Gaps: OpenClaw experience; optional dedicated DevOps for scale phase.

---

## Budget (from external/Architecture.md and Business-model)

**Infrastructure (monthly):**  
- Month 1 (MVP): ~$51 (Vercel $20, Supabase $25, Hetzner $6).  
- Month 6 (1K users): ~$150/mo.  
- Year 2 (10K): ~$800/mo (Gateway cluster).

**Revenue target (Business-model, PRD):**  
- 5K users → 15% conversion → 750 Pro @ $19/mo → ~$14,250 MRR → ~$171K ARR by month 12.  
- CAC < $50; LTV > $228.

Personnel and tools budget to be set by organization; allocate contingency (e.g. 15–20%) for delays and scope.

---

## Vendor / Partner Dependencies

- **Supabase:** DB, Auth, Edge Functions; SLA and backup strategy.  
- **Stripe:** Billing; PCI handled by Stripe.  
- **Vercel:** Hosting; deploy and preview.  
- **Hetzner:** Gateway; Docker, optional systemd.  
- **OpenClaw:** Upstream; pinned version, upgrade branch (declarative design).

---

## Onboarding and Communication

- New members: monorepo layout, external docs (PRD, Architecture, features, Technical Details & Tradeoffs), local setup (README, devops), Do/Don’t and non-negotiables.  
- Channels: async (e.g. Slack/Discord), issue tracker, weekly sync, steering cadence per Section 12.

---

**Connected to:** [2-Objectives-Success-Metrics](2-Objectives-Success-Metrics.md), [6-Project-Phases-Timeline](6-Project-Phases-Timeline.md), [8-Risk-Management](8-Risk-Management.md), [11-ROI-Value-Realization](11-ROI-Value-Realization.md)
