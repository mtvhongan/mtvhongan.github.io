import React from 'react';

import { Metadata } from 'next';

import PolicyLayout from '../PolicyLayout';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'Chính Sách Bảo Hành | Your Company Name',
  description: 'Quy định về bảo hành sản phẩm, thời hạn và điều kiện áp dụng',
};

export default function WarrantyPolicyPage() {
  return (
    <>
      <Header />
      <PolicyLayout activePolicyId="bao-hanh" disable>
        <div className="bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Chính Sách Bảo Hành</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="lead text-xl text-gray-600 mb-6">
              Chúng tôi cam kết đảm bảo chất lượng sản phẩm và sự hài lòng của khách hàng thông qua chính sách bảo hành toàn diện. Dưới đây là thông tin chi tiết về chính sách bảo hành của chúng tôi.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Thời hạn bảo hành</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300 border mb-6">
                <thead>
                  <tr>
                    <th className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 bg-gray-50">Loại sản phẩm</th>
                    <th className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 bg-gray-50">Thời gian bảo hành</th>
                    <th className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 bg-gray-50">Phạm vi bảo hành</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Máy nông nghiệp</td>
                    <td className="py-4 px-4 text-sm text-gray-900">24 tháng</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Lỗi kỹ thuật, hư hỏng do nhà sản xuất</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Máy tự động</td>
                    <td className="py-4 px-4 text-sm text-gray-900">36 tháng</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Toàn bộ hệ thống, bao gồm các linh kiện điện tử</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Máy xây dựng</td>
                    <td className="py-4 px-4 text-sm text-gray-900">18 tháng</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Động cơ và hệ thống vận hành chính</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Phụ tùng thay thế</td>
                    <td className="py-4 px-4 text-sm text-gray-900">6 tháng</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Lỗi kỹ thuật, không bao gồm hao mòn tự nhiên</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 italic mb-6">
              Thời gian bảo hành được tính từ ngày mua hàng theo hóa đơn hoặc phiếu bảo hành.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Điều kiện bảo hành</h2>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Điều kiện được bảo hành</h3>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Sản phẩm còn trong thời hạn bảo hành theo quy định</li>
              <li>Phiếu bảo hành và hóa đơn mua hàng còn nguyên vẹn, không có dấu hiệu chỉnh sửa</li>
              <li>Tem bảo hành, mã sản phẩm, số seri còn nguyên vẹn</li>
              <li>Sản phẩm bị lỗi kỹ thuật do nhà sản xuất</li>
              <li>Sản phẩm được sử dụng đúng mục đích, công năng và theo hướng dẫn của nhà sản xuất</li>
            </ul>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Điều kiện không được bảo hành</h3>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Sản phẩm hết thời hạn bảo hành</li>
              <li>Phiếu bảo hành hoặc tem bảo hành bị mất, rách, không còn nguyên vẹn</li>
              <li>Sản phẩm bị hư hỏng do tác động bên ngoài: va đập, rơi, vỡ, cháy, nổ, ngấm nước hoặc do thiên tai</li>
              <li>Sản phẩm bị hư hỏng do sử dụng sai hướng dẫn, quá tải hoặc sử dụng không đúng mục đích</li>
              <li>Sản phẩm bị hư hỏng do côn trùng, động vật gây ra</li>
              <li>Sản phẩm đã bị thay đổi, sửa chữa bởi người không được ủy quyền</li>
              <li>Hao mòn tự nhiên trong quá trình sử dụng (ví dụ: vết xước, phai màu, hoen gỉ...)</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 my-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Dịch vụ bảo hành mở rộng</h3>
              <p className="mb-4">
                Ngoài chính sách bảo hành tiêu chuẩn, chúng tôi còn cung cấp các gói bảo hành mở rộng, giúp khách hàng an tâm hơn khi sử dụng sản phẩm:
              </p>
              <ul className="list-disc pl-6">
                <li>Gói bảo hành mở rộng thêm 12 tháng</li>
                <li>Gói bảo hành toàn diện bao gồm cả hư hỏng do người dùng</li>
                <li>Gói bảo hành VIP với thời gian phản hồi và xử lý nhanh chóng</li>
              </ul>
              <p className="mt-4 font-medium">
                Vui lòng liên hệ với nhân viên bán hàng để biết thêm chi tiết về các gói bảo hành mở rộng.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Quy trình bảo hành</h2>
            
            <ol className="list-decimal pl-6 space-y-4 mb-6">
              <li>
                <strong>Tiếp nhận yêu cầu:</strong> Khách hàng liên hệ với chúng tôi qua hotline, email hoặc mang sản phẩm trực tiếp đến trung tâm bảo hành.
              </li>
              <li>
                <strong>Kiểm tra tình trạng:</strong> Nhân viên kỹ thuật kiểm tra sản phẩm và xác định nguyên nhân lỗi.
              </li>
              <li>
                <strong>Xác nhận bảo hành:</strong> Xác nhận điều kiện bảo hành và thông báo với khách hàng.
              </li>
              <li>
                <strong>Thực hiện bảo hành:</strong> Tiến hành sửa chữa, thay thế linh kiện hoặc đổi sản phẩm mới (tùy trường hợp).
              </li>
              <li>
                <strong>Kiểm tra sau bảo hành:</strong> Kiểm tra hoạt động của sản phẩm sau khi bảo hành.
              </li>
              <li>
                <strong>Bàn giao:</strong> Bàn giao sản phẩm đã bảo hành cho khách hàng và cập nhật thông tin bảo hành.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Thời gian xử lý bảo hành</h2>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>Sửa chữa thông thường:</strong> 3-7 ngày làm việc tùy theo mức độ hư hỏng và tình trạng linh kiện.
              </li>
              <li>
                <strong>Trường hợp phức tạp:</strong> 7-14 ngày làm việc đối với các lỗi kỹ thuật phức tạp hoặc cần đặt linh kiện thay thế.
              </li>
              <li>
                <strong>Bảo hành tại nhà:</strong> Lịch hẹn sẽ được sắp xếp trong vòng 24-48 giờ sau khi tiếp nhận yêu cầu (áp dụng cho một số sản phẩm lớn).
              </li>
            </ul>

            <p className="text-gray-500 italic mb-6">
              Trong trường hợp thời gian bảo hành kéo dài, chúng tôi sẽ cung cấp sản phẩm thay thế tạm thời cho khách hàng sử dụng (tùy theo tình trạng kho và loại sản phẩm).
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Trung tâm bảo hành</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Trung tâm bảo hành Hà Nội</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Địa chỉ:</strong> 123 Nguyễn Trãi, Quận Thanh Xuân, Hà Nội</li>
                  <li><strong>Điện thoại:</strong> (024) 1234 5678</li>
                  <li><strong>Email:</strong> warranty.hanoi@yourcompany.com</li>
                  <li><strong>Giờ làm việc:</strong> 8:00 - 17:30, Thứ 2 - Thứ 7</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Trung tâm bảo hành TP.HCM</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Địa chỉ:</strong> 456 Điện Biên Phủ, Quận 10, TP.HCM</li>
                  <li><strong>Điện thoại:</strong> (028) 9876 5432</li>
                  <li><strong>Email:</strong> warranty.hcm@yourcompany.com</li>
                  <li><strong>Giờ làm việc:</strong> 8:00 - 17:30, Thứ 2 - Thứ 7</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Chi phí bảo hành</h2>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>Trong thời hạn bảo hành:</strong> Miễn phí đối với các trường hợp thuộc phạm vi bảo hành.
              </li>
              <li>
                <strong>Ngoài thời hạn bảo hành:</strong> Khách hàng chịu chi phí linh kiện và nhân công theo báo giá cụ thể.
              </li>
              <li>
                <strong>Trường hợp không được bảo hành:</strong> Khách hàng chịu toàn bộ chi phí sửa chữa theo báo giá.
              </li>
              <li>
                <strong>Chi phí vận chuyển:</strong> Miễn phí trong bán kính 20km từ trung tâm bảo hành, các khu vực khác sẽ được báo giá cụ thể.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Chính sách đổi mới</h2>
            
            <p className="mb-4">
              Trong một số trường hợp đặc biệt, chúng tôi áp dụng chính sách đổi mới sản phẩm:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Sản phẩm bị lỗi nghiêm trọng trong vòng 30 ngày kể từ ngày mua hàng</li>
              <li>Đã tiến hành sửa chữa 3 lần nhưng vẫn không khắc phục được lỗi</li>
              <li>Không có sản phẩm cùng model để thay thế và khách hàng không đồng ý đổi sang model tương đương</li>
            </ul>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 my-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Lưu ý quan trọng</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vui lòng giữ lại hóa đơn mua hàng và phiếu bảo hành trong suốt thời gian sử dụng sản phẩm</li>
                <li>Đọc kỹ hướng dẫn sử dụng trước khi vận hành máy</li>
                <li>Tuân thủ lịch bảo dưỡng định kỳ để đảm bảo hiệu suất và tuổi thọ của máy</li>
                <li>Liên hệ với chúng tôi ngay khi phát hiện bất kỳ dấu hiệu bất thường nào</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Liên hệ bộ phận bảo hành</h2>
            
            <p className="mb-6">
              Nếu quý khách có bất kỳ thắc mắc nào về chính sách bảo hành hoặc cần hỗ trợ, vui lòng liên hệ:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Hotline bảo hành: 1800 1234 (miễn phí cuộc gọi)</li>
              <li>Email: warranty@yourcompany.com</li>
              <li>Giờ làm việc: 7:30 - 18:00, Thứ 2 - Thứ 7</li>
            </ul>
          </div>
        </div>
      </PolicyLayout>
      <Footer />
    </>
  );
}