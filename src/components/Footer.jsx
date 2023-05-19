import React from 'react';
import logoImage from './img/Лого.svg';
import {Link} from "react-router-dom";
import insta from './img/inst.svg'
import facebook from './img/facebook.svg'
import phone from'./img/трубка2.svg'

function Footer() {
    return (
        <footer>

            <div className="logo">
                <div className="logoImg">
                    <img src={logoImage} alt="Лого" />
                </div>
                <div className="logoText">VETCLINIC</div>
            </div>
            <div><Link to={'/'} className={'links'}>Головна</Link></div>
            <div><Link to={'/why'} className={'links'}>Чому ми</Link></div>
            <div><Link to={'/about'} className={'links'}>Про нас</Link></div>
            <div><Link to={'/contacts'} className={'links'}>Контакти</Link></div>

            <div className="specialsLocation">
                <div>
                    <img src={insta} style={{ width: '30px' }} alt="Instagram" />
                </div>
                <div>
                    <img src={facebook} style={{ width: '30px' }} alt="Facebook" />
                </div>
                <div>
                    <img src={phone} style={{ width: '30px' }} alt="Телефон" />
                </div>
                <div>+380040555</div>
                <div>м.Київ вул.Сумська 36</div>
            </div>
        </footer>
    );
}

export default Footer;
