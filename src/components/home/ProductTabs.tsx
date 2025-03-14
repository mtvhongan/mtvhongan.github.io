// src/components/home/ProductTabs.tsx
"use client";
import React from 'react';
import { TabPanel } from '../ui/TabPanel';
import { ProductCard } from '../ui/ProductCard';

export const ProductTabs: React.FC = () => {
  // Example discounted products data
  const discountedProducts = [
    {
      id: 1,
      name: 'Máy bắt vít HYUNDAI HBV2030',
      slug: 'may-bat-vit-hyundai-hbv2030',
      image: '/images/products/screwdriver.jpg',
      price: 456000,
      originalPrice: 494000,
      discountPercentage: 8,
    },
    {
      id: 2,
      name: 'Bình xịt điện TAKAHIRO RT-20N (20L - 8Ah)',
      slug: 'binh-xit-dien-takahiro-rt-20n',
      image: '/images/products/sprayer1.jpg',
      price: 754000,
      originalPrice: null,
      discountPercentage: null,
    },
    {
      id: 3,
      name: 'Bình xịt điện MITSU POWER 20MS-8Li (20L, Pin 8Ah)',
      slug: 'binh-xit-dien-mitsu-power-20ms-8li',
      image: '/images/products/sprayer2.jpg',
      price: 1040000,
      originalPrice: null,
      discountPercentage: null,
    },
    {
      id: 4,
      name: 'Máy khoan búa 13mm HYUNDAI HKV113',
      slug: 'may-khoan-bua-13mm-hyundai-hkv113',
      image: '/images/products/drill.jpg',
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
      image: '/images/products/lawn-mower.jpg',
      price: 2450000,
      originalPrice: null,
      discountPercentage: null,
    },
    {
      id: 6,
      name: 'Máy bơm nước HYUNDAI HD15L',
      slug: 'may-bom-nuoc-hyundai-hd15l',
      image: '/images/products/water-pump.jpg',
      price: 1750000,
      originalPrice: 1900000,
      discountPercentage: 8,
    },
    {
      id: 3,
      name: 'Bình xịt điện MITSU POWER 20MS-8Li (20L, Pin 8Ah)',
      slug: 'binh-xit-dien-mitsu-power-20ms-8li',
      image: '/images/products/sprayer2.jpg',
      price: 1040000,
      originalPrice: null,
      discountPercentage: null,
    },
    {
      id: 7,
      name: 'Máy phát điện KASEI KS3000',
      slug: 'may-phat-dien-kasei-ks3000',
      image: '/images/products/generator.jpg',
      price: 4890000,
      originalPrice: 5200000,
      discountPercentage: 6,
    },
  ];

  const tabs = [
    {
      id: 'discounted',
      label: 'SẢN PHẨM CÓ KHUYẾN MÃI',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {discountedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ),
    },
    {
      id: 'bestsellers',
      label: 'SẢN PHẨM BÁN CHẠY NHẤT',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellerProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto my-8">
      <TabPanel tabs={tabs} defaultTab="discounted" />
      
      <div className="flex justify-between mt-6">
        <button className="text-gray-500 hover:text-blue-700 flex items-center">
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
        
        <button className="text-gray-500 hover:text-blue-700 flex items-center">
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