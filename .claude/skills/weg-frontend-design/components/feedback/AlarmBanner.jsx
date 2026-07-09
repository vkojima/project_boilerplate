import { Icon } from '../core/Icon.jsx';

export function AlarmBanner({ severity = 'warning', message, timestamp, onAcknowledge, style }) {
  const map = {
    warning: { bg: 'var(--status-warning-bg)', fg: 'var(--status-warning-strong)', icon: 'alert-triangle' },
    critical: { bg: 'var(--status-critical-bg)', fg: 'var(--status-critical-strong)', icon: 'alert-octagon' },
  };
  const c = map[severity] || map.warning;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      background: c.bg, border: `1px solid ${c.fg}55`, borderRadius: 'var(--radius-md)',
      padding: '10px 14px', fontFamily: 'var(--font-sans)',
      ...style,
    }}>
      <Icon name={c.icon} size={20} color={c.fg} />
      <div style={{ flex: 1 }}>
        <div style={{ font: 'var(--text-body-md)', color: 'var(--text-primary)' }}>{message}</div>
        {timestamp && <div style={{ font: 'var(--text-caption)', color: 'var(--text-tertiary)' }}>{timestamp}</div>}
      </div>
      {onAcknowledge && (
        <button onClick={onAcknowledge} style={{
          background: 'transparent', border: `1px solid ${c.fg}`, color: c.fg,
          borderRadius: 'var(--radius-sm)', padding: '5px 10px', font: 'var(--text-label)',
          cursor: 'pointer', textTransform: 'uppercase',
        }}>
          Reconhecer
        </button>
      )}
    </div>
  );
}
