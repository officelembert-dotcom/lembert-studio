import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'The Lembert Method™ Diagnostic — Lembert Studio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0F0F11',
          padding: '72px 80px',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            letterSpacing: '0.26em',
            color: '#B8853A',
            textTransform: 'uppercase',
          }}
        >
          Lembert Studio
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 64,
              lineHeight: 1.15,
              color: '#E3D9BD',
              maxWidth: 950,
            }}
          >
            The Lembert Method™ Diagnostic
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 28,
              fontSize: 28,
              lineHeight: 1.4,
              color: '#E3D9BD',
              opacity: 0.6,
              maxWidth: 850,
            }}
          >
            Where does your organization actually stand? 12 inquiries, 3 axes, about 5 minutes.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            width: 120,
            height: 4,
            backgroundColor: '#B8853A',
          }}
        />
      </div>
    ),
    size
  )
}
