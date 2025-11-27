import { CheckCircle } from 'lucide-react';

interface AboutProps {
  workshopImage: string;
  projectImage: string;
}

export function About({ workshopImage, projectImage }: AboutProps) {
  return (
    <section id="about" style={{ padding: '120px 0', backgroundColor: 'white' }}>
      <div className="max-w-[1400px] mx-auto px-20 sm:px-20 lg:px-24">
        <div className="text-center" style={{ marginBottom: '80px' }}>
          <h2 
            style={{ 
              color: '#0054A6',
              fontSize: 'clamp(34px, 5vw, 48px)',
              fontWeight: 700,
              marginBottom: '32px'
            }}
          >
            من نحن
          </h2>
          <div 
            className="mx-auto" 
            style={{ 
              width: '120px', 
              height: '6px', 
              backgroundColor: '#C9A04E',
              borderRadius: '6px',
              marginBottom: '28px'
            }}
          />
        </div>

        <div 
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{ gap: '80px' }}
        >
          {/* Text Content */}
          <div style={{ padding: '0 32px' }}>
            <p 
              style={{ 
                color: '#333333',
                lineHeight: '1.9',
                fontSize: '16px',
                marginBottom: '48px',
                textAlign: 'center'
              }}
            >
              تختص شركة تاج محل في قص وتشكيل الرخام والجرانيت، مع تقديم خدمات الإشراف والتنفيذ. نوفّر حلولًا متكاملة تشمل البيع والتركيب وتنفيذ الواجهات، النوافذ، الأبواب، المطابخ، السلالم والأرضيات، بجودة عالية ومعايير دقيقة.
            </p>

            <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 flex-shrink-0" size={24} style={{ color: '#0054A6' }} />
                <div>
                  <h4 style={{ color: '#333333', fontWeight: 600, marginBottom: '8px' }}>خبرة واسعة</h4>
                  <p style={{ color: '#666', lineHeight: '1.8', fontSize: '15px' }}>
                    سنوات من الخبرة في مجال الرخام والجرانيت
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 flex-shrink-0" size={24} style={{ color: '#0054A6' }} />
                <div>
                  <h4 style={{ color: '#333333', fontWeight: 600, marginBottom: '8px' }}>جودة متميزة</h4>
                  <p style={{ color: '#666', lineHeight: '1.8', fontSize: '15px' }}>
                    نستخدم أفضل الخامات والتقنيات الحديثة
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 flex-shrink-0" size={24} style={{ color: '#0054A6' }} />
                <div>
                  <h4 style={{ color: '#333333', fontWeight: 600, marginBottom: '8px' }}>إشراف كامل</h4>
                  <p style={{ color: '#666', lineHeight: '1.8', fontSize: '15px' }}>
                    متابعة دقيقة لكافة مراحل التنفيذ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Diagonal Image Layout */}
          <div className="relative" style={{ height: '500px', padding: '0 32px' }}>
            {/* Top Right Image */}
            <div 
              className="absolute overflow-hidden shadow-lg flex items-center justify-center"
              style={{ 
                borderRadius: '20px',
                backgroundColor: '#E2E2E2',
                width: '55%',
                height: '45%',
                top: 0,
                right: '32px',
                border: '2px dashed #C9A04E'
              }}
            >
              <p style={{ color: '#666', textAlign: 'center', padding: '20px', fontSize: '14px' }}>
                Upload Workshop Photo
              </p>
            </div>

            {/* Bottom Left Image */}
            <div 
              className="absolute overflow-hidden shadow-lg flex items-center justify-center"
              style={{ 
                borderRadius: '20px',
                backgroundColor: '#E2E2E2',
                width: '55%',
                height: '45%',
                bottom: 0,
                left: '32px',
                border: '2px dashed #C9A04E'
              }}
            >
              <p style={{ color: '#666', textAlign: 'center', padding: '20px', fontSize: '14px' }}>
                Upload Project Photo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
