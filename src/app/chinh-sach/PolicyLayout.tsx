import React from 'react';

import Link from 'next/link';

interface PolicyLayoutProps {
  children: React.ReactNode;
  activePolicyId?: string;
}

const PolicyLayout: React.FC<PolicyLayoutProps> = ({ 
  children, 
  activePolicyId = '' 
}) => {
  const policies = [
    { id: '', name: 'Tổng quan', href: '/chinh-sach' },
    { id: 'thanh-toan', name: 'Thanh toán', href: '/chinh-sach/thanh-toan' },
    { id: 'van-chuyen', name: 'Vận chuyển', href: '/chinh-sach/van-chuyen' },
    { id: 'bao-hanh', name: 'Bảo hành', href: '/chinh-sach/bao-hanh' },
    { id: 'doi-tra', name: 'Đổi trả', href: '/chinh-sach/doi-tra' },
    { id: 'bao-mat', name: 'Bảo mật', href: '/chinh-sach/bao-mat' },
  ];

  return (
    <main className="bg-gray-50">
      {/* Hero section */}
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Chính Sách
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              Các chính sách minh bạch và rõ ràng để đảm bảo trải nghiệm mua sắm tốt nhất cho khách hàng.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">
            {policies.map((policy) => (
              <Link
                key={policy.id}
                href={policy.href}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${policy.id === activePolicyId 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}
                aria-current={policy.id === activePolicyId ? 'page' : undefined}
              >
                {policy.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <div>
                  <Link href="/" className="text-gray-400 hover:text-gray-500">
                    <svg
                      className="h-5 w-5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Trang chủ</span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <Link
                    href="/chinh-sach"
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    Chính sách
                  </Link>
                </div>
              </li>
              {activePolicyId && (
                <li>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                    <span className="ml-4 text-sm font-medium text-gray-700">
                      {policies.find(policy => policy.id === activePolicyId)?.name || ''}
                    </span>
                  </div>
                </li>
              )}
            </ol>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 min-h-screen">
        {children}
      </div>

    </main>
  );
};

export default PolicyLayout;