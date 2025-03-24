"use client";

import React from 'react';

import Link from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white pt-10 pb-5">
      <div className="container mx-auto px-4">
        {/* First section - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">MTV HỒNG AN</h3>
            <p className="mb-2">Địa chỉ: 88/4 Phan Đăng Lưu, Phường 05, Quận Phú Nhuận, TP. HCM</p>
            <p className="mb-2">Tel: <a href="tel:0328162203" className="text-blue-600 hover:underline">0328162203</a></p>
            <p className="mb-2">Email: <a href="mailto:mtvhongan@gmail.com" className="text-blue-600 hover:underline">mtvhongan@gmail.com</a></p>
            <p className="mb-2">Giờ làm việc: Thứ 2 - Thứ 7: 8:00 - 17:30</p>
            <div className="flex mt-4 space-x-3">
              <Link href="#" className="bg-green-700 w-10 h-10 rounded-full hover:bg-green-600 transition duration-300 flex items-center justify-center">
                <span>F</span>
              </Link>
              <Link href="#" className="bg-green-700 w-10 h-10 rounded-full hover:bg-green-600 transition duration-300 flex items-center justify-center">
                <span>Y</span>
              </Link>
              <Link href="#" className="bg-green-700 w-10 h-10 rounded-full hover:bg-green-600 transition duration-300 flex items-center justify-center">
                <span>I</span>
              </Link>
              <Link href="#" className="bg-green-700 w-10 h-10 rounded-full hover:bg-green-600 transition duration-300 flex items-center justify-center">
                <span>T</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">DANH MỤC SẢN PHẨM</h3>
            <ul className="space-y-2">
              <li><Link href="/may-tu-dong" className="hover:text-green-300 transition duration-300">Thiết bị tự động hóa</Link></li>
              <li><Link href="/may-xay-dung" className="hover:text-green-300 transition duration-300">Máy xây dựng</Link></li>
              <li><Link href="/may-nong-nghiep" className="hover:text-green-300 transition duration-300">Máy nông nghiệp</Link></li>
              {/* <li><Link href="/may-xoi-dat" className="hover:text-green-300 transition duration-300">Máy xới đất</Link></li>
              <li><Link href="/may-khoan" className="hover:text-green-300 transition duration-300">Máy khoan</Link></li>
              <li><Link href="/phu-kien" className="hover:text-green-300 transition duration-300">Phụ kiện & phụ tùng</Link></li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">THÔNG TIN CÔNG TY</h3>
            <ul className="space-y-2">
              <li><Link href="/gioi-thieu" className="hover:text-green-300 transition duration-300">Giới thiệu</Link></li>
              <li><Link href="/tin-tuc" className="hover:text-green-300 transition duration-300">Tin tức</Link></li>
              <li><Link href="/tuyen-dung" className="hover:text-green-300 transition duration-300">Tuyển dụng</Link></li>
              <li><Link href="/lien-he" className="hover:text-green-300 transition duration-300">Liên hệ</Link></li>
              <li><Link href="/he-thong-dai-ly" className="hover:text-green-300 transition duration-300">Hệ thống đại lý</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">CHÍNH SÁCH</h3>
            <ul className="space-y-2">
              <li><Link href="/chinh-sach-thanh-toan" className="hover:text-green-300 transition duration-300">Chính sách thanh toán</Link></li>
              <li><Link href="/chinh-sach-van-chuyen" className="hover:text-green-300 transition duration-300">Chính sách vận chuyển</Link></li>
              <li><Link href="/chinh-sach-bao-hanh" className="hover:text-green-300 transition duration-300">Chính sách bảo hành</Link></li>
              <li><Link href="/chinh-sach-doi-tra" className="hover:text-green-300 transition duration-300">Chính sách đổi trả</Link></li>
              <li><Link href="/chinh-sach-bao-mat" className="hover:text-green-300 transition duration-300">Chính sách bảo mật</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Horizontal divider */}
        <hr className="border-green-700 my-8" />
        
        {/* Second section - Newsletter */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">ĐĂNG KÝ NHẬN TIN</h3>
          <p className="mb-3">Đăng ký để nhận thông tin khuyến mãi và sản phẩm mới</p>
          <div className="flex max-w-md">
            <input 
              type="email" 
              placeholder="Email của bạn" 
              className="flex-grow px-4 py-2 text-gray-800 focus:outline-none" 
            />
            <button className="bg-green-700 px-4 py-2 hover:bg-green-600 transition duration-300">
              Đăng ký
            </button>
          </div>
        </div>
        
        {/* Horizontal divider */}
        <hr className="border-green-700 my-8" />
        
        {/* Third section - Payment methods */}
        {/* <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">THANH TOÁN</h3>
          <div className="flex flex-wrap gap-3">
            {['Visa', 'Mastercard', 'JCB', 'Momo', 'ZaloPay', 'VNPay'].map((payment, index) => (
              <div key={index} className="bg-white text-gray-800 px-4 py-1 rounded text-sm font-medium">
                {payment}
              </div>
            ))}
          </div>
        </div> */}
        
        {/* Copyright */}
        <div className="border-t border-green-700 mt-8 pt-5 text-center">
          <p>© {currentYear} MTV Hồng An. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};