// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost/myapi/api.php'; // Địa chỉ đến file api.php

export const registerUser = async (username, email, password) => {
    try {
        const response = await axios.post(
            API_URL,
            {
                action: 'register',
                username,
                email,
                password,
            },
            {
                headers: {
                    'Content-Type': 'application/json', // Đặt header là application/json
                },
            },
        );
        return response.data; // Trả về dữ liệu từ server
    } catch (error) {
        console.error('Error registering user:', error);
        throw error; // Ném lỗi ra ngoài để xử lý ở nơi gọi
    }
};

export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(
            API_URL,
            {
                action: 'login',
                username,
                password,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );

        console.log(response.data); // Kiểm tra dữ liệu trả về từ API

        // Kiểm tra phản hồi từ server
        if (response.data.success) {
            return {
                success: true,
                user: response.data.user, // Đảm bảo rằng bạn lấy thông tin người dùng từ phản hồi
            };
        } else {
            return {
                success: false,
                message: response.data.message, // Thông báo lỗi từ server
            };
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error; // Ném lỗi ra ngoài để xử lý ở nơi gọi
    }
};
