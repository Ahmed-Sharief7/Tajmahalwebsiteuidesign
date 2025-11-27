import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from 'figma:asset/e06119dfb83edf9bd214428030d7879cf2613126.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="تاج محل للرخام والجرانيت" 
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="hover:opacity-70 transition-opacity"
              style={{ color: '#333333' }}
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:opacity-70 transition-opacity"
              style={{ color: '#333333' }}
            >
              من نحن
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="hover:opacity-70 transition-opacity"
              style={{ color: '#333333' }}
            >
              خدماتنا
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="hover:opacity-70 transition-opacity"
              style={{ color: '#333333' }}
            >
              أعمالنا
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:opacity-70 transition-opacity"
              style={{ color: '#333333' }}
            >
              تواصل معنا
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://wa.me/218914360900"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300"
              style={{ 
                backgroundColor: '#0054A6',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C9A04E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0054A6';
              }}
            >
              <Phone size={18} />
              <span>اتصل بنا</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="py-2 text-right hover:opacity-70 transition-opacity"
                style={{ color: '#333333' }}
              >
                الرئيسية
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="py-2 text-right hover:opacity-70 transition-opacity"
                style={{ color: '#333333' }}
              >
                من نحن
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="py-2 text-right hover:opacity-70 transition-opacity"
                style={{ color: '#333333' }}
              >
                خدماتنا
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="py-2 text-right hover:opacity-70 transition-opacity"
                style={{ color: '#333333' }}
              >
                أعمالنا
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="py-2 text-right hover:opacity-70 transition-opacity"
                style={{ color: '#333333' }}
              >
                تواصل معنا
              </button>
              <a 
                href="https://wa.me/218914360900"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg"
                style={{ 
                  backgroundColor: '#0054A6',
                  color: 'white'
                }}
              >
                <Phone size={18} />
                <span>اتصل بنا</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
