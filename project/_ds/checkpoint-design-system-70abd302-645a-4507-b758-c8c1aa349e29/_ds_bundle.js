/* @ds-bundle: {"format":3,"namespace":"CheckpointDesignSystem_70abd3","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Gauge","sourcePath":"components/data/Gauge.jsx"},{"name":"ReproBlock","sourcePath":"components/data/ReproBlock.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"SeverityBadge","sourcePath":"components/feedback/SeverityBadge.jsx"},{"name":"StatusPill","sourcePath":"components/feedback/SeverityBadge.jsx"},{"name":"Tag","sourcePath":"components/feedback/SeverityBadge.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Switch","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"PERSONAS","sourcePath":"components/personas/PersonaGlyph.jsx"},{"name":"PersonaGlyph","sourcePath":"components/personas/PersonaGlyph.jsx"},{"name":"PersonaCard","sourcePath":"components/personas/PersonaGlyph.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Metric","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"ccec70726ac0","components/buttons/IconButton.jsx":"2a6716109bc5","components/data/DataTable.jsx":"778614fe7d24","components/data/Gauge.jsx":"7f8c3d60ea55","components/data/ReproBlock.jsx":"655d6c6f6859","components/feedback/ProgressBar.jsx":"f7a9f44ee9fe","components/feedback/SeverityBadge.jsx":"b1104418d304","components/feedback/Toast.jsx":"d64d0b894e9a","components/forms/Checkbox.jsx":"a2639cc38aa4","components/forms/Input.jsx":"1e9b682db941","components/forms/SegmentedControl.jsx":"94f9a0d0b820","components/forms/Select.jsx":"a19f01948b2b","components/personas/PersonaGlyph.jsx":"69f27f50bfe4","components/surfaces/Card.jsx":"9effbcf959d8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CheckpointDesignSystem_70abd3 = window.CheckpointDesignSystem_70abd3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkpoint Button — primary action uses signal-lime; secondary/ghost stay
 * quiet on the instrument panel; danger is reserved for destructive intent.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      height: 'var(--control-height-sm)',
      padding: '0 10px',
      font: 'var(--fs-small)',
      gap: '6px',
      radius: 'var(--radius-sm)'
    },
    md: {
      height: 'var(--control-height)',
      padding: '0 14px',
      font: 'var(--fs-body)',
      gap: '8px',
      radius: 'var(--radius-md)'
    },
    lg: {
      height: 'var(--control-height-lg)',
      padding: '0 20px',
      font: 'var(--fs-lg)',
      gap: '9px',
      radius: 'var(--radius-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const palettes = {
    primary: {
      bg: hover ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: 'transparent',
      weight: 'var(--fw-semibold)'
    },
    secondary: {
      bg: hover ? 'var(--surface-raised)' : 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: 'var(--border-strong)',
      weight: 'var(--fw-medium)'
    },
    ghost: {
      bg: hover ? 'var(--surface-card)' : 'transparent',
      color: 'var(--text-body)',
      border: 'transparent',
      weight: 'var(--fw-medium)'
    },
    danger: {
      bg: hover ? 'var(--critical-bright)' : 'var(--critical)',
      color: '#1a0809',
      border: 'transparent',
      weight: 'var(--fw-semibold)'
    }
  };
  const p = palettes[variant] || palettes.primary;
  const styleObj = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontFamily: 'var(--font-sans)',
    fontSize: s.font,
    fontWeight: p.weight,
    lineHeight: 1,
    letterSpacing: 'var(--tracking-snug)',
    color: p.color,
    background: p.bg,
    border: `1px solid ${p.border}`,
    borderRadius: s.radius,
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? '100%' : undefined,
    transform: active && !disabled ? 'translateY(0.5px)' : 'none',
    transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    outline: 'none',
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled || loading,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onFocus: e => {
      e.target.style.boxShadow = 'var(--ring)';
    },
    onBlur: e => {
      e.target.style.boxShadow = 'none';
    },
    style: styleObj
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, null), !loading && iconLeft, children, !loading && iconRight);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 13,
      height: 13,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      display: 'inline-block',
      animation: 'ck-spin 0.7s linear infinite',
      opacity: 0.85
    }
  });
}
if (typeof document !== 'undefined' && !document.getElementById('ck-spin-kf')) {
  const el = document.createElement('style');
  el.id = 'ck-spin-kf';
  el.textContent = '@keyframes ck-spin{to{transform:rotate(360deg)}}';
  document.head.appendChild(el);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square, icon-only control for toolbars and dense table rows. */
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  active = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    sm: 28,
    md: 36,
    lg: 44
  };
  const dim = sizes[size] || 36;
  const bg = active ? 'var(--surface-raised)' : hover ? variant === 'ghost' ? 'var(--surface-card)' : 'var(--surface-raised)' : variant === 'solid' ? 'var(--surface-card)' : 'transparent';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: e => {
      e.target.style.boxShadow = 'var(--ring)';
    },
    onBlur: e => {
      e.target.style.boxShadow = 'none';
    },
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: bg,
      color: active ? 'var(--accent)' : 'var(--text-secondary)',
      border: variant === 'solid' ? '1px solid var(--border-subtle)' : '1px solid transparent',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      outline: 'none',
      transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
