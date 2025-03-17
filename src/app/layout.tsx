import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hồng Ân - Nhà cung cấp máy móc nông nghiệp, xây dựng và thiết bị hàng đầu',
  description: 'Hồng Ân cung cấp các loại máy móc nông nghiệp, thiết bị xây dựng, dụng cụ điện và nhiều sản phẩm chất lượng cao khác với giá cả cạnh tranh.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
