import { Icon } from './Icon.jsx';

export function IconButton({ icon, size = 'md', variant = 'ghost', active = false, label, style, ...rest }) {
  const dims = { sm: 28, md: 34 }[size] || 34;
  const iconSize = { sm: 16, md: 18 }[size] || 18;
  const variants = {
    ghost: { background: active ? 'var(--bg-surface-active)' : 'transparent', border: '1px solid transparent', color: active ? 'var(--text-primary)' : 'var(--text-secondary)' },
    outline: { background: active ? 'var(--bg-surface-active)' : 'var(--bg-surface-raised)', border: '1px solid var(--border-default)', color: 'var(--text-primary)' },
  };
  const v = variants[variant] || variants.ghost;
  return (
    <button
      aria-label={label}
      title={label}
      style={{
        width: dims, height: dims,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-sm)', cursor: 'pointer',
        transition: 'background var(--duration-fast) var(--ease-standard)',
        ...v, ...style,
      }}
      style-hover={{ background: 'var(--bg-surface-hover)' }}
      style-active={{ background: 'var(--bg-surface-active)' }}
      {...rest}
    >
      <Icon name={icon} size={iconSize} />
    </button>
  );
}
