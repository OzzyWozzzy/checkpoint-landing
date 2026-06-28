// Serverless function: add an email to the Checkpoint mailing list (a Resend Audience).
//
// Why server-side: the Resend API key is a secret and must never reach the browser.
// The landing page POSTs { email } here; this function talks to Resend with the key,
// which only exists as a Vercel environment variable at runtime.
//
// Required environment variables (set in Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY      – your Resend API key (starts with "re_")
//   RESEND_AUDIENCE_ID  – the id of the Resend Audience to add contacts to
//
// No npm dependency: we call the Resend REST API directly with the runtime's global fetch.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async function handler(req, res) {
  // Safe diagnostic: GET /api/subscribe?healthcheck=1 reports whether the
  // runtime can see the env vars. Reports booleans only — never the values.
  if (req.method === 'GET' && req.query && req.query.healthcheck) {
    return res.status(200).json({
      hasApiKey: Boolean(process.env.RESEND_API_KEY),
      hasAudienceId: Boolean(process.env.RESEND_AUDIENCE_ID),
    });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Vercel auto-parses JSON bodies into req.body, but guard for the raw/string case.
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const email = (body && typeof body.email === 'string' ? body.email : '').trim().toLowerCase();

  if (!email || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) {
    console.error('Missing RESEND_API_KEY or RESEND_AUDIENCE_ID env vars.');
    return res.status(500).json({ error: 'Mailing list is not configured yet.' });
  }

  try {
    const resp = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    });

    const data = await resp.json().catch(() => ({}));

    if (!resp.ok) {
      // Resend returns 409-ish / validation errors with a `message`. Treat an
      // already-subscribed contact as success so the user sees a friendly result.
      const msg = (data && (data.message || data.error)) || '';
      if (/already exists|already a contact|duplicate/i.test(msg)) {
        return res.status(200).json({ ok: true, alreadySubscribed: true });
      }
      console.error('Resend error:', resp.status, msg);
      return res.status(502).json({ error: 'Could not add you right now. Please try again.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Subscribe request failed:', err);
    return res.status(502).json({ error: 'Could not add you right now. Please try again.' });
  }
};
