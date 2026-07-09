/**
 * Radio — custom radio button with label.
 * @startingPoint section="Forms" subtitle="Radio with label" viewport="260x80"
 */
export interface RadioProps {
  label?: string;
  checked?: boolean;
  onChange?: (e: { target: { checked: boolean } }) => void;
  name?: string;
  disabled?: boolean;
}
