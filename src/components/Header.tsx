import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from 'figma:asset/e6e30c09c7fae28fb3c13ea1a805fc6afb0a1d64.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? '#ffffff' : 'transparent',
        boxShadow: isScrolled ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
        borderTop: isScrolled ? '3px solid #C9A04E' : '3px solid transparent'
      }}
    >
      <div className="max-w-[1400px] mx-auto px-20 sm:px-20 lg:px-24">
        <div 
          className="flex items-center h-24 transition-all duration-300"
          style={{ height: isScrolled ? '90px' : '110px' }}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="تاج محل للرخام والجرانيت" 
              className="transition-all duration-300"
              style={{ 
                height: isScrolled ? '60px' : '80px',
                width: 'auto'
              }}
            />
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-10">
            <button 
              onClick={() => scrollToSection('home')} 
              className="transition-colors duration-300"
              style={{ 
                color: isScrolled ? '#333333' : '#ffffff',
                fontSize: '16px',
                fontWeight: 500
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C9A04E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isScrolled ? '#333333' : '#ffffff';
              }}
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="transition-colors duration-300"
              style={{ 
                color: isScrolled ? '#333333' : '#ffffff',
                fontSize: '16px',
                fontWeight: 500
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C9A04E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isScrolled ? '#333333' : '#ffffff';
              }}
            >
              من نحن
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="transition-colors duration-300"
              style={{ 
                color: isScrolled ? '#333333' : '#ffffff',
                fontSize: '16px',
                fontWeight: 500
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C9A04E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isScrolled ? '#333333' : '#ffffff';
              }}
            >
              خدماتنا
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="transition-colors duration-300"
              style={{ 
                color: isScrolled ? '#333333' : '#ffffff',
                fontSize: '16px',
                fontWeight: 500
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C9A04E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isScrolled ? '#333333' : '#ffffff';
              }}
            >
              أعمالنا
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="transition-colors duration-300"
              style={{ 
                color: isScrolled ? '#333333' : '#ffffff',
                fontSize: '16px',
                fontWeight: 500
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C9A04E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isScrolled ? '#333333' : '#ffffff';
              }}
            >
              تواصل معنا
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a 
              href="https://wa.me/218914360900"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ 
                backgroundColor: '#0054A6',
                color: 'white',
                padding: '18px 36px',
                borderRadius: '14px',
                fontSize: '16px',
                fontWeight: 600
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C9A04E';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0054A6';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Phone size={20} />
              <span>اتصل بنا</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden mr-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: isScrolled ? '#333333' : '#ffffff' }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="lg:hidden pb-4"
            style={{ 
              backgroundColor: '#ffffff',
              borderRadius: '0 0 12px 12px',
              padding: '20px'
            }}
          >
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="py-2 text-right transition-opacity hover:opacity-70"
                style={{ color: '#333333' }}
              >
                الرئيسية
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="py-2 text-right transition-opacity hover:opacity-70"
                style={{ color: '#333333' }}
              >
                من نحن
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="py-2 text-right transition-opacity hover:opacity-70"
                style={{ color: '#333333' }}
              >
                خدماتنا
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="py-2 text-right transition-opacity hover:opacity-70"
                style={{ color: '#333333' }}
              >
                أعمالنا
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="py-2 text-right transition-opacity hover:opacity-70"
                style={{ color: '#333333' }}
              >
                تواصل معنا
              </button>
              <a 
                href="https://wa.me/218914360900"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
                style={{ 
                  backgroundColor: '#0054A6',
                  color: 'white',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  marginTop: '8px'
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
