/**
 * Gauge — radial dial for a single bounded telemetry value (HMI dashboard).
 */
export interface GaugeProps {
  value: number;
  min?: number;
  max?: number;
  label?: string;
  unit?: string;
  status?: 'success' | 'warning' | 'critical' | 'info' | 'idle';
  size?: number;
}
