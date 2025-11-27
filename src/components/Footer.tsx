import { Facebook, Instagram, Phone } from 'lucide-react';
import logo from 'figma:asset/e06119dfb83edf9bd214428030d7879cf2613126.png';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      className="py-12"
      style={{ backgroundColor: '#333333' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="تاج محل للرخام والجرانيت" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              متخصصون في قص وتشكيل وتركيب الرخام والجرانيت بأعلى معايير الجودة والدقة
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">روابط سريعة</h4>
            <div className="h-1 w-16 mb-4" style={{ backgroundColor: '#C9A04E' }}></div>
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-400 hover:text-white transition-colors text-right"
              >
                الرئيسية
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-400 hover:text-white transition-colors text-right"
              >
                من نحن
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-400 hover:text-white transition-colors text-right"
              >
                خدماتنا
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-400 hover:text-white transition-colors text-right"
              >
                أعمالنا
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-white transition-colors text-right"
              >
                تواصل معنا
              </button>
            </nav>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h4 className="text-white mb-4">تابعنا</h4>
            <div className="h-1 w-16 mb-4" style={{ backgroundColor: '#C9A04E' }}></div>
            
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/tajmahal_marble"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#0054A6' }}
              >
                <Instagram size={24} color="white" />
              </a>
              <a
                href="https://www.facebook.com/tajmahal.marble"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#0054A6' }}
              >
                <Facebook size={24} color="white" />
              </a>
              <a
                href="https://wa.me/218914360900"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#25D366' }}
              >
                <Phone size={24} color="white" />
              </a>
            </div>

            <div className="text-gray-400">
              <p className="mb-2">خدمة العملاء:</p>
              <a href="tel:+218914360900" className="hover:text-white transition-colors">
                +218 91-4360900
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 border-t text-center"
          style={{ borderColor: '#444444' }}
        >
          <p className="text-gray-400">
            © 2025 تاج محل للرخام والجرانيت. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
