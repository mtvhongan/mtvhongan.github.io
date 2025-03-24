import React from 'react';

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  // Sample categories for the sidebar
  const categories = [
    { name: 'Tất cả tin tức', count: 12, href: '/tin-tuc' },
    { name: 'Máy nông nghiệp', count: 4, href: '/tin-tuc/may-nong-nghiep' },
    { name: 'Máy tự động', count: 3, href: '/tin-tuc/may-tu-dong' },
    { name: 'Máy xây dựng', count: 3, href: '/tin-tuc/may-xay-dung' },
    { name: 'Sự kiện', count: 2, href: '/tin-tuc/su-kien' },
  ];

  // Sample recent posts for the sidebar
  const recentPosts = [
    {
      id: 1,
      title: 'Xu hướng công nghệ máy nông nghiệp năm 2025',
      date: '15/03/2025',
      href: '/tin-tuc/xu-huong-cong-nghe-may-nong-nghiep-2025',
    },
    {
      id: 2,
      title: 'Các giải pháp tự động hóa cho doanh nghiệp vừa và nhỏ',
      date: '10/03/2025',
      href: '/tin-tuc/giai-phap-tu-dong-hoa-doanh-nghiep-vua-va-nho',
    },
    {
      id: 3,
      title: 'Tiến bộ mới trong công nghệ máy xây dựng',
      date: '05/03/2025',
      href: '/tin-tuc/tien-bo-moi-trong-cong-nghe-may-xay-dung',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main blog content */}
          <div className="lg:w-3/4">{children}</div>

          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-8">
            {/* Search */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-4">Tìm kiếm</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center px-3 bg-blue-600 rounded-r-md text-white"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-4">Danh mục</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <a
                      href={category.href}
                      className="flex justify-between text-gray-600 hover:text-blue-600"
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-700 rounded-full px-2 text-xs flex items-center">
                        {category.count}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-4">Bài viết gần đây</h3>
              <ul className="space-y-4">
                {recentPosts.map((post) => (
                  <li key={post.id}>
                    <a href={post.href} className="block group">
                      <h4 className="text-gray-900 group-hover:text-blue-600 font-medium">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-4">Đăng ký nhận tin</h3>
              <p className="text-gray-600 mb-4">
                Đăng ký để nhận các tin tức mới nhất về công nghệ máy móc
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email của bạn"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
                >
                  Đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;