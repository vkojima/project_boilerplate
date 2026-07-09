/* @ds-bundle: {"format":4,"namespace":"WEGFrontendDesignSystem_21dab7","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Gauge","sourcePath":"components/data/Gauge.jsx"},{"name":"Sparkline","sourcePath":"components/data/Sparkline.jsx"},{"name":"StatTile","sourcePath":"components/data/StatTile.jsx"},{"name":"AlarmBanner","sourcePath":"components/feedback/AlarmBanner.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"CameraFeed","sourcePath":"components/media/CameraFeed.jsx"},{"name":"CameraGrid","sourcePath":"components/media/CameraGrid.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"06f55076cca9","components/core/Badge.jsx":"de5d27fb0aeb","components/core/Button.jsx":"2b7c097f951e","components/core/Icon.jsx":"b5d06b3aafd5","components/core/IconButton.jsx":"3ed821da9c1c","components/core/Tag.jsx":"923ab190f231","components/data/Card.jsx":"24287858db6c","components/data/DataTable.jsx":"b86da7139700","components/data/Gauge.jsx":"f7b5e47d0d49","components/data/Sparkline.jsx":"54b25b93666b","components/data/StatTile.jsx":"2ce13fe62032","components/feedback/AlarmBanner.jsx":"76e4c67a0c95","components/feedback/Dialog.jsx":"5115a3949d95","components/feedback/Toast.jsx":"3b7e7347df91","components/feedback/Tooltip.jsx":"3001cdb2e663","components/forms/Checkbox.jsx":"15053bf40516","components/forms/Input.jsx":"a32dd6ddd252","components/forms/Radio.jsx":"11ac4417c72f","components/forms/Select.jsx":"2cee47af2cfd","components/forms/Switch.jsx":"a97e33440d7d","components/media/CameraFeed.jsx":"349398ec019d","components/media/CameraGrid.jsx":"b89dfa70c6c1","components/navigation/Tabs.jsx":"b4efdc34dd31","components/navigation/TopNav.jsx":"fbf08c322952","ui_kits/analytics/Analytics.jsx":"b2245a37e459","ui_kits/configuration/Configuration.jsx":"ead3e0421a83","ui_kits/hmi-dashboard/Cameras.jsx":"dce1928a8463","ui_kits/hmi-dashboard/Dashboard.jsx":"af43527e6a2c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WEGFrontendDesignSystem_21dab7 = window.WEGFrontendDesignSystem_21dab7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  status = 'idle',
  children,
  style
}) {
  const map = {
    success: {
      bg: 'var(--status-success-bg)',
      fg: 'var(--status-success-strong)'
    },
    warning: {
      bg: 'var(--status-warning-bg)',
      fg: 'var(--status-warning-strong)'
    },
    critical: {
      bg: 'var(--status-critical-bg)',
      fg: 'var(--status-critical-strong)'
    },
    info: {
      bg: 'var(--status-info-bg)',
      fg: 'var(--status-info-strong)'
    },
    idle: {
      bg: 'var(--status-idle-bg)',
      fg: 'var(--status-idle-strong)'
    }
  };
  const c = map[status] || map.idle;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 9px',
      borderRadius: 'var(--radius-full)',
      background: c.bg,
      color: c.fg,
      font: 'var(--text-label)',
      letterSpacing: 'var(--letter-spacing-label)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 'var(--radius-full)',
      background: c.fg,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const render = () => {
      if (!window.lucide || !ref.current) return;
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        icons: window.lucide.icons,
        attrs: {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': strokeWidth
        }
      });
    };
    if (window.lucide) {
      render();
    } else {
      // lucide CDN script may still be loading — poll briefly
      let tries = 0;
      const t = setInterval(() => {
        tries += 1;
        if (window.lucide || tries > 40) {
          clearInterval(t);
          render();
        }
      }, 50);
      return () => clearInterval(t);
    }
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flexShrink: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function Avatar({
  name = '',
  size = 32,
  style
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
  return /*#__PURE__*/React.createElement("span", {
    title: name,
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      background: 'var(--blue-800)',
      color: 'var(--blue-200)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--text-label)',
      letterSpacing: 0,
      textTransform: 'none',
      border: '1px solid var(--border-default)',
      flexShrink: 0,
      ...style
    }
  }, initials || /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "user",
    size: size * 0.5
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  disabled = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '6px 10px',
      font: 'var(--text-body-sm)',
      gap: 6,
      iconSize: 16
    },
    md: {
      padding: '9px 14px',
      font: 'var(--text-body-md)',
      gap: 8,
      iconSize: 18
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: disabled ? 'var(--bg-surface-active)' : 'var(--blue-500)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-on-accent)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'var(--bg-surface-raised)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      border: '1px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-secondary)',
      border: '1px solid transparent'
    },
    danger: {
      background: disabled ? 'var(--bg-surface-active)' : 'var(--status-critical)',
      color: disabled ? 'var(--text-disabled)' : '#fff',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      font: s.font,
      fontFamily: 'var(--font-sans)',
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
      ...v,
      ...style
    },
    "style-hover": disabled ? undefined : {
      background: variant === 'primary' ? 'var(--blue-600)' : variant === 'danger' ? '#b83e33' : variant === 'secondary' ? 'var(--bg-surface-hover)' : 'var(--bg-surface-hover)'
    },
    "style-active": disabled ? undefined : {
      background: variant === 'primary' ? 'var(--blue-700)' : variant === 'danger' ? '#9c342b' : 'var(--bg-surface-active)'
    }
  }, rest), icon && iconPosition === 'left' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.iconSize
  }), children, icon && iconPosition === 'right' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.iconSize
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  active = false,
  label,
  style,
  ...rest
}) {
  const dims = {
    sm: 28,
    md: 34
  }[size] || 34;
  const iconSize = {
    sm: 16,
    md: 18
  }[size] || 18;
  const variants = {
    ghost: {
      background: active ? 'var(--bg-surface-active)' : 'transparent',
      border: '1px solid transparent',
      color: active ? 'var(--text-primary)' : 'var(--text-secondary)'
    },
    outline: {
      background: active ? 'var(--bg-surface-active)' : 'var(--bg-surface-raised)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-primary)'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    style: {
      width: dims,
      height: dims,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...v,
      ...style
    },
    "style-hover": {
      background: 'var(--bg-surface-hover)'
    },
    "style-active": {
      background: 'var(--bg-surface-active)'
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 8px',
      borderRadius: 'var(--radius-xs)',
      background: 'var(--bg-surface-raised)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-secondary)',
      font: 'var(--text-body-sm)',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remover",
    style: {
      display: 'inline-flex',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function Card({
  title,
  action,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans)',
      overflow: 'hidden',
      ...style
    }
  }, (title || action) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 16px 0'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-title-sm)',
      color: 'var(--text-primary)'
    }
  }, title), action), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      flex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  style
}) {
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(col => /*#__PURE__*/React.createElement("th", {
    key: col.key,
    style: {
      textAlign: col.align || 'left',
      padding: '8px 12px',
      font: 'var(--text-label)',
      color: 'var(--text-tertiary)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--letter-spacing-label)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, col.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    "style-hover": {
      background: 'var(--bg-surface-hover)'
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("td", {
    key: col.key,
    style: {
      textAlign: col.align || 'left',
      padding: '10px 12px',
      font: col.mono ? 'var(--text-mono-sm)' : 'var(--text-body-sm)',
      color: 'var(--text-secondary)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, row[col.key]))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/Gauge.jsx
try { (() => {
function Gauge({
  value = 0,
  min = 0,
  max = 100,
  label,
  unit,
  status = 'info',
  size = 140,
  style
}) {
  const pct = Math.max(0, Math.min(1, (value - min) / (max - min)));
  const angle = pct * 270 - 135; // -135deg to +135deg sweep
  const r = size / 2 - 10;
  const cx = size / 2,
    cy = size / 2;
  const toXY = deg => {
    const rad = (deg - 90) * Math.PI / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  };
  const [sx, sy] = toXY(-135);
  const [ex, ey] = toXY(-135 + pct * 270);
  const largeArc = pct * 270 > 180 ? 1 : 0;
  const color = `var(--status-${status}-strong)`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size * 0.75,
    viewBox: `0 0 ${size} ${size}`
  }, /*#__PURE__*/React.createElement("path", {
    d: `M ${toXY(-135)[0]} ${toXY(-135)[1]} A ${r} ${r} 0 1 1 ${toXY(135)[0]} ${toXY(135)[1]}`,
    fill: "none",
    stroke: "var(--border-default)",
    strokeWidth: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M ${sx} ${sy} A ${r} ${r} 0 ${largeArc} 1 ${ex} ${ey}`,
    fill: "none",
    stroke: color,
    strokeWidth: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy - 4,
    textAnchor: "middle",
    style: {
      font: 'var(--text-mono-lg)',
      fill: 'var(--text-primary)'
    }
  }, value), unit && /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy + 16,
    textAnchor: "middle",
    style: {
      font: 'var(--text-mono-sm)',
      fill: 'var(--text-tertiary)'
    }
  }, unit)), label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-tertiary)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--letter-spacing-label)',
      marginTop: -size * 0.18
    }
  }, label));
}
Object.assign(__ds_scope, { Gauge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Gauge.jsx", error: String((e && e.message) || e) }); }

// components/data/Sparkline.jsx
try { (() => {
function Sparkline({
  data = [],
  width = 160,
  height = 40,
  status = 'info',
  style
}) {
  const min = Math.min(...data),
    max = Math.max(...data);
  const range = max - min || 1;
  const points = data.map((d, i) => {
    const x = i / (data.length - 1) * width;
    const y = height - (d - min) / range * height;
    return `${x},${y}`;
  }).join(' ');
  const color = `var(--status-${status}-strong)`;
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    style: style
  }, /*#__PURE__*/React.createElement("polyline", {
    points: points,
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/data/StatTile.jsx
try { (() => {
function StatTile({
  label,
  value,
  unit,
  status,
  delta,
  style
}) {
  const statusColor = status ? `var(--status-${status}-strong)` : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-tertiary)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--letter-spacing-label)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-mono-lg)',
      color: statusColor
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-mono-sm)',
      color: 'var(--text-tertiary)'
    }
  }, unit)), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      font: 'var(--text-caption)',
      color: delta.direction === 'down' ? 'var(--status-critical-strong)' : 'var(--status-success-strong)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: delta.direction === 'down' ? 'trending-down' : 'trending-up',
    size: 13
  }), delta.label));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/feedback/AlarmBanner.jsx
try { (() => {
function AlarmBanner({
  severity = 'warning',
  message,
  timestamp,
  onAcknowledge,
  style
}) {
  const map = {
    warning: {
      bg: 'var(--status-warning-bg)',
      fg: 'var(--status-warning-strong)',
      icon: 'alert-triangle'
    },
    critical: {
      bg: 'var(--status-critical-bg)',
      fg: 'var(--status-critical-strong)',
      icon: 'alert-octagon'
    }
  };
  const c = map[severity] || map.warning;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: c.bg,
      border: `1px solid ${c.fg}55`,
      borderRadius: 'var(--radius-md)',
      padding: '10px 14px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: c.icon,
    size: 20,
    color: c.fg
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-primary)'
    }
  }, message), timestamp && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-tertiary)'
    }
  }, timestamp)), onAcknowledge && /*#__PURE__*/React.createElement("button", {
    onClick: onAcknowledge,
    style: {
      background: 'transparent',
      border: `1px solid ${c.fg}`,
      color: c.fg,
      borderRadius: 'var(--radius-sm)',
      padding: '5px 10px',
      font: 'var(--text-label)',
      cursor: 'pointer',
      textTransform: 'uppercase'
    }
  }, "Reconhecer"));
}
Object.assign(__ds_scope, { AlarmBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/AlarmBanner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  actions,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay-scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 420,
      background: 'var(--bg-surface-overlay)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-overlay)',
      fontFamily: 'var(--font-sans)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 18px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-title-md)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px',
      font: 'var(--text-body-md)',
      color: 'var(--text-secondary)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '14px 18px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  status = 'info',
  title,
  message,
  onClose,
  style
}) {
  const map = {
    success: {
      fg: 'var(--status-success-strong)',
      icon: 'check-circle-2'
    },
    warning: {
      fg: 'var(--status-warning-strong)',
      icon: 'alert-triangle'
    },
    critical: {
      fg: 'var(--status-critical-strong)',
      icon: 'alert-octagon'
    },
    info: {
      fg: 'var(--status-info-strong)',
      icon: 'info'
    }
  };
  const c = map[status] || map.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      background: 'var(--bg-surface-overlay)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      boxShadow: 'var(--shadow-lg)',
      minWidth: 260,
      maxWidth: 340,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: c.icon,
    size: 18,
    color: c.fg,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-title-sm)',
      color: 'var(--text-primary)',
      marginBottom: 2
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  style
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '125%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--bg-surface-overlay)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-primary)',
      font: 'var(--text-caption)',
      padding: '5px 8px',
      borderRadius: 'var(--radius-xs)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      zIndex: 50
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: disabled ? undefined : () => onChange && onChange({
      target: {
        checked: !checked
      }
    }),
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-xs)',
      border: `1px solid ${checked ? 'var(--blue-500)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--blue-500)' : 'var(--bg-surface)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    color: "var(--text-on-accent)"
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-md)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  unit,
  error,
  disabled,
  type = 'text',
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-secondary)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--letter-spacing-label)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    style: {
      flex: 1,
      background: disabled ? 'var(--bg-sunken)' : 'var(--bg-surface)',
      border: `1px solid ${error ? 'var(--status-critical)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      font: 'var(--text-body-md)',
      padding: '8px 10px',
      outline: 'none'
    },
    "style-focus": {
      borderColor: 'var(--border-focus)',
      boxShadow: 'var(--focus-ring)'
    }
  }), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-mono-sm)',
      color: 'var(--text-tertiary)'
    }
  }, unit)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--status-critical-strong)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: disabled ? undefined : () => onChange && onChange({
      target: {
        checked: true
      }
    }),
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-full)',
      border: `1px solid ${checked ? 'var(--blue-500)' : 'var(--border-strong)'}`,
      background: 'var(--bg-surface)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 'var(--radius-full)',
      background: 'var(--blue-500)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-md)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  value,
  onChange,
  options = [],
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-secondary)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--letter-spacing-label)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    disabled: disabled,
    style: {
      flex: 1,
      appearance: 'none',
      background: disabled ? 'var(--bg-sunken)' : 'var(--bg-surface)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      font: 'var(--text-body-md)',
      padding: '8px 32px 8px 10px',
      outline: 'none'
    },
    "style-focus": {
      borderColor: 'var(--border-focus)',
      boxShadow: 'var(--focus-ring)'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--text-tertiary)",
    style: {
      position: 'absolute',
      right: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: disabled ? undefined : () => onChange && onChange({
      target: {
        checked: !checked
      }
    }),
    style: {
      width: 38,
      height: 22,
      borderRadius: 'var(--radius-full)',
      padding: 2,
      background: checked ? 'var(--blue-500)' : 'var(--bg-surface-active)',
      border: '1px solid var(--border-default)',
      display: 'inline-flex',
      alignItems: 'center',
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 'var(--radius-full)',
      background: '#fff',
      transform: checked ? 'translateX(16px)' : 'translateX(0)',
      transition: 'transform var(--duration-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-md)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/media/CameraFeed.jsx
try { (() => {
// Solid scrim bars (not gradients — this system uses flat fills only)
// keep the label/status legible over a real image without adding any
// decorative treatment to the frame itself.
const scrimStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '7px 10px',
  background: 'rgba(4,5,6,0.6)'
};
const STATUS = {
  live: {
    badge: 'critical',
    label: 'AO VIVO'
  },
  recording: {
    badge: 'critical',
    label: 'GRAVANDO'
  },
  offline: {
    badge: 'idle',
    label: 'OFFLINE'
  }
};
const DOT_COLOR = {
  live: 'var(--status-critical-strong)',
  recording: 'var(--status-critical-strong)',
  offline: 'var(--status-idle-strong)'
};
function CameraFeed({
  label,
  zone,
  status = 'live',
  timestamp,
  src,
  video = false,
  onExpand,
  compact = false,
  style
}) {
  const s = STATUS[status] || STATUS.live;
  const hasFeed = !!src && status !== 'offline';
  const media = hasFeed ? video ? /*#__PURE__*/React.createElement("video", {
    src: src,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: label || 'Câmera',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6
    }
  }, !compact && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: status === 'offline' ? 'video-off' : 'video',
    size: 28,
    color: "var(--text-disabled)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-tertiary)'
    }
  }, status === 'offline' ? 'Sem sinal' : 'Pré-visualização indisponível')));

  // Compact mode is for small roles (thumbnail strips, dense walls) where
  // the full label/zone/timestamp/badge chrome would collide or overflow —
  // it keeps only a truncated label and a small status dot in one bar.
  if (compact) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        aspectRatio: '16 / 9',
        width: '100%',
        background: 'var(--bg-sunken)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        fontFamily: 'var(--font-sans)',
        ...style
      }
    }, media, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        display: 'flex',
        alignItems: 'flex-end',
        background: hasFeed ? 'linear-gradient(transparent, transparent)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        width: '100%',
        padding: '4px 6px',
        background: 'rgba(4,5,6,0.6)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: 'var(--radius-full)',
        background: DOT_COLOR[status],
        flexShrink: 0
      }
    }), label && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--text-caption)',
        color: 'var(--text-primary)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, label))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 9',
      width: '100%',
      background: 'var(--bg-sunken)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, media, /*#__PURE__*/React.createElement("div", {
    style: {
      ...scrimStyle,
      top: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      minWidth: 0
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      fontWeight: 600,
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, label), zone && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, zone)), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    status: s.badge,
    style: {
      flexShrink: 0
    }
  }, s.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      ...scrimStyle,
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-mono-sm)',
      color: 'var(--text-secondary)'
    }
  }, timestamp || ''), onExpand && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "maximize-2",
    label: "Expandir",
    size: "sm",
    onClick: onExpand,
    style: {
      background: 'transparent'
    }
  })));
}
Object.assign(__ds_scope, { CameraFeed });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/CameraFeed.jsx", error: String((e && e.message) || e) }); }

// components/media/CameraGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Multi-camera view: tiles every feed in an even grid. Pass `columns`
// to force a layout (e.g. 2 for a 2×2 wall); otherwise it picks the
// smallest square-ish grid that fits the feed count.
function CameraGrid({
  feeds = [],
  columns,
  gap = 12,
  onExpand,
  style
}) {
  const cols = columns || Math.ceil(Math.sqrt(feeds.length)) || 1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap,
      ...style
    }
  }, feeds.map(f => /*#__PURE__*/React.createElement(__ds_scope.CameraFeed, _extends({
    key: f.id
  }, f, {
    onExpand: onExpand ? () => onExpand(f) : undefined
  }))));
}
Object.assign(__ds_scope, { CameraGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/CameraGrid.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  activeKey,
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, items.map(it => {
    const active = activeKey === it.key;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      onClick: () => onSelect && onSelect(it.key),
      style: {
        padding: '9px 14px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        font: 'var(--text-body-sm)',
        color: active ? 'var(--text-primary)' : 'var(--text-tertiary)',
        borderBottom: `2px solid ${active ? 'var(--blue-500)' : 'transparent'}`,
        marginBottom: -1
      },
      "style-hover": {
        color: 'var(--text-primary)'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
// Resolves a project-root-relative asset path (e.g. "assets/foo.png")
// against wherever _ds_bundle.js was actually loaded from, so logos work
// whether the consuming page lives at the project root, one level down
// (ui_kits/<x>/index.html), or deeper — a hardcoded "../../assets/…"
// only works at one fixed depth.
function dsAsset(relPath) {
  const bundleScript = Array.from(document.getElementsByTagName('script')).find(s => s.src && s.src.includes('_ds_bundle.js'));
  return bundleScript ? new URL(relPath, bundleScript.src).href : relPath;
}
function TopNav({
  items = [],
  activeKey,
  onSelect,
  location,
  userName,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--header-height)',
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '0 20px',
      background: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dsAsset('assets/weg-logo-white.png'),
    alt: "WEG",
    style: {
      height: 20
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 16,
      background: 'var(--border-strong)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: dsAsset('assets/sim-logo-white.png'),
    alt: "SIM",
    style: {
      height: 13
    }
  })), location && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, location.factory), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 14,
    color: "var(--text-tertiary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, location.line), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 14,
    color: "var(--text-tertiary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, location.station)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 8
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.key,
    onClick: () => onSelect && onSelect(it.key),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '7px 12px',
      borderRadius: 'var(--radius-sm)',
      background: activeKey === it.key ? 'var(--bg-surface-active)' : 'transparent',
      color: activeKey === it.key ? 'var(--text-primary)' : 'var(--text-secondary)',
      border: 'none',
      cursor: 'pointer',
      font: 'var(--text-body-sm)'
    },
    "style-hover": {
      background: 'var(--bg-surface-hover)',
      color: 'var(--text-primary)'
    }
  }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 16
  }), it.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "bell",
    label: "Alarmes"
  }), userName && /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: userName,
    size: 30
  }));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/analytics/Analytics.jsx
try { (() => {
function Analytics() {
  const {
    TopNav,
    Tabs,
    Card,
    StatTile,
    Sparkline,
    DataTable,
    Badge,
    Select
  } = window.WEGFrontendDesignSystem_21dab7;
  const [navKey, setNavKey] = React.useState('analytics');
  const [period, setPeriod] = React.useState('week');
  const rows = [{
    line: 'Linha 1',
    oee: '91,2%',
    prod: '5.104 un',
    trend: [58, 61, 60, 64, 66, 65, 69],
    status: 'success'
  }, {
    line: 'Linha 2',
    oee: '84,0%',
    prod: '4.320 un',
    trend: [70, 68, 71, 69, 72, 74, 73],
    status: 'success'
  }, {
    line: 'Linha 3',
    oee: '—',
    prod: '0 un',
    trend: [60, 58, 55, 40, 20, 5, 0],
    status: 'critical'
  }, {
    line: 'Linha 4',
    oee: '76,4%',
    prod: '3.980 un',
    trend: [65, 64, 63, 62, 60, 61, 62],
    status: 'warning'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--bg-canvas)'
    }
  }, /*#__PURE__*/React.createElement(TopNav, {
    items: [{
      key: 'dashboard',
      label: 'Painel',
      icon: 'layout-grid'
    }, {
      key: 'cameras',
      label: 'Câmeras',
      icon: 'video'
    }, {
      key: 'analytics',
      label: 'Análises',
      icon: 'chart-line'
    }, {
      key: 'config',
      label: 'Configuração',
      icon: 'settings'
    }],
    activeKey: navKey,
    onSelect: k => {
      if (k === 'dashboard') window.location.href = '../hmi-dashboard/index.html';else if (k === 'cameras') window.location.href = '../hmi-dashboard/cameras.html';else if (k === 'config') window.location.href = '../configuration/index.html';else setNavKey(k);
    },
    userName: "Ana Ferreira"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-title-lg)',
      color: 'var(--text-primary)'
    }
  }, "An\xE1lises \u2014 F\xE1brica II"), /*#__PURE__*/React.createElement(Select, {
    label: "",
    value: period,
    onChange: e => setPeriod(e.target.value),
    options: [{
      value: 'day',
      label: 'Hoje'
    }, {
      value: 'week',
      label: 'Esta semana'
    }, {
      value: 'month',
      label: 'Este mês'
    }]
  })), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      key: 'day',
      label: 'Dia'
    }, {
      key: 'week',
      label: 'Semana'
    }, {
      key: 'month',
      label: 'Mês'
    }],
    activeKey: period,
    onSelect: setPeriod
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "OEE m\xE9dio"
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "OEE",
    value: "83,9",
    unit: "%",
    delta: {
      direction: 'up',
      label: '+1,4 pts vs. semana anterior'
    }
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Produ\xE7\xE3o total"
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Unidades",
    value: "13.404",
    unit: "un",
    delta: {
      direction: 'up',
      label: '+320 un'
    }
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Paradas n\xE3o programadas"
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Ocorr\xEAncias",
    value: "3",
    status: "critical",
    delta: {
      direction: 'down',
      label: '-1 vs. semana anterior'
    }
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Disponibilidade"
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Disponibilidade",
    value: "94,1",
    unit: "%"
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Linhas \u2014 F\xE1brica II"
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'line',
      label: 'Linha'
    }, {
      key: 'oee',
      label: 'OEE',
      align: 'right',
      mono: true
    }, {
      key: 'prod',
      label: 'Produção',
      align: 'right',
      mono: true
    }, {
      key: 'trend',
      label: 'Tendência (7d)'
    }, {
      key: 'status',
      label: 'Status'
    }],
    rows: rows.map(r => ({
      line: r.line,
      oee: r.oee,
      prod: r.prod,
      trend: /*#__PURE__*/React.createElement(Sparkline, {
        data: r.trend,
        status: r.status,
        width: 100,
        height: 28
      }),
      status: /*#__PURE__*/React.createElement(Badge, {
        status: r.status
      }, {
        success: 'Em operação',
        warning: 'Em alerta',
        critical: 'Parada'
      }[r.status])
    }))
  }))));
}
window.Analytics = Analytics;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/analytics/Analytics.jsx", error: String((e && e.message) || e) }); }

// ui_kits/configuration/Configuration.jsx
try { (() => {
function Configuration() {
  const {
    TopNav,
    Tabs,
    Card,
    Input,
    Select,
    Switch,
    Checkbox,
    Radio,
    Button,
    Avatar,
    IconButton,
    Badge
  } = window.WEGFrontendDesignSystem_21dab7;
  const [navKey, setNavKey] = React.useState('config');
  const [tab, setTab] = React.useState('thresholds');
  const [soundAlerts, setSoundAlerts] = React.useState(true);
  const [emailAlerts, setEmailAlerts] = React.useState(false);
  const [unit, setUnit] = React.useState('c');
  const users = [{
    name: 'Carlos Souza',
    role: 'Operador',
    line: 'Linha 3'
  }, {
    name: 'Ana Ferreira',
    role: 'Gerente de planta',
    line: 'Fábrica II'
  }, {
    name: 'Marcos Lima',
    role: 'Manutenção',
    line: 'Todas'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--bg-canvas)'
    }
  }, /*#__PURE__*/React.createElement(TopNav, {
    items: [{
      key: 'dashboard',
      label: 'Painel',
      icon: 'layout-grid'
    }, {
      key: 'cameras',
      label: 'Câmeras',
      icon: 'video'
    }, {
      key: 'analytics',
      label: 'Análises',
      icon: 'chart-line'
    }, {
      key: 'config',
      label: 'Configuração',
      icon: 'settings'
    }],
    activeKey: navKey,
    onSelect: k => {
      if (k === 'dashboard') window.location.href = '../hmi-dashboard/index.html';else if (k === 'cameras') window.location.href = '../hmi-dashboard/cameras.html';else if (k === 'analytics') window.location.href = '../analytics/index.html';else setNavKey(k);
    },
    userName: "Ana Ferreira"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 900,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-title-lg)',
      color: 'var(--text-primary)'
    }
  }, "Configura\xE7\xE3o \u2014 Linha 3"), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      key: 'thresholds',
      label: 'Limites'
    }, {
      key: 'alerts',
      label: 'Alertas'
    }, {
      key: 'users',
      label: 'Usuários'
    }],
    activeKey: tab,
    onSelect: setTab
  }), tab === 'thresholds' && /*#__PURE__*/React.createElement(Card, {
    title: "Limites de opera\xE7\xE3o"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Temperatura m\xE1xima",
    defaultValue: "90",
    unit: "\xB0C"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Temperatura m\xEDnima",
    defaultValue: "10",
    unit: "\xB0C"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Velocidade m\xE1xima",
    defaultValue: "1400",
    unit: "rpm"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Press\xE3o m\xE1xima",
    defaultValue: "80",
    unit: "bar"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Unidade de temperatura",
    value: unit,
    onChange: e => setUnit(e.target.value),
    options: [{
      value: 'c',
      label: 'Celsius'
    }, {
      value: 'f',
      label: 'Fahrenheit'
    }]
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Linha",
    value: "l3",
    onChange: () => {},
    options: [{
      value: 'l1',
      label: 'Linha 1'
    }, {
      value: 'l3',
      label: 'Linha 3'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "check-circle-2"
  }, "Salvar altera\xE7\xF5es"))), tab === 'alerts' && /*#__PURE__*/React.createElement(Card, {
    title: "Prefer\xEAncias de alerta"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Alertas sonoros",
    checked: soundAlerts,
    onChange: e => setSoundAlerts(e.target.checked)
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Notificar por e-mail",
    checked: emailAlerts,
    onChange: e => setEmailAlerts(e.target.checked)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      margin: '4px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-tertiary)',
      textTransform: 'uppercase'
    }
  }, "Severidade m\xEDnima notificada"), /*#__PURE__*/React.createElement(Radio, {
    name: "sev",
    label: "Todas (aviso e cr\xEDtico)",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "sev",
    label: "Apenas cr\xEDticos",
    checked: false,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      margin: '4px 0'
    }
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Enviar resumo di\xE1rio por e-mail",
    checked: false,
    onChange: () => {}
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "check-circle-2"
  }, "Salvar altera\xE7\xF5es"))), tab === 'users' && /*#__PURE__*/React.createElement(Card, {
    title: "Usu\xE1rios com acesso",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      icon: "plus"
    }, "Adicionar")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, users.map(u => /*#__PURE__*/React.createElement("div", {
    key: u.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 4px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: u.name
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-primary)'
    }
  }, u.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-tertiary)'
    }
  }, u.role, " \xB7 ", u.line)), /*#__PURE__*/React.createElement(IconButton, {
    icon: "more-vertical",
    label: "Mais op\xE7\xF5es"
  })))))));
}
window.Configuration = Configuration;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/configuration/Configuration.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hmi-dashboard/Cameras.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Cameras() {
  const {
    TopNav,
    Card,
    CameraFeed,
    CameraGrid,
    Tabs
  } = window.WEGFrontendDesignSystem_21dab7;
  const [navKey, setNavKey] = React.useState('cameras');
  const [layout, setLayout] = React.useState('grid');
  const feeds = [{
    id: 'cam1',
    label: 'Câmera 1',
    zone: 'Entrada — Linha 3',
    status: 'live',
    timestamp: '14:32:07'
  }, {
    id: 'cam2',
    label: 'Câmera 2',
    zone: 'Posto 1',
    status: 'live',
    timestamp: '14:32:07'
  }, {
    id: 'cam3',
    label: 'Câmera 3',
    zone: 'Posto 2',
    status: 'recording',
    timestamp: '14:32:07'
  }, {
    id: 'cam4',
    label: 'Câmera 4',
    zone: 'Posto 3',
    status: 'recording',
    timestamp: '14:32:07'
  }, {
    id: 'cam5',
    label: 'Câmera 5',
    zone: 'Posto 4',
    status: 'live',
    timestamp: '14:32:07'
  }, {
    id: 'cam6',
    label: 'Câmera 6',
    zone: 'Saída — Expedição',
    status: 'offline'
  }];
  const [focused, setFocused] = React.useState(feeds[0]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-canvas)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopNav, {
    items: [{
      key: 'dashboard',
      label: 'Painel',
      icon: 'layout-grid'
    }, {
      key: 'cameras',
      label: 'Câmeras',
      icon: 'video'
    }, {
      key: 'analytics',
      label: 'Análises',
      icon: 'chart-line'
    }, {
      key: 'config',
      label: 'Configuração',
      icon: 'settings'
    }],
    activeKey: navKey,
    onSelect: k => {
      if (k === 'dashboard') window.location.href = './index.html';else if (k === 'analytics') window.location.href = '../analytics/index.html';else if (k === 'config') window.location.href = '../configuration/index.html';else setNavKey(k);
    },
    location: {
      factory: 'Fábrica II',
      line: 'Linha 3',
      station: 'Todos os postos'
    },
    userName: "Carlos Souza"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-title-lg)',
      color: 'var(--text-primary)'
    }
  }, "C\xE2meras \u2014 Linha 3"), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      key: 'grid',
      label: 'Grade'
    }, {
      key: 'focus',
      label: 'Foco + miniaturas'
    }],
    activeKey: layout,
    onSelect: setLayout
  })), layout === 'grid' ? /*#__PURE__*/React.createElement(Card, {
    style: {
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(CameraGrid, {
    columns: 3,
    feeds: feeds,
    onExpand: f => {
      setFocused(f);
      setLayout('focus');
    },
    style: {
      height: '100%'
    }
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(CameraFeed, _extends({}, focused, {
    style: {
      height: '100%',
      aspectRatio: 'auto'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${feeds.length}, 1fr)`,
      gap: 10
    }
  }, feeds.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.id,
    onClick: () => setFocused(f),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(CameraFeed, _extends({}, f, {
    compact: true,
    style: f.id === focused.id ? {
      borderColor: 'var(--blue-400)'
    } : undefined
  }))))))));
}
window.Cameras = Cameras;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hmi-dashboard/Cameras.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hmi-dashboard/Dashboard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PostoCard({
  name,
  status,
  temp,
  speed,
  onClick
}) {
  const {
    Card,
    Badge,
    Icon
  } = window.WEGFrontendDesignSystem_21dab7;
  const label = {
    success: 'Em operação',
    warning: 'Em alerta',
    critical: 'Parada',
    idle: 'Offline'
  }[status];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: name,
    action: /*#__PURE__*/React.createElement(Badge, {
      status: status
    }, label),
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-tertiary)',
      textTransform: 'uppercase'
    }
  }, "Temp."), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-mono-md)',
      color: status === 'warning' ? 'var(--status-warning-strong)' : 'var(--text-primary)'
    }
  }, temp, " \xB0C")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-tertiary)',
      textTransform: 'uppercase'
    }
  }, "Vel."), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-mono-md)',
      color: 'var(--text-primary)'
    }
  }, speed, " rpm")))));
}
function Dashboard() {
  const {
    TopNav,
    Card,
    StatTile,
    Gauge,
    AlarmBanner,
    Dialog,
    Button,
    Badge
  } = window.WEGFrontendDesignSystem_21dab7;
  const [navKey, setNavKey] = React.useState('dashboard');
  const [dialogPosto, setDialogPosto] = React.useState(null);
  const [ackAlarm, setAckAlarm] = React.useState(false);
  const postos = [{
    name: 'Posto 1',
    status: 'success',
    temp: '62,1',
    speed: '1.204'
  }, {
    name: 'Posto 2',
    status: 'warning',
    temp: '86,2',
    speed: '980'
  }, {
    name: 'Posto 3',
    status: 'critical',
    temp: '—',
    speed: '0'
  }, {
    name: 'Posto 4',
    status: 'success',
    temp: '58,4',
    speed: '1.180'
  }, {
    name: 'Posto 5',
    status: 'idle',
    temp: '—',
    speed: '0'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-canvas)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopNav, {
    items: [{
      key: 'dashboard',
      label: 'Painel',
      icon: 'layout-grid'
    }, {
      key: 'cameras',
      label: 'Câmeras',
      icon: 'video'
    }, {
      key: 'analytics',
      label: 'Análises',
      icon: 'chart-line'
    }, {
      key: 'config',
      label: 'Configuração',
      icon: 'settings'
    }],
    activeKey: navKey,
    onSelect: k => {
      if (k === 'cameras') window.location.href = './cameras.html';else if (k === 'analytics') window.location.href = '../analytics/index.html';else if (k === 'config') window.location.href = '../configuration/index.html';else setNavKey(k);
    },
    location: {
      factory: 'Fábrica II',
      line: 'Linha 3',
      station: 'Todos os postos'
    },
    userName: "Carlos Souza"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minHeight: 0
    }
  }, !ackAlarm && /*#__PURE__*/React.createElement(AlarmBanner, {
    severity: "critical",
    message: "Parada n\xE3o programada \u2014 Linha 3, Posto 3",
    timestamp: "14:32:07",
    onAcknowledge: () => setAckAlarm(true)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "OEE da linha"
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "OEE",
    value: "87,2",
    unit: "%",
    delta: {
      direction: 'up',
      label: '+2,1 pts vs. ontem'
    }
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Produ\xE7\xE3o"
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Unidades / turno",
    value: "4.812",
    unit: "un",
    delta: {
      direction: 'up',
      label: '+180 vs. meta'
    }
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Temperatura cr\xEDtica"
  }, /*#__PURE__*/React.createElement(Gauge, {
    value: 86,
    min: 0,
    max: 120,
    unit: "\xB0C",
    status: "warning",
    size: 110
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Press\xE3o do sistema"
  }, /*#__PURE__*/React.createElement(Gauge, {
    value: 62,
    min: 0,
    max: 100,
    unit: "bar",
    status: "success",
    size: 110
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 12,
      minHeight: 0
    }
  }, postos.map(p => /*#__PURE__*/React.createElement(PostoCard, _extends({
    key: p.name
  }, p, {
    onClick: () => setDialogPosto(p)
  }))))), /*#__PURE__*/React.createElement(Dialog, {
    open: !!dialogPosto,
    title: dialogPosto ? dialogPosto.name : '',
    onClose: () => setDialogPosto(null),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setDialogPosto(null)
    }, "Fechar"), /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      icon: "power",
      onClick: () => setDialogPosto(null)
    }, "Parar posto"))
  }, dialogPosto && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, "Status: ", /*#__PURE__*/React.createElement(Badge, {
    status: dialogPosto.status
  }, {
    success: 'Em operação',
    warning: 'Em alerta',
    critical: 'Parada',
    idle: 'Offline'
  }[dialogPosto.status])), /*#__PURE__*/React.createElement("div", null, "Temperatura: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, dialogPosto.temp, " \xB0C")), /*#__PURE__*/React.createElement("div", null, "Velocidade: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, dialogPosto.speed, " rpm")))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hmi-dashboard/Dashboard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Gauge = __ds_scope.Gauge;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.AlarmBanner = __ds_scope.AlarmBanner;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.CameraFeed = __ds_scope.CameraFeed;

__ds_ns.CameraGrid = __ds_scope.CameraGrid;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopNav = __ds_scope.TopNav;

})();
