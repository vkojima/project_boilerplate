import { Icon } from '../core/Icon.jsx';

export function Dialog({ open, title, children, onClose, actions, style }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'var(--overlay-scrim)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100,
    }}>
      <div style={{
        width: 420, background: 'var(--bg-surface-overlay)', border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-overlay)',
        fontFamily: 'var(--font-sans)', overflow: 'hidden',
        ...style,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', borderBottom: '1px solid var(--border-subtle)' }}>
          <div style={{ font: 'var(--text-title-md)', color: 'var(--text-primary)' }}>{title}</div>
          <button onClick={onClose} aria-label="Fechar" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-tertiary)' }}>
            <Icon name="x" size={18} />
          </button>
        </div>
        <div style={{ padding: '16px 18px', font: 'var(--text-body-md)', color: 'var(--text-secondary)' }}>
          {children}
        </div>
        {actions && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, padding: '14px 18px', borderTop: '1px solid var(--border-subtle)' }}>
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
