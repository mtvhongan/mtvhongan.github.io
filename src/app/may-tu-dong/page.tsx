"use client";

import React from 'react';

import AutomationEquipmentLayout from './AutomationEquipmentLayout';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

// interface Product {
//   id: number;
//   name: string;
//   imageUrl: string;
//   price: number;
//   description: string;
//   inStock?: boolean;
// }

export default function AutomationEquipmentPage() {
  // Sample product data
  // const products: Product[] = [
  //   {
  //     id: 101,
  //     name: 'PLC Siemens S7-1200',
  //     imageUrl: 'https://placehold.co/300x300/orange/white?text=PLC+S7-1200',
  //     price: 4500000,
  //     description: 'Bộ điều khiển lập trình công nghiệp Siemens S7-1200 cho các ứng dụng tự động hóa quy mô vừa.',
  //     inStock: true
  //   },
  //   {
  //     id: 102,
  //     name: 'Biến tần ABB ACS580',
  //     imageUrl: 'https://placehold.co/300x300/orange/white?text=ABB+ACS580',
  //     price: 7800000,
  //     description: 'Biến tần ABB ACS580 3 pha 380-480V, công suất 5.5kW, điều khiển động cơ hiệu quả năng lượng.',
  //     inStock: true
  //   },
  //   {
  //     id: 103,
  //     name: 'Cảm biến tiệm cận Omron E2E',
  //     imageUrl: 'https://placehold.co/300x300/orange/white?text=Omron+E2E',
  //     price: 850000,
  //     description: 'Cảm biến tiệm cận cảm ứng Omron E2E, khoảng cách phát hiện 8mm, ngõ ra NPN.',
  //     inStock: false
  //   },
  //   {
  //     id: 104,
  //     name: 'Màn hình HMI Weintek MT8071iP',
  //     imageUrl: 'https://placehold.co/300x300/orange/white?text=HMI+MT8071iP',
  //     price: 6200000,
  //     description: 'Màn hình cảm ứng HMI Weintek MT8071iP 7 inch, hỗ trợ kết nối Ethernet và RS-485.',
  //     inStock: true
  //   },
  // ];

  return (
    <>
      <Header />
      <AutomationEquipmentLayout>
        <div></div>
        {/* Products Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-48 object-cover"
                />
                <span className={`absolute top-2 right-2 text-xs px-2 py-1 rounded ${
                  item.inStock 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {item.inStock ? 'Còn hàng' : 'Hết hàng'}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 text-gray-800">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">
                    {item.price.toLocaleString('vi-VN')} đ
                  </span>
                  <button className={`px-3 py-2 rounded text-sm font-medium ${
                    item.inStock
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`} disabled={!item.inStock}>
                    {item.inStock ? 'Đặt hàng' : 'Tạm hết hàng'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </AutomationEquipmentLayout>
      <Footer />
    </>
  );
};