"use client";

import React from 'react';
import AgriculturalMachineryLayout from './AgriculturalMachineryLayout';
import { AgriculturalBenefits } from './AgriculturalBenefits';

interface AgriculturalMachine {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  inStock: boolean;
}

const AgriculturalMachineryPage: React.FC = () => {
  // Sample product data
  const machines: AgriculturalMachine[] = [
    {
      id: 301,
      name: 'Máy cày Kubota M5111',
      imageUrl: 'https://placehold.co/300x300/green/white?text=Kubota+M5111',
      price: 750000000,
      description: 'Máy cày Kubota M5111 công suất 105HP, động cơ 4 xi lanh tiết kiệm nhiên liệu, hệ thống thủy lực mạnh mẽ.',
      inStock: true
    },
    {
      id: 302,
      name: 'Máy gặt đập liên hợp Yanmar YH880',
      imageUrl: 'https://placehold.co/300x300/green/white?text=Yanmar+YH880',
      price: 890000000,
      description: 'Máy gặt đập liên hợp Yanmar YH880, chiều rộng cắt 2.2m, năng suất gặt 4-5 hecta/ngày.',
      inStock: true
    },
    {
      id: 303,
      name: 'Máy cấy lúa Yanmar AP4',
      imageUrl: 'https://placehold.co/300x300/green/white?text=Yanmar+AP4',
      price: 380000000,
      description: 'Máy cấy lúa 4 hàng Yanmar AP4, công suất 5HP, hiệu suất cấy 3 hecta/ngày.',
      inStock: false
    },
    {
      id: 304,
      name: 'Máy phun thuốc bảo vệ thực vật',
      imageUrl: 'https://placehold.co/300x300/green/white?text=Spray+Machine',
      price: 48000000,
      description: 'Máy phun thuốc bảo vệ thực vật dung tích 1000L, độ phun rộng 12m, thích hợp cho ruộng lúa và cây công nghiệp.',
      inStock: true
    },
  ];
  
  return (
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
  );
};

export default AgriculturalMachineryPage;