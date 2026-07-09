/**
 * CameraFeed — a single industrial camera tile: 16:9 frame, live/recording/offline
 * status badge, camera label + zone, timestamp, and an expand action. Renders a
 * real image/video when `src` is given; otherwise shows an honest flat
 * placeholder ("Sem sinal" / "Pré-visualização indisponível") rather than
 * inventing footage.
 * @startingPoint section="Media" subtitle="Single camera tile — live, recording, or offline" viewport="360x230"
 */
export interface CameraFeedProps {
  /** Camera name shown top-left, e.g. "Câmera 3". */
  label?: string;
  /** Secondary location caption under the label, e.g. "Linha 3 — Posto 2". */
  zone?: string;
  /** Feed state — drives the status badge and placeholder copy. Default "live". */
  status?: 'live' | 'recording' | 'offline';
  /** Timestamp/caption shown bottom-left, e.g. "14:32:07" or "Há 2 min". */
  timestamp?: string;
  /** Real image (or video, with `video`) URL. Omit to show the placeholder state. */
  src?: string;
  /** Treat `src` as a video source (autoplays muted/looped) instead of an image. */
  video?: boolean;
  /** Shows an expand/maximize control bottom-right; called on click. */
  onExpand?: () => void;
  /** Compact rendering for small roles (thumbnail strips, dense walls) — drops
   * the zone caption, timestamp, expand control and placeholder icon/caption,
   * keeping only a truncated label and a small status dot in one bar. Use
   * whenever the tile renders much narrower than ~200px. Default false. */
  compact?: boolean;
}
