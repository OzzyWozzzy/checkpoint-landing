// Serverless function: send a Contact-form inquiry as an email via Resend.
//
// The landing page POSTs { name, studio, email, message } here; this function
// emails it to your support inbox with the submitter set as reply-to, so you
// can just hit "reply". The Resend API key stays server-side.
//
// Environment variables (Vercel → Settings → Environment Variables):
//   RESEND_API_KEY  – your Resend API key (shared with /api/subscribe)
//   CONTACT_TO      – where inquiries are delivered (default: support@trycheckpoint.ca)
//   CONTACT_FROM    – verified sender, e.g. "Checkpoint <noreply@trycheckpoint.ca>".
//                     Resend only sends from a VERIFIED domain. Until you verify
//                     trycheckpoint.ca, the default sandbox sender below only
//                     delivers to your own Resend account email.
//
// No npm dependency: calls the Resend REST API directly with global fetch.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]
  ));
}

module.exports = async function handler(req, res) {
  if (req.method === 'GET' && req.query && req.query.healthcheck) {
    return res.status(200).json({
      hasApiKey: Boolean(process.env.RESEND_API_KEY),
      to: process.env.CONTACT_TO || 'support@trycheckpoint.ca',
      from: process.env.CONTACT_FROM || 'Checkpoint <onboarding@resend.dev>',
    });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};
  const name = (typeof body.name === 'string' ? body.name : '').trim();
  const studio = (typeof body.studio === 'string' ? body.studio : '').trim();
  const email = (typeof body.email === 'string' ? body.email : '').trim();
  const message = (typeof body.message === 'string' ? body.message : '').trim();

  if (!email || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email so we can reply.' });
  }
  if (!message) {
    return res.status(400).json({ error: 'Please add a short message.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Missing RESEND_API_KEY env var.');
    return res.status(500).json({ error: 'Contact form is not configured yet.' });
  }

  const to = process.env.CONTACT_TO || 'support@trycheckpoint.ca';
  const from = process.env.CONTACT_FROM || 'Checkpoint <onboarding@resend.dev>';
  const subject = studio
    ? `Checkpoint inquiry from ${studio}`
    : (name ? `Checkpoint inquiry from ${name}` : 'Checkpoint inquiry');

  const text = [
    name ? `Name: ${name}` : null,
    studio ? `Studio: ${studio}` : null,
    `Reply to: ${email}`,
    '',
    message,
  ].filter((l) => l !== null).join('\n');

  const html = `
    <div style="font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;font-size:14px;line-height:1.5;color:#11151c">
      <h2 style="margin:0 0 12px;font-size:16px">New Checkpoint inquiry</h2>
      <table style="border-collapse:collapse">
        ${name ? `<tr><td style="padding:2px 12px 2px 0;color:#55636f">Name</td><td>${esc(name)}</td></tr>` : ''}
        ${studio ? `<tr><td style="padding:2px 12px 2px 0;color:#55636f">Studio</td><td>${esc(studio)}</td></tr>` : ''}
        <tr><td style="padding:2px 12px 2px 0;color:#55636f">Email</td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
      </table>
      <p style="white-space:pre-wrap;margin:16px 0 0;padding:12px 14px;border-left:3px solid #c8f65d;background:#f3f6fa">${esc(message)}</p>
    </div>`;

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    const data = await resp.json().catch(() => ({}));
    if (!resp.ok) {
      const msg = (data && (data.message || data.error)) || '';
      console.error('Resend email error:', resp.status, msg);
      return res.status(502).json({ error: 'Could not send right now. Please try again or email us directly.' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact request failed:', err);
    return res.status(502).json({ error: 'Could not send right now. Please try again or email us directly.' });
  }
};
