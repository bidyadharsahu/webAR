import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Netrik XR | #1 Augmented Reality Company - AR Photo Frames, Business Cards & Menus'
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
        {/* Grid Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontSize: 96,
                fontWeight: 700,
                color: '#ffffff',
              }}
            >
              Netrik
            </span>
            <span
              style={{
                fontSize: 96,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              XR
            </span>
          </div>
          
          {/* Accent Line */}
          <div
            style={{
              width: 300,
              height: 4,
              background: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899)',
              borderRadius: 2,
              marginBottom: 24,
            }}
          />
          
          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              color: '#a1a1aa',
              marginBottom: 24,
            }}
          >
            #1 Augmented Reality Company
          </div>
          
          {/* Services */}
          <div
            style={{
              fontSize: 20,
              color: '#71717a',
              marginBottom: 32,
            }}
          >
            AR Photo Frames • AR Business Cards • AR Menus • Web Development
          </div>
          
          {/* CTA Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 32px',
              background: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899)',
              borderRadius: 25,
              fontSize: 18,
              fontWeight: 600,
              color: '#ffffff',
            }}
          >
            No App Required - Scan & Experience AR
          </div>
          
          {/* Website */}
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
