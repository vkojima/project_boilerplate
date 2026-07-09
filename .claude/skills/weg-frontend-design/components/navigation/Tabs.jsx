export function Tabs({ items = [], activeKey, onSelect, style }) {
  return (
    <div style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--border-default)', fontFamily: 'var(--font-sans)', ...style }}>
      {items.map(it => {
        const active = activeKey === it.key;
        return (
          <button
            key={it.key}
            onClick={() => onSelect && onSelect(it.key)}
            style={{
              padding: '9px 14px', background: 'none', border: 'none', cursor: 'pointer',
              font: 'var(--text-body-sm)', color: active ? 'var(--text-primary)' : 'var(--text-tertiary)',
              borderBottom: `2px solid ${active ? 'var(--blue-500)' : 'transparent'}`,
              marginBottom: -1,
            }}
            style-hover={{ color: 'var(--text-primary)' }}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
