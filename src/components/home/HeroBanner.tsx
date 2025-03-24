"use client";

import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

interface Slide {
  id: number;
  imageUrl: string;
  alt: string;
  link: string;
}

export const HeroBanner: React.FC = () => {
  const router = useRouter();
  
  // Example slides data
  const slides: Slide[] = [
    {
      id: 1,
      imageUrl: 'https://placehold.co/1200x400/orange/white?text=Thiết+bị+tự+động+hóa',
      alt: 'Thiết bị tự động hóa',
      link: '/may-moc-thiet-bi',
    },
    {
      id: 2,
      imageUrl: 'https://placehold.co/1200x400/blue/white?text=Máy+xây+dựng',
      alt: 'Máy xây dựng',
      link: '/may-xay-dung',
    },
    {
      id: 3,
      imageUrl: 'https://placehold.co/1200x400/green/white?text=Máy+nông+nghiệp',
      alt: 'Máy nông nghiệp',
      link: '/may-nong-nghiep',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleSlideClick = (link: string) => {
    router.push(link);
  };

  return (
    <div className="relative h-64 md:h-96 overflow-hidden">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative">
            <div 
              role="button"
              tabIndex={0}
              onClick={() => handleSlideClick(slide.link)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleSlideClick(slide.link);
              }}
              className="cursor-pointer w-full h-full"
            >
              <img 
                src={slide.imageUrl}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 w-10 h-10 rounded-full flex items-center justify-center text-gray-700"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 w-10 h-10 rounded-full flex items-center justify-center text-gray-700"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-blue-700' : 'bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};