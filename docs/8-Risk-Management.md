# 8. Risk Management

**Project:** Hawktask  
**Owner:** Tech Lead + PM  
**Status:** Planning

---

## Risk Register (Summary)

### Technical

| ID | Risk | Probability | Impact | Mitigation |
|----|------|-------------|--------|------------|
| T-1 | OpenClaw Gateway downtime | Medium | High | Health checks, auto-restart, fallback to manual proposal (Architecture, PRD). |
| T-2 | Supabase outage | Low | High | Backups; migration path to self-hosted Postgres if needed (Technical Details & Tradeoffs). |
| T-3 | Stripe webhook failures | Medium | Medium | Retry, signature verification, manual reconciliation (devops). |
| T-4 | LLM API rate limits | Medium | Medium | Queuing, fallback models (PRD). |
| T-5 | Channel API changes (Gmail, Slack) | Medium | Medium | Abstraction layer; monitor deprecations (PRD). |
| T-6 | Security vulnerabilities | Low | Critical | RLS, audits, scanning; no secrets in client (Security.md, PRD). |

### Organizational / Business

| ID | Risk | Probability | Impact | Mitigation |
|----|------|-------------|--------|------------|
| O-1 | Low free-to-paid conversion | Medium | High | User feedback, A/B upgrade prompts, strong free tier value (PRD, Business-model). |
| O-2 | High churn | Medium | High | Onboarding, customer success, exit surveys (Customer Support). |
| O-3 | Scope creep | High | Medium | Change control (Tier 1/2/3); Section 3 and PRD as reference. |
| O-4 | Key person dependency | Medium | High | Documentation, cross-training, backup (Scope). |

### Legal / Compliance

| ID | Risk | Probability | Impact | Mitigation |
|----|------|-------------|--------|------------|
| L-1 | GDPR issues | Low | High | Data export/deletion, privacy policy, consent (PRD, Security). |
| L-2 | API ToS (Gmail, Slack, OpenAI) | Low | Medium | Review and stay within limits (PRD). |

---

## Top Risks (Prioritized)

1. **OpenClaw Gateway downtime** – Mitigation and fallback above.  
2. **Low conversion** – Product and growth focus; limits and prompts.  
3. **Scope creep** – Governance and change control.  
4. **Stripe webhook failures** – Reliability and reconciliation.  
5. **Security** – RLS, backend-only AI/billing, audits.

---

## Mitigation and Contingency

- **Technical:** Monitoring and alerting (Vercel, Supabase, Gateway); runbooks; incident response (Security).  
- **Business:** NPS/CSAT and health scores (Customer Support); usage and conversion tracking.  
- **Scope:** Steering approval for Tier 3; scope doc and PRD as baseline.  
- **Compliance:** Security and legal review; document retention and breach process (PRD, Security).

---

## Risk Review

- Monthly risk review with steering.  
- After major incidents or major changes: update register and mitigations.  
- Owner for each risk: Tech Lead (technical), Product (conversion/scope), Security/Legal (compliance).

---

**Connected to:** [1-Executive-Summary](1-Executive-Summary.md), [3-Scope-Definition](3-Scope-Definition.md), [4-System-Architecture-Design](4-System-Architecture-Design.md), [6-Project-Phases-Timeline](6-Project-Phases-Timeline.md), [9-Execution-Strategy](9-Execution-Strategy.md), [11-ROI-Value-Realization](11-ROI-Value-Realization.md)
