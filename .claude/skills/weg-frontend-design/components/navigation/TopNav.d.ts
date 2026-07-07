/**
 * TopNav — horizontal top navigation bar (never a sidebar, per brand rule).
 */
export interface TopNavProps {
  items: Array<{ key: string; label: string; icon?: string }>;
  activeKey?: string;
  onSelect?: (key: string) => void;
  /** Location breadcrumb — Fábrica / Linha / Posto — shown on the HMI dashboard. */
  location?: { factory: string; line: string; station: string };
  userName?: string;
}
