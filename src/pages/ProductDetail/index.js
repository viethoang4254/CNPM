import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import products from '~/components/data/products';
import './ProductDetail.scss';

function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    const [size, setSize] = useState('25'); // State để lưu size giày, mặc định là 25
    const [color, setColor] = useState('Red'); // State để lưu màu giày, mặc định là 'Red'
    const [quantity, setQuantity] = useState(1);
    if (!product) {
        return <div>Không tìm thấy sản phẩm!</div>;
    }

    const handleSizeChange = (e) => {
        setSize(e.target.value); // Cập nhật size giày đã chọn
    };

    const handleColorChange = (e) => {
        setColor(e.target.value); // Cập nhật màu giày đã chọn
    };
    const handleQuantityChange = (e) => {
        setQuantity(Math.max(1, e.target.value)); // Đảm bảo số lượng >= 1
    };

    // Tạo các size giày từ 25 đến 45
    const sizes = [];
    for (let i = 25; i <= 45; i++) {
        sizes.push(i);
    }

    // Các màu sắc có thể chọn
    const colors = ['Red', 'Blue', 'Green', 'Black', 'White'];

    return (
        <div className="product-detail">
            <Header />
            <div className="product-detail-content">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">{product.price}</p>
                    <p className="product-description">{product.description}</p>
                    <div className="product-mass"></div>
                    {/* Chọn Size */}
                    <h5>Size</h5>
                    <div className="size-selector">
                        <select value={size} onChange={handleSizeChange} className="size-dropdown">
                            {sizes.map((sizeValue) => (
                                <option key={sizeValue} value={sizeValue}>
                                    {sizeValue}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Chọn Màu */}
                    <h5>Màu</h5>
                    <div className="color-selector">
                        <select value={color} onChange={handleColorChange} className="color-dropdown">
                            {colors.map((colorValue) => (
                                <option key={colorValue} value={colorValue}>
                                    {colorValue}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button className="btn-add-cart">Thêm vào giỏ hàng</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetail;
