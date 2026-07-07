import { Icon } from '../core/Icon.jsx';

export function StatTile({ label, value, unit, status, delta, style }) {
  const statusColor = status ? `var(--status-${status}-strong)` : 'var(--text-primary)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-sans)', ...style }}>
      <div style={{ font: 'var(--text-label)', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-label)' }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ font: 'var(--text-mono-lg)', color: statusColor }}>{value}</span>
        {unit && <span style={{ font: 'var(--text-mono-sm)', color: 'var(--text-tertiary)' }}>{unit}</span>}
      </div>
      {delta && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, font: 'var(--text-caption)', color: delta.direction === 'down' ? 'var(--status-critical-strong)' : 'var(--status-success-strong)' }}>
          <Icon name={delta.direction === 'down' ? 'trending-down' : 'trending-up'} size={13} />
          {delta.label}
        </div>
      )}
    </div>
  );
}
