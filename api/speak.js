const VOICES = {
  joana: 'nJ5NFqyKb8kn9JBPmo6i',   // Female, European Portuguese
  paulo: 'aLFUti4k8YKvtQGXv0UO',   // Male, Lisbon accent
};
const FALLBACK_VOICE = 'EXAVITQu4vr4xnSDxMaL';  // Sarah
const MODEL = 'eleven_multilingual_v2';

export default async function handler(req, res) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ELEVENLABS_API_KEY not set' });
  }

  // GET /api/speak?ping=1 — boot-time voice availability check
  if (req.method === 'GET' && req.query.ping === '1') {
    const check = async (vid) => {
      const r = await fetch(`https://api.elevenlabs.io/v1/voices/${vid}`, {
        headers: { 'xi-api-key': apiKey }
      });
      return r.ok;
    };
    const [joana, paulo] = await Promise.all([check(VOICES.joana), check(VOICES.paulo)]);
    return res.status(200).json({ joana, paulo });
  }

  // POST /api/speak — text-to-speech with voice toggle
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST only' });
  }
  const { text, voice = 'joana' } = req.body || {};
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'text required' });
  }

  const voiceId = VOICES[voice] || VOICES.joana;
  const tryVoice = async (vid) => {
    const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${vid}`, {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'audio/mpeg',
      },
      body: JSON.stringify({ text, model_id: MODEL }),
    });
    return r;
  };

  let r = await tryVoice(voiceId);
  if (r.status === 404 || r.status === 400) {
    // voice not in library — fall back
    r = await tryVoice(FALLBACK_VOICE);
    res.setHeader('X-Voice-Fallback', 'sarah');
  }
  if (!r.ok) {
    const errText = await r.text();
    return res.status(r.status).json({ error: errText.slice(0, 500) });
  }
  const buf = Buffer.from(await r.arrayBuffer());
  res.setHeader('Content-Type', 'audio/mpeg');
  res.setHeader('Content-Length', buf.length);
  return res.status(200).send(buf);
}
