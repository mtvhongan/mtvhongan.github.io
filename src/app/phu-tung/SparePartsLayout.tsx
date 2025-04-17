"use client";

import React from 'react';

interface SparePartsLayoutProps {
  children: React.ReactNode;
}

const SparePartsLayout: React.FC<SparePartsLayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Phụ Tùng & Linh Kiện</h1>
        <p className="text-gray-600">
          Cung cấp phụ tùng và linh kiện chính hãng, đảm bảo hoạt động ổn định cho hệ thống máy móc công nghiệp
        </p>
      </div>
      
      {/* Render children which will contain both category navigation and products */}
      {children}
      
      <div className="mt-16 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Dịch Vụ Phụ Tùng & Bảo Trì</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Phụ Tùng Chính Hãng</h3>
            <p className="text-gray-600">Đảm bảo sử dụng phụ tùng chính hãng, tương thích 100% với thiết bị của bạn</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Giao Hàng Nhanh Chóng</h3>
            <p className="text-gray-600">Dịch vụ giao hàng nhanh chóng trong vòng 24h đối với các mặt hàng có sẵn</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Tư Vấn Kỹ Thuật</h3>
            <p className="text-gray-600">Đội ngũ kỹ thuật viên giàu kinh nghiệm hỗ trợ tư vấn lựa chọn phụ tùng phù hợp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparePartsLayout;