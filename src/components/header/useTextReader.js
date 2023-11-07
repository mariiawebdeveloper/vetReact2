import { useEffect } from 'react';

const useTextReader = () => {
    useEffect(() => {
        const speak = (text) => {
            const message = new SpeechSynthesisUtterance();
            message.lang = 'ru-RU';
            message.text = text;
            message.text = text
                .toString()
                .replaceAll('и', 'ы')
                .replaceAll('е', 'э')
                .replaceAll('і', 'и')
                .replaceAll('ї', 'йы')
                .replaceAll('роз', 'роз ');
            window.speechSynthesis.speak(message);
        };

        const speakButton = document.querySelector('.buttons');
        speakButton.addEventListener('click', () => {
            speak(window.getSelection().toString());
        });

        return () => {
            speakButton.removeEventListener('click', speak);
        };
    }, []);

    return {};
};

export default useTextReader;

