"use client";

import React, { useState } from 'react';

import { ProductCard } from '../ui/ProductCard';

export const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'discounted' | 'bestsellers'>('discounted');

  // Example discounted products data
  const discountedProducts = [
    {
      id: 1,
      name: 'Máy bắt vít HYUNDAI HBV2030',
      slug: 'may-bat-vit-hyundai-hbv2030',
      image: 'https://placehold.co/300x300/blue/white?text=Screwdriver',
      price: 456000,
      originalPrice: 494000,
      discountPercentage: 8,
    },
    {
      id: 2,
      name: 'Bình xịt điện TAKAHIRO RT-20N (20L - 8Ah)',
      slug: 'binh-xit-dien-takahiro-rt-20n',
      image: 'https://placehold.co/300x300/green/white?text=Sprayer+1',
      price: 754000,
      originalPrice: null,
      discountPercentage: null,
    },
    {
      id: 3,
      name: 'Bình xịt điện MITSU POWER 20MS-8Li (20L, Pin 8Ah)',
      slug: 'binh-xit-dien-mitsu-power-20ms-8li',
      image: 'https://placehold.co/300x300/teal/white?text=Sprayer+2',
      price: 1040000,
      originalPrice: null,
      discountPercentage: null,
    },
    {
      id: 4,
      name: 'Máy khoan búa 13mm HYUNDAI HKV113',
      slug: 'may-khoan-bua-13mm-hyundai-hkv113',
      image: 'https://placehold.co/300x300/red/white?text=Drill',
      price: 980000,
      originalPrice: 1060000,
      discountPercentage: 8,
    },
  ];

  // Example bestseller products data
  const bestSellerProducts = [
    {
      id: 5,
      name: 'Máy cắt cỏ HONDA GX35',
      slug: 'may-cat-co-honda-gx35',
      image: 'https://placehold.co/300x300/orange/white?text=Lawn+Mower',
      price: 2450000,
      originalPrice: null,
      discountPercentage: null,
    },
    {
      id: 6,
      name: 'Máy bơm nước HYUNDAI HD15L',
      slug: 'may-bom-nuoc-hyundai-hd15l',
      image: 'https://placehold.co/300x300/blue/white?text=Water+Pump',
      price: 1750000,
      originalPrice: 1900000,
      discountPercentage: 8,
    },
    {
      id: 3,
      name: 'Bình xịt điện MITSU POWER 20MS-8Li (20L, Pin 8Ah)',
      slug: 'binh-xit-dien-mitsu-power-20ms-8li',
      image: 'https://placehold.co/300x300/teal/white?text=Sprayer+2',
      price: 1040000,
      originalPrice: null,
      discountPercentage: null,
    },
    {
      id: 7,
      name: 'Máy phát điện KASEI KS3000',
      slug: 'may-phat-dien-kasei-ks3000',
      image: 'https://placehold.co/300x300/purple/white?text=Generator',
      price: 4890000,
      originalPrice: 5200000,
      discountPercentage: 6,
    },
  ];

  return (
    <div className="container mx-auto my-8">
      <div className="border-b-2 border-gray-200 mb-6">
        <div className="flex">
          <button
            className={`py-3 px-6 font-bold text-sm uppercase ${
              activeTab === 'discounted'
                ? 'border-2 border-b-0 border-gray-200 rounded-t text-blue-700'
                : 'text-gray-600 hover:text-blue-700'
            }`}
            onClick={() => setActiveTab('discounted')}
          >
            SẢN PHẨM CÓ KHUYẾN MÃI
          </button>
          
          <button
            className={`py-3 px-6 font-bold text-sm uppercase ${
              activeTab === 'bestsellers'
                ? 'border-2 border-b-0 border-gray-200 rounded-t text-blue-700'
                : 'text-gray-600 hover:text-blue-700'
            }`}
            onClick={() => setActiveTab('bestsellers')}
          >
            SẢN PHẨM BÁN CHẠY NHẤT
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {(activeTab === 'discounted' ? discountedProducts : bestSellerProducts).map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            slug={product.slug}
            image={product.image}
            price={product.price}
            originalPrice={product.originalPrice || undefined}
            discountPercentage={product.discountPercentage || undefined}
          />
        ))}
      </div>
      
      <div className="flex justify-between mt-8">
        <button className="border border-gray-300 rounded px-4 py-2 text-gray-600 hover:bg-gray-100 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Previous
        </button>
        
        <button className="border border-gray-300 rounded px-4 py-2 text-gray-600 hover:bg-gray-100 flex items-center">
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};