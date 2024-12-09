import React from 'react';

import img1 from '../../asset/slider/nen.jpg';
import './Introduce.scss';
function Introduce() {
    return (
        <div className="intro_wrapper">
            <div className="intro_container">
                <div className="intro_left">
                    <img src={img1} alt="banner" className="left_intro_img"></img>
                </div>
                <div className="intro_right">
                    <h2 className="intro_tilte">Giới thiệu</h2>
                    <div className="lorem_intro">
                        <p className="p_intro">
                            Nike, Inc. là một trong những thương hiệu thể thao hàng đầu thế giới, được thành lập vào
                            ngày 25 tháng 1 năm 1964 bởi Bill Bowerman và Phil Knight với tên ban đầu là Blue Ribbon
                            Sports, sau đó đổi thành Nike vào năm 1971. Tên "Nike" được lấy cảm hứng từ nữ thần chiến
                            thắng của Hy Lạp.
                        </p>
                        <p className="p_intro">
                            Trụ sở chính của Nike đặt tại Beaverton, Oregon, Mỹ. Công ty nổi tiếng với các sản phẩm giày
                            dép, quần áo, dụng cụ thể thao và phụ kiện, đồng thời là nhà tài trợ lớn trong lĩnh vực thể
                            thao chuyên nghiệp. Nike đã hợp tác với nhiều vận động viên và đội tuyển nổi tiếng như
                            Michael Jordan, Cristiano Ronaldo, Serena Williams và các câu lạc bộ bóng đá hàng đầu
                        </p>
                        <p className="p_intro">
                            Biểu tượng dấu Swoosh và slogan "Just Do It" đã trở thành dấu ấn toàn cầu, giúp Nike duy trì
                            vị thế dẫn đầu trong ngành công nghiệp thể thao, hướng đến đổi mới, chất lượng và phong
                            cách.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduce;
