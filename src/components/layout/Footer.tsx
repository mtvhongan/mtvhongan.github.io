"use client";

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white pt-10 pb-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HỒNG ÂN CO., LTD</h3>
            <p className="mb-2">Add: 123 Example Street, District, City</p>
            <p className="mb-2">Tel: 0909 789 130 - 0707 148 148</p>
            <p className="mb-2">Email: info@hongan.vn</p>
            <div className="flex mt-4 space-x-3">
              <a href="#" className="bg-blue-700 p-2 rounded-full">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="bg-blue-700 p-2 rounded-full">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="bg-blue-700 p-2 rounded-full">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="bg-blue-700 p-2 rounded-full">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">THÔNG TIN CÔNG TY</h3>
            <ul className="space-y-2">
              <li><Link href="/gioi-thieu">Giới thiệu</Link></li>
              <li><Link href="/tin-tuc">Tin tức</Link></li>
              <li><Link href="/tuyen-dung">Tuyển dụng</Link></li>
              <li><Link href="/lien-he">Liên hệ</Link></li>
              <li><Link href="/he-thong-dai-ly">Hệ thống đại lý</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">CHÍNH SÁCH</h3>
            <ul className="space-y-2">
              <li><Link href="/chinh-sach-thanh-toan">Chính sách thanh toán</Link></li>
              <li><Link href="/chinh-sach-van-chuyen">Chính sách vận chuyển</Link></li>
              <li><Link href="/chinh-sach-bao-hanh">Chính sách bảo hành</Link></li>
              <li><Link href="/chinh-sach-doi-tra">Chính sách đổi trả</Link></li>
              <li><Link href="/chinh-sach-bao-mat">Chính sách bảo mật</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-5 text-center">
          <p>© 2023 Hồng Ân Co., Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};