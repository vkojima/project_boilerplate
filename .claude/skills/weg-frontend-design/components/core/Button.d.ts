/**
 * Button — primary UI action trigger.
 * @startingPoint section="Core" subtitle="Primary, secondary, ghost, danger" viewport="700x160"
 */
export interface ButtonProps {
  /** Visual style. primary = main action (WEG blue fill); secondary = bordered neutral; ghost = text-only; danger = destructive/critical action. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md';
  /** Optional Lucide icon name shown alongside the label. */
  icon?: string;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}
