import React, { createContext, useState, useContext } from 'react';

// Create Context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Create a custom hook for easy access to the context
export const useAuth = () => {
    return useContext(AuthContext);
};
