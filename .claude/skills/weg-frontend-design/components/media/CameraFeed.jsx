import { Icon } from '../core/Icon.jsx';
import { Badge } from '../core/Badge.jsx';
import { IconButton } from '../core/IconButton.jsx';

// Solid scrim bars (not gradients — this system uses flat fills only)
// keep the label/status legible over a real image without adding any
// decorative treatment to the frame itself.
const scrimStyle = {
  position: 'absolute', left: 0, right: 0, display: 'flex',
  alignItems: 'center', justifyContent: 'space-between',
  padding: '7px 10px', background: 'rgba(4,5,6,0.6)',
};

const STATUS = {
  live: { badge: 'critical', label: 'AO VIVO' },
  recording: { badge: 'critical', label: 'GRAVANDO' },
  offline: { badge: 'idle', label: 'OFFLINE' },
};

const DOT_COLOR = {
  live: 'var(--status-critical-strong)',
  recording: 'var(--status-critical-strong)',
  offline: 'var(--status-idle-strong)',
};

export function CameraFeed({
  label, zone, status = 'live', timestamp, src, video = false,
  onExpand, compact = false, style,
}) {
  const s = STATUS[status] || STATUS.live;
  const hasFeed = !!src && status !== 'offline';

  const media = hasFeed ? (
    video ? (
      <video src={src} autoPlay muted loop playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    ) : (
      <img src={src} alt={label || 'Câmera'}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    )
  ) : (
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 6,
    }}>
      {!compact && (
        <>
          <Icon name={status === 'offline' ? 'video-off' : 'video'} size={28} color="var(--text-disabled)" />
          <span style={{ font: 'var(--text-caption)', color: 'var(--text-tertiary)' }}>
            {status === 'offline' ? 'Sem sinal' : 'Pré-visualização indisponível'}
          </span>
        </>
      )}
    </div>
  );

  // Compact mode is for small roles (thumbnail strips, dense walls) where
  // the full label/zone/timestamp/badge chrome would collide or overflow —
  // it keeps only a truncated label and a small status dot in one bar.
  if (compact) {
    return (
      <div style={{
        position: 'relative', aspectRatio: '16 / 9', width: '100%',
        background: 'var(--bg-sunken)', border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-sm)', overflow: 'hidden',
        fontFamily: 'var(--font-sans)',
        ...style,
      }}>
        {media}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, top: 0,
          display: 'flex', alignItems: 'flex-end',
          background: hasFeed ? 'linear-gradient(transparent, transparent)' : 'none',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 5, width: '100%',
            padding: '4px 6px', background: 'rgba(4,5,6,0.6)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 'var(--radius-full)', background: DOT_COLOR[status], flexShrink: 0 }} />
            {label && <span style={{ font: 'var(--text-caption)', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      position: 'relative', aspectRatio: '16 / 9', width: '100%',
      background: 'var(--bg-sunken)', border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)', overflow: 'hidden',
      fontFamily: 'var(--font-sans)',
      ...style,
    }}>
      {media}

      <div style={{ ...scrimStyle, top: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0 }}>
          {label && <span style={{ font: 'var(--text-body-sm)', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>}
          {zone && <span style={{ font: 'var(--text-caption)', color: 'var(--text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{zone}</span>}
        </div>
        <Badge status={s.badge} style={{ flexShrink: 0 }}>{s.label}</Badge>
      </div>

      <div style={{ ...scrimStyle, bottom: 0 }}>
        <span style={{ font: 'var(--text-mono-sm)', color: 'var(--text-secondary)' }}>{timestamp || ''}</span>
        {onExpand && (
          <IconButton icon="maximize-2" label="Expandir" size="sm" onClick={onExpand}
            style={{ background: 'transparent' }} />
        )}
      </div>
    </div>
  );
}
