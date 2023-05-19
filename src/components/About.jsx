import React, { Component } from 'react';

import upImage from './img/up.svg';
import vectorImage from './img/Vector.svg';
class About extends Component {
    render() {
        return (
            <div>
                <div className="blockMain">
                    <section>
                        <div className="flex-preMain">
                            <div className="preMain-text">
                                <div>Найкраща Ветклініка</div>
                                <div>в Україні</div>
                            </div>
                        </div>
                    </section>
                    <div className="block12Location">
                        <div className="block1">
                            <div>
                                <div className="block1Location">
                                    <div className="block1TextLocation">
                                        <div>
                                            <img src={upImage} alt="Up" />
                                        </div>
                                        <div>
                                            <p className="headlineText">Про нас</p>
                                        </div>
                                        <div>
                                            <p className="mainText">
                                                Ласкаво просимо до нашої ветеринарної клініки! Ми є професійним медичним закладом, який пропонує
                                                широкий спектр послуг з догляду за тваринами. У нас працює команда кваліфікованих ветеринарних
                                                лікарів, які завжди готові надати вам всю необхідну допомогу в будь-який час.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block2">
                            <div className="block2Back">
                                <div>
                                    <p className="mainText">
                                        У нашій клініці використовується сучасне обладнання та технології, що дозволяє нам забезпечувати
                                        високоякісну медичну допомогу вашим улюбленцям. Ми пропонуємо повний спектр послуг: від
                                        профілактичних оглядів та вакцинації до складних операцій та лікування захворювань.
                                    </p>
                                </div>
                                <div>
                                    <p className="mainText">
                                        Ми розуміємо, як важливо для вас берегти здоров'я та добробут ваших тварин, тому виконуємо свою
                                        роботу з великою відповідальністю та любов'ю до тварин. У нашій клініці ви можете бути впевнені,
                                        що ваші улюбленці знаходяться в надійних руках.
                                    </p>
                                </div>
                                <div>
                                    <img src={upImage} alt="Up" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blockAbout">
                    <div className="blockAboutBack2">
                        <div>
                            <div>
                                <p className="TextBlockAbout">Наші</p>
                            </div>
                            <div>
                                <p className="TextBlockAbout">цілі</p>
                            </div>
                            <div>
                                <img src={vectorImage} alt="Vector" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block1Location">
                    <div className="mainText">
                        <div className="aboutUs">
                            <p>
                                Наша мета полягає в тому, щоб забезпечити вашим тваринам максимально можливий рівень здоров'я та
                                комфорту. У нашій клініці ви можете очікувати високоякісну медичну допомогу та дружній сервіс. Ми
                                завжди готові допомогти вам з різноманітними проблемами, починаючи від профілактичних оглядів та
                                вакцинації до складних операцій та лікування захворювань.
                            </p>
                            <div>
                                <p>
                                    Ми віримо, що ваші тварини - це члени вашої родини, тому ми ставимо свою роботу з великою
                                    відповідальністю та любов'ю. Звертайтеся до нас і ми з радістю надамо всю необхідну допомогу вашим
                                    улюбленцям.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hamsterBack">
                        <div className="hamster"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
