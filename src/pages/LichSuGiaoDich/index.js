// src/pages/PaymentHistory/index.js
import React, { useEffect, useState } from 'react';
import './Lichsu.scss';
function PaymentHistory() {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        // Giả sử bạn lưu thông tin thanh toán vào localStorage
        const savedPayments = JSON.parse(localStorage.getItem('payments')) || [];
        setPayments(savedPayments);
    }, []);

    return (
        <div className="lichsu">
            <h2>Lịch sử thanh toán</h2>
            {payments.length === 0 ? (
                <p>Chưa có thông tin thanh toán nào.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Mã đơn hàng</th>
                            <th>Tên người nhận</th>
                            <th>Tổng số tiền</th>
                            <th>Thời gian thanh toán</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={index}>
                                <td>{payment.orderId}</td>
                                <td>{payment.recipientName}</td>
                                <td>{payment.totalAmount}</td>
                                <td>{payment.paymentTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default PaymentHistory;
