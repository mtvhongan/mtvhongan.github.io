import React from 'react';

import { Metadata } from 'next';

import PolicyLayout from '../PolicyLayout';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'Chính Sách Vận Chuyển | Your Company Name',
  description: 'Chi tiết về dịch vụ vận chuyển, thời gian giao hàng và phí vận chuyển',
};

export default function ShippingPolicyPage() {
  return (
    <>
      <Header />
      <PolicyLayout activePolicyId="van-chuyen" disable>
        <div className="bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Chính Sách Vận Chuyển</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="lead text-xl text-gray-600 mb-6">
              Chúng tôi hợp tác với các đơn vị vận chuyển uy tín để đảm bảo sản phẩm được giao đến tận tay khách hàng một cách nhanh chóng và an toàn. Dưới đây là thông tin chi tiết về chính sách vận chuyển của chúng tôi.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Phạm vi vận chuyển</h2>
            
            <p className="mb-4">
              Chúng tôi cung cấp dịch vụ vận chuyển trong phạm vi:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Toàn quốc: Tất cả 63 tỉnh thành tại Việt Nam</li>
              <li>Quốc tế: Liên hệ bộ phận chăm sóc khách hàng để biết thêm thông tin chi tiết</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Đơn vị vận chuyển</h2>
            
            <p className="mb-4">
              Chúng tôi hợp tác với các đơn vị vận chuyển sau:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col items-center">
                <div className="h-16 w-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Logo</span>
                </div>
                <h3 className="font-medium text-center">Giao Hàng Nhanh (GHN)</h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col items-center">
                <div className="h-16 w-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Logo</span>
                </div>
                <h3 className="font-medium text-center">Giao Hàng Tiết Kiệm (GHTK)</h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col items-center">
                <div className="h-16 w-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Logo</span>
                </div>
                <h3 className="font-medium text-center">Viettel Post</h3>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Thời gian giao hàng</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300 border mb-6">
                <thead>
                  <tr>
                    <th className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 bg-gray-50">Khu vực</th>
                    <th className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 bg-gray-50">Thời gian dự kiến</th>
                    <th className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 bg-gray-50">Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Nội thành Hà Nội và TP. HCM</td>
                    <td className="py-4 px-4 text-sm text-gray-900">1-2 ngày làm việc</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Không bao gồm cuối tuần và ngày lễ</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Các thành phố lớn khác</td>
                    <td className="py-4 px-4 text-sm text-gray-900">2-3 ngày làm việc</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Đà Nẵng, Cần Thơ, Hải Phòng...</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Các tỉnh khác</td>
                    <td className="py-4 px-4 text-sm text-gray-900">3-5 ngày làm việc</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Thời gian có thể thay đổi tùy theo khu vực</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Khu vực miền núi, hải đảo</td>
                    <td className="py-4 px-4 text-sm text-gray-900">5-7 ngày làm việc</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Phụ thuộc vào điều kiện địa lý và thời tiết</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-6 text-gray-500 italic">
              Lưu ý: Thời gian giao hàng dự kiến được tính từ khi đơn hàng được xác nhận và chuyển cho đơn vị vận chuyển. Trong một số trường hợp đặc biệt (thiên tai, dịch bệnh...), thời gian giao hàng có thể bị kéo dài.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Phí vận chuyển</h2>
            
            <p className="mb-4">
              Phí vận chuyển được tính dựa trên:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Khoảng cách từ kho hàng đến địa chỉ giao hàng</li>
              <li>Kích thước và trọng lượng của sản phẩm</li>
              <li>Phương thức vận chuyển được lựa chọn</li>
            </ul>

            <p className="mb-6">
              Phí vận chuyển cụ thể sẽ được hiển thị trong quá trình thanh toán trước khi xác nhận đơn hàng.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 my-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Miễn phí vận chuyển</h3>
              <p>
                Chúng tôi áp dụng chính sách miễn phí vận chuyển cho:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Đơn hàng có giá trị từ 2.000.000đ trở lên</li>
                <li>Khách hàng thành viên VIP</li>
                <li>Trong các chương trình khuyến mãi đặc biệt</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Theo dõi đơn hàng</h2>
            
            <p className="mb-4">
              Khách hàng có thể theo dõi trạng thái đơn hàng bằng các cách sau:
            </p>
            
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>Đăng nhập vào tài khoản trên website của chúng tôi và kiểm tra trong mục &quot;Đơn hàng của tôi&quot;</li>
              <li>Sử dụng mã đơn hàng và mã vận đơn được gửi qua email hoặc SMS</li>
              <li>Liên hệ trực tiếp với bộ phận chăm sóc khách hàng</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Quy trình nhận hàng</h2>
            
            <p className="mb-6">
              Khi nhận hàng, quý khách vui lòng:
            </p>
            
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>
                <strong>Kiểm tra tình trạng bên ngoài:</strong> Kiểm tra tình trạng của bao bì, đảm bảo không có dấu hiệu hư hỏng, móp méo hay ướt.
              </li>
              <li>
                <strong>Kiểm tra thông tin đơn hàng:</strong> Xác nhận đúng người nhận, số lượng sản phẩm và loại sản phẩm.
              </li>
              <li>
                <strong>Kiểm tra sản phẩm:</strong> Mở và kiểm tra sản phẩm trước sự chứng kiến của nhân viên giao hàng.
              </li>
              <li>
                <strong>Xác nhận nhận hàng:</strong> Ký xác nhận đã nhận hàng nếu sản phẩm đúng và không có vấn đề.
              </li>
            </ol>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 my-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Lưu ý quan trọng</h3>
              <p>
                Nếu phát hiện sản phẩm bị hư hỏng hoặc không đúng với đơn đặt hàng, vui lòng:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Từ chối nhận hàng và yêu cầu nhân viên giao hàng ghi nhận lý do</li>
                <li>Hoặc chụp ảnh tình trạng sản phẩm và liên hệ ngay với chúng tôi trong vòng 24 giờ</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Chính sách đối với đơn hàng không giao được</h2>
            
            <p className="mb-4">
              Trong trường hợp không thể giao hàng do:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Địa chỉ không chính xác hoặc không đầy đủ</li>
              <li>Không liên lạc được với người nhận sau 3 lần gọi</li>
              <li>Người nhận từ chối nhận hàng</li>
              <li>Các lý do khách quan khác</li>
            </ul>
            
            <p className="mb-6">
              Chúng tôi sẽ:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Liên hệ với khách hàng để xác nhận lại thông tin</li>
              <li>Lưu trữ đơn hàng tại kho trong vòng 7 ngày</li>
              <li>Hoàn trả đơn hàng về kho và hoàn tiền (trừ phí vận chuyển) nếu không thể giao trong thời gian quy định</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hỗ trợ và giải đáp thắc mắc</h2>
            
            <p className="mb-4">
              Nếu quý khách có bất kỳ câu hỏi hoặc cần hỗ trợ về vận chuyển, vui lòng liên hệ:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Hotline: +84 (0) 123 456 789 (8:00 - 17:00, từ Thứ 2 đến Thứ 6)</li>
              <li>Email: shipping@yourcompany.com</li>
              <li>Fanpage: facebook.com/yourcompany</li>
            </ul>
          </div>
        </div>
      </PolicyLayout>
      <Footer />
    </>
  );
}