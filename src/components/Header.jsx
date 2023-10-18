import React, {useEffect, useState} from 'react';
import '../custom.css';
import {Link} from "react-router-dom";
import logoImage from './img/Лого.svg';

function Header() {
    const [tabClicks, setTabClicks] = useState({});
    function changeTheme () {
        let checkBox = document.getElementById('checkbox');
        let body = document.querySelector('body');
        let buttons = document.querySelectorAll('.buttons');

        if (checkBox.checked === true) {
            buttons.forEach((e) => {
                e.style.color = 'blue';
            });
            body.style.backgroundColor = 'black';
        } else {
            buttons.forEach((e) => {
                e.style.color = '#6ED29C';
            });
            body.style.backgroundColor = '#6ED29C';
        }
    }
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
    }
    useEffect(() => {
        const fontSize = () => {
            const rng = document.getElementById('seek1');
            const content = document.querySelectorAll('.mainText');
            const content2 = document.querySelectorAll('p');

            rng.addEventListener('input', () => {
                content.forEach((e) => {
                    e.style.fontSize = rng.value + 'px';
                });
            });

            rng.addEventListener('input', () => {
                content2.forEach((e) => {
                    e.style.fontSize = rng.value + 'px';
                });
            });
        };



        const letterSpacing = () => {
            const rng = document.getElementById('seek2');
            const content = document.querySelectorAll('.mainText');
            const content2 = document.querySelectorAll('p');

            rng.addEventListener('input', () => {
                content.forEach((e) => {
                    e.style.letterSpacing = rng.value + 'px';
                });
            });

            rng.addEventListener('input', () => {
                content2.forEach((e) => {
                    e.style.letterSpacing = rng.value + 'px';
                });
            });
        };

        const SCALE = 1.3;
        const SIZE = 150;
        const LENS_OFFSET_X = SIZE / 10.2;
        const LENS_OFFSET_Y = SIZE / 10.2;

        const handle = document.createElement('div');
        handle.classList.add('handle');

        const magnifyingGlass = document.createElement('div');
        magnifyingGlass.classList.add('magnifying-glass');
        magnifyingGlass.style.top = LENS_OFFSET_Y + 'px';
        magnifyingGlass.style.left = LENS_OFFSET_X + 'px';

        handle.append(magnifyingGlass);

        const magnifyButton = document.getElementById('magnify');

        const addMagnifyingGlass = () => {
            const bodyClone = document.body.cloneNode(true);
            bodyClone.classList.add('body-clone');
            bodyClone.style.top = '0px';
            bodyClone.style.left = '0px';
            magnifyingGlass.append(bodyClone);
            document.body.append(handle);
        };

        magnifyButton.addEventListener('click', addMagnifyingGlass);

        const moveMagnifyingGlass = (event) => {
            let pointerX = event.pageX;
            let pointerY = event.pageY;
            handle.style.left = pointerX - SIZE / 1.7 + 'px';
            handle.style.top = pointerY - SIZE / 1.7 + 'px';
            if (magnifyingGlass.children[0]) {
                let offsetX = (SIZE * Math.pow(SCALE, 2)) / 2 - pointerX * SCALE;
                let offsetY = (SIZE * Math.pow(SCALE, 2)) / 2 - pointerY * SCALE;
                magnifyingGlass.children[0].style.left = offsetX + 'px';
                magnifyingGlass.children[0].style.top = offsetY + 'px';
            }
        };

        document.addEventListener('pointermove', moveMagnifyingGlass);

        const removeMagnifyingGlass = () => {
            magnifyingGlass.children[0].remove();
            handle.remove();
        };

        magnifyingGlass.addEventListener('dblclick', removeMagnifyingGlass);



        fontSize();
        letterSpacing();

        return () => {
            document.removeEventListener('pointermove', moveMagnifyingGlass);
        };
    }, []);

    const handleTabClick = (tabName) => {
        // Оновлюємо state згідно з кліком на вкладці
        setTabClicks((prevTabClicks) => ({
            ...prevTabClicks,
            [tabName]: (prevTabClicks[tabName] || 0) + 1,
        }));

        // Логуємо кількість кліків у консоль
        console.log(`Кількість кліків на вкладці ${tabName}: ${tabClicks[tabName] || 0}`);
    };


    return (
        <header>
            <div className="logo">
                <div className="logoImg">
                    <img src={logoImage} alt="Лого" />
                </div>
                <div className="logoText">VETCLINIC</div>
            </div>
            <div><Link to={'/'} onClick={() => handleTabClick('Головна')} className={'links'}>Головна</Link></div>
            <div><Link to={'/why'} onClick={() => handleTabClick('Чому ми')} className={'links'}>Чому ми</Link></div>
            <div><Link to={'/product'} onClick={() => handleTabClick('Товари')} className={'links'}>Товари</Link></div>
            <div><Link to={'/about'} onClick={() => handleTabClick('Про нас')} className={'links'}>Про нас</Link></div>
            <div><Link to={'/contacts'} onClick={() => handleTabClick('Контакти')} className={'links'}>Контакти</Link></div>
            <div className="specialsLocation">
                <div>
                    <div>Збільшити шрифт</div>
                    <input id="seek1" type="range" name="seekbar" step="5" min="8" max="46" />
                </div>
                <div>
                    <div>Міжлітерний інтервал</div>
                    <input id="seek2" type="range" name="seekbar" step="3" min="1" max="20" />
                </div>
                <div>
                    <button className="buttons" onClick={() => speak(window.getSelection().toString())}>
                        Озвучить
                    </button>
                </div>
                <div>
                    <button className="buttons" id="magnify">
                        Екранна лупа
                    </button>
                </div>
                <div>
                    <label className="switch" id="switch">
                        <input type="checkbox" id="checkbox" onClick={() => changeTheme()} />
                        <span className="toggleSlide"></span>
                    </label>
                </div>
            </div>
        </header>
    );
}

export default Header;
