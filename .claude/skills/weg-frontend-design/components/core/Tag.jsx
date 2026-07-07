import { Icon } from './Icon.jsx';

export function Tag({ children, onRemove, style }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 8px', borderRadius: 'var(--radius-xs)',
      background: 'var(--bg-surface-raised)', border: '1px solid var(--border-default)',
      color: 'var(--text-secondary)', font: 'var(--text-body-sm)',
      ...style,
    }}>
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          aria-label="Remover"
          style={{ display: 'inline-flex', background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--text-tertiary)' }}
        >
          <Icon name="x" size={12} />
        </button>
      )}
    </span>
  );
}