/**
 * Dense, scannable data table. columns: [{ key, header, width, align, mono, render }].
 * Sortable headers, comfortable/compact density, optional row severity accent.
 */
function DataTable({
  columns = [],
  rows = [],
  density = 'comfortable',
  sortable = true,
  onRowClick,
  rowKey = (r, i) => i,
  getRowAccent,
  selectedKey,
  style
}) {
  const [sort, setSort] = React.useState({
    key: null,
    dir: 'asc'
  });
  const rowH = density === 'compact' ? 'var(--row-height-compact)' : 'var(--row-height-comfortable)';
  const cellPad = density === 'compact' ? '0 12px' : '0 14px';
  const sorted = React.useMemo(() => {
    if (!sort.key) return rows;
    const col = columns.find(c => c.key === sort.key);
    const get = r => col && col.sortValue ? col.sortValue(r) : r[sort.key];
    return [...rows].sort((a, b) => {
      const x = get(a),
        y = get(b);
      if (x === y) return 0;
      const r = x > y ? 1 : -1;
      return sort.dir === 'asc' ? r : -r;
    });
  }, [rows, sort, columns]);
  const toggle = key => {
    if (!sortable) return;
    setSort(s => s.key === key ? {
      key,
      dir: s.dir === 'asc' ? 'desc' : 'asc'
    } : {
      key,
      dir: 'asc'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--surface-panel)'
    }
  }, columns.map(c => {
    const active = sort.key === c.key;
    return /*#__PURE__*/React.createElement("th", {
      key: c.key,
      onClick: () => c.sortable !== false && toggle(c.key),
      style: {
        textAlign: c.align || 'left',
        padding: cellPad,
        height: 'var(--row-height-compact)',
        width: c.width,
        whiteSpace: 'nowrap',
        userSelect: 'none',
        cursor: sortable && c.sortable !== false ? 'pointer' : 'default',
        borderBottom: '1px solid var(--border-subtle)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-micro)',
        fontWeight: 'var(--fw-medium)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: active ? 'var(--text-secondary)' : 'var(--text-muted)'
      }
    }, c.header, active && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 5,
        color: 'var(--accent)'
      }
    }, sort.dir === 'asc' ? '↑' : '↓'));
  }))), /*#__PURE__*/React.createElement("tbody", null, sorted.map((r, i) => {
    const key = rowKey(r, i);
    const accent = getRowAccent && getRowAccent(r);
    const selected = selectedKey != null && key === selectedKey;
    return /*#__PURE__*/React.createElement(Row, {
      key: key,
      height: rowH,
      clickable: !!onRowClick,
      selected: selected,
      onClick: () => onRowClick && onRowClick(r, key)
    }, columns.map((c, ci) => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        textAlign: c.align || 'left',
        padding: cellPad,
        whiteSpace: 'nowrap',
        borderBottom: i === sorted.length - 1 ? 'none' : '1px solid var(--border-hairline)',
        borderLeft: ci === 0 && accent ? `2px solid ${accent}` : '2px solid transparent',
        fontFamily: c.mono ? 'var(--font-mono)' : 'var(--font-sans)',
        fontSize: c.mono ? 'var(--fs-small)' : 'var(--fs-body)',
        fontVariantNumeric: c.mono || c.align === 'right' ? 'tabular-nums' : 'normal',
        color: ci === 0 ? 'var(--text-strong)' : 'var(--text-body)'
      }
    }, c.render ? c.render(r) : r[c.key])));
  }))));
}
function Row({
  children,
  height,
  clickable,
  selected,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("tr", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      height,
      cursor: clickable ? 'pointer' : 'default',
      background: selected ? 'var(--surface-raised)' : hover && clickable ? 'var(--surface-hover)' : 'transparent',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, children);
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/Gauge.jsx
try { (() => {
/**
 * Radial gauge for engagement / churn-risk signals. Value 0–100.
 * Restrained, dark-friendly; color encodes severity by threshold or explicit level.
 */
function Gauge({
  value = 0,
  label,
  level,
  size = 120,
  thresholds,
  sublabel,
  style
}) {
  const v = Math.max(0, Math.min(100, value));
  const r = (size - 14) / 2;
  const cx = size / 2,
    cy = size / 2;
  const circumference = 2 * Math.PI * r;
  // 270° arc (gap at bottom)
  const arcFraction = 0.75;
  const dash = circumference * arcFraction;
  const offset = dash * (1 - v / 100);
  const rotate = 135; // start bottom-left

  let color = 'var(--accent)';
  if (level) {
    color = {
      critical: 'var(--critical)',
      warning: 'var(--warning)',
      healthy: 'var(--healthy)',
      info: 'var(--info)'
    }[level] || color;
  } else if (thresholds) {
    if (v >= thresholds.critical) color = 'var(--critical)';else if (v >= thresholds.warning) color = 'var(--warning)';else color = 'var(--healthy)';
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: `rotate(${rotate}deg)`
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r,
    fill: "none",
    stroke: "var(--surface-inset)",
    strokeWidth: "9",
    strokeDasharray: `${dash} ${circumference}`,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: "9",
    strokeDasharray: `${dash} ${circumference}`,
    strokeDashoffset: offset,
    strokeLinecap: "round",
    style: {
      transition: 'stroke-dashoffset var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: size * 0.24,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-max)',
      fontVariantNumeric: 'tabular-nums',
      lineHeight: 1
    }
  }, Math.round(v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.13,
      color: 'var(--text-muted)'
    }
  }, "%")), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-micro)',
      color: 'var(--text-muted)'
    }
  }, sublabel))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-small)',
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Gauge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Gauge.jsx", error: String((e && e.message) || e) }); }

