/**
 * Select — labeled native dropdown.
 * @startingPoint section="Forms" subtitle="Dropdown select" viewport="320x100"
 */
export interface SelectProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string }>;
  disabled?: boolean;
}
