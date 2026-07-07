/**
 * Badge — the closed-vocabulary machine/alarm status pill.
 * @startingPoint section="Core" subtitle="Success / warning / critical / info / idle" viewport="700x100"
 */
export interface BadgeProps {
  status?: 'success' | 'warning' | 'critical' | 'info' | 'idle';
  children?: React.ReactNode;
}
