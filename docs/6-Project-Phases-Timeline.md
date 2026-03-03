# 6. Project Phases & Timeline

**Project:** Hawktask  
**Owner:** Project Lead  
**Status:** Planning

---

## Phase Overview

| Phase | Duration | Goal |
|-------|----------|------|
| 1. Foundation | Weeks 1–4 | Monorepo, Supabase, OpenClaw deploy, Stripe, planning complete |
| 2. MVP | Weeks 5–8 | Client workspaces, proposals generate/send, tier enforcement, 50+ beta users |
| 3. Automation | Weeks 9–12 | RFP detection, invoice reminders, testimonials, template library |
| 4. Scale | Weeks 13+ | More channels, team features, insights, reliability |

---

## Phase 1: Foundation (Weeks 1–4)

**Deliverables:**  
- Monorepo with apps/web, apps/openclaw, packages/db, packages/ui, packages/animations (see Architecture).  
- Supabase: project, Auth, RLS, schema (users, clients, proposals, events).  
- Next.js: landing, dashboard shell, docs shell; design system applied.  
- OpenClaw Gateway: Docker deploy; config in apps/openclaw.  
- Stripe: Checkout, webhooks, tier stored in Supabase.  
- All 14 planning docs filled (this doc set).

**Gate 1:** Architecture and plan approved; team and budget aligned.

---

## Phase 2: MVP (Weeks 5–8)

**Deliverables:**  
- Auth and user profile.  
- Client CRUD; one OpenClaw workspace per client; client timeline.  
- Proposal: generate (via OpenClaw), edit, store, send by email and Slack.  
- Channels: connect email (e.g. Gmail), Slack; map to client.  
- Freemium: Free (3 clients, limited proposals/channels); Pro unlimited; limits enforced server-side; upgrade prompts.  
- Basic analytics: client count, proposals per client, last proposal.  
- Admin role and audit log.

**Gate 2:** MVP feature-complete; 50+ beta users; zero critical security issues; steering approval for Phase 3.

---

## Phase 3: Automation (Weeks 9–12)

**Deliverables:**  
- RFP detection from email/Slack; suggest proposal creation.  
- Reminders when proposals unanswered.  
- Invoice tracker and manual reminder flows.  
- Testimonial harvesting: draft, send, store.  
- Template library and saved snippets.

**Gate 3:** 500+ users; $50K+ revenue/partnership trajectory; product-market fit signals.

---

## Phase 4: Scale (Weeks 13+)

**Deliverables:**  
- Discord, WhatsApp (via OpenClaw).  
- Team collaboration: shared account, roles.  
- Insights: proposal acceptance, revenue summary, activity.  
- Reliability: horizontal scaling, more Gateway instances, rate limiting.

**Gate 4:** 5,000+ users; $150K+ ARR path; NPS ≥ 40; decision on Series A or profitability.

---

## Critical Path

Foundation → MVP (client workspaces + proposals + limits) → Automation → Scale.  
Dependencies: Supabase and Stripe before MVP; OpenClaw Gateway before any proposal generation; Stripe webhooks before tier enforcement.

---

## Risk Buffers

- Security audit can add ~2 weeks before mainnet/scale.  
- OpenClaw upgrade or outage: fallback to manual proposal creation; health checks and auto-restart (Architecture, Risk).

---

**Connected to:** [3-Scope-Definition](3-Scope-Definition.md), [4-System-Architecture-Design](4-System-Architecture-Design.md), [7-Resource-Planning](7-Resource-Planning.md), [8-Risk-Management](8-Risk-Management.md)
