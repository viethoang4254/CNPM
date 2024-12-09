import React, { createContext, useState } from 'react'; // Xóa useEffect

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null; // Nếu có thông tin người dùng trong localStorage, sử dụng nó
    });

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Xóa thông tin người dùng khỏi localStorage khi đăng xuất
    };

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
