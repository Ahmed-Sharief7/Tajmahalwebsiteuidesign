import { CheckCircle } from 'lucide-react';

interface AboutProps {
  workshopImage: string;
  projectImage: string;
}

export function About({ workshopImage, projectImage }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: '#0054A6' }}>من نحن</h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#C9A04E' }}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="mb-6 leading-relaxed" style={{ color: '#333333' }}>
              تختص شركة تاج محل في قص وتشكيل الرخام والجرانيت، مع تقديم خدمات الإشراف والتنفيذ. نوفّر حلولًا متكاملة تشمل البيع والتركيب وتنفيذ الواجهات، النوافذ، الأبواب، المطابخ، السلالم والأرضيات، بجودة عالية ومعايير دقيقة.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 flex-shrink-0" size={24} style={{ color: '#0054A6' }} />
                <div>
                  <h4 className="mb-1" style={{ color: '#333333' }}>خبرة واسعة</h4>
                  <p className="text-base" style={{ color: '#666' }}>
                    سنوات من الخبرة في مجال الرخام والجرانيت
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 flex-shrink-0" size={24} style={{ color: '#0054A6' }} />
                <div>
                  <h4 className="mb-1" style={{ color: '#333333' }}>جودة متميزة</h4>
                  <p className="text-base" style={{ color: '#666' }}>
                    نستخدم أفضل الخامات والتقنيات الحديثة
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 flex-shrink-0" size={24} style={{ color: '#0054A6' }} />
                <div>
                  <h4 className="mb-1" style={{ color: '#333333' }}>إشراف كامل</h4>
                  <p className="text-base" style={{ color: '#666' }}>
                    متابعة دقيقة لكافة مراحل التنفيذ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src={workshopImage} 
                alt="ورشة العمل"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg mt-8">
              <img 
                src={projectImage} 
                alt="مشروع منفذ"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
