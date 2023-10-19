import React, {Component} from 'react';

class Contacts extends Component {
    render() {
        return (
            <div>
                <main>
                    <h1>Контакти</h1>
                    <div className="contact-info">
                        <div className="contact-item">
                            <h2>Адреса</h2>
                            <p>м.Київ вул.Сумська 36</p>
                        </div>
                        <div className="contact-item">
                            <h2>Телефон</h2>
                            <p>+380979797</p>
                            <p>+380040555</p>
                        </div>
                        <div className="contact-item">
                            <h2>Електронна пошта</h2>
                            <p>info@example.com</p>
                        </div>
                    </div>
                    <div className="map">
                        <div>
                            <iframe title={'map'}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49491.22171159384!2d30.45716189469131!3d50.47706227305704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d32c04fcf927%3A0xe868a1fe1459b626!2z0JLQtdGC0LXRgNC40L3QsNGA0L3QsNGPINC60LvQuNC90LjQutCwIFZldENpdHlQZXRz!5e0!3m2!1sru!2spl!4v1683438171070!5m2!1sru!2spl"
                                width="600" height="450"  allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Contacts;