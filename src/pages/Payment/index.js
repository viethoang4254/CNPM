import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '~/components/Cartcontext';
import { useNavigate } from 'react-router-dom';
import './Payment.scss';

function Payment() {
    const { cartItems } = useContext(CartContext);
    const [totalAmount, setTotalAmount] = useState(0);
    const [recipientName, setRecipientName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [cvv, setCvv] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const calculateTotal = () => {
            const total = cartItems.reduce((sum, item) => {
                const price = parseFloat(item.price.replace(/[^\d.]/g, '').replace(',', ''));
                return sum + price * item.quantity;
            }, 0);
            setTotalAmount(total);
        };

        calculateTotal();
    }, [cartItems]);

    const formatCurrency = (amount) => {
        const number = Math.floor(amount);
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' VND';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const paymentData = {
            user_id: 1, // Giả sử bạn có user_id từ context hoặc state
            total_amount: totalAmount,
            payment_method: 'Credit Card',
            recipient_name: recipientName,
            phone_number: phoneNumber,
            address: address,
            cvv,
        };

        try {
            const response = await fetch('http://localhost/myapi/api.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'createOrder',
                    ...paymentData,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                const paymentTime = new Date().toLocaleString();

                // Lưu thông tin thanh toán vào localStorage
                const savedPayments = JSON.parse(localStorage.getItem('payments')) || [];
                savedPayments.push({
                    orderId: data.message,
                    recipientName: recipientName,
                    phoneNumber: phoneNumber,
                    address: address,
                    totalAmount: formatCurrency(totalAmount),
                    paymentTime: paymentTime,
                    status: 'pending', // Trạng thái ban đầu là 'pending'
                });
                localStorage.setItem('payments', JSON.stringify(savedPayments));

                // Chuyển hướng đến trang xác nhận đơn hàng
                navigate('/order-confirmation', { state: { orderId: data.message, paymentTime, status: 'pending' } });
            } else {
                alert('Error saving payment');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error saving payment');
        }
    };

    return (
        <div className="payment-wrapper">
            <h2>Thông tin thanh toán</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="recipient-name">Tên người nhận</label>
                    <input
                        id="recipient-name"
                        type="text"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone-number">Số điện thoại</label>
                    <input
                        id="phone-number"
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Địa chỉ</label>
                    <input
                        id="address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input id="cvv" type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
                </div>
                <div className="form-group">
                    <button type="submit">Thanh toán</button>
                </div>
                <div className="form-group">
                    <p>Tổng số tiền: {formatCurrency(totalAmount)}</p>
                </div>
            </form>
        </div>
    );
}

export default Payment;
