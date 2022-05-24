import React from "react";
import './about.styles.scss';

const About = () => {
    const yearsOld = () => {
        const now = new Date();
        const birthday = new Date(1991, 10, 4);
        const addOne = now.getMonth() - birthday.getMonth() >= 0 && now.getDate() - birthday.getDate() >= 0
        let years = now.getFullYear() - birthday.getFullYear()
        return addOne ? years : years - 1;
    }
    
    const yearsOldInWords = (years) => {
        if (years >= 10 && years <= 20) {
            return 'лет'
        } else if (years % 10 === 1) {
            return 'год'
        } else if (years % 10 < 5) {
            return 'года'
        } else {
            return 'лет'
        }
    }

    return (
        <div className="about-page">
            <div className='passport'>
                <img alt="avatar" src='./images/avatar.jpg' />
                <h1>
                    Всем привет! Я ReactJS разработчик, <br />
                    влюблен в WEB и Front-End с 2016 года!
                </h1>
            </div>
            <div className='site-images-box'>
                <img alt="laptop" src='./images/laptop.png' />
                <img alt="phone" src='./images/phone.png' />
            </div>
            <div className="about-article">
                <h1>Нужен красивый сайт? Обращайтесь!</h1>
                <ul className="skills">
                    <li>
                        Разработка фронт-энда любой сложности - 
                        это мой профиль!
                    </li>
                    <li>
                        Пишу прекрасные сайты на <b>ReactJS</b>,
                    </li>
                    <li>
                        мастерски управляю состоянием с помощью <b>Redux</b>,
                    </li>
                    <li>
                        делаю всё быстро благодаря <b>SASS</b>,
                    </li>
                    <li>
                        располагаю все по полочкам с <b>Flexbox</b> и <b>Grid</b>,
                    </li>
                    <li>
                        тестирую, чтобы ничего не отвалилось, <b>Jest</b>'ом,
                    </li>
                    <li>
                        постоянно изучаю другие интересные и полезные библиотеки и технологии:
                    </li>
                    <li>
                        <b>Docker, AWS S3, TypeScript, CI/CD, кэширование, AWS Lambda, CDN...</b> 
                        Всё это я хотя бы раз использовал на практике!
                    </li>
                </ul>
            </div>
            <div className="about-article">
                <h1>Ну и немного личного - с кем вы имеете дело 😉</h1>
                <ul className="skills">
                    <li>
                        Меня зовут Сергей Шабанов, мне {`${yearsOld()} ${yearsOldInWords(yearsOld)}`}
                    </li>
                    <li>
                        Мое хобби - фотография (заносим в копилку скиллов <b>Adobe Photoshop</b>)
                    </li>
                    <li>
                        В работе больше всего ценю <b>возможность развиваться и учиться чему-то новому</b>. 
                        В этом смысле WEB-разработка для меня - просто находка!
                    </li>
                    <li>
                        Принимая <b>вызовы</b>, беру на себя <b>ответственность</b> и отвечаю за <b>результат</b>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About;