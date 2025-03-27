"use client";

import React from 'react';

export const AgriculturalBenefits: React.FC = () => {
  return (
    <>
      {/* Benefits Section */}
      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-center mb-8 text-green-800">Lợi ích của cơ giới hóa nông nghiệp</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Tiết kiệm thời gian</h3>
            <p className="text-sm text-gray-600">Giảm đáng kể thời gian làm việc, tăng hiệu suất và năng suất cây trồng</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Giảm chi phí sản xuất</h3>
            <p className="text-sm text-gray-600">Tối ưu hóa nguồn lực, giảm chi phí nhân công và tăng lợi nhuận cho người nông dân</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Nâng cao chất lượng</h3>
            <p className="text-sm text-gray-600">Đồng đều về chất lượng sản phẩm, giảm tỷ lệ hao hụt trong quá trình thu hoạch</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-800">Khách hàng nói gì về chúng tôi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-700 font-bold">NT</span>
              </div>
              <div>
                <h4 className="font-medium">Nguyễn Văn Tùng</h4>
                <p className="text-sm text-gray-600">Nông dân, Đồng Tháp</p>
              </div>
            </div>
            <p className="text-gray-700">&quot;Máy gặt đập liên hợp đã giúp tôi thu hoạch 5 hecta lúa chỉ trong 1 ngày, tiết kiệm rất nhiều thời gian và công sức so với trước đây.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-700 font-bold">HL</span>
              </div>
              <div>
                <h4 className="font-medium">Hoàng Thị Linh</h4>
                <p className="text-sm text-gray-600">Chủ trang trại, An Giang</p>
              </div>
            </div>
            <p className="text-gray-700">&quot;Chất lượng máy móc rất tốt, dịch vụ hậu mãi chu đáo. Đội ngũ kỹ thuật hỗ trợ tận tình giúp tôi vận hành máy hiệu quả.&quot;</p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-green-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Bạn cần tư vấn thêm?</h2>
        <p className="mb-6">Liên hệ với chúng tôi ngay hôm nay để được hỗ trợ tốt nhất</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition">
            Gọi ngay: 0328162203
          </button>
          <button className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition">
            Gửi yêu cầu tư vấn
          </button>
        </div>
      </div>
    </>
  );
};

export default AgriculturalBenefits;