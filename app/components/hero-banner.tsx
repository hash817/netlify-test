'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import HomeSearchBar from '@/app/components/home-search-bar';
import Image from 'next/image';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Adventure Cove Waterpark Fun",
      subtitle: "Dive into a world of aquatic thrills and marine encounters at Sentosa.",
      buttonText: "Discover the Adventure",
      buttonLink: "/tours/adventure-cove-water-park",
      background: "/images/adventure-cove.jpg" // Add relevant image path
    },
    {
      title: "Singapore City Highlights & Flyer",
      subtitle: "Experience iconic cityscapes and panoramic views from the Singapore Flyer.",
      buttonText: "See City & Soar High",
      buttonLink: "/tours/city-experience-singapore-flyer",
      background: "/images/mbs.jpg" // Add relevant image path
    },
    {
      title: "City Exploration with Gardens by the Bay",
      subtitle: "Discover Singapore's urban charm and the breathtaking beauty of Gardens by the Bay.",
      buttonText: "Explore City & Gardens",
      buttonLink: "/tours/city-experience-garden-by-the-bay",
      background: "/images/garden.jpg" // Add relevant image path
    },
    {
      title: "Discover Asia's Hidden Gems",
      subtitle: "Tailored travel experiences that go beyond the ordinary",
      buttonText: "Explore Tours",
      buttonLink: "#featured-tours",
      background: "/images/asia.jpg"
    },
    {
      title: "Resorts World Cruises",
      subtitle: "Sail to exotic destinations with world-class amenities",
      buttonText: "View Cruises",
      buttonLink: "#",
      background: "/images/cruise.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-auto sm:h-[80vh]">
      <div className="relative w-full" style={{ height: 'min(70vh, 500px)' }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide absolute top-0 left-0 w-full h-full ${index === currentSlide ? 'active' : ''}`}
          >
            {/* Image layer */}
            <Image
              src={slide.background}
              alt="background image"
              fill
              className="object-cover"
              priority 
            />
            <div className="absolute inset-0 bg-black/40" />

            <div className="h-full flex items-center justify-center relative z-10">
              <div className="text-white max-w-[300px] sm:max-w-[600px] text-shadow-lg p-5 text-center">
                <h1 className="hero-title text-shadow-lg text-2xl sm:text-4xl font-bold">{slide.title}</h1>
                <p className="hero-subtitle text-shadow-lg text-sm sm:text-lg mt-2">{slide.subtitle}</p>
              </div>
            </div>
            <button
              className="hero-prev absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white z-10"
              aria-label="Previous slide"
              onClick={goToPrev}
            >
              <i className="fas fa-chevron-left text-2xl"></i>
            </button>
            <button
              className="hero-next absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white z-10"
              aria-label="Next slide"
              onClick={goToNext}
            >
              <i className="fas fa-chevron-right text-2xl"></i>
            </button>
          </div>
        ))}
      </div>

      <div className="w-[80%] mx-auto -mt-6 sm:-mt-8 relative z-20 bg-white shadow-md rounded-xl p-4">
        <HomeSearchBar className='w-full' />
      </div>
    </section>
  );
}