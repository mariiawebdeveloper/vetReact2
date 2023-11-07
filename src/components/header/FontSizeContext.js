import React, { createContext, useContext, useState } from 'react';

const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
    const [fontSize, setFontSize] = useState(16); // Default font size

    const updateFontSize = (newSize) => {
        setFontSize(newSize);
    };

    return (
        <FontSizeContext.Provider value={{ fontSize, updateFontSize }}>
            {children}
        </FontSizeContext.Provider>
    );
};

export const useFontSizeContext = () => {
    const context = useContext(FontSizeContext);
    if (!context) {
        throw new Error('useFontSizeContext must be used within a FontSizeProvider');
    }
    return context;
};
