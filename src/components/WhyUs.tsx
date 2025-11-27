export function WhyUs() {
  const features = [
    {
      iconLabel: 'Target Icon',
      title: 'دقة في القص والتشكيل',
      description: 'نستخدم أحدث المعدات لضمان الدقة المتناهية'
    },
    {
      iconLabel: 'Award Icon',
      title: 'جودة عالية في التنفيذ',
      description: 'معايير جودة صارمة في كل مرحلة من مراحل العمل'
    },
    {
      iconLabel: 'Clock Icon',
      title: 'التزام بالمواعيد',
      description: 'نحترم وقتك ونلتزم بمواعيد التسليم المحددة'
    },
    {
      iconLabel: 'Eye Icon',
      title: 'إشراف كامل على المشاريع',
      description: 'متابعة دقيقة من البداية حتى التسليم النهائي'
    },
    {
      iconLabel: 'Shield Icon',
      title: 'خامات أصلية ومضمونة',
      description: 'نتعامل فقط مع الموردين الموثوقين للخامات الأصلية'
    },
    {
      iconLabel: 'Quality Icon',
      title: 'متابعة الجودة في كافة مراحل التنفيذ',
      description: 'نضمن معايير الجودة العالية من البداية للنهاية'
    }
  ];

  return (
    <section 
      className="relative overflow-hidden"
      style={{ 
        padding: '120px 0',
        backgroundColor: '#F5F5F5' 
      }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230054A6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-[1400px] mx-auto px-20 sm:px-20 lg:px-24 relative z-10">
        <div className="text-center" style={{ marginBottom: '80px', padding: '0 32px' }}>
          <h2 
            style={{ 
              color: '#0054A6',
              fontSize: 'clamp(34px, 5vw, 48px)',
              fontWeight: 700,
              marginBottom: '32px'
            }}
          >
            لماذا تاج محل؟
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
              margin: '0 auto'
            }}
          >
            نفخر بتقديم خدمات متميزة تلبي أعلى التوقعات
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '40px' }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
              style={{
                borderRadius: '16px',
                padding: '40px 28px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                className="inline-flex items-center justify-center transition-colors duration-300"
                style={{ 
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  backgroundColor: '#E2E2E2',
                  color: '#0054A6',
                  marginBottom: '28px',
                  fontSize: '11px',
                  textAlign: 'center',
                  padding: '8px',
                  border: '2px solid #C9A04E'
                }}
              >
                {feature.iconLabel}
              </div>
              
              <h4 
                style={{ 
                  color: '#333333',
                  marginBottom: '16px',
                  fontWeight: 600
                }}
              >
                {feature.title}
              </h4>
              
              <p 
                style={{ 
                  color: '#666',
                  lineHeight: '1.8',
                  fontSize: '15px'
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
