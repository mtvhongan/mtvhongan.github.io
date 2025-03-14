import React from 'react';
import { Button } from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';
import { HeroBanner } from '@/components/home/HeroBanner';
import { BrandLogos } from '@/components/home/BrandLogos';
import { ProductTabs } from '@/components/home/ProductTabs';

export default function Home() {
  const currentDate = formatDate(new Date());

  return (
    <main>
      <HeroBanner />
      
      <BrandLogos />
      
      <ProductTabs />
      
      <section className="container mx-auto my-12">
        <div className="bg-blue-50 p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">
              Về Công Ty Anh Tin
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi tự hào là nhà cung cấp máy móc, thiết bị nông nghiệp, xây dựng và công nghiệp hàng đầu với hơn 10 năm kinh nghiệm.
            </p>
            <p className="mt-4">Today is {currentDate}</p>
            <div className="mt-4">
              <Button variant="primary">Xem thêm về chúng tôi</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-700"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sản phẩm chất lượng</h3>
              <p className="text-gray-600">
                Chúng tôi cam kết cung cấp các sản phẩm chất lượng cao từ các thương hiệu uy tín và được tin cậy trên toàn thế giới.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-700"
                >
                  <polyline points="20 12 20 22 4 22 4 12"></polyline>
                  <rect x="2" y="7" width="20" height="5"></rect>
                  <line x1="12" y1="22" x2="12" y2="7"></line>
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Dịch vụ hậu mãi</h3>
              <p className="text-gray-600">
                Đội ngũ kỹ thuật chuyên nghiệp, nhiệt tình, sẵn sàng hỗ trợ khách hàng giải quyết mọi vấn đề về sản phẩm.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-700"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Hệ thống phân phối</h3>
              <p className="text-gray-600">
                Hệ thống phân phối rộng khắp, giúp khách hàng dễ dàng tiếp cận và sở hữu sản phẩm một cách nhanh chóng.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}