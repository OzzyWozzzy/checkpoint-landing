/* nav_hero.jsx — top nav, hero with live-run instrument panel, problem band. */
const CK = window.CheckpointDesignSystem_70abd3;

function Logo({ height = 28 }) {
  return (
    <a href="#top" aria-label="Checkpoint home" style={{ display: 'inline-flex', alignItems: 'center' }}>
      <svg width={height * 5.25} height={height} viewBox="0 0 168 32" fill="none" role="img" aria-label="Checkpoint">
        <rect width="32" height="32" rx="8" fill="#9b3a61"/>
        <path d="M11 7.5V24.5" stroke="#fbf4ef" strokeWidth="2.1" strokeLinecap="round"/>
        <path d="M11 8.2C13.4 6.7 15.8 6.7 18.2 8.2C20.6 9.7 23 9.7 25.4 8.2V16.4C23 17.9 20.6 17.9 18.2 16.4C15.8 14.9 13.4 14.9 11 16.4V8.2Z" fill="#fbf4ef"/>
        <circle cx="11" cy="24.5" r="1.8" fill="#fbf4ef"/>
        <text x="44" y="22" fontFamily="Geist, system-ui, sans-serif" fontSize="20" fontWeight="700" letterSpacing="-0.02em" fill="#20190d">Checkpoint</text>
      </svg>
    </a>
  );
}

function Nav() {
  const { Button } = CK;
  return (
    <nav className="ck-nav">
      <Container>
        <div className="ck-nav__row">
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <Logo height={26} />
          </div>
          <div className="ck-nav__links">
            <a className="ck-nav__link" href="#how">How it works</a>
            <a className="ck-nav__link" href="#reports">Reports</a>
            <a className="ck-nav__link" href="#why">Why Checkpoint</a>
          </div>
          <div className="ck-nav__actions">
            <span className="ck-livechip"><span className="ck-live-dot"></span>3 agents running</span>
            <Button variant="ghost" size="sm">Sign in</Button>
            <Button variant="primary" size="sm">Book a demo</Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

/* ---- Live run instrument panel (hero proof) ---- */
function LiveRunPanel() {
  const { Card, SeverityBadge, Metric, Tag } = CK;
  const findings = [
    { sev: 'critical', text: 'Null deref on tutorial skip', meta: 'agent-07 · 00:14:22' },
    { sev: 'warning',  text: 'Boss DPS check unwinnable for casual loadout', meta: 'agent-03 · 00:21:09' },
    { sev: 'info',     text: 'Shop CTA below fold at 1280×720', meta: 'agent-11 · 00:08:51' },
  ];
  return (
    <Card padded={false} style={{ width: '100%' }}>
      {/* body */}
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* metrics row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          <Metric label="Agents live" value="48" />
          <Metric label="Objectives" value="12" />
          <Metric label="Findings" value="37" level="warning" />
        </div>

        {/* progress */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>
            <span>Playtesting tutorial → first boss</span><span>64%</span>
          </div>
          <div className="ck-shimmerbar"><span></span></div>
        </div>

        {/* findings stream */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {findings.map((f, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 12px', borderRadius: 'var(--radius-md)',
              background: 'var(--surface-inset)', border: '1px solid var(--border-hairline)',
              animationDelay: `${i * 0.14}s`,
            }}>
              <SeverityBadge level={f.sev} />
              <span style={{ flex: 1, fontSize: 'var(--fs-small)', color: 'var(--text-body)', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.text}</span>
              <span className="ck-mono" style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', flex: 'none' }}>{f.meta}</span>
            </div>
          ))}
        </div>
      </div>

      {/* footer */}
      <div style={{ padding: '11px 16px', borderTop: '1px solid var(--border-hairline)', background: 'var(--surface-panel)', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Tag>tutorial</Tag><Tag>shop-flow</Tag><Tag>aggressive · 30m</Tag><Tag>1280×720</Tag>
      </div>
    </Card>
  );
}

function Hero() {
  const { Button } = CK;
  return (
    <header className="ck-hero" id="top">
      <div className="ck-hero__glow"></div>
      <Container>
        <div className="ck-hero__grid">
          <div className="ck-hero__copy">
            <Overline>AI playtesting platform</Overline>
            <h1 className="ck-h-display">An always-on AI playtesting layer for every build.</h1>
            <p className="ck-lede" style={{ maxWidth: 520 }}>
              Checkpoint runs multimodal agents that play your game like real players — watching the
              screen, driving keyboard and mouse, and returning structured reports with recordings,
              repro steps, crashes, and balance data. On every build. At scale.
            </p>
            <div className="ck-hero__ctas">
              <Button variant="primary" size="lg" iconRight={<Icon name="arrow" size={16} />}>Book a demo</Button>
              <Button variant="secondary" size="lg" iconLeft={<Icon name="play" size={15} />}>See a sample report</Button>
            </div>
            <div className="ck-hero__trust">
              <span>No test scripts</span><span className="dot"></span>
              <span>Runs on every build</span><span className="dot"></span>
              <span>Built for Unity</span>
            </div>
          </div>
          <Reveal delay={80}><LiveRunPanel /></Reveal>
        </div>
      </Container>
    </header>
  );
}

/* ---- Problem band ---- */
function Problem() {
  const { Card } = CK;
  const items = [
    { icon: 'repeat', title: 'Manual & repetitive', body: 'Human testers replay tutorials, levels, combat, menus, and progression by hand after every new build.' },
    { icon: 'clock', title: 'Discovered too late', body: 'Retention, pacing, and balance problems usually surface after launch — through churn, refunds, and reviews.' },
    { icon: 'layers', title: "Doesn't scale", body: 'Coverage is capped by tester hours, so most builds ship only partially playtested under deadline pressure.' },
  ];
  return (
    <section className="ck-section ck-band-sunken">
      <Container>
        <Reveal>
          <SectionHead
            overline="The QA bottleneck"
            title="Game QA is the slowest, most expensive loop in development."
            lede="Studios depend on human playtesters to catch bugs, balance issues, and UX friction — but that work is repetitive, expensive, and never finished. The hardest problems hide in engagement and retention, and those rarely show up until real players churn."
          />
        </Reveal>
        <div className="ck-grid-3" style={{ marginTop: 48 }}>
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 90}>
              <Card style={{ height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <IconTile name={it.icon} accent="var(--warning)" />
                  <div style={{ fontSize: 'var(--fs-h3)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)', letterSpacing: 'var(--tracking-snug)' }}>{it.title}</div>
                  <p style={{ margin: 0, fontSize: 'var(--fs-body)', lineHeight: 1.55, color: 'var(--text-secondary)' }}>{it.body}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Problem, Logo });
