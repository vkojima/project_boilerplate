export function DataTable({ columns = [], rows = [], style }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)', ...style }}>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col.key} style={{
              textAlign: col.align || 'left', padding: '8px 12px',
              font: 'var(--text-label)', color: 'var(--text-tertiary)',
              textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-label)',
              borderBottom: '1px solid var(--border-default)',
            }}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style-hover={{ background: 'var(--bg-surface-hover)' }}>
            {columns.map(col => (
              <td key={col.key} style={{
                textAlign: col.align || 'left', padding: '10px 12px',
                font: col.mono ? 'var(--text-mono-sm)' : 'var(--text-body-sm)',
                color: 'var(--text-secondary)',
                borderBottom: '1px solid var(--border-subtle)',
              }}>
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
