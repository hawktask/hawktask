# 10. Monitoring, Metrics & Reporting

**Project:** Hawktask  
**Owner:** Product + DevOps  
**Status:** Planning

---

## Real-Time Monitoring

**Development:** Velocity, burndown, PR merge rate, test pass rate, coverage (target 80%+).  
**Operational (from PRD, Architecture):**  
- API response time (p95 &lt;500ms).  
- OpenClaw Gateway uptime (target 99.5%+).  
- Error rate (&lt;1%).  
- Proposal generation time (&lt;120s).  
- Page load (p95 &lt;2s).

**Business:** DAU/MAU, signups, free-to-Pro conversion, MRR/ARR, churn.  
**Support (external/Customer Support):** First reply time (Free 48–72h, Pro 24h, Business 12h); CSAT; NPS; health score.

---

## Dashboards and Data Sources

- **Vercel Analytics:** Frontend performance, page load.  
- **Supabase:** DB metrics, Auth, RLS.  
- **OpenClaw / Gateway:** Health (e.g. OpenClaw Doctor), session usage.  
- **Stripe Dashboard:** Revenue, churn, subscriptions.  
- **PostHog (or similar):** Product usage, feature adoption (optional).  
- **Sentry:** Errors and performance (optional).

CI/CD: deployment status, last migration, Gateway version (external/devops).

---

## Reporting Cadence

- **Daily:** Team uses dashboards for build/deploy and critical errors.  
- **Weekly:** Sprint progress, metrics vs targets (Section 2), support volume and CSAT.  
- **Monthly:** Steering: budget, timeline, risks, KPIs; product and business review.  
- **Phase gates:** Go/no-go against Section 2 and 6 criteria.

---

## Alerts and Escalation

- **Critical:** Gateway down, auth/DB failure, payment webhook failures → on-call and incident process (Security).  
- **High:** Error spike, latency degradation → Tech Lead and deploy rollback if needed.  
- **Business:** Conversion or churn thresholds → Product and growth review.

---

## Status Report Template (Weekly)

- **Sprint:** Goal, completed, in progress, blocked.  
- **Metrics:** Key KPIs vs target (users, conversion, revenue, uptime, errors).  
- **Risks:** Changes to Section 8.  
- **Next:** Priorities and dependencies.

---

**Connected to:** [2-Objectives-Success-Metrics](2-Objectives-Success-Metrics.md), [9-Execution-Strategy](9-Execution-Strategy.md), [11-ROI-Value-Realization](11-ROI-Value-Realization.md), [12-Governance-Decision-Making](12-Governance-Decision-Making.md)
