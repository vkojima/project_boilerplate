/**
 * Switch — on/off toggle for settings and quick actions.
 * @startingPoint section="Forms" subtitle="On/off toggle" viewport="260x80"
 */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (e: { target: { checked: boolean } }) => void;
  label?: string;
  disabled?: boolean;
}
