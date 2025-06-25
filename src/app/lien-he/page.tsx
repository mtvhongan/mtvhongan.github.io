import React from 'react';

import { Metadata } from 'next';
import Link from 'next/link';

import ContactLayout from './ContactLayout';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'Liên Hệ | Your Company Name',
  description: 'Liên hệ với chúng tôi để được tư vấn về sản phẩm và dịch vụ',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactLayout>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                  Thông Tin Liên Hệ
                </h2>
                <div className="mt-3">
                  <p className="text-lg text-gray-500">
                    Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của quý khách. Vui lòng liên hệ với chúng tôi qua thông tin dưới đây.
                  </p>
                </div>
                <div className="mt-9">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>0328 162 203</p>
                      <p className="mt-1">Thứ 2 - Thứ 6, 8:00 - 17:00</p>
                    </div>
                  </div>
                  <div className="mt-6 flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>mtvhongan@gmail.com</p>
                    </div>
                  </div>
                  <div className="mt-6 flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>L17-11, tầng 17, Tòa nhà Vincom Center, số 72 Lê Thánh Tôn, P. Bến Nghé, Q.1</p>
                      <p className="mt-1">Thành Phố Hồ Chí Minh, Việt Nam</p>
                    </div>
                  </div>
                  {/* Social media  */}
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-900">Kết nối với chúng tôi</h3>
                    <div className="mt-4 flex space-x-6">
                      <Link href="https://www.facebook.com/61573520043885" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Facebook</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </Link>
                      {/* <Link href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">YouTube</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                        </svg>
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
                        </svg>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 md:mt-0">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                  Gửi Thông Tin Liên Hệ
                </h2>
                <div className="mt-3">
                  <p className="text-lg text-gray-500">
                    Vui lòng điền thông tin vào form dưới đây, chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.
                  </p>
                </div>
                <div className="mt-9">
                  <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Họ và tên
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="name"
                          placeholder="Nhập họ và tên của bạn"
                          className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="Nhập địa chỉ email của bạn"
                          className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Số điện thoại
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          placeholder="Nhập số điện thoại của bạn"
                          className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Tiêu đề
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          placeholder="Nhập tiêu đề tin nhắn"
                          className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Nội dung
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Nhập nội dung tin nhắn của bạn"
                          className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Gửi Thông Tin
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-96 bg-gray-300 mb-8">
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-600">Google Map sẽ được nhúng tại đây</p>
            {/* For actual implementation, use Google Maps Embed API or a React library like google-map-react */}
          </div>
        </div>
      </ContactLayout>
      <Footer />
    </>
  );
}