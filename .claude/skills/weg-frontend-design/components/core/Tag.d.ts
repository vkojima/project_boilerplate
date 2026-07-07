/**
 * Tag — neutral removable chip for filters, associated line/device labels.
 * @startingPoint section="Core" subtitle="Neutral chip, optionally removable" viewport="300x80"
 */
export interface TagProps {
  children?: React.ReactNode;
  /** Shows a small remove (x) button when provided. */
  onRemove?: () => void;
}
