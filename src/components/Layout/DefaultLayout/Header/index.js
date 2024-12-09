import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { IoSearchSharp } from 'react-icons/io5';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { LuUserCircle2 } from 'react-icons/lu';
import { CartContext } from '~/components/Cartcontext';
import { AuthContext } from '~/components/AuthContext'; // Nhập AuthContext
import './Header.scss';

function Header() {
    const { getTotalQuantity } = useContext(CartContext);
    const { user, logout } = useContext(AuthContext); // Lấy thông tin người dùng và hàm logout từ AuthContext
    const totalQuantity = getTotalQuantity();

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`); // Sử dụng navigate để điều hướng
            setSearchQuery(''); // Reset input tìm kiếm
        }
    };

    return (
        <header className="header">
            <img src="/images/logoas.png" alt="logo" className="logo" />
            <nav className="header_nav">
                <ul className="header_nav_list">
                    <li>
                        <Link to="/" exact activeClassName="active">
                            Trang Chủ
                        </Link>
                    </li>
                    <li>
                        <Link to="/product" activeClassName="active">
                            Sản Phẩm
                        </Link>
                    </li>
                    <li>
                        <Link to="/introduce" activeClassName="active">
                            Giới Thiệu
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" activeClassName="active">
                            Liên Hệ
                        </Link>
                    </li>
                </ul>
            </nav>
            <form onSubmit={handleSearch} className="header_search">
                <input
                    type="text"
                    className="header_search_input"
                    placeholder="tìm kiếm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="header_search_icon">
                    <IoSearchSharp />
                </button>
            </form>
            <div className="header_cart">
                <div className="header_cart_icon">
                    <Link to="/cartpage">
                        <LiaShoppingCartSolid />
                        {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
                    </Link>
                </div>
            </div>
            <div className="header_right">
                <div className="btn_header">
                    {user ? (
                        <>
                            <Link to="/lichsu">
                                <div className="icon-user">
                                    <i className="">
                                        {' '}
                                        <LuUserCircle2 />
                                    </i>
                                    <span className="username">{user.username}</span> {/* Hiển thị tên người dùng */}
                                </div>
                            </Link>
                            <button className="btn_logout" onClick={logout}>
                                Đăng Xuất
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="btn_header_login">
                                <Link to="/login">
                                    <button className="btn_login">Đăng Nhập</button>
                                </Link>
                            </div>
                            <div className="btn_header_register">
                                <Link to="/register">
                                    <button className="btn_register">Đăng Ký</button>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
