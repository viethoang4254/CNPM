import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '~/components/Cartcontext';
import { useNavigate } from 'react-router-dom';
import './Payment.scss';

function Payment() {
    const { cartItems } = useContext(CartContext);
    const [totalAmount, setTotalAmount] = useState(0);
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
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
            recipient_name: cardName,
            phone_number: cardNumber,
            address: expiryDate,
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
                    recipientName: cardName,
                    totalAmount: formatCurrency(totalAmount),
                    paymentTime: paymentTime,
                });
                localStorage.setItem('payments', JSON.stringify(savedPayments));

                // Chuyển hướng đến trang xác nhận đơn hàng
                navigate('/order-confirmation', { state: { orderId: data.message, paymentTime } });
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
                    <label htmlFor="card-name">Tên người nhận</label>
                    <input
                        id="card-name"
                        type="text"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="card-number">Số điện thoại</label>
                    <input
                        id="card-number"
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="expiry-date">Địa chỉ</label>
                    <input
                        id="expiry-date"
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cvv">Phương thức thanh toán</label>
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
