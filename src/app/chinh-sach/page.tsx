import React from 'react';

import { Metadata } from 'next';
import Link from 'next/link';

import PolicyLayout from './PolicyLayout';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';


export const metadata: Metadata = {
  title: 'Chính Sách | Your Company Name',
  description: 'Các chính sách thanh toán, vận chuyển, bảo hành, đổi trả và bảo mật của chúng tôi',
};

export default function PoliciesPage() {
  const policies = [
    {
      id: 'thanh-toan',
      title: 'Chính sách thanh toán',
      href: '/chinh-sach/thanh-toan',
      description: 'Thông tin về các phương thức thanh toán, quy trình và các vấn đề liên quan.',
    },
    {
      id: 'van-chuyen',
      title: 'Chính sách vận chuyển',
      href: '/chinh-sach/van-chuyen',
      description: 'Chi tiết về dịch vụ vận chuyển, thời gian giao hàng và phí vận chuyển.',
    },
    {
      id: 'bao-hanh',
      title: 'Chính sách bảo hành',
      href: '/chinh-sach/bao-hanh',
      description: 'Quy định về bảo hành sản phẩm, thời hạn và điều kiện áp dụng.',
    },
    {
      id: 'doi-tra',
      title: 'Chính sách đổi trả',
      href: '/chinh-sach/doi-tra',
      description: 'Hướng dẫn về quy trình đổi trả, hoàn tiền và các điều kiện áp dụng.',
    },
    {
      id: 'bao-mat',
      title: 'Chính sách bảo mật',
      href: '/chinh-sach/bao-mat',
      description: 'Thông tin về cách chúng tôi bảo vệ dữ liệu và thông tin cá nhân của khách hàng.',
    },
  ];

  return (
    <>
      <Header />
      <PolicyLayout>
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Chính Sách
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Chúng tôi cam kết minh bạch trong mọi chính sách của mình. Vui lòng đọc kỹ các chính sách dưới đây để hiểu rõ quyền lợi và trách nhiệm của khách hàng.
              </p>
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {policies.map((policy) => (
                  <div
                    key={policy.id}
                    className="pt-6"
                  >
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full border border-gray-200 hover:border-blue-500 transition-colors duration-300">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                            <svg
                              className="h-6 w-6 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                          {policy.title}
                        </h3>
                        <p className="mt-5 text-base text-gray-500">
                          {policy.description}
                        </p>
                        <div className="mt-6">
                          <Link 
                            href={policy.href}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Xem chi tiết
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PolicyLayout>
      <Footer />
    </>
  );
}