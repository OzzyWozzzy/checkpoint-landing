/* cta_footer.jsx: closing CTA band and footer. */
const CK4 = window.CheckpointDesignSystem_70abd3;

function CTA() {
  const { Button, Input } = CK4;
  return (
    <section className="ck-section ck-section--tight">
      <Container>
        <Reveal>
          <div className="ck-cta ck-gridlines-wrap">
            <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, alignItems: 'center' }} className="ck-cta-grid">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'flex-start' }}>
                <Overline>Get started</Overline>
                <h2 className="ck-h-section" style={{ maxWidth: 460 }}>Give every build an always-on playtesting layer.</h2>
                <p className="ck-lede" style={{ maxWidth: 440 }}>
                  Book a demo and we’ll run Checkpoint against one of your builds — and walk you through
                  the findings, recordings, and synthetic-player report.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div className="ck-cta__form">
                  <Input placeholder="you@studio.com" type="email" style={{ flex: '1 1 200px' }} />
                  <Button variant="primary" size="md" iconRight={<Icon name="arrow" size={15} />}>Book a demo</Button>
                </div>
                <span className="ck-mono" style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>
                  Game builds · SOC 2 in progress · your builds stay private
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Footer() {
  const cols = [
    { h: 'Product', links: ['How it works', 'Reports', 'Pricing'] },
    { h: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
    { h: 'Resources', links: ['Docs', 'Get started', 'Security', 'Status'] },
  ];
  return (
    <footer className="ck-footer">
      <Container>
        <div className="ck-footer__row">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 280 }}>
            <Logo height={24} />
            <p style={{ margin: 0, fontSize: 'var(--fs-small)', lineHeight: 1.5, color: 'var(--text-muted)' }}>
              The AI playtesting layer for modern game development.
            </p>
            <span className="ck-livechip" style={{ alignSelf: 'flex-start' }}><span className="ck-live-dot"></span>All systems operational</span>
          </div>
          <div className="ck-footer__cols">
            {cols.map((c) => (
              <div key={c.h} className="ck-footer__col">
                <h5>{c.h}</h5>
                {c.links.map((l) => <a key={l} href="#">{l}</a>)}
              </div>
            ))}
          </div>
        </div>
        <div className="ck-divider"></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', padding: '20px 0 36px', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>
          <span>© 2026 Checkpoint, Inc.</span>
          <span style={{ display: 'flex', gap: 20 }}>
            <a href="#">Privacy</a><a href="#">Terms</a>
          </span>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { CTA, Footer });

/* ---- App mount ---- */
function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Reports />
      <Why />
      <Roadmap />
      <CTA />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
