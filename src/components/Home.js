import '../custom.css';
import React, { Component } from 'react';
import Slider from "./Slider";
import leftArrow from '../components/img/left.png';
import upArrow from '../components/img/up.svg';
import catImage from '../components/img/кот.svg';
import dogImage from '../components/img/собака.svg';
import vectorImage from '../components/img/Vector.svg';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="blockMain">
                    <div>
                        <img src={leftArrow} alt="left arrow" />
                    </div>
                    <div className="block12Location">
                        <div className="block1">
                            <div>
                                <div className="block1Location">
                                    <div className="block1TextLocation">
                                        <div>
                                            <img src={upArrow} alt="up arrow" />
                                        </div>
                                        <div>
                                            <p className="headlineText">Довіряй нам!</p>
                                        </div>
                                        <div className="headlineText">
                                            <p>Вибери нас!</p>
                                        </div>
                                        <div>
                                            <p className="mainText">
                                                Ми прагнемо забезпечувати високий рівень професійної ветеринарної допомоги, підвищувати якість життя тварин та розвивати культуру відповідального ставлення до них.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={catImage} className="imageStyle" alt="cat" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block2">
                            <div className="block2Back">
                                <div className="headlineTextBlock2">
                                    <p>Ми знаємо, що робимо!</p>
                                </div>
                                <div>
                                    <p className="mainText">
                                        Лікарі та фахівці найвищої кваліфікації. Наші співробітники досконало знають свою справу, захоплені своєю професією та постійно вдосконалюються.
                                    </p>
                                </div>
                                <div>
                                    <p className="mainText">
                                        Ми приймаємо зважені рішення з огляду на потреби наших пацієнтів. Ми готові до складних ситуацій та нестандартних медичних випадків. Ми відповідаємо за кожну процедуру та рекомендацію.
                                    </p>
                                </div>
                                <div>
                                    <img src={upArrow} alt="up arrow" />
                                </div>
                            </div>
                            <div>
                                <img src={dogImage} className="imageStyle" alt="dog" />
                            </div>
                            <div className="block2Back">
                                <div className="headlineTextBlock2">
                                    <p>Ваш спокій та комфорт тварин</p>
                                </div>
                                <div>
                                    <p className="mainText">
                                        Ми вважаємо, що лікування має відбуватися без зайвого стресу та створюємо умови для того, щоб усім було комфортно.
                                    </p>
                                </div>
                                <div>
                                    <p className="mainText">
                                        Ми уважні до тварин та людей і щиро хочемо допомогти.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blockAbout">
                    <div className="blockAboutBack">
                        <div>
                            <div>
                                <p className="TextBlockAbout">Трішки</p>
                            </div>
                            <div>
                                <p className="TextBlockAbout">про нас</p>
                            </div>
                            <div>
                                <img src={vectorImage} alt="vector" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block1Location">
                    <div className="mainText">
                        <div className="aboutUs">
                            <p>
                                Кожна тварина приймається у окремому, тихому, комфортному кабінеті. Основні види аналізу ми проводимо на місці, це заощаджує ваш час та сили. Ми готові будь-коли виїхати на виклик.
                            </p>
                            <ul>
                                <li>
                                    Основним симптомом при зверненні до лікаря є відмова тварини від прийому їжі, млявість, а іноді агресивність або постійне жалібне скиглення, що, можливо, ознака якогось больового синдрому.
                                </li>
                                <li>
                                    Домашні улюбленці дарують нам багато радості та позитиву, але часом вони хворіють, і їм потрібна термінова медична ветеринарна допомога.
                                </li>
                                <li>
                                    Своєчасне проведення профілактичних щеплень (вакцинації) – дуже важливий фактор збереження та підтримання здоров'я.
                                </li>
                                <li>
                                    Дуже багато власників чотирилапих вихованців дивуються, коли дізнаються, що очі їхніх підопічних теж можуть хворіти і існує окрема офтальмологія собак та котів.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hamsterBack">
                        <div className="hamster"></div>
                    </div>

                </div>
                <div>
                    <Slider/>
                </div>
            </div>
        );
    }
}

export default Home;
