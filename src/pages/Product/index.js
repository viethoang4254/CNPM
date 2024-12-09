import React, { useState } from 'react';
import Sidebar from '~/components/Layout/DefaultLayout/Sidebar';

import ProductCard from '~/components/ProductCard/index';
import products from '~/components/data/products';
import './Product.scss';

function Product() {
    // State để lưu trang hiện tại
    const [currentPage, setCurrentPage] = useState(1);

    // Hàm để lấy các sản phẩm theo trang
    const productsPerPage = 8;
    const currentProducts = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    // Hàm thay đổi trang khi click vào nút
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="main">
            <div className="product_content">
                <Sidebar />
                <div className="product_content_slide">
                    <h2 className="content_title">TẤT CẢ SẢN PHẨM</h2>
                    <div className="sanpham">
                        {currentProducts.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                    <div className="product_page">
                        {/* Nút trang 1 */}
                        <button
                            className={`btn_product ${currentPage === 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(1)}
                        >
                            1
                        </button>
                        {/* Nút trang 2 */}
                        <button
                            className={`btn_product ${currentPage === 2 ? 'active' : ''}`}
                            onClick={() => handlePageChange(2)}
                        >
                            2
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
