![HawkTask Logo](public/logo/HawkTask-logo(upscale).png)

# Hawktask

> **Note**  
> Hawktask is a multi-channel AI operating system for freelancers and solopreneurs. It connects your client conversations, tasks, and documents across channels into one workspace. Client-aware agents keep strict boundaries per client and run on top of OpenClaw. Use it to win work faster, communicate in context, and get paid on time.

Hawktask is a Web2 SaaS for freelancers and small agencies. You manage 5–20 clients across email, Slack, Discord, and WhatsApp from one place. The product gives you client workspaces with dedicated AI context, proposal generation, invoice reminders, and testimonial harvesting. Built on OpenClaw for multi-channel orchestration, with Supabase for data and Stripe for freemium billing.

<!-- Badges: start -->
![License](https://img.shields.io/github/license/username/hawktask)
<!-- Badges: end -->

## Table of Contents

- [Features](#features)
- [Pricing](#pricing)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Client boundary manager.** Each client has its own agent workspace with dedicated memory and tools. The agent switches context, tone, and knowledge when messages come from different clients. You say "send the update to Acme" and Hawktask routes to the right channel with the right context.
- **Proposal assembly.** The system watches email and Slack for RFPs or "send a quote" requests. It researches the company, pulls portfolio items, and drafts a tailored proposal. You review and approve in the dashboard, then send via the client’s preferred channel.
- **Invoice and follow-up automation.** Tracks signed proposals and due dates. Sends polite reminders over email or Slack. Keeps a timeline per client: sent, read, replied, paid.
- **Testimonial harvester.** Monitors positive feedback across channels. At project completion it drafts a testimonial request with real outcomes and sends at a sensible time. Stores testimonials for reuse.
- **Multi-channel inbox.** Slack and email in MVP. Later: Discord, WhatsApp. All tied to client workspaces and OpenClaw sessions.
- **Shared design system.** One UI layer for the app: bento grids, clay-style cards, glass panels for overlays, neumorphic toggles. Tokens and components live in `packages/ui`.

## Pricing

| Tier       | Clients | Proposals      | Channels | Use case                    |
|------------|---------|----------------|----------|-----------------------------|
| **Free**   | 3       | 3 per month    | 2        | Try with a few clients      |
| **Pro**    | Unlimited | Unlimited    | 10       | Full automation, $19/mo     |
| **Business** | Unlimited | Unlimited  | Unlimited | Teams, 5 seats, $49/mo   |

## Tech Stack

- **Frontend:** Next.js (App Router), React 19, TypeScript. Tailwind and shared components in `packages/ui`. Deployed on Vercel.
- **Backend:** OpenClaw Gateway (Node 22+) for AI and multi-channel. Supabase (Postgres, Auth, RLS). Supabase Edge Functions as proxy to OpenClaw.
- **Payments:** Stripe for freemium tiers and subscriptions.
- **Channels:** Email (Gmail API / SMTP), Slack bot. Later: Discord, WhatsApp via OpenClaw.

## Quick Start

### Prerequisites

- Node.js 18 or newer
- npm 8 or newer

### Installation

1. Clone the repo.

   ```bash
   git clone https://github.com/hawktask/hawktask.git
   cd hawktask
   ```

2. Install dependencies from the repo root.

   ```bash
   npm install
   ```

3. Start the dev server.

   ```bash
   cd apps/web
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000). You should see the landing page.

### Build

From the repo root (pnpm):

```bash
pnpm build
```

Or from `apps/web`: `npm run build`.

### Local dev workflow (Architecture)

- **Next.js + Supabase local:** `pnpm dev` (from root) or `cd apps/web && npm run dev`. For Supabase: `npx supabase init` then `npx supabase start`.
- **OpenClaw Gateway:** `pnpm docker:up` or `docker-compose up`.
- **Preview deploys:** `vercel dev` from `apps/web` if needed.

For full setup (Supabase, OpenClaw Gateway, Stripe, env vars), see the [Product Requirements Document (PRD)](external/Product%20Requirements%20Document%20(PRD).md).

## Project Structure

Per [external/Architecture.md](external/Architecture.md) (non-negotiable):

| Path | Purpose |
|------|---------|
| `apps/web` | Next.js frontend. Marketing, dashboard, docs. |
| `apps/openclaw` | OpenClaw config and skills. Gateway config, proposal templates, automation. |
| `packages/db` | Supabase types. Shared DB types for users, clients, proposals, events. |
| `packages/ui` | Shared components and design tokens. Tailwind and component classes. |
| `packages/animations` | Anime.js helpers. Hooks for fade-in on scroll and bento hover. |
| `docker-compose.yml` | Local OpenClaw Gateway. Supabase local: `npx supabase start`. |
| `external` | Draft, PRD, and Architecture. Product vision and requirements. |

Design tokens: `packages/ui/styles/theme.css`. Component classes: `packages/ui/styles/ui.css`.

## Documentation

- **Landing.** `/` shows the hero, bento features, and testimonials.
- **Dashboard.** `/dashboard` uses clay cards and neumorphic toggles.
- **Docs.** `/docs` uses a minimal layout with bento cards only.
- **Product.** [external/draft.md](external/draft.md) for vision and positioning. [external/Product Requirements Document (PRD).md](external/Product%20Requirements%20Document%20(PRD).md) for full requirements, architecture, and roadmap.

## Contributing

1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add your feature'`.
4. Push the branch: `git push origin feature/your-feature`.
5. Open a Pull Request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