// components/data/ReproBlock.jsx
try { (() => {
/**
 * Reproduction-step block — numbered, monospace, copy-ready. The proof surface.
 * steps: array of strings, or { text, note }.
 */
function ReproBlock({
  steps = [],
  title = 'Reproduction',
  meta,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inset)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--elev-inset)',
      overflow: 'hidden',
      ...style
    }
  }, (title || meta) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 12px',
      borderBottom: '1px solid var(--border-hairline)',
      background: 'var(--surface-panel)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ck-overline"
  }, title), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, meta)), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: '10px 12px',
      listStyle: 'none',
      counterReset: 'repro'
    }
  }, steps.map((s, i) => {
    const text = typeof s === 'string' ? s : s.text;
    const note = typeof s === 'string' ? null : s.note;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '22px 1fr',
        gap: 8,
        alignItems: 'baseline',
        padding: '4px 0',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-small)',
        lineHeight: 'var(--lh-mono)',
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent)',
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums'
      }
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", null, text, note && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, "  ", note)));
  })));
}
Object.assign(__ds_scope, { ReproBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ReproBlock.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/** Determinate / indeterminate progress. Indeterminate = streaming shimmer. */
function ProgressBar({
  value = null,
  level = 'accent',
  height = 6,
  style
}) {
  const colors = {
    accent: 'var(--lime)',
    healthy: 'var(--healthy)',
    warning: 'var(--warning)',
    critical: 'var(--critical)',
    info: 'var(--info)'
  };
  const c = colors[level] || colors.accent;
  const indeterminate = value == null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      width: '100%',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-inset)',
      overflow: 'hidden',
      border: '1px solid var(--border-hairline)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: indeterminate ? undefined : undefined,
    style: indeterminate ? {
      height: '100%',
      width: '40%',
      borderRadius: 'inherit',
      background: `linear-gradient(90deg, transparent, ${c}, transparent)`,
      backgroundSize: '200% 100%',
      animation: 'ck-shimmer var(--dur-shimmer) linear infinite'
    } : {
      height: '100%',
      width: `${Math.max(0, Math.min(100, value))}%`,
      borderRadius: 'inherit',
      background: c,
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SeverityBadge.jsx
try { (() => {
const SEV = {
  critical: {
    fg: 'var(--critical)',
    bg: 'var(--critical-bg)',
    bd: 'var(--critical-dim)',
    label: 'Critical',
    icon: '●'
  },
  warning: {
    fg: 'var(--warning)',
    bg: 'var(--warning-bg)',
    bd: 'var(--warning-dim)',
    label: 'Warning',
    icon: '▲'
  },
  healthy: {
    fg: 'var(--healthy)',
    bg: 'var(--healthy-bg)',
    bd: 'var(--healthy-dim)',
    label: 'Healthy',
    icon: '✓'
  },
  info: {
    fg: 'var(--info)',
    bg: 'var(--info-bg)',
    bd: 'var(--info-dim)',
    label: 'Info',
    icon: 'ℹ'
  },
  neutral: {
    fg: 'var(--text-secondary)',
    bg: 'var(--surface-raised)',
    bd: 'var(--border-strong)',
    label: 'Neutral',
    icon: '·'
  }
};

/** Severity badge — the consistent encoding used everywhere triage matters. */
function SeverityBadge({
  level = 'info',
  children,
  count,
  dot = false,
  style
}) {
  const s = SEV[level] || SEV.info;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 8px',
      borderRadius: 'var(--radius-sm)',
      background: s.bg,
      border: `1px solid ${s.bd}`,
      color: s.fg,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      fontVariantNumeric: 'tabular-nums',
      ...style
    }
  }, dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: s.fg
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      lineHeight: 1
    },
    "aria-hidden": "true"
  }, s.icon), children || s.label, count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.75
    }
  }, count));
}
const STATUS = {
  running: {
    fg: 'var(--lime)',
    label: 'Running',
    live: true
  },
  queued: {
    fg: 'var(--text-secondary)',
    label: 'Queued',
    live: false
  },
  passed: {
    fg: 'var(--healthy)',
    label: 'Passed',
    live: false
  },
  failed: {
    fg: 'var(--critical)',
    label: 'Failed',
    live: false
  },
  paused: {
    fg: 'var(--warning)',
    label: 'Paused',
    live: false
  },
  done: {
    fg: 'var(--info)',
    label: 'Complete',
    live: false
  }
};

