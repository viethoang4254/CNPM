import React, { createContext, useState } from 'react';

export const SuccessMessageContext = createContext();

export const SuccessMessageProvider = ({ children }) => {
    const [showSuccess, setShowSuccess] = useState(false);

    const displaySuccessMessage = () => {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000); // Ẩn dấu tích sau 2 giây
    };

    return (
        <SuccessMessageContext.Provider value={{ showSuccess, displaySuccessMessage }}>
            {children}
        </SuccessMessageContext.Provider>
    );
};
