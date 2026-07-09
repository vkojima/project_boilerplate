/**
 * Tabs — underline-style secondary navigation within a screen.
 */
export interface TabsProps {
  items: Array<{ key: string; label: string }>;
  activeKey?: string;
  onSelect?: (key: string) => void;
}
