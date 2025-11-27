import { useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { X } from 'lucide-react';

interface GalleryProps {
  images: Array<{ url: string; title: string }>;
}

export function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  return (
    <>
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4" style={{ color: '#0054A6' }}>أعمالنا</h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#C9A04E' }}></div>
            <p className="mt-6 text-xl" style={{ color: '#333333' }}>
              اطلع على مجموعة من أفضل مشاريعنا المنفذة
            </p>
          </div>

          <Masonry columnsCount={3} gutter="16px" className="masonry-grid">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <h4 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                    {image.title}
                  </h4>
                </div>
              </div>
            ))}
          </Masonry>
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
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <h3 className="text-white text-center mt-4">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </>
  );
}
