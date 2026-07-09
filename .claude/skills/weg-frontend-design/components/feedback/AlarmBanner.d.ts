/**
 * AlarmBanner — full-width inline alarm strip for the HMI dashboard.
 */
export interface AlarmBannerProps {
  severity?: 'warning' | 'critical';
  message: string;
  timestamp?: string;
  onAcknowledge?: () => void;
}
