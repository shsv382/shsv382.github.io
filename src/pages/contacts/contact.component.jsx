import React from 'react';
import './contact.styles.scss';

const Contact = () => {
    return (
        <div className='contact-page'>
            <h1>Свяжитесь со мной любым удобным для вас способом!</h1>
            <ul className='messengers'>
                <li>
                    <a href="tel:12345678">
                        <img alt="phone" src='images/contact-phone.png' />
                    </a>
                </li>
                <li>
                    <a href='mailto:shsv382@yandex.ru'>
                        <img alt="email" src='images/contact-email.png' />
                    </a>
                </li>
                <li>
                    <a href='https://wa.me/79180071601'>
                        <img alt="whatsapp" src='images/contact-whatsapp.png' />
                    </a>
                </li>
            </ul>
            <ul className='messengers'>
                <li>
                    <a href='https://t.me/sergy_shaby'>
                        <img alt="telegram" src='images/contact-telegram.png' />
                    </a>
                </li>
                <li>
                    <a href="https://viber.click/79180071601">
                        <img alt="viber" src='images/contact-viber.png' />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contact;