import { Icon } from '../core/Icon.jsx';

export function Checkbox({ label, checked, onChange, disabled, style }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      <span
        onClick={disabled ? undefined : () => onChange && onChange({ target: { checked: !checked } })}
        style={{
          width: 18, height: 18, borderRadius: 'var(--radius-xs)',
          border: `1px solid ${checked ? 'var(--blue-500)' : 'var(--border-strong)'}`,
          background: checked ? 'var(--blue-500)' : 'var(--bg-surface)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          transition: 'background var(--duration-fast) var(--ease-standard)',
        }}
      >
        {checked && <Icon name="check" size={13} color="var(--text-on-accent)" />}
      </span>
      {label && <span style={{ font: 'var(--text-body-md)', color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)' }}>{label}</span>}
    </label>
  );
}
