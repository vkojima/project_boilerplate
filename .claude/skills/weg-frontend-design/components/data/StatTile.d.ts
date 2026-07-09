/**
 * StatTile — single labeled KPI readout (mono value + unit + optional trend).
 */
export interface StatTileProps {
  label: string;
  value: string;
  unit?: string;
  /** Tints the value using the status color scale. */
  status?: 'success' | 'warning' | 'critical' | 'info' | 'idle';
  delta?: { direction: 'up' | 'down'; label: string };
}
