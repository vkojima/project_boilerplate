/**
 * Input — labeled single-line text/number field, optional unit suffix.
 * @startingPoint section="Forms" subtitle="Text input with unit + error state" viewport="360x100"
 */
export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  /** Uncontrolled initial value — use instead of `value` when the field doesn't need controlled state. */
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Unit suffix shown after the field, e.g. "°C", "rpm", "bar". */
  unit?: string;
  error?: string;
  disabled?: boolean;
  type?: 'text' | 'number' | 'password' | 'email';
}
