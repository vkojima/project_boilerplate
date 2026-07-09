export function Tooltip({ label, children, style }) {
  const [show, setShow] = React.useState(false);
  return (
    <span
      style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <span style={{
          position: 'absolute', bottom: '125%', left: '50%', transform: 'translateX(-50%)',
          background: 'var(--bg-surface-overlay)', border: '1px solid var(--border-default)',
          color: 'var(--text-primary)', font: 'var(--text-caption)',
          padding: '5px 8px', borderRadius: 'var(--radius-xs)', whiteSpace: 'nowrap',
          boxShadow: 'var(--shadow-md)', zIndex: 50,
        }}>
          {label}
        </span>
      )}
    </span>
  );
}
