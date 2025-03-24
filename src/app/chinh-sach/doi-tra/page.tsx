import React from 'react';

import { Metadata } from 'next';

import PolicyLayout from '../PolicyLayout';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'Chính Sách Đổi Trả | Your Company Name',
  description: 'Hướng dẫn về quy trình đổi trả, hoàn tiền và các điều kiện áp dụng',
};

export default function ReturnPolicyPage() {
  return (
    <>
      <Header />
      <PolicyLayout activePolicyId="doi-tra">
        <div className="bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Chính Sách Đổi Trả</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="lead text-xl text-gray-600 mb-6">
              Chúng tôi luôn mong muốn đem đến sự hài lòng tuyệt đối cho khách hàng với sản phẩm và dịch vụ của mình. Chính sách đổi trả này được thiết kế để đảm bảo quyền lợi của quý khách khi mua sắm tại công ty chúng tôi.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Thời hạn đổi trả</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300 border mb-6">
                <thead>
                  <tr>
                    <th className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 bg-gray-50">Lý do đổi trả</th>
                    <th className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 bg-gray-50">Thời hạn</th>
                    <th className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 bg-gray-50">Điều kiện</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Lỗi kỹ thuật do nhà sản xuất</td>
                    <td className="py-4 px-4 text-sm text-gray-900">30 ngày</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Sản phẩm còn nguyên vẹn, đầy đủ phụ kiện</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Sản phẩm không đúng mẫu mã, chủng loại, mô tả</td>
                    <td className="py-4 px-4 text-sm text-gray-900">7 ngày</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Sản phẩm chưa qua sử dụng, còn nguyên tem niêm phong</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Sản phẩm giao thiếu phụ kiện, thiếu bộ phận</td>
                    <td className="py-4 px-4 text-sm text-gray-900">7 ngày</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Yêu cầu bằng chứng về việc thiếu phụ kiện</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm text-gray-900">Thay đổi nhu cầu sử dụng</td>
                    <td className="py-4 px-4 text-sm text-gray-900">3 ngày</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Sản phẩm còn nguyên vẹn, chưa qua sử dụng</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 italic mb-6">
              Thời hạn đổi trả được tính từ ngày khách hàng nhận được sản phẩm.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Điều kiện đổi trả</h2>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Điều kiện chung</h3>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Sản phẩm phải còn nguyên vẹn, không có dấu hiệu đã qua sử dụng</li>
              <li>Đầy đủ phụ kiện, tài liệu hướng dẫn, thẻ bảo hành, quà tặng kèm theo (nếu có)</li>
              <li>Còn đầy đủ bao bì, hộp đựng sản phẩm ban đầu</li>
              <li>Có hóa đơn mua hàng hoặc phiếu xuất kho</li>
            </ul>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Các trường hợp không áp dụng đổi trả</h3>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Sản phẩm đã qua sử dụng, có dấu hiệu hư hỏng, trầy xước do người dùng</li>
              <li>Sản phẩm không còn đầy đủ tem, nhãn, bao bì đóng gói ban đầu</li>
              <li>Sản phẩm đã được lắp đặt, cài đặt hoặc tích hợp vào hệ thống</li>
              <li>Sản phẩm được sản xuất theo yêu cầu đặc biệt của khách hàng</li>
              <li>Các phụ tùng, vật tư tiêu hao đã được sử dụng</li>
              <li>Chênh lệch về màu sắc, thiết kế nằm trong sai số cho phép của nhà sản xuất</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 my-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Chính sách đổi trả linh hoạt cho khách hàng VIP</h3>
              <p className="mb-4">
                Đối với khách hàng thân thiết và khách hàng VIP, chúng tôi áp dụng chính sách đổi trả linh hoạt hơn:
              </p>
              <ul className="list-disc pl-6">
                <li>Thời gian đổi trả kéo dài lên đến 60 ngày</li>
                <li>Miễn phí đổi trả sản phẩm dù với bất kỳ lý do nào</li>
                <li>Hỗ trợ tháo lắp, vận chuyển tận nơi</li>
                <li>Ưu tiên xử lý đơn hàng và yêu cầu đổi trả</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Quy trình đổi trả</h2>
            
            <ol className="list-decimal pl-6 space-y-4 mb-6">
              <li>
                <strong>Thông báo yêu cầu đổi trả:</strong> Khách hàng liên hệ với chúng tôi qua hotline, email hoặc trực tiếp tại cửa hàng để thông báo về việc muốn đổi trả.
              </li>
              <li>
                <strong>Cung cấp thông tin:</strong> Cung cấp thông tin đơn hàng, lý do đổi trả và hình ảnh sản phẩm (nếu có).
              </li>
              <li>
                <strong>Xác nhận yêu cầu:</strong> Bộ phận chăm sóc khách hàng sẽ xác nhận yêu cầu đổi trả và hướng dẫn khách hàng các bước tiếp theo.
              </li>
              <li>
                <strong>Kiểm tra sản phẩm:</strong> Nhân viên kỹ thuật kiểm tra sản phẩm để xác định tình trạng và nguyên nhân lỗi.
              </li>
              <li>
                <strong>Xử lý đổi trả:</strong> Tùy vào kết quả kiểm tra, chúng tôi sẽ thực hiện đổi sản phẩm mới hoặc hoàn tiền.
              </li>
              <li>
                <strong>Hoàn tất quá trình:</strong> Giao sản phẩm mới hoặc hoàn tiền cho khách hàng.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hình thức đổi trả</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <svg className="h-8 w-8 text-blue-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <h3 className="text-lg font-semibold">Đổi sản phẩm khác</h3>
                </div>
                <p>Khách hàng có thể đổi sang sản phẩm cùng loại hoặc sản phẩm khác tương đương giá trị. Nếu sản phẩm mới có giá trị cao hơn, khách hàng sẽ thanh toán phần chênh lệch.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <svg className="h-8 w-8 text-blue-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <h3 className="text-lg font-semibold">Hoàn tiền</h3>
                </div>
                <p>Trong trường hợp không có sản phẩm thay thế phù hợp, chúng tôi sẽ hoàn tiền cho khách hàng theo phương thức thanh toán ban đầu hoặc chuyển khoản ngân hàng.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Chi phí đổi trả</h2>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>Lỗi từ nhà sản xuất:</strong> Miễn phí đổi trả và vận chuyển.
              </li>
              <li>
                <strong>Lỗi do đơn vị vận chuyển:</strong> Miễn phí đổi trả và vận chuyển.
              </li>
              <li>
                <strong>Đổi trả theo nhu cầu khách hàng:</strong> Khách hàng chịu chi phí vận chuyển hai chiều và phí tái nhập kho (nếu có).
              </li>
              <li>
                <strong>Đổi trả do cung cấp thông tin sai:</strong> Tùy theo mức độ sai lệch, khách hàng có thể phải chịu một phần hoặc toàn bộ chi phí phát sinh.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Thời gian xử lý đổi trả</h2>
            
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>Xác nhận yêu cầu:</strong> Trong vòng 24 giờ làm việc kể từ khi nhận được thông báo.
              </li>
              <li>
                <strong>Kiểm tra và xử lý:</strong> 1-3 ngày làm việc sau khi nhận được sản phẩm trả lại.
              </li>
              <li>
                <strong>Đổi sản phẩm mới:</strong> 3-7 ngày làm việc tùy theo tình trạng kho hàng.
              </li>
              <li>
                <strong>Hoàn tiền:</strong> 5-10 ngày làm việc tùy theo phương thức thanh toán ban đầu và ngân hàng.
              </li>
            </ul>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 my-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Lưu ý quan trọng</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Quý khách vui lòng kiểm tra kỹ sản phẩm trước khi nhận hàng từ đơn vị vận chuyển</li>
                <li>Giữ lại tất cả hóa đơn, chứng từ và bao bì sản phẩm cho đến khi hết thời hạn đổi trả</li>
                <li>Chụp ảnh hoặc quay video tình trạng sản phẩm trước khi gửi trả để làm bằng chứng khi cần thiết</li>
                <li>Liên hệ với chúng tôi ngay khi phát hiện vấn đề với sản phẩm để được hỗ trợ kịp thời</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hướng dẫn đóng gói sản phẩm trả lại</h2>
            
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>Sử dụng hộp đựng ban đầu hoặc hộp có kích thước phù hợp</li>
              <li>Bọc sản phẩm bằng túi nilon hoặc giấy bọc để tránh bụi, nước</li>
              <li>Sử dụng vật liệu chèn lót (xốp, giấy...) để bảo vệ sản phẩm</li>
              <li>Dán kín các mép hộp bằng băng keo chắc chắn</li>
              <li>Ghi rõ thông tin người gửi, người nhận và mã đơn hàng trên kiện hàng</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Liên hệ bộ phận đổi trả</h2>
            
            <p className="mb-6">
              Nếu quý khách có bất kỳ thắc mắc nào về chính sách đổi trả hoặc cần hỗ trợ, vui lòng liên hệ:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Hotline đổi trả: 1800 9876 (miễn phí cuộc gọi)</li>
              <li>Email: returns@yourcompany.com</li>
              <li>Giờ làm việc: 8:00 - 17:30, Thứ 2 - Thứ 6</li>
              <li>Địa chỉ tiếp nhận đổi trả: 123 Nguyễn Văn Linh, Quận 7, TP.HCM</li>
            </ul>
          </div>
        </div>
      </PolicyLayout>
      <Footer />
    </>
  );
}