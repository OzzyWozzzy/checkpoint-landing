/* personas_why.jsx: why Checkpoint, roadmap. */
const CK3 = window.CheckpointDesignSystem_70abd3;

/* ---- Why Checkpoint (3-way contrast) ---- */
function Why() {
  const { Card } = CK3;
  const cols = [
    {
      label: 'vs. scripted automation', accent: 'var(--info)', icon: 'cpu',
      title: 'No test cases to write or maintain.',
      points: ['Agents observe and react instead of replaying brittle scripts', 'New build, same plain-English objectives with no rework', 'Catches the unscripted paths real players actually take'],
    },
    {
      label: 'vs. human beta testing', accent: 'var(--accent)', icon: 'bolt',
      title: 'Continuous, and at massive scale.',
      points: ['Runs on every build, day or night, in parallel', 'Hundreds of agents across personas in a single pass', 'Findings stream back in minutes, not testing cycles'],
    },
    {
      label: 'our stance', accent: 'var(--healthy)', icon: 'hand',
      title: 'Augments your QA team, does not replace it.',
      points: ['An always-on layer that surfaces issues earlier', 'Frees human testers for judgment and feel', 'More iterations, more coverage, less guesswork'],
    },
  ];
  return (
    <section className="ck-section ck-band-sunken" id="why">
      <Container>
        <Reveal>
          <SectionHead
            overline="Why Checkpoint"
            title="Real-world playtesting, fully automated."
            center maxWidth={760}
          />
        </Reveal>
        <div className="ck-compare" style={{ marginTop: 48 }}>
          {cols.map((c, i) => (
            <Reveal key={c.label} delay={i * 90}>
              <Card accent={c.accent} style={{ height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <IconTile name={c.icon} accent={c.accent} />
                    <span className="ck-compare__label">{c.label}</span>
                  </div>
                  <div style={{ fontSize: 'var(--fs-h3)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)', letterSpacing: 'var(--tracking-snug)', lineHeight: 1.25 }}>{c.title}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 2 }}>
                    {c.points.map((p, j) => (
                      <div key={j} style={{ display: 'grid', gridTemplateColumns: '18px 1fr', gap: 9, alignItems: 'start' }}>
                        <Icon name="check" size={15} style={{ color: c.accent, marginTop: 2 }} />
                        <span style={{ fontSize: 'var(--fs-small)', lineHeight: 1.5, color: 'var(--text-secondary)' }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---- Audience + roadmap ---- */
function Roadmap() {
  const phases = [
    { tag: 'Today', pin: 'var(--accent)', live: true, title: 'AI playtesting for game studios', body: 'Indie & AA studios that ship fast but lack dedicated QA. Autonomous playtests on every build.' },
    { tag: 'Next', pin: 'var(--info)', title: 'Predictive engagement analytics', body: 'Forecast retention and pacing risk from simulated cohorts before launch.' },
    { tag: 'Next', pin: 'var(--persona-completionist)', title: 'Automated balancing', body: 'Surface dominant strategies and difficulty outliers, with suggested tuning.' },
    { tag: 'Horizon', pin: 'var(--text-muted)', title: 'Large-scale behavioral simulation', body: 'The AI simulation layer for modern game development across engines and genres.' },
  ];
  return (
    <section className="ck-section" id="roadmap">
      <Container>
        <Reveal>
          <SectionHead
            overline="Who it’s for · where it’s going"
            title="Built for game studios today. The simulation layer for games tomorrow."
            lede="We start where iteration is fastest and QA is thinnest (indie and AA studios) and expand into the analytics and simulation that shape the game before launch."
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="ck-roadmap" style={{ marginTop: 52 }}>
            {phases.map((p, i) => (
              <div key={i} className="ck-roadmap__item">
                <div className="ck-roadmap__node">
                  <span className={`ck-roadmap__pin ${p.live ? 'ck-live-dot' : ''}`} style={{ background: p.pin }}></span>
                  {i < phases.length - 1 && <span className="ck-roadmap__line"></span>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span className="ck-mono" style={{ fontSize: 'var(--fs-micro)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: p.live ? 'var(--accent)' : 'var(--text-muted)' }}>{p.tag}</span>
                  <div style={{ fontSize: 'var(--fs-lg)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)', letterSpacing: 'var(--tracking-snug)', lineHeight: 1.25 }}>{p.title}</div>
                  <p style={{ margin: 0, fontSize: 'var(--fs-small)', lineHeight: 1.5, color: 'var(--text-secondary)' }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

Object.assign(window, { Why, Roadmap });
