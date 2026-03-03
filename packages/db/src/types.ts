/**
 * Supabase / Postgres types for Hawktask.
 * Align with schema in external/Product Requirements Document (PRD).md.
 */

export type UserTier = "free" | "pro" | "business" | "enterprise";

export interface User {
  id: string;
  email: string;
  name: string | null;
  role: string | null;
  timezone: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  tier: UserTier;
  workspaces_limit: number;
  created_at: string;
  updated_at: string;
}

export type ClientStatus = "active" | "paused" | "archived";

export interface Client {
  id: string;
  user_id: string;
  name: string;
  company: string | null;
  website: string | null;
  primary_channel: string | null;
  channel_identifier: string | null;
  openclaw_workspace_path: string;
  timezone: string | null;
  communication_style: string | null;
  notes: string | null;
  tags: string[] | null;
  status: ClientStatus;
  created_at: string;
  updated_at: string;
}

export type ProposalStatus =
  | "draft"
  | "sent"
  | "opened"
  | "accepted"
  | "rejected";

export interface Proposal {
  id: string;
  user_id: string;
  client_id: string;
  title: string;
  content: Record<string, unknown>;
  template_id: string | null;
  channel: string | null;
  status: ProposalStatus;
  sent_at: string | null;
  opened_at: string | null;
  responded_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: string;
  user_id: string;
  client_id: string | null;
  event_type: string;
  metadata: Record<string, unknown> | null;
  created_at: string;
}
