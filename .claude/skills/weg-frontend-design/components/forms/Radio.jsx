export function Radio({ label, checked, onChange, name, disabled, style }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      <span
        onClick={disabled ? undefined : () => onChange && onChange({ target: { checked: true } })}
        style={{
          width: 18, height: 18, borderRadius: 'var(--radius-full)',
          border: `1px solid ${checked ? 'var(--blue-500)' : 'var(--border-strong)'}`,
          background: 'var(--bg-surface)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {checked && <span style={{ width: 9, height: 9, borderRadius: 'var(--radius-full)', background: 'var(--blue-500)' }} />}
      </span>
      {label && <span style={{ font: 'var(--text-body-md)', color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)' }}>{label}</span>}
    </label>
  );
}
