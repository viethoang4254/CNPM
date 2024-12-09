import React from 'react';
import './Sidebar.scss';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <h3>Loại Giày</h3>
                <ul>
                    <li>
                        <input type="checkbox" id="sneakers" />
                        <label htmlFor="sneakers">Giày Thể Thao</label>
                    </li>
                    <li>
                        <input type="checkbox" id="boots" />
                        <label htmlFor="boots">Giày Boot</label>
                    </li>
                    <li>
                        <input type="checkbox" id="flats" />
                        <label htmlFor="flats">Giày Bệt</label>
                    </li>
                    <li>
                        <input type="checkbox" id="high-heels" />
                        <label htmlFor="high-heels">Giày Cao Gót</label>
                    </li>
                    <li>
                        <input type="checkbox" id="slippers" />
                        <label htmlFor="slippers">Giày Dép</label>
                    </li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3>Giá Giày</h3>
                <ul>
                    <li>
                        <input type="checkbox" id="below-500k" />
                        <label htmlFor="below-500k">Dưới 500,000đ</label>
                    </li>
                    <li>
                        <input type="checkbox" id="500k-1m" />
                        <label htmlFor="500k-1m">500,000đ - 1,000,000đ</label>
                    </li>
                    <li>
                        <input type="checkbox" id="1m-2m" />
                        <label htmlFor="1m-2m">1,000,000đ - 2,000,000đ</label>
                    </li>
                    <li>
                        <input type="checkbox" id="above-2m" />
                        <label htmlFor="above-2m">Trên 2,000,000đ</label>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
