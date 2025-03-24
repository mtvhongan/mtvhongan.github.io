import React from 'react';

import { Metadata } from 'next';
import Link from 'next/link';

import  BlogLayout  from './BlogLayout';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'Tin Tức | Your Company Name',
  description: 'Cập nhật tin tức mới nhất về ngành công nghiệp máy móc và thiết bị',
};

// Sample blog post data - in a real application, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: 'Xu hướng công nghệ máy nông nghiệp năm 2025',
    excerpt: 'Khám phá những xu hướng công nghệ mới nhất trong lĩnh vực máy nông nghiệp và cách chúng đang thay đổi ngành nông nghiệp hiện đại.',
    date: '2025-03-15',
    imageUrl: '/images/news/agriculture-tech.jpg',
    category: 'Máy nông nghiệp',
    slug: 'xu-huong-cong-nghe-may-nong-nghiep-2025',
  },
  {
    id: 2,
    title: 'Các giải pháp tự động hóa cho doanh nghiệp vừa và nhỏ',
    excerpt: 'Tìm hiểu các giải pháp tự động hóa hiệu quả về chi phí dành cho doanh nghiệp vừa và nhỏ nhằm nâng cao năng suất và giảm chi phí sản xuất.',
    date: '2025-03-10',
    imageUrl: '/images/news/automation-solutions.jpg',
    category: 'Máy tự động',
    slug: 'giai-phap-tu-dong-hoa-doanh-nghiep-vua-va-nho',
  },
  {
    id: 3,
    title: 'Tiến bộ mới trong công nghệ máy xây dựng',
    excerpt: 'Những tiến bộ mới nhất trong công nghệ máy xây dựng đang giúp các dự án hoàn thành nhanh hơn, an toàn hơn và hiệu quả hơn về mặt chi phí.',
    date: '2025-03-05',
    imageUrl: '/images/news/construction-tech.jpg',
    category: 'Máy xây dựng',
    slug: 'tien-bo-moi-trong-cong-nghe-may-xay-dung',
  },
  {
    id: 4,
    title: 'Hội nghị công nghệ máy móc quốc tế sắp diễn ra tại Việt Nam',
    excerpt: 'Hội nghị công nghệ máy móc quốc tế sẽ diễn ra tại Hà Nội vào tháng 5/2025, quy tụ các chuyên gia hàng đầu và trưng bày công nghệ tiên tiến.',
    date: '2025-02-28',
    imageUrl: '/images/news/machinery-conference.jpg',
    category: 'Sự kiện',
    slug: 'hoi-nghi-cong-nghe-may-moc-quoc-te-2025',
  },
];

export default function TinTucPage() {
  return (
    <>
      <Header />
      <BlogLayout>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Tin Tức</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 w-full bg-gray-200">
                  {/* In a real app, use next/image component */}
                  <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Hình ảnh</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('vi-VN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                  <a href={`/tin-tuc/${post.slug}`} className="block">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                      Đọc thêm →
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <Link href="/tin-tuc?page=0" className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Trang trước
            </Link>
            <Link href="/tin-tuc?page=1" className="px-4 py-2 bg-blue-600 border border-blue-600 text-sm font-medium text-white hover:bg-blue-700">
              1
            </Link>
            <Link href="/tin-tuc?page=2" className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
              2
            </Link>
            <Link href="/tin-tuc?page=3" className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
              3
            </Link>
            <Link href="/tin-tuc?page=2" className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Trang sau
            </Link>
          </nav>
        </div>
        </div>
      </BlogLayout>
      <Footer/>
    </>
  );
}