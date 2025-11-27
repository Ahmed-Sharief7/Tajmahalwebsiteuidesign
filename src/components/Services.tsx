import { useState } from 'react';

interface Service {
  title: string;
  description: string;
  placeholderLabel: string;
}

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services: Service[] = [
    {
      title: 'قص وتشكيل الرخام والجرانيت',
      description: 'قص وتشكيل احترافي بأحدث التقنيات والمعدات لضمان دقة عالية وجودة ممتازة',
      placeholderLabel: 'Cutting Service Photo'
    },
    {
      title: 'بيع خامات الرخام والجرانيت',
      description: 'مجموعة واسعة من الخامات الأصلية المستوردة بأفضل الأسعار',
      placeholderLabel: 'Stone Materials Photo'
    },
    {
      title: 'تركيب المطابخ',
      description: 'تصميم وتركيب مطابخ عصرية بأفخم أنواع الرخام والجرانيت',
      placeholderLabel: 'Kitchen Photo'
    },
    {
      title: 'تركيب السلالم',
      description: 'تنفيذ وتركيب السلالم بدقة ومتانة عالية تدوم لسنوات',
      placeholderLabel: 'Stairs Photo'
    },
    {
      title: 'تركيب الواجهات',
      description: 'واجهات فاخرة من الرخام والجرانيت الطبيعي تعكس الفخامة والأناقة',
      placeholderLabel: 'Facade Photo'
    },
    {
      title: 'تركيب النوافذ والأبواب',
      description: 'إطارات وعتبات من الرخام والجرانيت بتصاميم متنوعة',
      placeholderLabel: 'Windows & Doors Photo'
    },
    {
      title: 'تنفيذ الأرضيات',
      description: 'أرضيات رخامية وجرانيتية بتصاميم متنوعة وألوان جذابة',
      placeholderLabel: 'Flooring Photo'
    },
    {
      title: 'الإشراف على التنفيذ',
      description: 'متابعة كاملة لضمان أعلى جودة في التنفيذ من البداية للنهاية',
      placeholderLabel: 'Supervision Photo'
    }
  ];

  return (
    <section 
      id="services" 
      style={{ 
        padding: '120px 0',
        backgroundColor: '#E2E2E2' 
      }}
    >
      <div className="max-w-[1400px] mx-auto px-20 sm:px-20 lg:px-24">
        <div className="text-center" style={{ marginBottom: '80px', padding: '0 32px' }}>
          <h2 
            style={{ 
              color: '#0054A6',
              fontSize: 'clamp(34px, 5vw, 48px)',
              fontWeight: 700,
              marginBottom: '32px'
            }}
          >
            خدماتنا
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
          <p 
            style={{ 
              color: '#333333',
              fontSize: '20px',
              lineHeight: '1.8',
              maxWidth: '700px',
              margin: '0 auto',
              marginBottom: '0'
            }}
          >
            نقدم حلولاً شاملة ومتكاملة في مجال الرخام والجرانيت
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '32px' }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                borderRadius: '18px',
                height: '400px',
                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredIndex === index 
                  ? '0 20px 40px rgba(0, 0, 0, 0.2)' 
                  : '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Placeholder Background */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  backgroundColor: '#999999',
                  border: '2px dashed #C9A04E'
                }}
              >
                <p style={{ color: '#ffffff', fontSize: '12px', textAlign: 'center', padding: '10px' }}>
                  {service.placeholderLabel}
                </p>
              </div>

              {/* Dark Gradient Overlay at Bottom - Always Visible */}
              <div 
                className="absolute bottom-0 left-0 right-0 transition-all duration-300"
                style={{
                  background: hoveredIndex === index 
                    ? 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.4) 100%)' 
                    : 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)',
                  padding: hoveredIndex === index ? '32px 32px 32px 32px' : '32px 32px 32px 32px',
                  height: hoveredIndex === index ? '100%' : 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {/* Service Title - Always Visible */}
                <h4 
                  className="text-white transition-all duration-300"
                  style={{ 
                    fontWeight: 600,
                    fontSize: hoveredIndex === index ? '20px' : '18px',
                    marginBottom: hoveredIndex === index ? '20px' : '0',
                    textAlign: 'center'
                  }}
                >
                  {service.title}
                </h4>

                {/* Description - Visible on Hover */}
                <p 
                  className="text-white transition-all duration-300"
                  style={{ 
                    lineHeight: '1.7',
                    fontSize: '15px',
                    textAlign: 'center',
                    opacity: hoveredIndex === index ? 1 : 0,
                    transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(10px)'
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
