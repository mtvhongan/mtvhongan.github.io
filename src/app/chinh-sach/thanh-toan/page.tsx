import React from 'react';

import { Metadata } from 'next';

import PolicyLayout from '../PolicyLayout';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'Chính Sách Thanh Toán | Your Company Name',
  description: 'Thông tin chi tiết về các phương thức thanh toán, quy trình và các vấn đề liên quan',
};

export default function PaymentPolicyPage() {
  return (
    <>
      <Header />
      <PolicyLayout activePolicyId="thanh-toan">
        <div className="bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Chính Sách Thanh Toán</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="lead text-xl text-gray-600 mb-6">
              Chúng tôi cung cấp nhiều phương thức thanh toán linh hoạt và an toàn để đáp ứng nhu cầu của khách hàng. Dưới đây là chi tiết về các phương thức thanh toán và quy trình thanh toán của chúng tôi.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Các phương thức thanh toán</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <svg className="h-8 w-8 text-blue-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <h3 className="text-lg font-semibold">Thanh toán thẻ tín dụng/ghi nợ</h3>
                </div>
                <p>Chúng tôi chấp nhận thanh toán qua các thẻ Visa, MasterCard, JCB và American Express. Thông tin thẻ của bạn được bảo mật thông qua hệ thống mã hóa an toàn.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <svg className="h-8 w-8 text-blue-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold">Chuyển khoản ngân hàng</h3>
                </div>
                <p>Thanh toán bằng cách chuyển khoản trực tiếp đến tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng mã đơn hàng làm nội dung chuyển khoản.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <svg className="h-8 w-8 text-blue-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-lg font-semibold">Ví điện tử</h3>
                </div>
                <p>Chúng tôi hỗ trợ thanh toán qua các ví điện tử phổ biến như MoMo, ZaloPay, VNPay và PayPal, giúp giao dịch nhanh chóng và thuận tiện.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <svg className="h-8 w-8 text-blue-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-lg font-semibold">Thanh toán khi nhận hàng (COD)</h3>
                </div>
                <p>Đối với các đơn hàng trong nước, khách hàng có thể chọn phương thức thanh toán tiền mặt khi nhận hàng (COD).</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Quy trình thanh toán</h2>
            
            <ol className="list-decimal pl-6 space-y-4 mb-6">
              <li>
                <strong>Chọn sản phẩm:</strong> Thêm sản phẩm vào giỏ hàng và tiến hành thanh toán.
              </li>
              <li>
                <strong>Điền thông tin:</strong> Cung cấp thông tin giao hàng và liên hệ.
              </li>
              <li>
                <strong>Chọn phương thức thanh toán:</strong> Lựa chọn phương thức thanh toán phù hợp với bạn.
              </li>
              <li>
                <strong>Hoàn tất đơn hàng:</strong> Xác nhận và hoàn tất quá trình đặt hàng.
              </li>
              <li>
                <strong>Xác nhận đơn hàng:</strong> Bạn sẽ nhận được email xác nhận đơn hàng sau khi hoàn tất quá trình thanh toán.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Thời gian xử lý thanh toán</h2>
            
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>
                <strong>Thẻ tín dụng/ghi nợ:</strong> Thanh toán được xử lý ngay lập tức.
              </li>
              <li>
                <strong>Chuyển khoản ngân hàng:</strong> Có thể mất từ 1-3 ngày làm việc để xác nhận giao dịch.
              </li>
              <li>
                <strong>Ví điện tử:</strong> Thanh toán được xử lý trong vòng vài phút.
              </li>
              <li>
                <strong>COD:</strong> Thanh toán được xác nhận sau khi bạn nhận và thanh toán cho đơn hàng.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">An toàn và bảo mật</h2>
            
            <p className="mb-4">
              Chúng tôi cam kết bảo vệ thông tin thanh toán của khách hàng và sử dụng các biện pháp bảo mật tiên tiến để đảm bảo an toàn cho mọi giao dịch:
            </p>
            
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>Tất cả các giao dịch thanh toán được mã hóa bằng công nghệ SSL.</li>
              <li>Chúng tôi không lưu trữ thông tin thẻ tín dụng của khách hàng.</li>
              <li>Hệ thống thanh toán của chúng tôi tuân thủ các tiêu chuẩn bảo mật PCI DSS.</li>
              <li>Chúng tôi thường xuyên cập nhật hệ thống bảo mật để đảm bảo an toàn tối đa.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hoàn tiền và hủy đơn hàng</h2>
            
            <p className="mb-4">
              Trong trường hợp đơn hàng bị hủy hoặc yêu cầu hoàn tiền:
            </p>
            
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>Thời gian hoàn tiền phụ thuộc vào phương thức thanh toán ban đầu.</li>
              <li>Hoàn tiền cho thẻ tín dụng/ghi nợ có thể mất từ 7-14 ngày làm việc.</li>
              <li>Hoàn tiền qua chuyển khoản ngân hàng thường mất 3-5 ngày làm việc sau khi yêu cầu được phê duyệt.</li>
              <li>Để biết thêm thông tin chi tiết, vui lòng tham khảo chính sách đổi trả của chúng tôi.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Liên hệ hỗ trợ thanh toán</h2>
            
            <p className="mb-4">
              Nếu bạn có bất kỳ câu hỏi hoặc gặp vấn đề về thanh toán, vui lòng liên hệ với chúng tôi:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Email: payments@yourcompany.com</li>
              <li>Hotline: +84 (0) 123 456 789 (8:00 - 17:00, Thứ 2 - Thứ 6)</li>
              <li>Cổng hỗ trợ trực tuyến: Trò chuyện trực tiếp trên trang web của chúng tôi</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-8">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Lưu ý quan trọng</h3>
              <p>
                Chúng tôi không bao giờ yêu cầu thông tin thẻ tín dụng qua email hoặc điện thoại. Tất cả các giao dịch thanh toán chỉ được thực hiện thông qua cổng thanh toán an toàn trên trang web chính thức hoặc ứng dụng của chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </PolicyLayout>
      <Footer />
    </>
  );
}