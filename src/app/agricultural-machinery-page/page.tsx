"use client";

import React from 'react';

import { AgriculturalBenefits } from './AgriculturalBenefits';
import { AgriculturalMachineryLayout } from './AgriculturalMachineryLayout';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

interface Machine {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  inStock: boolean;
}

export const AgriculturalMachineryPage: React.FC = () => {
  // Sample machine data
  const machines: Machine[] = [
    {
      id: 1,
      name: 'Máy cày KUBOTA L5018',
      imageUrl: 'https://placehold.co/300x300/green/white?text=KUBOTA+L5018',
      price: 320000000,
      description: 'Máy cày đa năng KUBOTA L5018 với công suất 50HP, hệ thống thủy lực mạnh mẽ và tiết kiệm nhiên liệu.',
      inStock: true,
    },
    // ... other machines data
  ];
  
  return (
    <>
      <Header />
      <AgriculturalMachineryLayout>
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {machines.map((machine) => (
            <div key={machine.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative">
                <img 
                  src={machine.imageUrl} 
                  alt={machine.name} 
                  className="w-full h-48 object-cover"
                />
                <span className={`absolute top-2 right-2 text-xs px-2 py-1 rounded ${
                  machine.inStock 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {machine.inStock ? 'Còn hàng' : 'Hết hàng'}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 text-gray-800">{machine.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{machine.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">
                    {machine.price.toLocaleString('vi-VN')} đ
                  </span>
                  <button className={`px-3 py-2 rounded text-sm font-medium ${
                    machine.inStock
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`} disabled={!machine.inStock}>
                    {machine.inStock ? 'Đặt hàng' : 'Tạm hết hàng'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <AgriculturalBenefits />
      </AgriculturalMachineryLayout>
      <Footer />
    </>
  );
};

export default AgriculturalMachineryPage;