/** Status pill for run/agent lifecycle. `running` shows the calm live pulse. */
function StatusPill({
  status = 'queued',
  children,
  style
}) {
  const s = STATUS[status] || STATUS.queued;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      height: 24,
      padding: '0 10px 0 9px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      color: s.fg,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-medium)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: s.live ? 'ck-live-dot' : undefined,
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: s.fg
    }
  }), children || s.label);
}

/** Quiet metadata tag — builds, objectives, filters. */
function Tag({
  children,
  onRemove,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: onRemove ? '0 5px 0 9px' : '0 9px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      color: color || 'var(--text-secondary)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 15,
      height: 15,
      border: 0,
      borderRadius: 3,
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      fontSize: 12,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { SeverityBadge, StatusPill, Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SeverityBadge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONE = {
  info: {
    fg: 'var(--info)',
    bg: 'var(--info-bg)',
    bd: 'var(--info-dim)',
    icon: 'info'
  },
  healthy: {
    fg: 'var(--healthy)',
    bg: 'var(--healthy-bg)',
    bd: 'var(--healthy-dim)',
    icon: 'check-circle-2'
  },
  warning: {
    fg: 'var(--warning)',
    bg: 'var(--warning-bg)',
    bd: 'var(--warning-dim)',
    icon: 'alert-triangle'
  },
  critical: {
    fg: 'var(--critical)',
    bg: 'var(--critical-bg)',
    bd: 'var(--critical-dim)',
    icon: 'alert-octagon'
  }
};

/**
 * Toast / inline alert. Calm, evidence-style — title + optional body + action.
 * Pass an icon node via `icon`, or rely on the tone default lucide name string.
 */
function Toast({
  tone = 'info',
  title,
  children,
  action,
  onClose,
  icon,
  style
}) {
  const t = TONE[tone] || TONE.info;
  return /*#__PURE__*/React.createElement("div", {
    className: "ck-stream-in",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      width: 'min(420px, 100%)',
      padding: '13px 14px',
      background: 'var(--surface-raised)',
      border: `1px solid var(--border-subtle)`,
      borderLeft: `2px solid ${t.fg}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-toast)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 20,
      height: 20,
      marginTop: 1,
      color: t.fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon || /*#__PURE__*/React.createElement("i", {
    "data-lucide": t.icon,
    style: {
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)',
      lineHeight: 1.3
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: title ? 4 : 0,
      fontSize: 'var(--fs-small)',
      lineHeight: 1.45,
      color: 'var(--text-secondary)'
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      border: 0,
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      borderRadius: 4,
      fontSize: 15,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox with label. Controlled via `checked` / `onChange`. */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled,
  indeterminate = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 17,
      height: 17,
      flex: 'none',
      borderRadius: 5,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked || indeterminate ? 'var(--accent)' : 'var(--surface-inset)',
      border: `1px solid ${checked || indeterminate ? 'var(--accent)' : 'var(--border-strong)'}`,
      color: 'var(--text-on-accent)',
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 2,
      background: 'var(--text-on-accent)',
      borderRadius: 1
    }
  }) : checked && /*#__PURE__*/React.createElement(Check, null)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)'
    }
  }, label));
}
function Check() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2l2.3 2.3L9.5 3.5",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

/** Toggle switch — for live, binary, instantly-applied settings. */
function Switch({
  checked = false,
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
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 34,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      position: 'relative',
      background: checked ? 'var(--accent)' : 'var(--surface-raised)',
      border: `1px solid ${checked ? 'var(--accent)' : 'var(--border-strong)'}`,
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 1,
      left: checked ? 15 : 1,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: checked ? 'var(--lime-on)' : 'var(--text-secondary)',
      transition: 'left var(--dur-base) var(--ease-out), background var(--dur-base)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox, Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function fieldShell(focused, invalid, disabled) {
  return {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    background: 'var(--surface-inset)',
    border: `1px solid ${invalid ? 'var(--critical)' : focused ? 'var(--accent)' : 'var(--border-subtle)'}`,
    borderRadius: 'var(--radius-md)',
    boxShadow: focused ? '0 0 0 3px var(--accent-quiet)' : 'var(--elev-inset)',
    transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'text'
  };
}
const inputReset = {
  flex: 1,
  minWidth: 0,
  border: 0,
  outline: 0,
  background: 'transparent',
  color: 'var(--text-strong)',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--fs-body)'
};

/** Single-line text input with optional leading/trailing adornments + label. */
function Input({
  label,
  hint,
  invalid,
  disabled,
  iconLeft,
  addonRight,
  mono = false,
  value,
  onChange,
  placeholder,
  type = 'text',
  id,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement(Label, null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      ...fieldShell(focused, invalid, disabled),
      height: 'var(--control-height)',
      padding: '0 12px'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      ...inputReset,
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)'
    }
  }, rest)), addonRight && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)'
    }
  }, addonRight)), hint && /*#__PURE__*/React.createElement(Hint, {
    invalid: invalid
  }, hint));
}

/** Multi-line input. */
function Textarea({
  label,
  hint,
  invalid,
  disabled,
  rows = 4,
  mono = false,
  value,
  onChange,
  placeholder,
  id,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement(Label, null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      ...fieldShell(focused, invalid, disabled),
      alignItems: 'stretch',
      padding: '10px 12px'
    }
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      ...inputReset,
      resize: 'vertical',
      lineHeight: 1.5,
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)'
    }
  }, rest))), hint && /*#__PURE__*/React.createElement(Hint, {
    invalid: invalid
  }, hint));
}
function Label({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-secondary)'
    }
  }, children);
}
function Hint({
  children,
  invalid
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      color: invalid ? 'var(--critical)' : 'var(--text-muted)'
    }
  }, children);
}
Object.assign(__ds_scope, { Input, Textarea, Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
/**
 * Segmented control — the calm way to switch density, view, or 2–4 modes.
 * options: array of { value, label } or strings.
 */
function SegmentedControl({
  value,
  onChange,
  options = [],
  size = 'md',
  style
}) {
  const h = size === 'sm' ? 'var(--control-height-sm)' : 'var(--control-height)';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      padding: 3,
      gap: 2,
      height: h,
      boxSizing: 'border-box',
      background: 'var(--surface-inset)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    const sel = val === value;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": sel,
      onClick: () => onChange && onChange(val),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        padding: '0 12px',
        height: '100%',
        border: 0,
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        background: sel ? 'var(--surface-raised)' : 'transparent',
        color: sel ? 'var(--text-max)' : 'var(--text-secondary)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-small)',
        fontWeight: sel ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        boxShadow: sel ? 'inset 0 0 0 1px var(--border-subtle)' : 'none',
        transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast)'
      }
    }, lbl);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled as an instrument control. */
function Select({
  label,
  value,
  onChange,
  options = [],
  disabled,
  id,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 6,
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: 'var(--control-height)',
      background: 'var(--surface-inset)',
      border: `1px solid ${focused ? 'var(--accent)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? '0 0 0 3px var(--accent-quiet)' : 'var(--elev-inset)',
      opacity: disabled ? 0.5 : 1,
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: '100%',
      border: 0,
      outline: 0,
      background: 'transparent',
      cursor: disabled ? 'not-allowed' : 'pointer',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      padding: '0 32px 0 12px'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 11,
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 11,
      lineHeight: 1
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/personas/PersonaGlyph.jsx
try { (() => {
const PERSONAS = {
  casual: {
    label: 'Casual',
    color: 'var(--persona-casual)',
    hue: '#4d9dff'
  },
  completionist: {
    label: 'Completionist',
    color: 'var(--persona-completionist)',
    hue: '#a78bfa'
  },
  speedrunner: {
    label: 'Speedrunner',
    color: 'var(--persona-speedrunner)',
    hue: '#f5a623'
  },
  competitive: {
    label: 'Competitive',
    color: 'var(--persona-competitive)',
    hue: '#f2555a'
  },
  newuser: {
    label: 'New User',
    color: 'var(--persona-newuser)',
    hue: '#34d399'
  }
};
function glyphPaths(type) {
  switch (type) {
    case 'casual':
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "8.2"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "2.4",
        fill: "currentColor",
        stroke: "none"
      }));
    case 'completionist':
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
        x: "3.8",
        y: "3.8",
        width: "16.4",
        height: "16.4",
        rx: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M8 12.2l2.8 2.8L16.4 9",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }));
    case 'speedrunner':
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
        d: "M5 6l6 6-6 6",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 6l6 6-6 6",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }));
    case 'competitive':
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
        d: "M12 3.5l8.5 16.5H3.5L12 3.5z",
        strokeLinejoin: "round"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "14.5",
        r: "1.6",
        fill: "currentColor",
        stroke: "none"
      }));
    case 'newuser':
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
        d: "M12 3.5L20.5 12 12 20.5 3.5 12 12 3.5z",
        strokeLinejoin: "round"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 8.8v6.4M8.8 12h6.4",
        strokeLinecap: "round"
      }));
    default:
      return /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "8"
      });
  }
}

