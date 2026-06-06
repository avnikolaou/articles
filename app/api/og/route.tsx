import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const truncate = (value: string, maxLength: number) =>
  value.length > maxLength ? `${value.slice(0, maxLength - 1)}…` : value;

export const GET = (request: Request) => {
  const { searchParams } = new URL(request.url);
  const title = truncate(searchParams.get('title') ?? 'Avraam Nikolaou | Frontend Developer', 90);
  const cta = truncate(searchParams.get('cta') ?? 'Read articles at avnikolaou.com', 60);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #09090b 0%, #111827 100%)',
        color: '#fafafa',
        padding: '64px'
      }}
    >
      <div style={{ display: 'flex', fontSize: 34, color: '#a1a1aa', letterSpacing: 2 }}>AVRAAM NIKOLAOU</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, lineHeight: 1.1, textWrap: 'balance' }}>
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'flex-start',
            borderRadius: 999,
            border: '2px solid #22d3ee',
            background: 'rgba(34, 211, 238, 0.15)',
            color: '#67e8f9',
            padding: '14px 26px',
            fontSize: 32,
            fontWeight: 600
          }}
        >
          {cta}
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630
    }
  );
};
