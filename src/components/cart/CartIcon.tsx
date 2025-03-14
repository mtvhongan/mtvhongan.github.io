"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';

// Cart item type definition
interface CartItem {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: number;
  quantity: number;
}

export const CartIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItemCount = 0; // This would come from your cart state
  
  // This would come from your cart state
  const cartItems: CartItem[] = [];
  const totalPrice = 0;

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 text-gray-700 hover:text-blue-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </div>
        <span>Giỏ hàng {cartItemCount > 0 ? `(${cartItemCount})` : '0'}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 z-20 w-80 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">Giỏ hàng</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close"
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
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="max-h-96 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">Giỏ hàng trống</p>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                >
                  Tiếp tục mua sắm
                </Button>
              </div>
            ) : (
              <>
                <ul className="space-y-4">
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex space-x-3">
                      <div className="flex-shrink-0 w-16 h-16 relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <Link href={`/san-pham/${item.slug}`} className="text-sm font-medium">
                          {item.name}
                        </Link>
                        
                        <div className="flex items-center mt-1">
                          <div className="flex border border-gray-300 rounded">
                            <button
                              className="px-2 py-1 text-gray-500"
                              aria-label="Decrease quantity"
                              // Handle decrease quantity
                            >
                              -
                            </button>
                            <span className="px-2 py-1 text-sm">{item.quantity}</span>
                            <button
                              className="px-2 py-1 text-gray-500"
                              aria-label="Increase quantity"
                              // Handle increase quantity
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="ml-2 text-red-500 text-sm"
                            aria-label="Remove item"
                            // Handle remove item
                          >
                            Xóa
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0 text-right">
                        <div className="text-blue-700 font-medium">
                          {(item.price * item.quantity).toLocaleString()}đ
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <div className="flex justify-between mb-4">
                    <span>Tổng tiền:</span>
                    <span className="text-blue-700 font-bold">{totalPrice.toLocaleString()}đ</span>
                  </div>
                  
                  <div className="space-y-2">
                    <Button
                      variant="primary"
                      fullWidth
                    >
                      <Link href="/thanh-toan" className="w-full">
                        Thanh toán
                      </Link>
                    </Button>
                    
                    <Button
                      variant="secondary"
                      fullWidth
                    >
                      <Link href="/gio-hang" className="w-full">
                        Xem giỏ hàng
                      </Link>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};