/** Synthetic-player archetype as an abstract geometric glyph (never a photo). */
function PersonaGlyph({
  type = 'casual',
  size = 24,
  color,
  framed = false,
  style
}) {
  const p = PERSONAS[type] || PERSONAS.casual;
  const svg = /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color || p.color,
    strokeWidth: "1.75",
    "aria-label": `${p.label} persona`,
    role: "img"
  }, glyphPaths(type));
  if (!framed) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      ...style
    }
  }, svg);
  const pad = Math.round(size * 0.5);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size + pad,
      height: size + pad,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-inset)',
      border: '1px solid var(--border-subtle)',
      ...style
    }
  }, svg);
}

/** Selectable persona card for the playtest setup flow. */
function PersonaCard({
  type = 'casual',
  selected = false,
  description,
  count,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const p = PERSONAS[type] || PERSONAS.casual;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-pressed": selected,
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 14,
      background: selected ? 'var(--surface-raised)' : hover ? 'var(--surface-card)' : 'var(--surface-card)',
      border: `1px solid ${selected ? p.color : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-lg)',
      boxShadow: selected ? `inset 0 0 0 1px ${p.color}` : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(PersonaGlyph, {
    type: type,
    size: 22,
    framed: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `1px solid ${selected ? p.color : 'var(--border-strong)'}`,
      background: selected ? p.color : 'transparent'
    }
  }, selected && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--slate-1)'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, p.label), description && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      fontSize: 'var(--fs-small)',
      lineHeight: 1.4,
      color: 'var(--text-secondary)'
    }
  }, description)), count != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, count, " agents"));
}
Object.assign(__ds_scope, { PERSONAS, PersonaGlyph, PersonaCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/personas/PersonaGlyph.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
/**
 * Instrument-panel card. Depth = border + background step, no drop shadow.
 * Optional header (title + meta + actions) and footer.
 */
function Card({
  children,
  title,
  meta,
  actions,
  footer,
  padded = true,
  interactive = false,
  accent,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: hover ? 'var(--surface-raised)' : 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderTop: accent ? `2px solid ${accent}` : '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'background var(--dur-fast) var(--ease-out)',
      overflow: 'hidden',
      ...style
    }
  }, (title || actions) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '13px 16px',
      borderBottom: children ? '1px solid var(--border-hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-snug)'
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, meta)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      flex: 'none'
    }
  }, actions)), children != null && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: padded ? 16 : 0,
      flex: 1
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '11px 16px',
      borderTop: '1px solid var(--border-hairline)',
      background: 'var(--surface-panel)',
      fontSize: 'var(--fs-small)',
      color: 'var(--text-secondary)'
    }
  }, footer));
}

/** A single labelled metric — big tabular number + overline + optional delta. */
function Metric({
  label,
  value,
  unit,
  delta,
  level = 'neutral',
  mono = true,
  style
}) {
  const colors = {
    up: 'var(--healthy)',
    down: 'var(--critical)',
    neutral: 'var(--text-muted)',
    critical: 'var(--critical)',
    warning: 'var(--warning)',
    healthy: 'var(--healthy)',
    info: 'var(--info)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ck-overline"
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: '1.75rem',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1,
      color: colors[level] && level !== 'neutral' ? colors[level] : 'var(--text-max)',
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.01em'
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-muted)',
      fontWeight: 'var(--fw-regular)'
    }
  }, unit)), delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      fontVariantNumeric: 'tabular-nums',
      color: colors[delta.dir] || 'var(--text-muted)'
    }
  }, delta.dir === 'up' ? '▲' : delta.dir === 'down' ? '▼' : '·', " ", delta.value));
}
Object.assign(__ds_scope, { Card, Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Gauge = __ds_scope.Gauge;

__ds_ns.ReproBlock = __ds_scope.ReproBlock;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.SeverityBadge = __ds_scope.SeverityBadge;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.PERSONAS = __ds_scope.PERSONAS;

__ds_ns.PersonaGlyph = __ds_scope.PersonaGlyph;

__ds_ns.PersonaCard = __ds_scope.PersonaCard;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Metric = __ds_scope.Metric;

})();
