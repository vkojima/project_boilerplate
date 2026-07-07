export function Badge({ status = 'idle', children, style }) {
  const map = {
    success: { bg: 'var(--status-success-bg)', fg: 'var(--status-success-strong)' },
    warning: { bg: 'var(--status-warning-bg)', fg: 'var(--status-warning-strong)' },
    critical: { bg: 'var(--status-critical-bg)', fg: 'var(--status-critical-strong)' },
    info: { bg: 'var(--status-info-bg)', fg: 'var(--status-info-strong)' },
    idle: { bg: 'var(--status-idle-bg)', fg: 'var(--status-idle-strong)' },
  };
  const c = map[status] || map.idle;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '3px 9px', borderRadius: 'var(--radius-full)',
      background: c.bg, color: c.fg,
      font: 'var(--text-label)', letterSpacing: 'var(--letter-spacing-label)',
      textTransform: 'uppercase', whiteSpace: 'nowrap', flexShrink: 0,
      ...style,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: 'var(--radius-full)', background: c.fg, flexShrink: 0 }} />
      {children}
    </span>
  );
}
