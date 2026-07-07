/**
 * Icon — renders a Lucide outline icon by name.
 * @startingPoint section="Core" subtitle="Lucide icon wrapper" viewport="200x80"
 */
export interface IconProps {
  /** Lucide icon name, e.g. "alert-triangle", "activity", "settings" */
  name: string;
  /** Pixel size (square). Use 16 inline with body text, 20 in buttons/nav, 24 for section headers. */
  size?: number;
  /** Stroke width — system default is 2. */
  strokeWidth?: number;
  /** Icon color; defaults to currentColor so it inherits text color. */
  color?: string;
}
