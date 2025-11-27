import { Scissors, ShoppingBag, ChefHat, ArrowUpCircle, Building2, DoorOpen, Layers, ClipboardCheck } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function Services() {
  const services: Service[] = [
    {
      icon: <Scissors size={40} />,
      title: 'قص وتشكيل الرخام والجرانيت',
      description: 'قص وتشكيل احترافي بأحدث التقنيات والمعدات'
    },
    {
      icon: <ShoppingBag size={40} />,
      title: 'بيع خامات الرخام والجرانيت',
      description: 'مجموعة واسعة من الخامات الأصلية المستوردة'
    },
    {
      icon: <ChefHat size={40} />,
      title: 'تركيب المطابخ',
      description: 'تصميم وتركيب مطابخ عصرية بأفخم أنواع الرخام'
    },
    {
      icon: <ArrowUpCircle size={40} />,
      title: 'تركيب السلالم',
      description: 'تنفيذ وتركيب السلالم بدقة ومتانة عالية'
    },
    {
      icon: <Building2 size={40} />,
      title: 'تركيب الواجهات',
      description: 'واجهات فاخرة من الرخام والجرانيت الطبيعي'
    },
    {
      icon: <DoorOpen size={40} />,
      title: 'تركيب النوافذ والأبواب',
      description: 'إطارات وعتبات من الرخام والجرانيت'
    },
    {
      icon: <Layers size={40} />,
      title: 'تنفيذ الأرضيات',
      description: 'أرضيات رخامية وجرانيتية بتصاميم متنوعة'
    },
    {
      icon: <ClipboardCheck size={40} />,
      title: 'الإشراف على التنفيذ',
      description: 'متابعة كاملة لضمان أعلى جودة في التنفيذ'
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20"
      style={{ backgroundColor: '#E2E2E2' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: '#0054A6' }}>خدماتنا</h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#C9A04E' }}></div>
          <p className="mt-6 text-xl" style={{ color: '#333333' }}>
            نقدم حلولاً شاملة ومتكاملة في مجال الرخام والجرانيت
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300"
                style={{ backgroundColor: '#0054A6', color: 'white' }}
              >
                {service.icon}
              </div>
              
              <h4 className="mb-3" style={{ color: '#333333' }}>
                {service.title}
              </h4>
              
              <p className="text-base leading-relaxed" style={{ color: '#666' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
