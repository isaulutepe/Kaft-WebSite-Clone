import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [notification, setNotification] = useState(null);

    const addToCart = (id) => {
        setCart(prevCart => [...prevCart, id]);
        setNotification('Ürün sepete eklendi');
        setTimeout(() => setNotification(null), 3000);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, notification }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
