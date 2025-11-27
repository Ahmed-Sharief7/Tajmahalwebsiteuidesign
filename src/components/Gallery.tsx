import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryProps {
  images: Array<{ url: string; title: string }>;
}

export function Gallery({ images }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; isPlaceholder: boolean } | null>(null);

  const categories = ['الكل', 'المطابخ', 'السلالم', 'الواجهات', 'النوافذ والأبواب', 'الأرضيات'];

  // Create placeholder items for each category
  const galleryItems = [
    { category: 'المطابخ', title: 'مطبخ رخام فاخر', isPlaceholder: true },
    { category: 'المطابخ', title: 'مطبخ جرانيت عصري', isPlaceholder: true },
    { category: 'المطابخ', title: 'مطبخ رخام كلاسيكي', isPlaceholder: true },
    { category: 'السلالم', title: 'سلم رخام أنيق', isPlaceholder: true },
    { category: 'السلالم', title: 'سلم جرانيت متين', isPlaceholder: true },
    { category: 'السلالم', title: 'سلم رخام فاخر', isPlaceholder: true },
    { category: 'الواجهات', title: 'واجهة رخام فخمة', isPlaceholder: true },
    { category: 'الواجهات', title: 'واجهة جرانيت حديثة', isPlaceholder: true },
    { category: 'الواجهات', title: 'واجهة رخام كلاسيكية', isPlaceholder: true },
    { category: 'النوافذ والأبواب', title: 'نافذة رخام', isPlaceholder: true },
    { category: 'النوافذ والأبواب', title: 'باب رخام فاخر', isPlaceholder: true },
    { category: 'النوافذ والأبواب', title: 'إطار جرانيت', isPlaceholder: true },
    { category: 'الأرضيات', title: 'أرضية رخام راقية', isPlaceholder: true },
    { category: 'الأرضيات', title: 'أرضية جرانيت قوية', isPlaceholder: true },
    { category: 'الأرضيات', title: 'أرضية رخام فاخرة', isPlaceholder: true },
  ];

  const filteredItems = selectedCategory === 'الكل' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <section 
        id="projects" 
        style={{
          padding: '120px 0',
          backgroundColor: 'white'
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
              أعمالنا
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
                marginBottom: '56px',
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              اطلع على مجموعة من أفضل مشاريعنا المنفذة
            </p>

            {/* Filter Tabs */}
            <div 
              className="flex flex-wrap justify-center gap-4"
              style={{ marginTop: '56px', marginBottom: '0' }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300"
                  style={{
                    padding: '14px 32px',
                    borderRadius: '12px',
                    backgroundColor: selectedCategory === category ? '#0054A6' : 'transparent',
                    color: selectedCategory === category ? '#ffffff' : '#333333',
                    border: selectedCategory === category ? 'none' : '2px solid #E2E2E2',
                    fontSize: '16px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: selectedCategory === category ? '0 4px 12px rgba(0, 84, 166, 0.3)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.borderColor = '#C9A04E';
                      e.currentTarget.style.color = '#0054A6';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.borderColor = '#E2E2E2';
                      e.currentTarget.style.color = '#333333';
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Even Grid Gallery */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ gap: '40px', marginTop: '60px' }}
          >
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden cursor-pointer group"
                style={{
                  borderRadius: '20px',
                  backgroundColor: '#E2E2E2',
                  height: '320px',
                  border: '2px dashed #C9A04E'
                }}
                onClick={() => setSelectedImage({ url: '', title: item.title, isPlaceholder: true })}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <p style={{ color: '#666', textAlign: 'center', padding: '20px', fontSize: '14px' }}>
                    Upload Real Marble Project Photo Here
                  </p>
                </div>
                
                {/* Hover Overlay */}
                <div 
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'linear-gradient(to top, rgba(0, 84, 166, 0.9) 0%, rgba(0, 84, 166, 0.7) 100%)',
                    opacity: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                >
                  <h4 
                    className="text-white px-4 text-center"
                    style={{ fontSize: '18px', fontWeight: 600 }}
                  >
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 left-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl w-full">
            <div 
              className="flex items-center justify-center"
              style={{
                borderRadius: '20px',
                backgroundColor: '#E2E2E2',
                minHeight: '500px',
                border: '2px dashed #C9A04E'
              }}
            >
              <p style={{ color: '#666', textAlign: 'center', padding: '20px' }}>
                Upload Real Marble Project Photo Here
              </p>
            </div>
            <h3 className="text-white text-center mt-4">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </>
  );
}
