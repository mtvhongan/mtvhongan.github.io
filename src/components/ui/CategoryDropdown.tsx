"use client";
import React, { useState } from 'react';

export const CategoryDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const categories = [
    { id: 1, name: 'Máy nông nghiệp' },
    { id: 2, name: 'Máy móc - thiết bị' },
    { id: 3, name: 'Máy xây dựng' },
    { id: 4, name: 'Phụ tùng thay thế' },
  ];

  return (
    <div className="relative">
      <button
        type="button"
        className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-l text-gray-700 flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Chọn nhóm sản phẩm</span>
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-10 mt-1 w-56 bg-white border border-gray-300 rounded shadow-lg">
          <ul className="py-1">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => {
                    // Handle category selection
                    console.log('Selected category:', category.name);
                    setIsOpen(false);
                  }}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
