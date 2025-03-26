// File: app/tin-tuc/page.tsx
import React from 'react';

// import Image from 'next/image';
import Link from 'next/link';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

const TinTucPage = () => {
  const blogPosts = [
    {
      id: 'may-cat-co',
      title: 'CÁC LOẠI MÁY CẮT CỎ TỐT NHẤT TRÊN THỊ TRƯỜNG HIỆN NAY',
      date: '25/03/2025',
      excerpt: 'Máy cắt cỏ hiện nay rất đa dạng với nhiều loại khác nhau, phục vụ cho nhu cầu sử dụng từ cá nhân cho đến các công việc chuyên nghiệp.',
      category: 'Máy móc',
      imagePlaceholder: '/images/placeholder-lawn-mower.jpg',
    },
    // You can add other existing blog posts here
  ];

  return (
    <>
      <Header/>  
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-blue-800 mb-8">Tin Tức</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 relative">
                {/* Using a placeholder div instead of Image since we might not have actual images */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                  <span className="text-lg font-medium">{post.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/tin-tuc/${post.id}`} 
                  className="inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Đọc tiếp
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TinTucPage;