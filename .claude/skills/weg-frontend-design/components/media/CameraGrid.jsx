import { CameraFeed } from './CameraFeed.jsx';

// Multi-camera view: tiles every feed in an even grid. Pass `columns`
// to force a layout (e.g. 2 for a 2×2 wall); otherwise it picks the
// smallest square-ish grid that fits the feed count.
export function CameraGrid({ feeds = [], columns, gap = 12, onExpand, style }) {
  const cols = columns || Math.ceil(Math.sqrt(feeds.length)) || 1;
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap, ...style,
    }}>
      {feeds.map((f) => (
        <CameraFeed key={f.id} {...f} onExpand={onExpand ? () => onExpand(f) : undefined} />
      ))}
    </div>
  );
}
