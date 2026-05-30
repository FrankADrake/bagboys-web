/**
 * Cloudflare Pages Function — handles POST /contact-form
 *
 * Required environment variables (set in Cloudflare Pages dashboard):
 *   RESEND_API_KEY      — your Resend API key
 *   BAGBOYS_TO_EMAIL    — frankdrake@gmail.com
 *   TURNSTILE_SECRET_KEY — your Turnstile secret key
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  let formData;
  try {
    formData = await request.formData();
  } catch {
    return jsonResponse({ error: 'Invalid request' }, 400);
  }

  const name             = formData.get('name')    || '';
  const email            = formData.get('email')   || '';
  const message          = formData.get('message') || '';
  const turnstileToken   = formData.get('cf-turnstile-response');

  if (!message.trim()) {
    return jsonResponse({ error: 'Message is required' }, 400);
  }

  // Verify Turnstile
  if (turnstileToken && env.TURNSTILE_SECRET_KEY) {
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    });
    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return jsonResponse({ error: 'Spam check failed' }, 400);
    }
  }

  const lines = ['Message from bagboys.com contact form', ''];
  if (name)    lines.push(`From:     ${name}`);
  if (email)   lines.push(`Reply-to: ${email}`);
  lines.push('', message);

  const emailRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'onboarding@resend.dev',
      to:   env.BAGBOYS_TO_EMAIL,
      subject: name ? `Bagboys message from ${name}` : 'Bagboys message (no name)',
      text: lines.join('\n'),
    }),
  });

  if (!emailRes.ok) {
    const detail = await emailRes.text();
    console.error('Resend error:', detail);
    return jsonResponse({ error: 'Failed to send email' }, 500);
  }

  return jsonResponse({ ok: true }, 200);
}

function jsonResponse(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
