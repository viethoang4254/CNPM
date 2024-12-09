import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './OrderConfirmation.scss';

function OrderConfirmation() {
    const location = useLocation();
    const { orderId, paymentTime } = location.state || { orderId: null, paymentTime: null };

    return (
        <div className="order-wrapper">
            <h2 className="order-title">Xác Nhận Đơn Hàng</h2>
            <div className="order-summary">
                {orderId ? (
                    <>
                        <p className="order-success">Đơn hàng của bạn đã được tạo thành công!</p>
                        <div className="order-details">
                            <span className="order-item">
                                Mã Đơn Hàng: <strong>{orderId}</strong>
                            </span>
                            <span className="order-item">
                                Thời Gian Thanh Toán: <strong>{paymentTime}</strong>
                            </span>
                        </div>
                        <Link to="/product" className="order-button">
                            Tiếp Tục Mua Sắm
                        </Link>
                    </>
                ) : (
                    <p className="order-error">Đã xảy ra lỗi khi tạo đơn hàng.</p>
                )}
            </div>
        </div>
    );
}

export default OrderConfirmation;
