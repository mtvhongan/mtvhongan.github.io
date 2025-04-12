import React from 'react';


import { BrandLogos } from '@/components/home/BrandLogos';
import { HeroBanner } from '@/components/home/HeroBanner';
import { ProductTabs } from '@/components/home/ProductTabs';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { formatDate } from '@/lib/utils';

export default function Home() {
  const currentDate = formatDate(new Date());

  return (
    <>
      <Header/>
      <main>
        <div className="relative bg-white">
          <HeroBanner />
          
          <BrandLogos />
          
          <ProductTabs visible={false} />
          
          <section className="container mx-auto my-12 px-4">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  Về Công Ty MTV Hồng An
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Chúng tôi tự hào là nhà cung cấp máy móc, thiết bị nông nghiệp, xây dựng và công nghiệp hàng đầu với hơn 10 năm kinh nghiệm.
                </p>
                <p className="mt-2 text-gray-500">Today is {currentDate}</p>
                <div className="mt-4">
                  <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
                    Xem thêm về chúng tôi
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8 text-blue-700" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Sản phẩm chất lượng</h3>
                  <p className="text-gray-600">
                    Chúng tôi cam kết cung cấp các sản phẩm chất lượng cao từ các thương hiệu uy tín và được tin cậy trên toàn thế giới.
                  </p>
                </div>
                
                <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8 text-blue-700" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Dịch vụ hậu mãi</h3>
                  <p className="text-gray-600">
                    Đội ngũ kỹ thuật chuyên nghiệp, nhiệt tình, sẵn sàng hỗ trợ khách hàng giải quyết mọi vấn đề về sản phẩm.
                  </p>
                </div>
                
                <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8 text-blue-700" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
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
        </div>
      </main>
      <Footer />
    </>
  );
}