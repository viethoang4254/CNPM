import React from 'react';
import './Contact.scss';

function Contact() {
    return (
        <div className="contact_wrapper">
            <div className="contact_container">
                {/* Di chuyển ảnh qua bên phải */}
                <div className="contact_container_info">
                    <div className="contact_left">
                        <h2 className="contact_h2">GỬI THẮC MẮC CHO CHÚNG TÔI</h2>
                        <form>
                            <div className="contact_input">
                                <label>Họ và tên</label>
                                <input type="text" placeholder="Nhập họ và tên"></input>
                            </div>
                            <div className="contact_input">
                                <label>Số điện thoại</label>
                                <input type="number" placeholder="Nhập số điện thoại của bạn"></input>
                            </div>
                            <div className="contact_input">
                                <label>Email</label>
                                <input type="email" placeholder="Nhập email của bạn"></input>
                            </div>
                            <div className="contact_input">
                                <label>Nội dung</label>
                                <textarea placeholder="Nội dung"></textarea>
                            </div>
                            <div className="contact_button">
                                <button className="contact_btn">Gửi nội dung </button>
                            </div>
                        </form>
                    </div>
                    {/* Bỏ phần thông tin liên hệ */}
                </div>
                <div className="contact_gg_map">
                    {/* Giữ phần ảnh ở đây */}
                    <img src="/images/ggmap.png" alt="Map" className="map-image" />
                </div>
            </div>
        </div>
    );
}

export default Contact;
