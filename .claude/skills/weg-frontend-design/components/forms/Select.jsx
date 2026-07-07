import { Icon } from '../core/Icon.jsx';

export function Select({ label, value, onChange, options = [], disabled, style }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-sans)', ...style }}>
      {label && <span style={{ font: 'var(--text-label)', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-label)' }}>{label}</span>}
      <span style={{ position: 'relative', display: 'flex' }}>
        <select
          value={value}
          onChange={onChange}
          disabled={disabled}
          style={{
            flex: 1,
            appearance: 'none',
            background: disabled ? 'var(--bg-sunken)' : 'var(--bg-surface)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-sm)',
            color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
            font: 'var(--text-body-md)',
            padding: '8px 32px 8px 10px',
            outline: 'none',
          }}
          style-focus={{ borderColor: 'var(--border-focus)', boxShadow: 'var(--focus-ring)' }}
        >
          {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <Icon name="chevron-down" size={16} color="var(--text-tertiary)" style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
      </span>
    </label>
  );
}
