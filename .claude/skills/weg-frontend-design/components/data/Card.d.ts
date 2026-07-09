/**
 * Card — the standard bordered panel container used across all three products.
 */
export interface CardProps {
  title?: string;
  /** Right-aligned header action, e.g. an IconButton or Badge. */
  action?: React.ReactNode;
  children?: React.ReactNode;
}
