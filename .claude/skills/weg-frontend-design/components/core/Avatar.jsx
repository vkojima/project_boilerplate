import { Icon } from './Icon.jsx';

export function Avatar({ name = '', size = 32, style }) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');
  return (
    <span
      title={name}
      style={{
        width: size, height: size, borderRadius: 'var(--radius-full)',
        background: 'var(--blue-800)', color: 'var(--blue-200)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        font: 'var(--text-label)', letterSpacing: 0, textTransform: 'none',
        border: '1px solid var(--border-default)',
        flexShrink: 0,
        ...style,
      }}
    >
      {initials || <Icon name="user" size={size * 0.5} />}
    </span>
  );
}
