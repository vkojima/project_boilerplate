import { Icon } from './Icon.jsx';

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  disabled = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: '6px 10px', font: 'var(--text-body-sm)', gap: 6, iconSize: 16 },
    md: { padding: '9px 14px', font: 'var(--text-body-md)', gap: 8, iconSize: 18 },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      background: disabled ? 'var(--bg-surface-active)' : 'var(--blue-500)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-on-accent)',
      border: '1px solid transparent',
    },
    secondary: {
      background: 'var(--bg-surface-raised)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      border: '1px solid var(--border-default)',
    },
    ghost: {
      background: 'transparent',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-secondary)',
      border: '1px solid transparent',
    },
    danger: {
      background: disabled ? 'var(--bg-surface-active)' : 'var(--status-critical)',
      color: disabled ? 'var(--text-disabled)' : '#fff',
      border: '1px solid transparent',
    },
  };
  const v = variants[variant] || variants.primary;

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        padding: s.padding,
        font: s.font,
        fontFamily: 'var(--font-sans)',
        borderRadius: 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
        ...v,
        ...style,
      }}
      style-hover={disabled ? undefined : {
        background: variant === 'primary' ? 'var(--blue-600)'
          : variant === 'danger' ? '#b83e33'
          : variant === 'secondary' ? 'var(--bg-surface-hover)'
          : 'var(--bg-surface-hover)',
      }}
      style-active={disabled ? undefined : {
        background: variant === 'primary' ? 'var(--blue-700)'
          : variant === 'danger' ? '#9c342b'
          : 'var(--bg-surface-active)',
      }}
      {...rest}
    >
      {icon && iconPosition === 'left' && <Icon name={icon} size={s.iconSize} />}
      {children}
      {icon && iconPosition === 'right' && <Icon name={icon} size={s.iconSize} />}
    </button>
  );
}
