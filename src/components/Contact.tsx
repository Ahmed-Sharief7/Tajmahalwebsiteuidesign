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
    // Send via WhatsApp
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
      className="py-20"
      style={{ backgroundColor: '#E2E2E2' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: '#0054A6' }}>تواصل معنا</h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#C9A04E' }}></div>
          <p className="mt-6 text-xl" style={{ color: '#333333' }}>
            نسعد بخدمتكم والرد على استفساراتكم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="mb-6" style={{ color: '#0054A6' }}>معلومات التواصل</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#0054A6' }}
                  >
                    <MapPin size={24} color="white" />
                  </div>
                  <div>
                    <h4 className="mb-2" style={{ color: '#333333' }}>العنوان</h4>
                    <p style={{ color: '#666' }}>
                      طريق مستوصف كرزاز – 90 متر من الطريق الساحلي<br />
                      كرزاز / مصراته – ليبيا
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#0054A6' }}
                  >
                    <Phone size={24} color="white" />
                  </div>
                  <div>
                    <h4 className="mb-2" style={{ color: '#333333' }}>أرقام الهواتف</h4>
                    <div className="space-y-2" style={{ color: '#666' }}>
                      <div>
                        <p className="text-sm" style={{ color: '#C9A04E' }}>خدمة العملاء:</p>
                        <a href="tel:+218914360900" className="hover:opacity-70">+218 91-4360900</a>
                        <span> / </span>
                        <a href="tel:+218914360222" className="hover:opacity-70">+218 91-4360222</a>
                      </div>
                      <div>
                        <p className="text-sm" style={{ color: '#C9A04E' }}>الإدارة:</p>
                        <a href="tel:+218914360987" className="hover:opacity-70">+218 91-4360987</a>
                      </div>
                      <p className="text-sm italic">جميع الأرقام متصلة بالواتساب</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#0054A6' }}
                  >
                    <Mail size={24} color="white" />
                  </div>
                  <div>
                    <h4 className="mb-2" style={{ color: '#333333' }}>البريد الإلكتروني</h4>
                    <a 
                      href="mailto:info@taj-mahal.ly" 
                      className="hover:opacity-70"
                      style={{ color: '#666' }}
                    >
                      info@taj-mahal.ly
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.0!2d15.0!3d32.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDE4JzAwLjAiTiAxNcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sly!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقعنا على الخريطة"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="mb-6" style={{ color: '#0054A6' }}>أرسل لنا رسالة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2" style={{ color: '#333333' }}>
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none transition-colors"
                  style={{ 
                    borderColor: '#E2E2E2',
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
                <label className="block mb-2" style={{ color: '#333333' }}>
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none transition-colors"
                  style={{ 
                    borderColor: '#E2E2E2',
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
                <label className="block mb-2" style={{ color: '#333333' }}>
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none transition-colors"
                  style={{ 
                    borderColor: '#E2E2E2',
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
                <label className="block mb-2" style={{ color: '#333333' }}>
                  الرسالة
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none transition-colors resize-none"
                  style={{ 
                    borderColor: '#E2E2E2',
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
                className="w-full py-4 rounded-lg text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#0054A6' }}
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
    </section>
  );
}
