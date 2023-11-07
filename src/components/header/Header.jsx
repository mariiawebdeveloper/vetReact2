import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../img/Лого.svg';
import useFontSize from './useFontSize';
import useLetterSpacing from './useLetterSpacing';
import useMagnifyingGlass from './useMagnifyingGlass';
import useChangeTheme from './useChangeTheme';
import useTextReader from './useTextReader';
import '../../custom.css'
import {FontSizeProvider} from "./FontSizeContext";

function Header() {
    const [tabClicks, setTabClicks] = useState({});
    const { letterSpacing } = useLetterSpacing();
    const { fontSize, updateFontSize } = useFontSize();
    useMagnifyingGlass();
    useChangeTheme();
    useTextReader();

    const handleTabClick = (tabName) => {
        setTabClicks((prevTabClicks) => ({
            ...prevTabClicks,
            [tabName]: (prevTabClicks[tabName] || 0) + 1,
        }));

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
                    <input id="seek1" type="range" name="seekbar" step="5" min="8" max="46" onChange={(e) => updateFontSize(e.target.value)} />
                </div>
                <div>
                    <div>Міжлітерний інтервал</div>
                    <input id="seek2" type="range" name="seekbar" step="3" min="1" max="20" onChange={letterSpacing} />
                </div>
                <div>
                    <button className="buttons">
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
                        <input type="checkbox" id="checkbox" />
                        <span className="toggleSlide"></span>
                    </label>
                </div>
            </div>
        </header>
    );
}

const HeaderWithContext = () => (
    <FontSizeProvider>
        <Header />
    </FontSizeProvider>
);

export default Header;
