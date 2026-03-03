# 3. Scope Definition

**Connected to:** Section 1 (Executive Summary), Section 5 (Timeline), Section 7 (Risk)

---

## In-Scope Deliverables

### Phase 1 (Foundation, Weeks 1–4)

- Monorepo (apps/web, apps/openclaw, packages/db, packages/ui, packages/animations).  
- Supabase project: Auth, RLS, schema (users, clients, proposals, events).  
- Next.js frontend: landing, dashboard shell, docs shell.  
- OpenClaw Gateway deployment (Docker); config in apps/openclaw.  
- Stripe integration: Checkout, webhooks, tier in Supabase.  
- Design system and core UI components (see README and packages/ui).

### Phase 2 (MVP, Weeks 5–8)

**Product core (from external/features.md):**
- User accounts and authentication (Supabase Auth, OAuth).  
- Freemium plans (Free, Pro); basic billing with Stripe.  
- Clients: create, edit, archive; one workspace per client; client timeline.  
- Proposals: generate draft, edit, store per client, send by email, send to Slack.  
- Channels: connect one email account, one Slack workspace; map channel/email to client.  
- Usage and limits: Free (3 clients, limited proposals/month, limited channels); Pro higher/unlimited; in-app messaging at limits.  
- Basic analytics: client count, proposals per client, last proposal date.  
- Admin and security: app admin role, basic audit log, RLS.

### Phase 3 (Automation, Weeks 9–12)

- Detect RFP emails and suggest creating proposals.  
- Suggest reminders when proposals stay unanswered.  
- Simple invoice tracker and manual reminders.  
- Testimonial harvesting (draft request, send, store).  
- Template library and saved snippets.

### Phase 4 (Scale, Weeks 13+)

- More channels (Discord, WhatsApp).  
- Team collaboration (shared account, roles).  
- Insights: proposal acceptance rate, revenue summary, activity reports.  
- Reliability: horizontal scaling, more Gateway instances, rate limiting.

---

## Out-of-Scope (Current Phase)

- Full project management (Gantt, time tracking, kanban).  
- On-prem/self-hosted Hawktask SaaS (only Gateway is self-hosted).  
- Non-freelancer verticals (family, property, healthcare) in v1.  
- Video/voice calls.  
- Mobile native apps (web responsive only).  
- Complex billing (trials, coupons, seat+usage hybrid) beyond basic freemium.  
- GraphQL (MVP uses REST/server actions).  
- DAO/governance for product decisions.

See external/Technical Details & Tradeoffs.md and PRD “Won’t Have”.

---

## Constraints

**Budget:** Month 1 MVP ~$51/mo (Vercel $20, Supabase $25, Hetzner $6). Scale to ~$150/mo at 1K users (external/Architecture.md).  
**Technical:** Client isolation mandatory (one OpenClaw session/workspace per client). All AI and billing server-side. RLS on all tables.  
**Timeline:** MVP target 8 weeks from kickoff.  
**Resources:** Team size and roles per Section 7; key person dependency to be documented.

---

## Assumptions

- OpenClaw Gateway stable and supportable; we can run and upgrade it (pinned version, upgrade branch).  
- Supabase and Stripe meet multi-tenant and billing needs at target scale.  
- Freelancers will adopt a vertical tool with clear limits and upgrade path.  
- Free tier (3 clients, basic proposals) delivers real value and drives upgrades.

---

## Change Control

**Tier 1 (small, &lt;4h):** Tech Lead can approve.  
**Tier 2 (medium, 4–20h):** Product + Tech Lead; scope change log.  
**Tier 3 (large, &gt;20h):** Steering Committee; must cut equivalent work or slip timeline/budget.

Scope change form: Feature name, business case, effort, timeline/budget impact, what gets cut, approval.

---

## Specification Cross-Reference

| Document | Purpose | Owner |
|----------|---------|-------|
| PRD | Full requirements, schema, flows | Product |
| Architecture.md | Stack, infra, costs | Tech Lead |
| features.md | MVP / future / scaling feature list | Product |
| Technical Details & Tradeoffs | Do/don’t, non-negotiables, data flow | Tech Lead |

---

**Connected to:** [1-Executive-Summary](1-Executive-Summary.md), [5-Technical-Execution-Workflow](5-Technical-Execution-Workflow.md), [7-Resource-Planning](7-Resource-Planning.md)
