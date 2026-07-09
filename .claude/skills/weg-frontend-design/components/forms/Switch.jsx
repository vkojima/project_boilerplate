export function Switch({ checked, onChange, label, disabled, style }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-sans)', cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      <span
        onClick={disabled ? undefined : () => onChange && onChange({ target: { checked: !checked } })}
        style={{
          width: 38, height: 22, borderRadius: 'var(--radius-full)', padding: 2,
          background: checked ? 'var(--blue-500)' : 'var(--bg-surface-active)',
          border: '1px solid var(--border-default)',
          display: 'inline-flex', alignItems: 'center',
          transition: 'background var(--duration-base) var(--ease-standard)',
        }}
      >
        <span style={{
          width: 16, height: 16, borderRadius: 'var(--radius-full)', background: '#fff',
          transform: checked ? 'translateX(16px)' : 'translateX(0)',
          transition: 'transform var(--duration-base) var(--ease-out)',
        }} />
      </span>
      {label && <span style={{ font: 'var(--text-body-md)', color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)' }}>{label}</span>}
    </label>
  );
}
