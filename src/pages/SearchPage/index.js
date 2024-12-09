// src/pages/SearchPage/index.js
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import products from '~/components/data/products'; // Import danh sách sản phẩm
import { Link } from 'react-router-dom';
import { CartContext } from '~/components/Cartcontext';
import './SearchPage.scss';

function SearchPage() {
    const query = new URLSearchParams(useLocation().search).get('query'); // Lấy query từ URL
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));

    const { addToCart } = useContext(CartContext);

    return (
        <div className="products-search">
            <h2 className="search-title">Kết quả tìm kiếm cho: "{query}"</h2>
            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="product-search-card">
                            <Link to={`/product/${product.id}`}>
                                <img src={product.image} alt={product.name} className="product-image-search" />
                                <div className="product-search-left">
                                    <p className="product-search-name">{product.name}</p>
                                    <p className="product-search-price">{product.price}</p>
                                </div>
                            </Link>
                            <div className="product-search-right">
                                <button className="add_to_cart" onClick={() => addToCart(product)}>
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Không tìm thấy sản phẩm nào.</p>
                )}
            </div>
        </div>
    );
}

export default SearchPage;
