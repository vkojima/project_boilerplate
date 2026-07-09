export function Gauge({ value = 0, min = 0, max = 100, label, unit, status = 'info', size = 140, style }) {
  const pct = Math.max(0, Math.min(1, (value - min) / (max - min)));
  const angle = pct * 270 - 135; // -135deg to +135deg sweep
  const r = size / 2 - 10;
  const cx = size / 2, cy = size / 2;
  const toXY = (deg) => {
    const rad = (deg - 90) * Math.PI / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  };
  const [sx, sy] = toXY(-135);
  const [ex, ey] = toXY(-135 + pct * 270);
  const largeArc = pct * 270 > 180 ? 1 : 0;
  const color = `var(--status-${status}-strong)`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, fontFamily: 'var(--font-sans)', ...style }}>
      <svg width={size} height={size * 0.75} viewBox={`0 0 ${size} ${size}`}>
        <path d={`M ${toXY(-135)[0]} ${toXY(-135)[1]} A ${r} ${r} 0 1 1 ${toXY(135)[0]} ${toXY(135)[1]}`}
          fill="none" stroke="var(--border-default)" strokeWidth="10" strokeLinecap="round" />
        <path d={`M ${sx} ${sy} A ${r} ${r} 0 ${largeArc} 1 ${ex} ${ey}`}
          fill="none" stroke={color} strokeWidth="10" strokeLinecap="round" />
        <text x={cx} y={cy - 4} textAnchor="middle" style={{ font: 'var(--text-mono-lg)', fill: 'var(--text-primary)' }}>{value}</text>
        {unit && <text x={cx} y={cy + 16} textAnchor="middle" style={{ font: 'var(--text-mono-sm)', fill: 'var(--text-tertiary)' }}>{unit}</text>}
      </svg>
      {label && <div style={{ font: 'var(--text-label)', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-label)', marginTop: -size * 0.18 }}>{label}</div>}
    </div>
  );
}
