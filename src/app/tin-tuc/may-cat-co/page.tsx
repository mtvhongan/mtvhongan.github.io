// File: app/tin-tuc/may-cat-co/page.tsx
import React from 'react';

// import Image from 'next/image';
import Link from 'next/link';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

const BlogPost = () => {
  return (
    <>
      <Header/>
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Header section */}
        <div className="mb-8 border-b pb-6">
          <h1 className="text-3xl font-bold text-blue-800 mb-3">
            CÁC LOẠI MÁY CẮT CỎ TỐT NHẤT TRÊN THỊ TRƯỜNG HIỆN NAY
          </h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">25/03/2025</span>
            <span>Danh mục: Máy móc, Làm vườn</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg mb-8">
          <p>
            Máy cắt cỏ hiện nay rất đa dạng với nhiều loại khác nhau, phục vụ cho nhu cầu sử dụng từ cá
            nhân cho đến các công việc chuyên nghiệp. Dưới đây là một số loại máy cắt cỏ phổ biến và
            những mẫu máy cắt cỏ tốt nhất hiện nay:
          </p>
        </div>

        {/* Section 1: Gas-powered */}
        <section className="mb-10 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">1. Máy cắt cỏ chạy xăng</h2>
          
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Đặc điểm:</h3>
            <p>Là loại máy cắt cỏ mạnh mẽ, thích hợp cho các công việc cắt cỏ diện tích lớn và cỏ dày.</p>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Ưu điểm:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Công suất lớn.</li>
              <li>Cắt được nhiều loại cỏ dày và cao.</li>
              <li>Sử dụng liên tục lâu dài.</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Nhược điểm:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tiếng ồn lớn.</li>
              <li>Cần bảo dưỡng thường xuyên.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-2">Một số mẫu phổ biến:</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-red-600 hover:underline">Honda GX35</Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">Husqvarna 128R</Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">Makita EM2651UH</Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Electric */}
        <section className="mb-10 bg-blue-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">2. Máy cắt cỏ điện</h2>
          
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Đặc điểm:</h3>
            <p>Máy sử dụng điện thay vì xăng, thường nhẹ và dễ sử dụng.</p>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Ưu điểm:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tiếng ồn thấp, dễ vận hành.</li>
              <li>Không cần bảo dưỡng như máy cắt cỏ xăng.</li>
              <li>Thân thiện với môi trường.</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Nhược điểm:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dây điện hạn chế phạm vi di chuyển.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-2">Một số mẫu phổ biến:</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-red-600 hover:underline">Bosch ART 23</Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">Black+Decker GL7033</Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">Makita UR3000</Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Battery-powered */}
        <section className="mb-10 bg-green-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">3. Máy cắt cỏ pin (không dây)</h2>
          
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Đặc điểm:</h3>
            <p>Máy sử dụng pin sạc, thích hợp cho những không gian nhỏ hoặc các công việc không yêu cầu thời gian cắt lâu dài.</p>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Ưu điểm:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dễ dàng di chuyển mà không bị ràng buộc bởi dây điện.</li>
              <li>Tiếng ồn thấp, không gây ô nhiễm môi trường.</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Nhược điểm:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Thời gian sử dụng giới hạn theo dung lượng pin.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-2">Một số mẫu phổ biến:</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-red-600 hover:underline">Makita DLM382Z</Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">Greenworks 25322</Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">Bosch CityMower 18</Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Mini */}
        <section className="mb-10 bg-yellow-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">4. Máy cắt cỏ mini (cầm tay)</h2>
          
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Đặc điểm:</h3>
            <p>Là loại máy nhỏ gọn, dễ cầm tay, thích hợp cho việc cắt cỏ trong không gian hẹp hoặc những công việc tỉa tót.</p>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Ưu điểm:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nhẹ, dễ sử dụng và di chuyển.</li>
              <li>Thích hợp cho các khu vườn nhỏ, khu vực có chướng ngại vật.</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Nhược điểm:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Không thích hợp cho các công việc cắt cỏ lớn.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-2">Một số mẫu phổ biến:</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-red-600 hover:underline">Worx WG163</Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">Ryobi RLT18C</Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Manual */}
        <section className="mb-10 bg-purple-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">5. Máy cắt cỏ kéo tay (cắt cỏ bằng dao)</h2>
          
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Đặc điểm:</h3>
            <p>Đây là loại máy truyền thống, sử dụng bộ phận cắt dạng dao hoặc lưỡi kéo.</p>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Ưu điểm:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tiết kiệm chi phí nhiên liệu, bảo trì ít.</li>
              <li>Thích hợp cho những người yêu thích phương pháp làm vườn thủ công.</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium text-lg mb-2">Nhược điểm:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cần sức lao động nhiều, không hiệu quả cho diện tích lớn.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-2">Một số mẫu phổ biến:</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-red-600 hover:underline">Fiskars StaySharp</Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">Bosch ARM 37</Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Summary/Top Picks */}
        <section className="mb-8 border-t pt-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Các Máy cắt cỏ tốt nhất hiện nay:</h2>
          
          <ol className="space-y-4 pl-5 list-decimal">
            <li className="pl-2">
              <span className="font-medium">
                <Link href="#" className="text-red-600 hover:underline">Husqvarna 128R</Link>:
              </span> Là máy cắt cỏ chạy xăng, mạnh mẽ, dễ sử dụng, phù hợp cho những công việc cắt cỏ ngoài trời.
            </li>
            
            <li className="pl-2">
              <span className="font-medium">
                <Link href="#" className="text-red-600 hover:underline">Makita EM2651UH</Link>:
              </span> Máy cắt cỏ đa năng, có thể thay thế nhiều phụ kiện như lưỡi cắt cỏ, máy cắt cây... rất tiện lợi.
            </li>
            
            <li className="pl-2">
              <span className="font-medium">
                <Link href="#" className="text-red-600 hover:underline">Bosch ART 23</Link>:
              </span> Máy cắt cỏ điện nhẹ nhàng, dễ sử dụng, phù hợp cho các khu vườn nhỏ.
            </li>
            
            <li className="pl-2">
              <span className="font-medium">
                <Link href="#" className="text-red-600 hover:underline">Greenworks 25322</Link>:
              </span> Máy cắt cỏ chạy bằng pin, nhẹ nhàng, hiệu quả cho các công việc cắt cỏ nhanh chóng.
            </li>
          </ol>
        </section>

        {/* Conclusion */}
        <div className="bg-green-100 p-6 rounded-lg text-gray-800">
          <p className="mb-0">
            Tùy vào mục đích sử dụng và diện tích khu vực bạn cần cắt cỏ mà bạn có thể lựa chọn loại máy
            phù hợp nhất.
          </p>
        </div>
        
        {/* Tags and sharing */}
        <div className="mt-8 pt-4 border-t flex justify-between items-center">
          <div className="flex gap-2">
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Máy cắt cỏ</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Làm vườn</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Thiết bị ngoài trời</span>
          </div>
          <div className="flex gap-3">
            <button className="text-blue-600">Chia sẻ</button>
            <button className="text-green-600">Lưu</button>
          </div>
        </div>
      </article>
      <Footer/>
    </>
  );
};

export default BlogPost;