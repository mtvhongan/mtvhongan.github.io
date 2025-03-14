"use client";
import React from 'react';
import Image from 'next/image';

interface Brand {
  id: number;
  name: string;
  logoUrl: string;
  link: string;
}

export const BrandLogos: React.FC = () => {
    // Example brands data
    const brands: Brand[] = [
      { id: 1, name: 'Honda', logoUrl: 'https://placehold.co/200x80/red/white?text=HONDA', link: '/brands/honda' },
      { id: 2, name: 'Hyundai', logoUrl: 'https://placehold.co/200x80/blue/white?text=HYUNDAI', link: '/brands/hyundai' },
      { id: 3, name: 'Kasei', logoUrl: 'https://placehold.co/200x80/green/white?text=KASEI', link: '/brands/kasei' },
      { id: 4, name: 'Mitsu Power', logoUrl: 'https://placehold.co/200x80/orange/white?text=MITSU+POWER', link: '/brands/mitsu-power' },
      { id: 5, name: 'Takahiro', logoUrl: 'https://placehold.co/200x80/purple/white?text=TAKAHIRO', link: '/brands/takahiro' },
      { id: 6, name: 'Ryobi', logoUrl: 'https://placehold.co/200x80/teal/white?text=RYOBI', link: '/brands/ryobi' },
      { id: 7, name: 'Novara', logoUrl: 'https://placehold.co/200x80/gray/white?text=NOVARA', link: '/brands/novara' },
    ];

  return (
    <div className="bg-white py-6 border-t border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <a
              key={brand.id}
              href={brand.link}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={brand.logoUrl}
                alt={brand.name}
                width={100}
                height={40}
                objectFit="contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};