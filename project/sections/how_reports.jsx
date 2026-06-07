/* how_reports.jsx — how it works (3 steps) + reports / proof surface. */
const CK2 = window.CheckpointDesignSystem_70abd3;

/* ---- Objective composer mock (step 2) ---- */
function ObjectiveComposer() {
  const { Tag } = CK2;
  return (
    <div style={{
      background: 'var(--surface-inset)', border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)', overflow: 'hidden',
    }}>
      <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border-hairline)', background: 'var(--surface-panel)' }}>
        <span className="ck-overline">Objectives · plain English</span>
      </div>
      <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 9 }}>
        {['Complete the tutorial without a guide', 'Test the shop and checkout flow', 'Play aggressively for 30 minutes'].map((o, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: 8, alignItems: 'baseline', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', color: 'var(--text-body)', lineHeight: 1.45 }}>
            <span style={{ color: 'var(--accent)' }}>{String(i + 1).padStart(2, '0')}</span>
            <span>{o}</span>
          </div>
        ))}
        <div style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: 8, alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-small)', color: 'var(--text-muted)' }}>
          <span style={{ color: 'var(--text-disabled)' }}>04</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>Add an objective<span style={{ width: 7, height: 15, background: 'var(--accent)', display: 'inline-block', borderRadius: 1 }} className="ck-live-dot"></span></span>
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  const { Card } = CK2;
  const steps = [
    { n: '01', icon: 'upload', title: 'Upload a build', body: 'Drop in your Unity build. No instrumentation, no test harness, no scripted cases to maintain.' },
    { n: '02', icon: 'target', title: 'Define objectives in plain English', body: 'Describe what to test the way you’d brief a tester. Checkpoint turns each line into an agent goal.' },
    { n: '03', icon: 'cpu', title: 'Run autonomous playtests at scale', body: 'Agents spin up by the hundreds, play to your objectives, and stream structured findings as they go.' },
  ];
  return (
    <section className="ck-section" id="how">
      <Container>
        <Reveal>
          <SectionHead
            overline="How it works"
            title="From build to findings in three steps."
            lede="No manual test cases. Checkpoint observes the screen and drives real keyboard and mouse input — so it tests the game your players actually see."
          />
        </Reveal>
        <div className="ck-steps" style={{ marginTop: 48 }}>
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <Card style={{ height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <IconTile name={s.icon} />
                    <span className="ck-stepnum">{s.n}</span>
                  </div>
                  <div style={{ fontSize: 'var(--fs-h3)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)', letterSpacing: 'var(--tracking-snug)' }}>{s.title}</div>
                  <p style={{ margin: 0, fontSize: 'var(--fs-body)', lineHeight: 1.55, color: 'var(--text-secondary)' }}>{s.body}</p>
                  {i === 1 && <ObjectiveComposer />}
                  {i === 2 && (
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 'auto' }}>
                      {[['agent-01', 'running'], ['agent-02', 'running'], ['agent-03', 'passed'], ['agent-04', 'failed']].map(([id, st]) => (
                        <CK2.StatusPill key={id} status={st}>{id}</CK2.StatusPill>
                      ))}
                    </div>
                  )}
                  {i === 0 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 'var(--radius-md)', background: 'var(--surface-inset)', border: '1px dashed var(--border-strong)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', marginTop: 'auto' }}>
                      <Icon name="upload" size={15} style={{ color: 'var(--accent)' }} />
                      build_0.9.4-rc2.zip · 248 MB
                    </div>
                  )}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---- Reports / proof surface ---- */
function Reports() {
  const { DataTable, SeverityBadge, ReproBlock, Button, Tag } = CK2;
  const columns = [
    { key: 'sev', header: 'Severity', width: 116, render: (r) => <SeverityBadge level={r.sev} /> },
    { key: 'finding', header: 'Finding' },
    { key: 'type', header: 'Type', width: 120, mono: true, render: (r) => <span style={{ color: 'var(--text-secondary)' }}>{r.type}</span> },
    { key: 'build', header: 'Build', width: 132, mono: true },
    { key: 'agent', header: 'Agent', width: 96, mono: true, align: 'right' },
  ];
  const rows = [
    { sev: 'critical', finding: 'Crash on tutorial skip → main menu', type: 'crash', build: '0.9.4-rc2', agent: '07' },
    { sev: 'warning',  finding: 'First boss unwinnable for casual loadout', type: 'balance', build: '0.9.4-rc2', agent: '03' },
    { sev: 'warning',  finding: 'Frame time spikes >120ms in market hub', type: 'perf', build: '0.9.4-rc2', agent: '22' },
    { sev: 'info',     finding: 'Shop CTA below the fold at 1280×720', type: 'ux', build: '0.9.4-rc2', agent: '11' },
    { sev: 'healthy',  finding: 'Checkout flow completes in <4 actions', type: 'ux', build: '0.9.4-rc2', agent: '05' },
  ];
  const accent = { critical: 'var(--critical)', warning: 'var(--warning)', info: 'var(--info)', healthy: 'var(--healthy)' };
  return (
    <section className="ck-section ck-band-sunken" id="reports">
      <Container>
        <Reveal>
          <SectionHead
            overline="What you get back"
            title="Structured reports, not just a pass/fail."
            lede="Every run returns triage-ready findings: severity, type, the build it hit, gameplay recordings, and exact reproduction steps your engineers can act on immediately."
          />
        </Reveal>

        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: 24, alignItems: 'start' }} className="ck-reports-grid">
          <Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                  <SeverityBadge level="critical" count={1} />
                  <SeverityBadge level="warning" count={2} />
                  <SeverityBadge level="info" count={1} />
                  <SeverityBadge level="healthy" count={1} />
                </div>
                <span className="ck-mono" style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>37 findings · build_0.9.4-rc2</span>
              </div>
              <DataTable columns={columns} rows={rows} density="comfortable" getRowAccent={(r) => accent[r.sev]} />
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="ck-recording">
                <div className="ck-recording__bar">
                  <Icon name="play" size={13} style={{ color: 'var(--critical)' }} />
                  <span>gameplay_agent-07.mp4</span>
                  <span style={{ marginLeft: 'auto' }}>00:14:22 / 00:31:40</span>
                </div>
                <image-slot id="report-recording" style={{ display: 'block', width: '100%', height: '180px' }} shape="rect" placeholder="Drop a gameplay frame"></image-slot>
              </div>
              <ReproBlock
                meta="agent-07"
                steps={[
                  'Launch build_0.9.4-rc2, new save',
                  'Start tutorial, reach prompt 3/9',
                  { text: 'Press Esc → "Skip tutorial"', note: '// during fade' },
                  { text: 'Crash: NullReferenceException', note: '// TutorialManager.cs:212' },
                ]}
              />
              <Button variant="secondary" iconRight={<Icon name="arrow" size={15} />} fullWidth>Open full report</Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { HowItWorks, Reports });
