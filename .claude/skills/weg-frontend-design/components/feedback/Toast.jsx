import { Icon } from '../core/Icon.jsx';

export function Toast({ status = 'info', title, message, onClose, style }) {
  const map = {
    success: { fg: 'var(--status-success-strong)', icon: 'check-circle-2' },
    warning: { fg: 'var(--status-warning-strong)', icon: 'alert-triangle' },
    critical: { fg: 'var(--status-critical-strong)', icon: 'alert-octagon' },
    info: { fg: 'var(--status-info-strong)', icon: 'info' },
  };
  const c = map[status] || map.info;
  return (
    <div style={{
      display: 'flex', gap: 10, alignItems: 'flex-start',
      background: 'var(--bg-surface-overlay)', border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)', padding: '12px 14px', boxShadow: 'var(--shadow-lg)',
      minWidth: 260, maxWidth: 340, fontFamily: 'var(--font-sans)',
      ...style,
    }}>
      <Icon name={c.icon} size={18} color={c.fg} style={{ marginTop: 2 }} />
      <div style={{ flex: 1 }}>
        {title && <div style={{ font: 'var(--text-title-sm)', color: 'var(--text-primary)', marginBottom: 2 }}>{title}</div>}
        {message && <div style={{ font: 'var(--text-body-sm)', color: 'var(--text-secondary)' }}>{message}</div>}
      </div>
      {onClose && (
        <button onClick={onClose} aria-label="Fechar" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--text-tertiary)' }}>
          <Icon name="x" size={14} />
        </button>
      )}
    </div>
  );
}
