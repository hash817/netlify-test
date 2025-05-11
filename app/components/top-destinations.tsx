"use client"

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function TopDestinations() {
  const firstRowRef = useRef(null);

  // Two rows of destinations
  const firstRowDestinations = [
    {
      name: "Taiwan",
      image: "/images/taiwan.jpg",
      tag: "Scenic Diversity"
    },
    {
      name: "Dubai",
      image: "/images/dubai.avif",
      tag: "Modern Marvel"
    },
    {
      name: "Malaysia",
      image: "/images/malaysia.jpg",
      tag: "Tropical Fusion"
    },
    {
      name: "Vietnam",
      image: "/images/hanoi.webp",
      tag: "Cultural Heritage"
    },
    {
      name: "Perth",
      image: "/images/perth.jpg",
      tag: "Coastal Beauty"
    },
    {
      name: "Seoul",
      image: "/images/korea.jpg",
      tag: "Urban Innovation"
    },
    {
      name: "Sydney",
      image: "/images/sydney.jpg",
      tag: "Harbor City"
    },
    {
      name: "Thailand",
      image: "/images/bangkok.avif",
      tag: "Vibrant Metropolis"
    },
    {
      name: "Melbourne",
      image: "/images/melbourne.jpg",
      tag: "Cultural Capital"
    },
    {
      name: "Tokyo",
      image: "/images/tokyo.jpg",
      tag: "Urban Adventure"
    }
  ];

  // Precise card-by-card scrolling
  const scroll = (ref, direction) => {
    if (ref.current) {
      // Card width (264px) = 240px width + 24px right margin
      const cardWidth = 304;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="space-y-12">
        {/* First row with navigation controls */}
        <div className="relative">
          <div
            ref={firstRowRef}
            className="flex space-x-6! overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {firstRowDestinations.map((destination, index) => (
              <DestinationCard key={index} destination={destination} />
            ))}
          </div>

          {/* Navigation arrows */}
          <span
            onClick={() => scroll(firstRowRef, 'left')}
            className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </span>

          <span
            onClick={() => scroll(firstRowRef, 'right')}
            className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </span>
        </div>
      </div>
    </div>
  );
}

function DestinationCard({ destination }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/destinations/${destination.name}`}>
      <div
        className="relative flex-shrink-0 w-70 h-72 rounded-lg overflow-hidden group shadow-custom"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image with smooth zoom effect */}
        <Image
          src={destination.image}
          width={400}
          height={300}
          alt={destination.name}
          className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${isHovered ? 'scale-110 filter brightness-90' : 'scale-100'
            }`}
        />

        {/* Overlay with smooth transition */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-70'
            }`}
        />

        {/* Destination Name */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className={`text-white text-3xl font-bold text-center transition-all duration-500 ease-out ${isHovered ? 'transform -translate-y-4' : ''
            }`}>
            {destination.name}
          </h3>
        </div>

        {/* Tag with reveal animation */}
        <div className={`absolute bottom-8 left-0 right-0 flex justify-center transition-all duration-500 ease-out ${isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
          <span className="bg-white/90 text-gray-800 px-4 py-1 rounded-full text-sm font-medium">
            {destination.tag}
          </span>
        </div>

        {/* Animated border */}
        <div className={`absolute inset-0 border-2 rounded-lg transition-all duration-500 ${isHovered ? 'border-white/70 scale-95' : 'border-transparent scale-100'
          }`} />
      </div>
    </Link>
  );
}