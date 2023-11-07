import { useEffect } from 'react';

const useLetterSpacing = () => {
    useEffect(() => {
        const rng = document.getElementById('seek2');
        const content = document.querySelectorAll('.mainText, p');

        const updateLetterSpacing = () => {
            content.forEach((e) => {
                e.style.letterSpacing = rng.value + 'px';
            });
        };

        rng.addEventListener('input', updateLetterSpacing);

        return () => {
            rng.removeEventListener('input', updateLetterSpacing);
        };
    }, []);

    return {};
};

export default useLetterSpacing;
