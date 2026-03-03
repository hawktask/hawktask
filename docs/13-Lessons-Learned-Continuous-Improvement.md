# 13. Lessons Learned & Continuous Improvement

**Project:** Hawktask  
**Owner:** Tech Lead  
**Status:** Ongoing

---

## ADR Process

**Template:** ADR number, title, status (Proposed/Accepted/Deprecated), date, deciders, context, decision, consequences, alternatives, references.  
**Log:** Maintain in `docs/adr/` (or equivalent); link from Section 4.  
**When:** Major architecture or tech choices; significant tradeoffs (e.g. OpenClaw vs custom, Supabase RLS, freemium model).  
Section 4 already references ADR-001 through ADR-005; new ADRs appended with same format.

---

## API and Code Documentation

- **API:** Document endpoints (URL, method, params, body, response, errors, auth, rate limits); use OpenAPI/Swagger where useful.  
- **Code:** JSDoc/TSDoc for public APIs and non-obvious logic; README per package (apps/web, packages/ui, packages/db, apps/openclaw).  
- **Runbooks:** Operational runbooks for deploy, migrations, Gateway restart, incident response (Security, devops).

---

## Lessons Learned Capture

- **Retrospectives:** After each sprint; what went well, what to improve, actions.  
- **Phase retrospectives:** After each phase gate; technical and process lessons; update risk register and Section 8 if needed.  
- **Post-incident:** Post-mortem for major incidents; root cause, what worked, actions; share with team (Security).  
- **Templates:** Retro template (sprint); post-mortem template (incident); store in docs or wiki.

---

## Knowledge Base and Onboarding

- **Docs:** This plan (docs/0–13); external/ (PRD, Architecture, draft, features, Business-model, Customer Support, Security, devops, Technical Details & Tradeoffs, declarative design, tweak as needed).  
- **Onboarding:** README, CONTRIBUTING, local setup (monorepo, Supabase, Stripe, Gateway); Do/Don’t and non-negotiables (Technical Details & Tradeoffs).  
- **Support:** Help center and support playbooks (external/Customer Support); link from product and docs.

---

## Continuous Improvement Backlog

- Track: process improvements, tooling, automation, tech debt, documentation gaps.  
- Source: retros, post-mortems, support feedback, product feedback.  
- Prioritize: with sprint planning; allocate capacity (e.g. 10–20% for debt and improvement per Section 5/9).

---

## References

- Section 4 (ADRs); Section 8 (risk and post-incident); Section 9 (retros); external/Security.md (incident response); external/devops.md (CI/CD and runbooks); external/declarative design (OpenClaw upgrade and config isolation).

---

**Connected to:** [4-System-Architecture-Design](4-System-Architecture-Design.md), [9-Execution-Strategy](9-Execution-Strategy.md), [10-Monitoring-Reporting](10-Monitoring-Reporting.md); feeds next planning cycle.
