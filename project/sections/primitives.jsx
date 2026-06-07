/* primitives.jsx — shared layout helpers, exported to window for cross-file use. */
const { useRef, useEffect, useState } = React;

function Container({ children, style }) {
  return <div className="ck-container" style={style}>{children}</div>;
}

function Overline({ children }) {
  return <span className="ck-overline-accent">{children}</span>;
}

/* Reveal wrapper.
   Content is ALWAYS visible (the base style is the end state) — important
   because CSS transitions freeze when the rendering surface is backgrounded.
   A gentle one-shot translate-in is applied only via IntersectionObserver,
   so if it never fires the content simply stays put and visible. */
function Reveal({ children, delay = 0, as = 'div', className = '', style }) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setAnimate(true); io.disconnect(); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={`ck-reveal ${animate ? 'is-in' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms`, ...style }}>
      {children}
    </Tag>
  );
}

/* Section header: overline + heading + optional lede */
function SectionHead({ overline, title, lede, center = false, maxWidth }) {
  return (
    <div className={`ck-head-block ${center ? 'ck-head-center' : ''}`} style={maxWidth ? { maxWidth } : undefined}>
      {overline && <Overline>{overline}</Overline>}
      <h2 className="ck-h-section">{title}</h2>
      {lede && <p className="ck-lede">{lede}</p>}
    </div>
  );
}

/* small inline glyph icons (stroke, currentColor) */
function Icon({ name, size = 18, stroke = 1.75, style }) {
  const paths = {
    upload: <><path d="M12 16V4M12 4l-4 4M12 4l4 4" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 16v2.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V16" strokeLinecap="round"/></>,
    target: <><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none"/></>,
    play: <><path d="M7 5.5l11 6.5-11 6.5z" strokeLinejoin="round"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></>,
    bolt: <><path d="M13 3L5 13h6l-1 8 8-10h-6z" strokeLinejoin="round"/></>,
    repeat: <><path d="M4 9a6 6 0 0 1 10-2l2 2M20 15a6 6 0 0 1-10 2l-2-2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 5v4h-4M8 19v-4h4" strokeLinecap="round" strokeLinejoin="round"/></>,
    clock: <><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round"/></>,
    hand: <><path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11m0-1.5a1.5 1.5 0 0 1 3 0V12m0-1a1.5 1.5 0 0 1 3 0v4a6 6 0 0 1-6 6h-1.2a5 5 0 0 1-3.6-1.6L4 17l1.2-1.2a1.6 1.6 0 0 1 2.2-.1L9 17" strokeLinecap="round" strokeLinejoin="round"/></>,
    layers: <><path d="M12 3l8.5 4.5L12 12 3.5 7.5 12 3z" strokeLinejoin="round"/><path d="M3.5 12L12 16.5 20.5 12M3.5 16.5L12 21l8.5-4.5" strokeLinejoin="round"/></>,
    chart: <><path d="M4 4v15.5A.5.5 0 0 0 4.5 20H20" strokeLinecap="round"/><path d="M8 15l3-4 3 2 4-6" strokeLinecap="round" strokeLinejoin="round"/></>,
    check: <><path d="M5 12.5l4.2 4.2L19 7" strokeLinecap="round" strokeLinejoin="round"/></>,
    cross: <><path d="M7 7l10 10M17 7L7 17" strokeLinecap="round"/></>,
    cpu: <><rect x="6.5" y="6.5" width="11" height="11" rx="2"/><path d="M10 3v2.5M14 3v2.5M10 18.5V21M14 18.5V21M3 10h2.5M3 14h2.5M18.5 10H21M18.5 14H21" strokeLinecap="round"/></>,
    gamepad: <><rect x="3" y="7.5" width="18" height="9" rx="4.5"/><path d="M8 10.5v3M6.5 12h3" strokeLinecap="round"/><circle cx="15.5" cy="11" r="0.9" fill="currentColor" stroke="none"/><circle cx="17.5" cy="13" r="0.9" fill="currentColor" stroke="none"/></>,
    eye: <><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.6"/></>,
    keyboard: <><rect x="3" y="6.5" width="18" height="11" rx="2"/><path d="M7 10h.01M11 10h.01M15 10h.01M7 13h.01M9 16h6" strokeLinecap="round"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} style={style} aria-hidden="true">
      {paths[name] || null}
    </svg>
  );
}

/* icon in a quiet framed tile */
function IconTile({ name, accent = 'var(--accent)', size = 20 }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 40, height: 40, borderRadius: 'var(--radius-md)',
      background: 'var(--surface-inset)', border: '1px solid var(--border-subtle)',
      color: accent, flex: 'none',
    }}>
      <Icon name={name} size={size} />
    </span>
  );
}

Object.assign(window, { Container, Overline, Reveal, SectionHead, Icon, IconTile });
