import React, { useState } from 'react';
import avatar from '../components/img/avatar.svg'
import star1 from '../components/img/Star 1.svg'
import star5 from '../components/img/Star 5.svg'
import Line from '../components/img/Line 1.svg'

const Slider = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const slides = [
        {
            image: 'img/image-1.jpg',
            name: 'Nik',
            comment: 'Висловлюю величезну подяку та вдячність чудовим лікарям. Вони дуже душевні, добрі, уважні, відповідальні, професіонали, що люблять свою роботу. Величезне Вам спасибі від мене та моїх вихованців котиків Рижика та Стасика.',
            rating: 4.5
        },
    ];

    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };

    return (
        <div className="comments">
            <div id="slider" className="slider">
                <div className="slider-content">
                    <div className="slider-content-wrapper">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`slider-content__item image-${index + 1} ${activeSlide === index ? 'active' : ''}`}
                            >
                                <div className="commentLocation">
                                    <div>
                                        <img src={avatar} alt="Avatar" />
                                    </div>
                                    <div className="commentNik">
                                        <div className="nik">{slide.name}</div>
                                        <div>
                                            <img src={Line} alt="Divider" />
                                        </div>
                                        <div className="comment">{slide.comment}</div>
                                        <div className="starLocation">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <img
                                                    key={i}
                                                    src={i < slide.rating ? star1 : star5}
                                                    alt="Star"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
