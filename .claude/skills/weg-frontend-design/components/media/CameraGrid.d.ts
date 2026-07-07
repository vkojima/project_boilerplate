/**
 * CameraGrid — tiles multiple CameraFeed views for simultaneous multi-camera
 * monitoring (a camera "wall"). Use for a dedicated cameras screen or a panel
 * within a line/station view.
 * @startingPoint section="Media" subtitle="Multi-camera grid — simultaneous views" viewport="700x420"
 */
export interface CameraGridProps {
  /** One entry per camera — same shape as CameraFeedProps, plus a unique `id`. */
  feeds: Array<{
    id: string;
    label?: string;
    zone?: string;
    status?: 'live' | 'recording' | 'offline';
    timestamp?: string;
    src?: string;
    video?: boolean;
  }>;
  /** Force a column count (e.g. 2 for a 2×2 wall). Defaults to an auto square-ish grid. */
  columns?: number;
  /** Grid gap in px. Default 12. */
  gap?: number;
  /** Called with the clicked feed's data when its expand control is used. */
  onExpand?: (feed: object) => void;
}
