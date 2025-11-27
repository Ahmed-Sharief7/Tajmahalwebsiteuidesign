import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `مرحباً، أنا ${formData.name}%0Aالهاتف: ${formData.phone}%0Aالبريد: ${formData.email}%0Aالرسالة: ${formData.message}`;
    window.open(`https://wa.me/218914360900?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="contact" 
      style={{ 
        padding: '120px 0 0 0',
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
            تواصل معنا
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
            نسعد بخدمتكم والرد على استفساراتكم
          </p>
        </div>

        <div 
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: '60px', marginBottom: '80px' }}
        >
          {/* Contact Information */}
          <div 
            className="bg-white shadow-lg"
            style={{ borderRadius: '16px', padding: '48px 40px' }}
          >
            <h3 
              style={{ 
                color: '#0054A6',
                fontWeight: 600,
                marginBottom: '40px',
                fontSize: '20px'
              }}
            >
              معلومات التواصل
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div className="flex items-start gap-4">
                <div 
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ 
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    backgroundColor: '#0054A6'
                  }}
                >
                  <MapPin size={24} color="white" />
                </div>
                <div>
                  <h4 
                    style={{ 
                      color: '#333333',
                      fontWeight: 600,
                      marginBottom: '12px',
                      fontSize: '16px'
                    }}
                  >
                    العنوان
                  </h4>
                  <p style={{ color: '#666', lineHeight: '1.8', fontSize: '15px' }}>
                    طريق مستوصف كرزاز – 90 متر من الطريق الساحلي<br />
                    كرزاز / مصراته – ليبيا
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div 
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ 
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    backgroundColor: '#0054A6'
                  }}
                >
                  <Phone size={24} color="white" />
                </div>
                <div>
                  <h4 
                    style={{ 
                      color: '#333333',
                      fontWeight: 600,
                      marginBottom: '16px',
                      fontSize: '16px'
                    }}
                  >
                    أرقام الهواتف
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                      <p style={{ fontSize: '13px', color: '#C9A04E', marginBottom: '8px' }}>خدمة العملاء:</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <a 
                          href="tel:+218914360900" 
                          className="hover:opacity-70 flex items-center gap-2"
                          style={{ fontSize: '18px', fontWeight: 700, color: '#333333' }}
                        >
                          <span>+218 91-4360900</span>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                        </a>
                        <a 
                          href="tel:+218914360222" 
                          className="hover:opacity-70 flex items-center gap-2"
                          style={{ fontSize: '18px', fontWeight: 700, color: '#333333' }}
                        >
                          <span>+218 91-4360222</span>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: '13px', color: '#C9A04E', marginBottom: '8px' }}>الإدارة:</p>
                      <a 
                        href="tel:+218914360987" 
                        className="hover:opacity-70 flex items-center gap-2"
                        style={{ fontSize: '18px', fontWeight: 700, color: '#333333' }}
                      >
                        <span>+218 91-4360987</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div 
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ 
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    backgroundColor: '#0054A6'
                  }}
                >
                  <Mail size={24} color="white" />
                </div>
                <div>
                  <h4 
                    style={{ 
                      color: '#333333',
                      fontWeight: 600,
                      marginBottom: '12px',
                      fontSize: '16px'
                    }}
                  >
                    البريد الإلكتروني
                  </h4>
                  <a 
                    href="mailto:info@taj-mahal.ly" 
                    className="hover:opacity-70"
                    style={{ color: '#333333', fontSize: '18px', fontWeight: 700 }}
                  >
                    info@taj-mahal.ly
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="bg-white shadow-lg"
            style={{ borderRadius: '16px', padding: '48px 40px' }}
          >
            <h3 
              style={{ 
                color: '#0054A6',
                fontWeight: 600,
                marginBottom: '40px',
                fontSize: '20px'
              }}
            >
              أرسل لنا رسالة
            </h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label 
                  className="block" 
                  style={{ 
                    color: '#333333',
                    marginBottom: '10px',
                    fontWeight: 500,
                    fontSize: '15px'
                  }}
                >
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full focus:outline-none transition-colors"
                  style={{ 
                    padding: '16px 18px',
                    borderRadius: '12px',
                    border: '2px solid #E2E2E2',
                    fontSize: '15px'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#0054A6';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E2E2E2';
                  }}
                />
              </div>

              <div>
                <label 
                  className="block" 
                  style={{ 
                    color: '#333333',
                    marginBottom: '10px',
                    fontWeight: 500,
                    fontSize: '15px'
                  }}
                >
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full focus:outline-none transition-colors"
                  style={{ 
                    padding: '16px 18px',
                    borderRadius: '12px',
                    border: '2px solid #E2E2E2',
                    fontSize: '15px'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#0054A6';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E2E2E2';
                  }}
                />
              </div>

              <div>
                <label 
                  className="block" 
                  style={{ 
                    color: '#333333',
                    marginBottom: '10px',
                    fontWeight: 500,
                    fontSize: '15px'
                  }}
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full focus:outline-none transition-colors"
                  style={{ 
                    padding: '16px 18px',
                    borderRadius: '12px',
                    border: '2px solid #E2E2E2',
                    fontSize: '15px'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#0054A6';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E2E2E2';
                  }}
                />
              </div>

              <div>
                <label 
                  className="block" 
                  style={{ 
                    color: '#333333',
                    marginBottom: '10px',
                    fontWeight: 500,
                    fontSize: '15px'
                  }}
                >
                  الرسالة
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full focus:outline-none transition-colors resize-none"
                  style={{ 
                    padding: '16px 18px',
                    borderRadius: '12px',
                    border: '2px solid #E2E2E2',
                    fontSize: '15px'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#0054A6';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E2E2E2';
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ 
                  backgroundColor: '#0054A6',
                  padding: '18px 36px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 600,
                  marginTop: '16px'
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
                <Send size={20} />
                <span>إرسال الرسالة</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Full Width Map */}
      <div 
        className="w-full overflow-hidden"
        style={{ 
          height: '450px',
          marginTop: '0'
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54109.84714237136!2d15.257893!3d32.345623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDIwJzQ0LjIiTiAxNcKwMTUnMjguNCJF!5e0!3m2!1sen!2sly!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="موقعنا على الخريطة"
        />
      </div>
    </section>
  );
}
