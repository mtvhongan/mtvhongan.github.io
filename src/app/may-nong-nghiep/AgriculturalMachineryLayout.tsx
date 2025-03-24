"use client";

import React from 'react';

interface AgriculturalMachineryLayoutProps {
  children: React.ReactNode;
}

export const AgriculturalMachineryLayout: React.FC<AgriculturalMachineryLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-8 px-4">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="p-8 md:w-1/2">
              <h1 className="text-3xl font-bold text-green-800 mb-4">Máy nông nghiệp</h1>
              <p className="text-gray-600 mb-6">
                Chúng tôi cung cấp các loại máy móc hiện đại hỗ trợ nông dân Việt Nam tăng năng suất, 
                giảm chi phí sản xuất nông nghiệp và nâng cao chất lượng nông sản.
              </p>
              <div className="flex space-x-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition">
                  Xem sản phẩm
                </button>
                <button className="border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg font-medium transition">
                  Tư vấn miễn phí
                </button>
              </div>
            </div>
            <div className="md:w-1/2 bg-green-100">
              <img 
                src="https://placehold.co/800x400/green/white?text=Máy+nông+nghiệp" 
                alt="Máy nông nghiệp banner" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            'Máy cày và xới đất', 
            'Máy gieo trồng', 
            'Máy gặt và thu hoạch', 
            'Máy chế biến nông sản'
          ].map((category) => (
            <div key={category} className="bg-white p-4 rounded-lg shadow-sm text-center hover:bg-green-50 hover:border-green-200 transition cursor-pointer">
              <h3 className="font-medium text-green-800">{category}</h3>
            </div>
          ))}
        </div>
        
        {/* Main Content */}
        <main>{children}</main>
        
        {/* Benefits Section - This can be imported from your AgriculturalBenefits component */}
      </div>
    </div>
  );
};

export default AgriculturalMachineryLayout;