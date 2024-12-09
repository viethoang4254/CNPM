// src/components/ProductCard/index.js
import React, { useContext } from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { CartContext } from '../Cartcontext'; // Import CartContext

function ProductCard({ product }) {
    const { addToCart } = useContext(CartContext); // Lấy hàm addToCart từ context

    return (
        <div className="wrapper">
            <div className="product_card">
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} className="product_image" />
                    <div className="product_left">
                        <p className="product_name">{product.name}</p>
                        <p className="product_price">{product.price}</p>
                    </div>
                </Link>
                <div className="product_right">
                    <button className="add_to_cart" onClick={() => addToCart(product)}>
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
