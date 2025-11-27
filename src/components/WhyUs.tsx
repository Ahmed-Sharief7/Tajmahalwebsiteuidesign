import { Target, Award, Clock, Eye, ShieldCheck, Sparkles } from 'lucide-react';

export function WhyUs() {
  const features = [
    {
      icon: <Target size={48} />,
      title: 'دقة في القص والتشكيل',
      description: 'نستخدم أحدث المعدات لضمان الدقة المتناهية'
    },
    {
      icon: <Award size={48} />,
      title: 'جودة عالية في التنفيذ',
      description: 'معايير جودة صارمة في كل مرحلة من مراحل العمل'
    },
    {
      icon: <Clock size={48} />,
      title: 'التزام بالمواعيد',
      description: 'نحترم وقتك ونلتزم بمواعيد التسليم المحددة'
    },
    {
      icon: <Eye size={48} />,
      title: 'إشراف كامل على المشاريع',
      description: 'متابعة دقيقة من البداية حتى التسليم النهائي'
    },
    {
      icon: <ShieldCheck size={48} />,
      title: 'خامات أصلية ومضمونة',
      description: 'نتعامل فقط مع الموردين الموثوقين للخامات الأصلية'
    },
    {
      icon: <Sparkles size={48} />,
      title: 'تصاميم عصرية وفاخرة',
      description: 'نواكب أحدث الاتجاهات في التصميم والديكور'
    }
  ];

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230054A6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: '#0054A6' }}>لماذا تاج محل؟</h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#C9A04E' }}></div>
          <p className="mt-6 text-xl" style={{ color: '#333333' }}>
            نفخر بتقديم خدمات متميزة تلبي أعلى التوقعات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-colors duration-300"
                style={{ backgroundColor: '#0054A6', color: 'white' }}
              >
                {feature.icon}
              </div>
              
              <h4 className="mb-4" style={{ color: '#333333' }}>
                {feature.title}
              </h4>
              
              <p className="text-base leading-relaxed" style={{ color: '#666' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
