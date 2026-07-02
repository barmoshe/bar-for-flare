import { ImageResponse } from 'next/og';

// Dynamic share card for the bar-for-flare application page, matching the
// page's look — Flare's real brand, read live off helloflare.com: off-white
// surface, uppercase serif-style display in navy #111C38, sage green accent,
// rectangular navy CTA. Rendered at build time by next/og (Satori), so it
// uses a flexbox-only subset of CSS and plain hex colours (Latin text only;
// Satori has no custom serif here, weight carries the look).

export const alt =
  'Bar Moshe for Flare — AI Engineer. LLM pipelines with retries and evals, MCP servers on npm, agents and the orchestration behind them.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px 48px',
          backgroundColor: '#fcfcfc',
          backgroundImage:
            'radial-gradient(720px 420px at 50% -10%, rgba(218,232,245,0.9), transparent 65%), radial-gradient(520px 340px at 92% 100%, rgba(233,237,201,0.9), transparent 60%)',
          fontFamily: 'serif',
          color: '#111c38',
        }}
      >
        {/* Brand row */}
        <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'sans-serif' }}>
          <div style={{ display: 'flex', fontSize: 38, fontWeight: 700, letterSpacing: '-0.01em' }}>
            barmoshe
          </div>
          <div style={{ display: 'flex', fontSize: 38, fontWeight: 700, color: '#5b8a68' }}>°</div>
          <div
            style={{
              display: 'flex',
              marginLeft: 20,
              padding: '8px 18px',
              backgroundColor: 'rgba(17,28,56,0.07)',
              fontSize: 22,
              fontWeight: 500,
            }}
          >
            for Flare · Application
          </div>
        </div>

        {/* Headline: uppercase display in their navy */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 92,
              lineHeight: 1.02,
              letterSpacing: '-0.01em',
            }}
          >
            BAR MOSHE
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 44,
              marginTop: 10,
              letterSpacing: '0.02em',
            }}
          >
            AI BUILDER &amp; FULL-STACK ENGINEER
          </div>
          <div
            style={{
              display: 'flex',
              fontFamily: 'sans-serif',
              fontSize: 26,
              color: '#4a5468',
              marginTop: '26px',
              maxWidth: '940px',
              lineHeight: 1.4,
            }}
          >
            LLM pipelines with retries and evals, MCP servers on npm, agents and the
            orchestration behind them.
          </div>
        </div>

        {/* Foot meta */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'sans-serif',
            fontSize: 24,
            color: '#8b93a5',
          }}
        >
          <div style={{ display: 'flex' }}>github.com/barmoshe</div>
          <div
            style={{
              display: 'flex',
              padding: '14px 28px',
              backgroundColor: '#111c38',
              fontWeight: 500,
              fontSize: 21,
              color: '#fcfcfc',
            }}
          >
            AI Engineer · Tel Aviv →
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
