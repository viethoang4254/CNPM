import React, { useState, useEffect } from 'react';
import NavbarAdmin from '~/components/Layout/DefaultLayout/navbar-admin';
import SidebarAdmin from '~/components/Layout/DefaultLayout/Sidebar-admin';
import './UserManagement.scss';

function UserManagement() {
    const [users, setUsers] = useState([]); // Lưu trữ danh sách người dùng
    const [newUser, setNewUser] = useState({ name: '', email: '' });
    const [editingUser, setEditingUser] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleAddUser = (e) => {
        e.preventDefault();
        if (newUser.name && newUser.email) {
            setUsers([...users, { ...newUser, id: Date.now() }]);
            setNewUser({ name: '', email: '' });
        }
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const handleEditUser = (user) => {
        setEditingUser(user);
        setNewUser(user);
    };

    const handleSaveUser = (e) => {
        e.preventDefault();
        if (newUser.name && newUser.email) {
            setUsers(users.map((user) => (user.id === editingUser.id ? newUser : user)));
            setEditingUser(null);
            setNewUser({ name: '', email: '' });
        }
    };

    useEffect(() => {
        // Gọi API để lấy dữ liệu người dùng
        fetch('/api/users') // Thay đổi endpoint nếu cần
            .then((response) => response.json())
            .then((data) => setUsers(data)) // Cập nhật danh sách người dùng từ API
            .catch((error) => console.error('Lỗi khi lấy người dùng:', error));
    }, []); // useEffect chạy khi component mount

    return (
        <div className="user-management">
            <NavbarAdmin />
            <div className="user-content">
                <SidebarAdmin />
                <div className="user-table">
                    <h2>Quản Lý Người Dùng</h2>
                    {editingUser ? (
                        <form onSubmit={handleSaveUser} className="edit-user-form">
                            <input
                                type="text"
                                name="name"
                                placeholder="Tên người dùng"
                                value={newUser.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email người dùng"
                                value={newUser.email}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit">Lưu Thay Đổi</button>
                            <button onClick={() => setEditingUser(null)}>Hủy</button>
                        </form>
                    ) : (
                        <form onSubmit={handleAddUser} className="add-user-form">
                            <input
                                type="text"
                                name="name"
                                placeholder="Tên người dùng"
                                value={newUser.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email người dùng"
                                value={newUser.email}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit">Thêm Người Dùng</button>
                        </form>
                    )}
                    <table className="user-list">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên</th>
                                <th>Email</th>
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button onClick={() => handleEditUser(user)}>Sửa</button>
                                        <button onClick={() => handleDeleteUser(user.id)}>Xóa</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserManagement;
