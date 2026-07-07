/**
 * Avatar — initials-based user badge (no photo library available).
 * @startingPoint section="Core" subtitle="Initials avatar" viewport="200x100"
 */
export interface AvatarProps {
  /** Full name; first letters of first two words are used as initials. */
  name?: string;
  size?: number;
}
