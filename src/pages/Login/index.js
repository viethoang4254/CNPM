// src/pages/Login/index.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '~/api/api'; // Nhập hàm từ api.js
import { AuthContext } from '~/components/AuthContext'; // Nhập AuthContext
import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext); // Lấy hàm login từ AuthContext

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const result = await loginUser(username, password); // Gọi hàm loginUser  từ api.js

            if (result.success) {
                setMessage('Đăng nhập thành công!');
                login(result.user); // Cập nhật thông tin người dùng vào AuthContext
                localStorage.setItem('user', JSON.stringify(result.user));
                navigate('/'); // Chuyển hướng đến trang chính sau khi đăng nhập thành công
            } else {
                setMessage(result.message || 'Tên đăng nhập hoặc mật khẩu không đúng.'); // Hiển thị thông báo từ server
            }
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            setMessage('Có lỗi xảy ra. Vui lòng thử lại.');
        }
    };

    return (
        <div className="login_wrapper">
            <div className="login-container">
                <div className="image-section">
                    <img src="/images/alad.jpg" alt="University" className="background-image" />
                </div>
                <div className="login-section">
                    <form className="login-form" onSubmit={handleLogin}>
                        <img src="/images/logoDAU.png" alt="logo" className="logoLogin" />
                        <h2 className="login-title">ĐĂNG NHẬP</h2>
                        {message && <p className="message">{message}</p>} {/* Hiển thị thông báo */}
                        <div className="form-group">
                            <label htmlFor="username">Tên đăng nhập</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Mật khẩu</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">
                            Đăng nhập
                        </button>
                        <div className="register-p">
                            <p className="footer-p">
                                Đăng kí tài khoản:{' '}
                                <Link to="/register">
                                    <span>Tại đây</span>
                                </Link>{' '}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
