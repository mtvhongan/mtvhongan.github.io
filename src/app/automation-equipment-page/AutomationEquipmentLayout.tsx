"use client";

import React from 'react';

interface AutomationEquipmentLayoutProps {
  children: React.ReactNode;
}

const AutomationEquipmentLayout: React.FC<AutomationEquipmentLayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Thiết Bị Tự Động Hóa</h1>
        <p className="text-gray-600">
          Cung cấp thiết bị tự động hóa công nghiệp chất lượng cao, đáp ứng nhu cầu sản xuất hiện đại
        </p>
      </div>
      
      {/* Category Navigation */}
      <div className="flex overflow-x-auto pb-4 mb-6 gap-4">
        <button className="whitespace-nowrap px-4 py-2 bg-orange-500 text-white rounded-full font-medium">
          Tất cả sản phẩm
        </button>
        <button className="whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200">
          PLC & Điều khiển
        </button>
        <button className="whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200">
          Biến tần & Động cơ
        </button>
        <button className="whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200">
          Cảm biến & Đo lường
        </button>
        <button className="whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200">
          HMI & Giao diện
        </button>
        <button className="whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200">
          Robot & Tự động hóa
        </button>
      </div>
      
      {children}
      
      <div className="mt-16 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Giải Pháp Tự Động Hóa Cho Doanh Nghiệp</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-orange-100 p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Tiết Kiệm Năng Lượng</h3>
            <p className="text-gray-600">Giảm tiêu thụ điện năng tới 30% với các thiết bị tự động hóa hiện đại</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-orange-100 p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Chất Lượng Ổn Định</h3>
            <p className="text-gray-600">Đảm bảo chất lượng sản phẩm đồng đều với hệ thống giám sát và điều khiển tự động</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-orange-100 p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Tăng Năng Suất</h3>
            <p className="text-gray-600">Cải thiện hiệu quả sản xuất, giảm thời gian ngừng máy và tối ưu hóa quy trình</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationEquipmentLayout;