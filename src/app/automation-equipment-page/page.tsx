"use client";

import React from 'react';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

export const AutomationEquipmentPage: React.FC = () => {
  // Sample product data
  const products: Product[] = [
    {
      id: 101,
      name: 'PLC Siemens S7-1200',
      imageUrl: 'https://placehold.co/300x300/orange/white?text=PLC+S7-1200',
      price: 4500000,
      description: 'Bộ điều khiển lập trình công nghiệp Siemens S7-1200 cho các ứng dụng tự động hóa quy mô vừa.'
    },
    {
      id: 102,
      name: 'Biến tần ABB ACS580',
      imageUrl: 'https://placehold.co/300x300/orange/white?text=ABB+ACS580',
      price: 7800000,
      description: 'Biến tần ABB ACS580 3 pha 380-480V, công suất 5.5kW, điều khiển động cơ hiệu quả năng lượng.'
    },
    {
      id: 103,
      name: 'Cảm biến tiệm cận Omron E2E',
      imageUrl: 'https://placehold.co/300x300/orange/white?text=Omron+E2E',
      price: 850000,
      description: 'Cảm biến tiệm cận cảm ứng Omron E2E, khoảng cách phát hiện 8mm, ngõ ra NPN.'
    },
    {
      id: 104,
      name: 'Màn hình HMI Weintek MT8071iP',
      imageUrl: 'https://placehold.co/300x300/orange/white?text=HMI+MT8071iP',
      price: 6200000,
      description: 'Màn hình cảm ứng HMI Weintek MT8071iP 7 inch, hỗ trợ kết nối Ethernet và RS-485.'
    },
  ];
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Thiết bị tự động hóa</h1>
        <p className="text-gray-600 max-w-3xl">
          Cung cấp các giải pháp và thiết bị tự động hóa công nghiệp hiện đại, giúp doanh nghiệp tối ưu hóa sản xuất
          và nâng cao năng suất làm việc. Sản phẩm bao gồm PLC, biến tần, cảm biến, HMI và nhiều thiết bị khác.
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {['PLC & PAC', 'Biến tần', 'Cảm biến', 'HMI & SCADA'].map((category) => (
          <div key={category} className="bg-gray-100 p-4 rounded-lg text-center hover:bg-orange-100 transition">
            <h3 className="font-medium">{category}</h3>
          </div>
        ))}
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-orange-600 font-bold">
                  {product.price.toLocaleString('vi-VN')} đ
                </span>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm">
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Featured Info */}
      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Tại sao chọn thiết bị tự động hóa của chúng tôi?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-orange-100 p-3 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Bảo hành chính hãng</h3>
            <p className="text-sm text-gray-600">Đảm bảo chất lượng với chính sách bảo hành đầy đủ từ nhà sản xuất</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-orange-100 p-3 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Hiệu suất cao</h3>
            <p className="text-sm text-gray-600">Tăng năng suất và giảm chi phí vận hành cho doanh nghiệp</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-orange-100 p-3 rounded-full mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Đội ngũ hỗ trợ chuyên nghiệp</h3>
            <p className="text-sm text-gray-600">Tư vấn, lắp đặt và bảo trì bởi kỹ sư nhiều năm kinh nghiệm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationEquipmentPage;