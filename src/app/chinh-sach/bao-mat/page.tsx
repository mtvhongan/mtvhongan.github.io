import React from 'react';

import { Metadata } from 'next';

import PolicyLayout from '../PolicyLayout';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'Chính Sách Bảo Mật | Your Company Name',
  description: 'Thông tin về cách chúng tôi bảo vệ dữ liệu và thông tin cá nhân của khách hàng',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <PolicyLayout activePolicyId="bao-mat">
        <div className="bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Chính Sách Bảo Mật</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="lead text-xl text-gray-600 mb-6">
              Chúng tôi cam kết bảo vệ quyền riêng tư và thông tin cá nhân của quý khách. Chính sách bảo mật này nhằm giúp quý khách hiểu cách thức chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của quý khách.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 my-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Cam kết của chúng tôi</h3>
              <p>
                Chúng tôi tôn trọng quyền riêng tư của quý khách và cam kết:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Thu thập thông tin một cách minh bạch và có sự đồng ý</li>
                <li>Sử dụng thông tin đúng mục đích đã thông báo</li>
                <li>Bảo vệ dữ liệu bằng các biện pháp bảo mật phù hợp</li>
                <li>Tôn trọng quyền kiểm soát thông tin của quý khách</li>
                <li>Tuân thủ các quy định pháp luật về bảo vệ dữ liệu</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Thông tin chúng tôi thu thập</h2>
            
            <p className="mb-4">
              Chúng tôi có thể thu thập các loại thông tin sau:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Thông tin cá nhân</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Họ tên</li>
                  <li>Địa chỉ email</li>
                  <li>Số điện thoại</li>
                  <li>Địa chỉ giao hàng/thanh toán</li>
                  <li>Thông tin công ty (nếu có)</li>
                  <li>Thông tin thanh toán</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Thông tin kỹ thuật</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Địa chỉ IP</li>
                  <li>Loại thiết bị và trình duyệt</li>
                  <li>Cookies và dữ liệu duyệt web</li>
                  <li>Thời gian truy cập</li>
                  <li>Trang web giới thiệu</li>
                  <li>Hoạt động trên website</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Cách thức thu thập thông tin</h2>
            
            <p className="mb-4">
              Chúng tôi thu thập thông tin thông qua các phương thức sau:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>Trực tiếp từ quý khách:</strong> Khi quý khách đăng ký tài khoản, đặt hàng, liên hệ với chúng tôi, hoặc tham gia các chương trình khuyến mãi.
              </li>
              <li>
                <strong>Tự động thu thập:</strong> Thông qua cookies, pixels và các công nghệ theo dõi khác khi quý khách truy cập website của chúng tôi.
              </li>
              <li>
                <strong>Từ bên thứ ba:</strong> Chúng tôi có thể nhận thông tin từ các đối tác kinh doanh, công ty thanh toán, và các dịch vụ phân tích website.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Mục đích sử dụng thông tin</h2>
            
            <p className="mb-4">
              Chúng tôi sử dụng thông tin của quý khách cho các mục đích:
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300 border mb-6">
                <thead>
                  <tr>
                    <th className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 bg-gray-50">Mục đích</th>
                    <th className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 bg-gray-50">Chi tiết</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Cung cấp dịch vụ</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Xử lý đơn hàng, giao hàng, hỗ trợ khách hàng</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Cải thiện trải nghiệm</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Phân tích nhu cầu, cá nhân hóa trải nghiệm, cải thiện sản phẩm/dịch vụ</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Truyền thông & tiếp thị</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Gửi thông tin về sản phẩm, dịch vụ, khuyến mãi phù hợp</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">An ninh & bảo mật</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Bảo vệ tài khoản, phát hiện và ngăn chặn gian lận</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Tuân thủ pháp luật</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Đáp ứng yêu cầu pháp lý, giải quyết tranh chấp</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Chia sẻ thông tin</h2>
            
            <p className="mb-4">
              Chúng tôi có thể chia sẻ thông tin của quý khách với:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>Đối tác cung cấp dịch vụ:</strong> Đơn vị vận chuyển, thanh toán, dịch vụ khách hàng để hỗ trợ thực hiện các dịch vụ cho quý khách.
              </li>
              <li>
                <strong>Các công ty trong cùng tập đoàn:</strong> Để cung cấp dịch vụ tốt hơn và đồng bộ hóa các hoạt động.
              </li>
              <li>
                <strong>Đối tác tiếp thị:</strong> Các công ty quảng cáo và phân tích để cải thiện chiến dịch tiếp thị.
              </li>
              <li>
                <strong>Cơ quan pháp luật:</strong> Khi có yêu cầu từ cơ quan nhà nước có thẩm quyền hoặc để tuân thủ nghĩa vụ pháp lý.
              </li>
            </ul>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 my-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Lưu ý quan trọng</h3>
              <p>
                Chúng tôi không bán, cho thuê hay trao đổi thông tin cá nhân của quý khách cho bất kỳ bên thứ ba nào ngoài các trường hợp nêu trên. Khi chia sẻ thông tin với bên thứ ba, chúng tôi yêu cầu họ bảo vệ thông tin của quý khách theo tiêu chuẩn tương đương với chúng tôi.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Bảo mật thông tin</h2>
            
            <p className="mb-4">
              Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức để bảo vệ thông tin của quý khách:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Mã hóa SSL cho tất cả dữ liệu truyền tải</li>
              <li>Hệ thống bảo mật và tường lửa hiện đại</li>
              <li>Kiểm soát truy cập nghiêm ngặt vào dữ liệu</li>
              <li>Đào tạo nhân viên về quy trình bảo mật</li>
              <li>Đánh giá và nâng cấp hệ thống bảo mật thường xuyên</li>
              <li>Quy trình phản ứng sự cố rõ ràng</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Thời gian lưu trữ thông tin</h2>
            
            <p className="mb-4">
              Chúng tôi chỉ lưu trữ thông tin cá nhân của quý khách trong thời gian cần thiết cho mục đích thu thập ban đầu hoặc theo yêu cầu của pháp luật. Cụ thể:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Thông tin tài khoản: Lưu trữ cho đến khi quý khách yêu cầu xóa tài khoản</li>
              <li>Thông tin giao dịch: Lưu trữ theo quy định pháp luật về kế toán và thuế (thường là 5-10 năm)</li>
              <li>Thông tin liên hệ: Lưu trữ trong thời gian duy trì mối quan hệ khách hàng</li>
              <li>Dữ liệu phân tích: Thường được lưu trữ tối đa 2 năm</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies và công nghệ tương tự</h2>
            
            <p className="mb-4">
              Website của chúng tôi sử dụng cookies và các công nghệ tương tự để cải thiện trải nghiệm của quý khách:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Cookies thiết yếu</h3>
                <p>Cần thiết cho hoạt động của website. Chúng cho phép quý khách di chuyển trong website và sử dụng các tính năng cơ bản như giỏ hàng và đăng nhập.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Cookies phân tích</h3>
                <p>Giúp chúng tôi hiểu cách thức quý khách tương tác với website, phân tích lưu lượng truy cập và cải thiện hiệu suất của website.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Cookies chức năng</h3>
                <p>Ghi nhớ lựa chọn của quý khách để cung cấp trải nghiệm cá nhân hóa, như ngôn ngữ ưa thích hoặc thông tin đăng nhập.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Cookies tiếp thị</h3>
                <p>Được sử dụng để hiển thị quảng cáo phù hợp, đo lường hiệu quả của chiến dịch quảng cáo và cung cấp nội dung liên quan đến sở thích của quý khách.</p>
              </div>
            </div>
            
            <p className="mb-6">
              Quý khách có thể kiểm soát cookies thông qua cài đặt trình duyệt. Tuy nhiên, việc vô hiệu hóa cookies có thể ảnh hưởng đến trải nghiệm sử dụng website của chúng tôi.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Quyền của quý khách</h2>
            
            <p className="mb-4">
              Theo quy định về bảo vệ dữ liệu, quý khách có các quyền sau đối với thông tin cá nhân:
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300 border mb-6">
                <thead>
                  <tr>
                    <th className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 bg-gray-50">Quyền</th>
                    <th className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 bg-gray-50">Mô tả</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Quyền truy cập</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Quý khách có quyền yêu cầu bản sao thông tin cá nhân mà chúng tôi lưu trữ về quý khách</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Quyền chỉnh sửa</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Quý khách có quyền yêu cầu chúng tôi cập nhật hoặc sửa chữa thông tin không chính xác</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Quyền xóa</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Quý khách có quyền yêu cầu chúng tôi xóa thông tin cá nhân trong một số trường hợp</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Quyền giới hạn xử lý</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Quý khách có quyền yêu cầu chúng tôi tạm dừng xử lý thông tin cá nhân</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Quyền phản đối</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Quý khách có quyền phản đối việc xử lý thông tin vì mục đích tiếp thị hoặc dựa trên lợi ích hợp pháp</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Quyền chuyển dữ liệu</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Quý khách có quyền nhận thông tin của mình ở định dạng có cấu trúc và chuyển cho bên thứ ba</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-6">
              Để thực hiện các quyền của mình, quý khách có thể liên hệ với chúng tôi theo thông tin ở cuối chính sách này. Chúng tôi sẽ xử lý yêu cầu của quý khách trong thời gian sớm nhất và không muộn hơn 30 ngày.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Thay đổi chính sách bảo mật</h2>
            
            <p className="mb-4">
              Chúng tôi có thể cập nhật chính sách bảo mật này để phản ánh những thay đổi trong hoạt động kinh doanh hoặc để tuân thủ các quy định pháp luật mới. Mọi thay đổi sẽ được đăng tải trên website của chúng tôi với thông báo phù hợp. Quý khách nên kiểm tra định kỳ để cập nhật thông tin mới nhất.
            </p>
            
            <p className="mb-6">
              Phiên bản hiện tại của chính sách bảo mật có hiệu lực từ ngày 01/03/2025.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Liên hệ về vấn đề bảo mật</h2>
            
            <p className="mb-4">
              Nếu quý khách có bất kỳ câu hỏi, yêu cầu hoặc lo ngại nào về chính sách bảo mật của chúng tôi hoặc cách chúng tôi xử lý thông tin cá nhân, vui lòng liên hệ:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
              <h3 className="text-lg font-semibold mb-4">Bộ phận bảo mật thông tin</h3>
              <ul className="space-y-2">
                <li><strong>Địa chỉ:</strong> 123 Nguyễn Văn Linh, Quận 7, TP.HCM</li>
                <li><strong>Email:</strong> privacy@yourcompany.com</li>
                <li><strong>Điện thoại:</strong> (028) 1234 5678</li>
                <li><strong>Người phụ trách:</strong> Ông Nguyễn Văn A - Giám đốc Bảo mật Thông tin</li>
              </ul>
            </div>
          </div>
        </div>
      </PolicyLayout>
      <Footer />
    </>
  );
}