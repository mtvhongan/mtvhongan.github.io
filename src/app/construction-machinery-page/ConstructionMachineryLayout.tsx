"use client";

import React from 'react';

interface ConstructionMachineryLayoutProps {
  children: React.ReactNode;
}

const ConstructionMachineryLayout: React.FC<ConstructionMachineryLayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg p-8 mb-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Máy xây dựng</h1>
        <p className="max-w-3xl mb-6">
          Cung cấp các loại máy xây dựng chất lượng cao, đáp ứng nhu cầu đa dạng cho các công trình xây dựng,
          từ máy đào, máy ủi đến máy lu và các thiết bị phụ trợ.
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-blue-700 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition">
            Xem sản phẩm
          </button>
          <button className="border border-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
            Dịch vụ cho thuê
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {['Máy đào', 'Máy ủi', 'Máy lu', 'Máy trộn bê tông'].map((category) => (
          <div key={category} className="bg-gray-100 p-4 rounded-lg text-center hover:bg-blue-100 transition">
            <h3 className="font-medium">{category}</h3>
          </div>
        ))}
      </div>
      
      {/* Render children (Products Grid) */}
      {children}
      
      {/* Service Features */}
      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-6">Dịch vụ đi kèm</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Cho thuê máy xây dựng</h3>
            <p className="text-gray-600 text-sm">Dịch vụ cho thuê ngắn hạn và dài hạn với nhiều ưu đãi hấp dẫn</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Thi công công trình</h3>
            <p className="text-gray-600 text-sm">Nhận thầu, tư vấn và thi công các công trình xây dựng dân dụng và công nghiệp</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Bảo trì và sửa chữa</h3>
            <p className="text-gray-600 text-sm">Dịch vụ bảo trì định kỳ và sửa chữa máy móc thiết bị xây dựng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionMachineryLayout;