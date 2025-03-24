"use client";

import React from 'react';

import ConstructionMachineryLayout from './ConstructionMachineryLayout';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';


interface ConstructionMachine {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  rentalAvailable: boolean;
}

export const ConstructionMachineryPage: React.FC = () => {
  // Sample product data
  const machines: ConstructionMachine[] = [
    {
      id: 201,
      name: 'Máy đào Komatsu PC200-8',
      imageUrl: 'https://placehold.co/300x300/blue/white?text=Komatsu+PC200',
      price: 1850000000,
      description: 'Máy đào bánh xích Komatsu PC200-8, trọng lượng 20 tấn, công suất động cơ 148HP.',
      rentalAvailable: true,
    },
    {
      id: 202,
      name: 'Máy ủi Caterpillar D6T',
      imageUrl: 'https://placehold.co/300x300/blue/white?text=CAT+D6T',
      price: 3200000000,
      description: 'Máy ủi Caterpillar D6T công suất 205HP, trọng lượng 20.6 tấn, trang bị hệ thống thủy lực và điều khiển tiên tiến.',
      rentalAvailable: true,
    },
    {
      id: 203,
      name: 'Máy lu HAMM HD90',
      imageUrl: 'https://placehold.co/300x300/blue/white?text=HAMM+HD90',
      price: 950000000,
      description: 'Máy lu rung HAMM HD90 trọng lượng 9 tấn, đường kính trục 1500mm, thích hợp cho các công trình đường.',
      rentalAvailable: true,
    },
    {
      id: 204,
      name: 'Máy trộn bê tông JS1000',
      imageUrl: 'https://placehold.co/300x300/blue/white?text=JS1000',
      price: 420000000,
      description: 'Máy trộn bê tông cưỡng bức JS1000, công suất 60m³/h, phù hợp cho các công trình xây dựng vừa và lớn.',
      rentalAvailable: false,
    },
  ];
  
  return (
    <>
      <Header />
      <ConstructionMachineryLayout>
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {machines.map((machine) => (
            <div key={machine.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="relative">
                <img 
                  src={machine.imageUrl} 
                  alt={machine.name} 
                  className="w-full h-48 object-cover"
                />
                {machine.rentalAvailable && (
                  <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    Cho thuê
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{machine.name}</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{machine.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-blue-600 font-bold">
                    {machine.price.toLocaleString('vi-VN')} đ
                  </span>
                  <div className="flex space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                      Chi tiết
                    </button>
                    {machine.rentalAvailable && (
                      <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-3 py-1 rounded text-sm">
                        Thuê
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ConstructionMachineryLayout>
      <Footer />
    </>
  );
};

export default ConstructionMachineryPage;