import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Thay useHistory bằng useNavigate
import { registerUser } from '~/api/api'; // Nhập hàm từ api.js
import './Register.scss';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState(''); // Thêm trường email
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Mật khẩu không khớp!');
            return;
        }

        try {
            const result = await registerUser(username, email, password); // Gọi hàm registerUser  từ api.js

            if (result.success) {
                setMessage('Đăng ký thành công!');
                // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
                navigate('/Login'); // Sử dụng navigate để chuyển hướng
            } else {
                setMessage(result.message || 'Tên đăng nhập đã tồn tại.'); // Hiển thị thông báo từ server
            }
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            setMessage('Có lỗi xảy ra. Vui lòng thử lại.');
        }
    };

    return (
        <div className="register_wrapper">
            <div className="register_container">
                <div className="image-section">
                    <img src="/images/alad.jpg" alt="University" className="background-image" />
                </div>
                <div className="register-section">
                    <form className="register-form" onSubmit={handleRegister}>
                        <img src="/images/logoDAU.png" alt="logo" className="logoregister" />
                        <h2 className="register-title">ĐĂNG KÝ</h2>
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
                            <label htmlFor="email">Email</label> {/* Thêm trường email */}
                            <input
                                type="email"
                                id="email"
                                placeholder="email@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                        <div className="form-group">
                            <label htmlFor="confirm-password">Nhập lại mật khẩu</label>
                            <input
                                type="password"
                                id="confirm-password"
                                placeholder="Nhập lại password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="register-button">
                            Đăng ký
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
