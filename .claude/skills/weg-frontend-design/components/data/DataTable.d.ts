/**
 * DataTable — dense tabular listing for Analytics/Configuration.
 */
export interface DataTableProps {
  columns: Array<{ key: string; label: string; align?: 'left' | 'right' | 'center'; mono?: boolean }>;
  rows: Array<Record<string, React.ReactNode>>;
}
