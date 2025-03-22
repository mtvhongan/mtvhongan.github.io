"use client";

import React from 'react';

import Link from 'next/link';

export interface ProductCardProps {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  slug,
  image,
  discountPercentage,
}) => {
  return (
    <div className="border border-gray-200 rounded overflow-hidden bg-white relative">
      {discountPercentage && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center z-10">
          -{discountPercentage}%
        </div>
      )}
      
      <Link href={`/san-pham/${slug}`} className="block">
        <div className="p-4 flex justify-center h-48">
          <img
            src={image}
            alt={name}
            className="max-h-full object-contain transition-transform hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/san-pham/${slug}`} className="block h-12">
          <h3 className="text-blue-700 font-medium hover:text-blue-900 line-clamp-2">
            {name}
          </h3>
        </Link>
        
        <div className="mt-2">
          {/* <div className="text-blue-700 font-bold">{price.toLocaleString()}đ</div> */}
          <div className="text-blue-700 font-bold">Liên hệ</div>
          
          {/* {originalPrice && (
            <div className="text-gray-500 line-through text-sm">
              {originalPrice.toLocaleString()}đ
            </div>
          )} */}
        </div>
        
        <div className="mt-3">
          <button
            className="w-full bg-blue-800 text-white py-2 px-4 rounded flex items-center justify-center hover:bg-blue-900"
            onClick={() => {
              console.log('Add to cart:', id);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
};
