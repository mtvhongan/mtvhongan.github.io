"use client";

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { CartIcon } from '../cart/CartIcon';

export const Header: React.FC = () => {
  return (
    <header>
      <div className="bg-blue-900 text-white p-2">
        <div className="container mx-auto flex justify-between items-center">
          <div>Hotline: 0328 162 203</div>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/61573520043885" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link>
            {/* <Link href="/" aria-label="YouTube"><i className="fab fa-youtube"></i></Link>
            <Link href="/" aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
            <Link href="/" aria-label="TikTok"><i className="fab fa-tiktok"></i></Link> */ }
            <Link href="/" aria-label="Language"><span className="ml-2">VI</span></Link> 
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-3 flex items-center justify-between">
        <Link href="/">
          <div className="relative h-16 w-48">
            <Image 
              src="https://gist.github.com/user-attachments/assets/b4d18dbb-52bd-4ba9-b636-a466ab81bc52" 
              alt="Hồng An Logo" 
              fill
              style={{ transform: 'scale(1.5)', transformOrigin: 'center' }}
              className="object-contain cursor-pointer"
            />
          </div>
        </Link>
        
        <div className="flex-grow px-10 flex items-center">
          <div className="relative">
            <button type="button" className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-l text-gray-700 flex items-center">
              <span>Chọn nhóm sản phẩm</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          
          <form className="flex flex-1" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="flex-1 px-4 py-2 border border-gray-300 border-l-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 rounded-r hover:bg-blue-800"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/dang-nhap" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className="ml-2">Đăng nhập</span>
          </Link>
          
          <CartIcon />
        </div>
      </div>
      
      <nav className="bg-blue-900 text-white">
        <div className="container mx-auto">
          <ul className="flex">
            <li className="px-4 py-3 hover:bg-blue-800"><Link href="/">TRANG CHỦ</Link></li>
            <li className="px-4 py-3 hover:bg-blue-800 relative group">
              <Link href="/may-nong-nghiep" className="flex items-center">
                MÁY NÔNG NGHIỆP
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
            </li>
            <li className="px-4 py-3 hover:bg-blue-800 relative group">
              <Link href="/may-moc-thiet-bi" className="flex items-center">
                MÁY MÓC - THIẾT BỊ
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
            </li>
            <li className="px-4 py-3 hover:bg-blue-800 relative group">
              <Link href="/may-xay-dung" className="flex items-center">
                MÁY XÂY DỰNG
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
            </li>
            <li className="px-4 py-3 hover:bg-blue-800"><Link href="/he-thong-dai-ly">HỆ THỐNG ĐẠI LÝ</Link></li>
            <li className="px-4 py-3 hover:bg-blue-800"><Link href="/lien-he">LIÊN HỆ</Link></li>
            <li className="px-4 py-3 hover:bg-blue-800 relative group">
              <Link href="/tin-tuc" className="flex items-center">
                TIN TỨC
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};