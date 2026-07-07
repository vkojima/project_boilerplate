export function Input({ label, placeholder, value, defaultValue, onChange, unit, error, disabled, type = 'text', style }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-sans)', ...style }}>
      {label && <span style={{ font: 'var(--text-label)', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-label)' }}>{label}</span>}
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <input
          type={type}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          style={{
            flex: 1,
            background: disabled ? 'var(--bg-sunken)' : 'var(--bg-surface)',
            border: `1px solid ${error ? 'var(--status-critical)' : 'var(--border-default)'}`,
            borderRadius: 'var(--radius-sm)',
            color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
            font: 'var(--text-body-md)',
            padding: '8px 10px',
            outline: 'none',
          }}
          style-focus={{ borderColor: 'var(--border-focus)', boxShadow: 'var(--focus-ring)' }}
        />
        {unit && <span style={{ font: 'var(--text-mono-sm)', color: 'var(--text-tertiary)' }}>{unit}</span>}
      </span>
      {error && <span style={{ font: 'var(--text-caption)', color: 'var(--status-critical-strong)' }}>{error}</span>}
    </label>
  );
}
