/**
 * Checkbox — custom checkbox with label.
 * @startingPoint section="Forms" subtitle="Checkbox with label" viewport="260x80"
 */
export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (e: { target: { checked: boolean } }) => void;
  disabled?: boolean;
}
