import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Netrik XR - Augmented Reality Solutions'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #1a1a2e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1a1a2e 0%, transparent 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 16,
            }}
          >
            Netrik XR
          </div>
          
          <div
            style={{
              width: 300,
              height: 4,
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              borderRadius: 2,
              marginBottom: 24,
            }}
          />
          
          <div
            style={{
              fontSize: 32,
              color: '#a1a1aa',
              marginBottom: 24,
            }}
          >
            Augmented Reality Solutions
          </div>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 32px',
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              borderRadius: 25,
              fontSize: 18,
              fontWeight: 600,
              color: '#ffffff',
            }}
          >
            No App Required
          </div>
          
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              fontSize: 18,
              color: '#52525b',
            }}
          >
            netrikxr.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
