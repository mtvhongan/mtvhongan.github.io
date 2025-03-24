"use client";

import React from 'react';
import AutomationEquipmentLayout from './AutomationEquipmentLayout';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

export const AutomationEquipmentPage: React.FC = () => {
  // Sample product data
  const products: Product[] = [
    {
      id: 101,
      name: 'PLC Siemens S7-1200',
      imageUrl: 'https://placehold.co/300x300/orange/white?text=PLC+S7-1200',
      price: 4500000,
      description: 'Bộ điều khiển lập trình công nghiệp Siemens S7-1200 cho các ứng dụng tự động hóa quy mô vừa.'
    },
    {
      id: 102,
      name: 'Biến tần ABB ACS580',
      imageUrl: 'https://placehold.co/300x300/orange/white?text=ABB+ACS580',
      price: 7800000,
      description: 'Biến tần ABB ACS580 3 pha 380-480V, công suất 5.5kW, điều khiển động cơ hiệu quả năng lượng.'
    },
    {
      id: 103,
      name: 'Cảm biến tiệm cận Omron E2E',
      imageUrl: 'https://placehold.co/300x300/orange/white?text=Omron+E2E',
      price: 850000,
      description: 'Cảm biến tiệm cận cảm ứng Omron E2E, khoảng cách phát hiện 8mm, ngõ ra NPN.'
    },
    {
      id: 104,
      name: 'Màn hình HMI Weintek MT8071iP',
      imageUrl: 'https://placehold.co/300x300/orange/white?text=HMI+MT8071iP',
      price: 6200000,
      description: 'Màn hình cảm ứng HMI Weintek MT8071iP 7 inch, hỗ trợ kết nối Ethernet và RS-485.'
    },
  ];

  return (
    <AutomationEquipmentLayout>

    </AutomationEquipmentLayout>
  );
};

export default AutomationEquipmentPage;