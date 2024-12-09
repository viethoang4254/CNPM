import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '~/components/Cartcontext';
import { Link } from 'react-router-dom';
import './cartpage.scss';

function Cart() {
    const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, updateColor, updateSize } =
        useContext(CartContext);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const calculateTotal = () => {
            const total = cartItems.reduce((sum, item) => {
                const price = parseFloat(item.price.replace(/[^\d.]/g, '').replace(',', '')) || 0;
                return sum + price * item.quantity;
            }, 0);
            setTotalAmount(total);
        };

        calculateTotal();
    }, [cartItems]);

    // Mảng màu sắc
    const colors = ['Đỏ', 'Xanh dương', 'Xanh lá', 'Vàng', 'Đen'];

    return (
        <div className="cart-wrapper">
            <h2 className="cart-title">Giỏ Hàng</h2>
            {cartItems.length === 0 ? (
                <p>
                    Giỏ hàng của bạn trống. Thêm sản phẩm{' '}
                    <Link to="/product" className="link-product">
                        tại đây
                    </Link>
                </p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <Link to={`/product/${item.id}`}>
                                <img src={item.image} alt={item.name} className="cart-image" />
                            </Link>
                            <div className="cart-item-center">
                                <p className="cart-name">{item.name}</p>
                                <p className="cart-price">{item.price}</p>

                                {/* Chọn Size */}
                                <div className="size-selector">
                                    <label htmlFor={`size-${item.id}`}>Size:</label>
                                    <select
                                        id={`size-${item.id}`}
                                        value={item.size || ''}
                                        onChange={(e) => updateSize(item.id, e.target.value)} // Cập nhật size
                                    >
                                        <option value="">Chọn size</option>
                                        {[...Array(21)].map((_, index) => {
                                            const size = 25 + index; // Size từ 25 đến 45
                                            return (
                                                <option key={size} value={size}>
                                                    {size}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>

                                {/* Chọn Màu sắc */}
                                <div className="color-selector">
                                    <label htmlFor={`color-${item.id}`}>Màu:</label>
                                    <select
                                        id={`color-${item.id}`}
                                        value={item.color || ''}
                                        onChange={(e) => updateColor(item.id, e.target.value)} // Cập nhật màu
                                    >
                                        <option value="">Chọn màu</option>
                                        {colors.map((color) => (
                                            <option key={color} value={color}>
                                                {color}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="quantity-control">
                                <button onClick={() => decreaseQuantity(item.id)} className="btn-cart-giam">
                                    -
                                </button>
                                <span className="cart-value-quantity">{item.quantity}</span>
                                <button onClick={() => increaseQuantity(item.id)} className="btn-cart-tang">
                                    +
                                </button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="remove-button">
                                Xóa
                            </button>
                        </div>
                    ))}
                </div>
            )}
            {cartItems.length > 0 && (
                <div className="cart-right">
                    <div className="cart-header-right">
                        <h2 className="cart-header-right-info">Thông tin đơn hàng</h2>
                        <p className="cart-header-right-sum">
                            Tổng tiền: <span className="value">{totalAmount.toLocaleString()} VND</span>
                        </p>
                    </div>

                    <div className="cart-footer">
                        <Link to="/payment">
                            <button className="cart-footer-btn">Thanh toán ngay</button>
                        </Link>

                        <Link to="/product" className="link-product">
                            Tiếp tục mua hàng
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
