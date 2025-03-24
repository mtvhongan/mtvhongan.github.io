"use client";

import React, { useState, useEffect } from 'react';

// Import the three page components
import AutomationEquipmentPage from '@/pages/AutomationEquipmentPage';
import ConstructionMachineryPage from '@/pages/ConstructionMachineryPage';
import AgriculturalMachineryPage from '@/pages/AgriculturalMachineryPage';

interface Slide {
  id: number;
  imageUrl: string;
  alt: string;
  link: string;
  component: React.ReactNode;
}

export const HeroBanner: React.FC = () => {
  // Example slides data with added component property
  const slides: Slide[] = [
    {
      id: 1,
      imageUrl: 'https://placehold.co/1200x400/orange/white?text=Thiết+bị+tự+động+hóa',
      alt: 'Thiết bị tự động hóa',
      link: '/may-moc-thiet-bi',
      component: <AutomationEquipmentPage />
    },
    {
      id: 2,
      imageUrl: 'https://placehold.co/1200x400/blue/white?text=Máy+xây+dựng',
      alt: 'Máy xây dựng',
      link: '/promotion/construction',
      component: <ConstructionMachineryPage />
    },
    {
      id: 3,
      imageUrl: 'https://placehold.co/1200x400/green/white?text=Máy+nông+nghiệp',
      alt: 'Máy nông nghiệp',
      link: '/may-nong-nghiep',
      component: <AgriculturalMachineryPage />
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPage, setSelectedPage] = useState<number | null>(null);

  // Auto advance slides (only when no page is selected)
  useEffect(() => {
    if (selectedPage !== null) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length, selectedPage]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleSlideClick = (index: number) => {
    setSelectedPage(index);
  };

  const handleBackToSlides = () => {
    setSelectedPage(null);
  };

  // If a page is selected, show that page
  if (selectedPage !== null) {
    return (
      <div>
        <div className="p-4 bg-gray-100 mb-4">
          <button 
            onClick={handleBackToSlides}
            className="flex items-center text-gray-700 hover:text-blue-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Quay lại trang chủ
          </button>
        </div>
        {slides[selectedPage].component}
      </div>
    );
  }

  // Otherwise show the slider
  return (
    <div className="relative h-64 md:h-96 overflow-hidden">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="min-w-full h-full relative">
            <div 
              onClick={() => handleSlideClick(index)}
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