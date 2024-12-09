import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
function Footer() {
    return (
        <div className="container">
            <footer className="footer">
                <div className="footer_sub">
                    <div className="footer_title">
                        <h4>Giới Thiệu</h4>
                    </div>
                    <div className="footer_info">
                        <p>Nike là thương hiệu hàng đầu thế giới về giày dép, quần áo và phụ kiện thể thao. </p>
                        <ul>
                            <li>Địa chỉ: 566 Núi Thành - Hòa Cường Nam - Hải Châu - TP Đà Nẵng</li>
                            <li>
                                <Link to="/">media.relations@nike.com</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer_sub">
                    <div className="footer_title">
                        <h4>Liên Kết</h4>
                    </div>
                    <div className="footer_info">
                        <ul>
                            <li>
                                <Link to="/">Trang Chủ</Link>
                            </li>
                            <li>
                                <Link to="/product">Sản Phẩm</Link>
                            </li>
                            <li>
                                <Link to="/introduce">Giới Thiệu</Link>
                            </li>
                            <li>
                                <Link to="/contact">Liên Hệ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer_sub">
                    <div className="footer_title">
                        <h4>Chính Sách</h4>
                    </div>
                    <div className="footer_info">
                        <ul>
                            <li>
                                <Link to="">About Nike</Link>
                            </li>
                            <li>
                                <Link to="">News</Link>
                            </li>
                            <li>
                                <Link to="">Careers</Link>
                            </li>
                            <li>
                                <Link to="">Investors</Link>
                            </li>
                            <li>
                                <Link to="">Report a Concern</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
