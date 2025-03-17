"use client";

import React from 'react';

interface Brand {
  id: number;
  name: string;
  logoUrl: string;
  link: string;
}

export const BrandLogos: React.FC = () => {
  // Example brands data
  const brands: Brand[] = [
    { id: 1, name: 'Honda', logoUrl: 'https://placehold.co/100x40/red/white?text=HONDA', link: '/brands/honda' },
    { id: 2, name: 'Hyundai', logoUrl: 'https://placehold.co/100x40/blue/white?text=HYUNDAI', link: '/brands/hyundai' },
    { id: 3, name: 'Kasei', logoUrl: 'https://placehold.co/100x40/green/white?text=KASEI', link: '/brands/kasei' },
    { id: 4, name: 'Mitsu Power', logoUrl: 'https://placehold.co/100x40/orange/white?text=MITSU+POWER', link: '/brands/mitsu-power' },
    { id: 5, name: 'Takahiro', logoUrl: 'https://placehold.co/100x40/purple/white?text=TAKAHIRO', link: '/brands/takahiro' },
    { id: 6, name: 'Ryobi', logoUrl: 'https://placehold.co/100x40/teal/white?text=RYOBI', link: '/brands/ryobi' },
    { id: 7, name: 'Novara', logoUrl: 'https://placehold.co/100x40/gray/white?text=NOVARA', link: '/brands/novara' },
  ];

  return (
    <div className="bg-white py-4 border-y border-gray-200 mb-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {brands.map((brand) => (
            <a
              key={brand.id}
              href={brand.link}
              className="inline-block"
            >
              <img
                src={brand.logoUrl}
                alt={brand.name}
                className="h-8 md:h-10"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};