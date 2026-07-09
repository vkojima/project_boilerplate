/**
 * Sparkline — minimal inline trend line, no axes/labels.
 */
export interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  status?: 'success' | 'warning' | 'critical' | 'info' | 'idle';
}
