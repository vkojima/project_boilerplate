/**
 * Toast — transient notification, top-right stacked.
 */
export interface ToastProps {
  status?: 'success' | 'warning' | 'critical' | 'info';
  title?: string;
  message?: string;
  onClose?: () => void;
}
