import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Lưu vào localStorage khi `cartItems` thay đổi
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);
    const updateSize = (id, newSize) => {
        setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, size: newSize } : item)));
    };

    // Cập nhật màu sắc của sản phẩm trong giỏ hàng
    const updateColor = (id, newColor) => {
        setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, color: newColor } : item)));
    };
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
        <p>đã thêm vào giỏ hàng</p>;
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const increaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
        );
    };

    const decreaseQuantity = (id) => {
        setCartItems(
            (prevItems) =>
                prevItems
                    .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
                    .filter((item) => item.quantity > 0), // Loại bỏ sản phẩm có số lượng = 0
        );
    };

    const getTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                getTotalQuantity,
                updateSize,
                updateColor,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
