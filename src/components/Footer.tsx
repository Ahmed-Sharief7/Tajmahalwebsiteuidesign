import { Facebook, Instagram, Phone } from 'lucide-react';
import logo from 'figma:asset/e6e30c09c7fae28fb3c13ea1a805fc6afb0a1d64.png';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      className="py-16"
      style={{ backgroundColor: '#333333' }}
    >
      <div className="max-w-[1400px] mx-auto px-20 sm:px-20 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="mb-6">
              <img 
                src={logo} 
                alt="تاج محل للرخام والجرانيت" 
                className="h-16 w-auto"
              />
            </div>
            <p 
              className="text-gray-400"
              style={{ lineHeight: '1.8', fontSize: '15px' }}
            >
              متخصصون في قص وتشكيل وتركيب الرخام والجرانيت بأعلى معايير الجودة والدقة
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-white"
              style={{ 
                marginBottom: '20px',
                fontSize: '18px',
                fontWeight: 600
              }}
            >
              روابط سريعة
            </h4>
            <div 
              className="mb-6" 
              style={{ 
                height: '4px', 
                width: '60px', 
                backgroundColor: '#C9A04E',
                borderRadius: '4px'
              }}
            />
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-400 hover:text-white transition-colors text-right"
                style={{ fontSize: '15px' }}
              >
                الرئيسية
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-400 hover:text-white transition-colors text-right"
                style={{ fontSize: '15px' }}
              >
                من نحن
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-400 hover:text-white transition-colors text-right"
                style={{ fontSize: '15px' }}
              >
                خدماتنا
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-400 hover:text-white transition-colors text-right"
                style={{ fontSize: '15px' }}
              >
                أعمالنا
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-white transition-colors text-right"
                style={{ fontSize: '15px' }}
              >
                تواصل معنا
              </button>
            </nav>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h4 
              className="text-white"
              style={{ 
                marginBottom: '20px',
                fontSize: '18px',
                fontWeight: 600
              }}
            >
              تابعنا
            </h4>
            <div 
              className="mb-6" 
              style={{ 
                height: '4px', 
                width: '60px', 
                backgroundColor: '#C9A04E',
                borderRadius: '4px'
              }}
            />
            
            <div 
              className="flex justify-start mb-8"
              style={{ gap: '20px' }}
            >
              <a
                href="https://www.instagram.com/taj_mahalmarble2014"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ 
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#0054A6'
                }}
              >
                <Instagram size={24} color="white" />
              </a>
              <a
                href="https://www.facebook.com/share/17zkQzuM1V/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ 
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#0054A6'
                }}
              >
                <Facebook size={24} color="white" />
              </a>
              <a
                href="https://wa.me/218914360900"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ 
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#25D366'
                }}
              >
                <Phone size={24} color="white" />
              </a>
            </div>

            <div className="text-gray-400">
              <p 
                className="mb-3"
                style={{ fontSize: '14px', color: '#C9A04E' }}
              >
                خدمة العملاء:
              </p>
              <a 
                href="tel:+218914360900" 
                className="hover:text-white transition-colors block"
                style={{ fontSize: '15px' }}
              >
                +218 91-4360900
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 text-center"
          style={{ 
            borderTop: '1px solid #444444',
            marginTop: '32px'
          }}
        >
          <p 
            className="text-gray-400"
            style={{ fontSize: '14px' }}
          >
            © 2025 تاج محل للرخام والجرانيت. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
