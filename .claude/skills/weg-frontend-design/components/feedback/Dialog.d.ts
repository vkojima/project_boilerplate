/**
 * Dialog — modal confirmation/detail overlay.
 */
export interface DialogProps {
  open: boolean;
  title?: string;
  children?: React.ReactNode;
  onClose?: () => void;
  /** Footer action buttons (usually `<Button>` elements), right-aligned. */
  actions?: React.ReactNode;
}
