![HawkTask Logo](https://github.com/hawktask/.github/blob/main/public/logo/HawkTask-logo(upscale).png)

# Hawktask

> **Note**  
> Hawktask is a multi-channel AI operating system for freelancers and solopreneurs. It connects your client conversations, tasks, and documents across channels into one workspace. Client-aware agents keep strict boundaries per client and run on top of OpenClaw. Use it to win work faster, communicate in context, and get paid on time.

Hawktask is a Web2 SaaS for freelancers and small agencies. You manage 5–20 clients across email, Slack, Discord, and WhatsApp from one place. The product gives you client workspaces with dedicated AI context, proposal generation, invoice reminders, and testimonial harvesting. Built on OpenClaw for multi-channel orchestration, with Supabase for data and Stripe for freemium billing.

<!-- Badges: start -->
![License](https://img.shields.io/github/license/hawktask/hawktask)
<!-- Badges: end -->

## Features

- **Client boundary manager.** Each client has its own agent workspace with dedicated memory and tools. The agent switches context, tone, and knowledge when messages come from different clients. You say "send the update to Acme" and Hawktask routes to the right channel with the right context.
- **Proposal assembly.** The system watches email and Slack for RFPs or "send a quote" requests. It researches the company, pulls portfolio items, and drafts a tailored proposal. You review and approve in the dashboard, then send via the client’s preferred channel.
- **Invoice and follow-up automation.** Tracks signed proposals and due dates. Sends polite reminders over email or Slack. Keeps a timeline per client: sent, read, replied, paid.
- **Testimonial harvester.** Monitors positive feedback across channels. At project completion it drafts a testimonial request with real outcomes and sends at a sensible time. Stores testimonials for reuse.
- **Multi-channel inbox.** Slack and email in MVP. Later: Discord, WhatsApp. All tied to client workspaces and OpenClaw sessions.
- **Shared design system.** One UI layer for the app: bento grids, clay-style cards, glass panels for overlays, neumorphic toggles. Tokens and components live in `packages/ui`.

## License

This project is licensed under the ISC License. See the [LICENSE](https://github.com/hawktask/.github/blob/main/LICENSE) file for details.
