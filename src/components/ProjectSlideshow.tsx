'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ProjectSlideshowProps {
  images: string[];
  title: string;
}

const ProjectSlideshow = ({ images, title }: ProjectSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slideshow every 5 seconds if multiple images
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className='aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center'>
        <div className='text-center text-gray-400'>
          <p className='text-lg font-medium'>No images available</p>
        </div>
      </div>
    );
  }

  return (
    <div className='relative group'>
      {/* Main image container */}
      <div className='aspect-[4/3] relative overflow-hidden rounded-2xl bg-gray-900'>
        <Image
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-105'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          onError={e => {
            // Fallback if image doesn't load
            const target = e.target as HTMLImageElement;
            target.src =
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlIG5vdCBmb3VuZDwvdGV4dD4KPC9zdmc+';
          }}
        />

        {/* Navigation arrows - only show if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10'
              aria-label='Previous image'
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10'
              aria-label='Next image'
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className='absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm z-10'>
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {/* Dots indicator - floating over the image */}
        {images.length > 1 && (
          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10'>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary-400 w-8' : 'bg-white/60 hover:bg-white/80 w-2'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSlideshow;
