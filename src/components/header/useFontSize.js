import { useEffect } from 'react';
import { useFontSizeContext } from './FontSizeContext';

const useFontSize = () => {
    const { fontSize, updateFontSize } = useFontSizeContext();

    useEffect(() => {
        const rng = document.getElementById('seek1');
        const content = document.querySelectorAll('.mainText, p');

        const updateFontSizeStyle = () => {
            content.forEach((e) => {
                e.style.fontSize = `${fontSize}px`;
            });
        };

        rng.addEventListener('input', updateFontSizeStyle);

        return () => {
            rng.removeEventListener('input', updateFontSizeStyle);
        };
    }, [fontSize]);

    return { fontSize, updateFontSize };
};

export default useFontSize;
