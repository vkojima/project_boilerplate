export function Card({ title, action, children, style }) {
  return (
    <div style={{
      background: 'var(--bg-surface)', border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column',
      fontFamily: 'var(--font-sans)', overflow: 'hidden',
      ...style,
    }}>
      {(title || action) && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px 0' }}>
          {title && <div style={{ font: 'var(--text-title-sm)', color: 'var(--text-primary)' }}>{title}</div>}
          {action}
        </div>
      )}
      <div style={{ padding: 16, flex: 1 }}>{children}</div>
    </div>
  );
}
