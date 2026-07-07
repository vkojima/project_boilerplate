/**
 * IconButton — icon-only tap target for toolbars and nav.
 * @startingPoint section="Core" subtitle="Icon-only action" viewport="400x100"
 */
export interface IconButtonProps {
  /** Lucide icon name. */
  icon: string;
  size?: 'sm' | 'md';
  variant?: 'ghost' | 'outline';
  /** Visually marks the button as toggled on (e.g. active nav/filter). */
  active?: boolean;
  /** Accessible label (also used as title/tooltip). */
  label: string;
  onClick?: () => void;
}
