import { Icon } from '../core/Icon.jsx';
import { Avatar } from '../core/Avatar.jsx';
import { IconButton } from '../core/IconButton.jsx';

// Resolves a project-root-relative asset path (e.g. "assets/foo.png")
// against wherever _ds_bundle.js was actually loaded from, so logos work
// whether the consuming page lives at the project root, one level down
// (ui_kits/<x>/index.html), or deeper — a hardcoded "../../assets/…"
// only works at one fixed depth.
function dsAsset(relPath) {
  const bundleScript = Array.from(document.getElementsByTagName('script'))
    .find(s => s.src && s.src.includes('_ds_bundle.js'));
  return bundleScript ? new URL(relPath, bundleScript.src).href : relPath;
}

export function TopNav({ items = [], activeKey, onSelect, location, userName, style }) {
  return (
    <div style={{
      height: 'var(--header-height)', display: 'flex', alignItems: 'center',
      gap: 24, padding: '0 20px', background: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border-default)', fontFamily: 'var(--font-sans)',
      ...style,
    }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={dsAsset('assets/weg-logo-white.png')} alt="WEG" style={{ height: 20 }} />
        <span style={{ width: 1, height: 16, background: 'var(--border-strong)' }} />
        <img src={dsAsset('assets/sim-logo-white.png')} alt="SIM" style={{ height: 13 }} />
      </span>

      {location && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, font: 'var(--text-body-sm)', color: 'var(--text-secondary)' }}>
          <span style={{ color: 'var(--text-primary)' }}>{location.factory}</span>
          <Icon name="chevron-right" size={14} color="var(--text-tertiary)" />
          <span style={{ color: 'var(--text-primary)' }}>{location.line}</span>
          <Icon name="chevron-right" size={14} color="var(--text-tertiary)" />
          <span style={{ color: 'var(--text-primary)' }}>{location.station}</span>
        </div>
      )}

      <nav style={{ display: 'flex', gap: 4, marginLeft: 8 }}>
        {items.map(it => (
          <button
            key={it.key}
            onClick={() => onSelect && onSelect(it.key)}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '7px 12px', borderRadius: 'var(--radius-sm)',
              background: activeKey === it.key ? 'var(--bg-surface-active)' : 'transparent',
              color: activeKey === it.key ? 'var(--text-primary)' : 'var(--text-secondary)',
              border: 'none', cursor: 'pointer', font: 'var(--text-body-sm)',
            }}
            style-hover={{ background: 'var(--bg-surface-hover)', color: 'var(--text-primary)' }}
          >
            {it.icon && <Icon name={it.icon} size={16} />}
            {it.label}
          </button>
        ))}
      </nav>

      <div style={{ flex: 1 }} />

      <IconButton icon="bell" label="Alarmes" />
      {userName && <Avatar name={userName} size={30} />}
    </div>
  );
}
