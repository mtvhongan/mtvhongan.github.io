import React from 'react';

interface ContactLayoutProps {
  children: React.ReactNode;
}

const ContactLayout: React.FC<ContactLayoutProps> = ({ children }) => {
  return (
    <main className="bg-gray-50">
      {/* Hero section */}
      <div className="relative bg-blue-700">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Liên Hệ</h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Hãy liên hệ với chúng tôi để được tư vấn và hỗ trợ về các sản phẩm và dịch vụ. 
            Đội ngũ chuyên viên giàu kinh nghiệm của chúng tôi luôn sẵn sàng phục vụ quý khách.
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <div>
                  <a href="/" className="text-gray-400 hover:text-gray-500">
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
                  </a>
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
                  <span className="ml-4 text-sm font-medium text-gray-700">Liên hệ</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
        {children}
      </div>

      {/* Contact benefits section */}
      <div className="bg-blue-50">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tại sao chọn chúng tôi?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
              Chúng tôi cam kết mang đến dịch vụ chất lượng và sự hài lòng cho khách hàng
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root rounded-lg bg-white px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-blue-600 p-3 shadow-lg">
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
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">Phản hồi nhanh chóng</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Chúng tôi cam kết phản hồi mọi yêu cầu trong vòng 24 giờ, đảm bảo quý khách nhận được thông tin kịp thời.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root rounded-lg bg-white px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-blue-600 p-3 shadow-lg">
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">Đội ngũ chuyên nghiệp</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Đội ngũ tư vấn của chúng tôi được đào tạo chuyên sâu, sẵn sàng hỗ trợ và tư vấn giải pháp phù hợp.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root rounded-lg bg-white px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-blue-600 p-3 shadow-lg">
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">Dịch vụ sau bán hàng</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Chúng tôi không chỉ cung cấp sản phẩm chất lượng mà còn đảm bảo dịch vụ hậu mãi và hỗ trợ kỹ thuật.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactLayout;