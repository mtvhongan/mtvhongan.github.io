"use client";

import React, { useState } from 'react';

import SparePartsLayout from './SparePartsLayout';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

interface SparePart {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  category: string;
  compatibleWith?: string[];
  inStock?: boolean;
}

export default function SparePartsPage() {
  // Define categories
  const categories = [
    "Tất cả phụ tùng",
    "Phụ tùng động cơ",
    "Phụ tùng thủy lực", 
    "Phụ tùng khí nén",
    "Phụ tùng truyền động",
    "Phụ tùng điện"
  ];
  
  const [activeCategory, setActiveCategory] = useState("Tất cả phụ tùng");

  // Sample spare parts data
  const allSpareParts: SparePart[] = [
    // {
    //   id: 201,
    //   name: 'Xy lanh thủy lực Parker',
    //   imageUrl: 'https://placehold.co/300x300/blue/white?text=Xy+lanh+Parker',
    //   price: 2800000,
    //   description: 'Xy lanh thủy lực Parker series 2H, đường kính 63mm, hành trình 200mm, áp suất làm việc tối đa 210 bar.',
    //   category: "Phụ tùng thủy lực",
    //   compatibleWith: ['Máy ép thủy lực', 'Máy uốn kim loại'],
    //   inStock: true
    // },
    // {
    //   id: 202,
    //   name: 'Bạc đạn SKF 6205',
    //   imageUrl: 'https://placehold.co/300x300/blue/white?text=SKF+6205',
    //   price: 450000,
    //   description: 'Bạc đạn vòng bi SKF 6205, đường kính trong 25mm, đường kính ngoài 52mm, chiều rộng 15mm.',
    //   category: "Phụ tùng truyền động",
    //   compatibleWith: ['Máy bơm', 'Động cơ điện', 'Máy nén khí'],
    //   inStock: true
    // },
    // {
    //   id: 203,
    //   name: 'Van điện từ SMC VFS2120',
    //   imageUrl: 'https://placehold.co/300x300/blue/white?text=SMC+VFS2120',
    //   price: 1200000,
    //   description: 'Van điện từ SMC VFS2120 5/2, cổng G1/4, cuộn dây 24VDC, áp suất 0.15-0.7MPa.',
    //   category: "Phụ tùng khí nén",
    //   compatibleWith: ['Hệ thống khí nén', 'Máy đóng gói tự động'],
    //   inStock: false
    // },
    // {
    //   id: 204,
    //   name: 'Dây curoa Gates 5V1400',
    //   imageUrl: 'https://placehold.co/300x300/blue/white?text=Gates+5V1400',
    //   price: 350000,
    //   description: 'Dây curoa truyền động Gates 5V1400, chiều dài 1400mm, loại răng V, chịu nhiệt độ cao.',
    //   category: "Phụ tùng truyền động",
    //   compatibleWith: ['Máy cắt', 'Máy gặt đập liên hợp', 'Máy xay xát'],
    //   inStock: true
    // },
    // {
    //   id: 205,
    //   name: 'Pít-tông động cơ Kubota',
    //   imageUrl: 'https://placehold.co/300x300/blue/white?text=Kubota+Piston',
    //   price: 750000,
    //   description: 'Pít-tông động cơ Kubota D1105, đường kính 78mm, chiều cao 74mm, thép hợp kim chất lượng cao.',
    //   category: "Phụ tùng động cơ",
    //   compatibleWith: ['Động cơ Kubota D1105', 'Máy phát điện Kubota'],
    //   inStock: true
    // },
    // {
    //   id: 206,
    //   name: 'Rơ-le bảo vệ quá tải ABB',
    //   imageUrl: 'https://placehold.co/300x300/blue/white?text=ABB+Relay',
    //   price: 680000,
    //   description: 'Rơ-le bảo vệ quá tải ABB TA25DU, dải đo 0.1-0.5A, hỗ trợ báo cáo sự cố qua Modbus.',
    //   category: "Phụ tùng điện",
    //   compatibleWith: ['Tủ điện công nghiệp', 'Hệ thống điều khiển tự động'],
    //   inStock: false
    // },
    // {
    //   id: 207,
    //   name: 'Bộ lọc dầu thủy lực Hydac',
    //   imageUrl: 'https://placehold.co/300x300/blue/white?text=Hydac+Filter',
    //   price: 1500000,
    //   description: 'Bộ lọc dầu thủy lực Hydac 0160D010BN4HC, áp suất tối đa 315 bar, lọc 10 micron.',
    //   category: "Phụ tùng thủy lực",
    //   compatibleWith: ['Máy xúc', 'Máy ủi', 'Hệ thống thủy lực công nghiệp'],
    //   inStock: true
    // },
    // {
    //   id: 208,
    //   name: 'Bộ điều khiển PID Omron',
    //   imageUrl: 'https://placehold.co/300x300/blue/white?text=Omron+PID',
    //   price: 2100000,
    //   description: 'Bộ điều khiển PID Omron E5CC-RX2ASM-800, đầu vào đa dạng, ngõ ra relay, nguồn cấp 100-240VAC.',
    //   category: "Phụ tùng điện",
    //   compatibleWith: ['Lò nhiệt công nghiệp', 'Hệ thống làm mát', 'Máy đùn nhựa'],
    //   inStock: true
    // }
  ];

  // Filter spare parts based on active category
  const filteredSpareParts = activeCategory === "Tất cả phụ tùng" 
    ? allSpareParts 
    : allSpareParts.filter(part => part.category === activeCategory);

  // Handler for category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <>
      <Header />
      <SparePartsLayout>
        {/* Custom Category Navigation */}
        <div className="flex overflow-x-auto pb-4 mb-6 gap-4">
          {categories.map((category) => (
            <button 
              key={category}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-medium ${
                activeCategory === category 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredSpareParts.map((item) => (
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
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
                
                {/* Compatible with section */}
                {item.compatibleWith && item.compatibleWith.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 mb-1">Tương thích với:</p>
                    <div className="flex flex-wrap gap-1">
                      {item.compatibleWith.map((device, index) => (
                        <span key={index} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                          {device}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between items-center mt-2">
                  <span className="text-blue-600 font-bold">
                    {item.price.toLocaleString('vi-VN')} đ
                  </span>
                  <button className={`px-3 py-2 rounded text-sm font-medium ${
                    item.inStock
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`} disabled={!item.inStock}>
                    {item.inStock ? 'Đặt hàng' : 'Tạm hết hàng'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SparePartsLayout>
      <Footer />
    </>
  );
}