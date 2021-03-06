import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import style from '../styles/index.module.css';
import styles from '../styles/header.module.css';

import logo from '../public/img/main/logo.png';
import logoOq from '../public/img/main/logo_oq.png';
import telegram from '../public/icon/main/telegram-plane-brands.svg';
import facebook from '../public/icon/main/facebook-f-brands.svg';
import instagram from '../public/icon/main/instagram-brands.svg';
import telephone from '../public/icon/main/square-phone-solid.svg';
import clock from '../public/icon/main/clock-regular.svg';
import uzb from '../public/img/main/UZ-Uzbekistan-Flag-icon.png';
import bars from '../public/icon/main/bars-solid.svg';
import xicon from '../public/icon/main/xmark-solid.svg';

const categorys = [
    { name: 'Bosh sahifa', isActive: true, path: '/' },
    { name: 'Biz haqimizda', isActive: false, path: '/about ' },
    { name: 'Kurslar', isActive: false, path: '/courses' },
    { name: 'Yangiliklar', isActive: false, path: '/news' },
    { name: 'Bizning ustozlarimiz', isActive: false, path: '/teachers' },
    { name: 'Kontaktlar', isActive: false, path: '/contacts' },
];

const callNumber = [
    { number: '+99 890 377 89 90' },
    { number: '+99 890 267 89 90' },
];

const workTime = [{ time: 'Du-Sh 10:00-20:00' }];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    let location = useRouter().pathname;

    useEffect(() => {
        setIsOpen(!isOpen);
    }, [location]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className={styles.top}>
                <div className={style.container}>
                    <div className={styles.flex}>
                        <div className={styles.language}>
                            <Image src={uzb} width={30} height={30} alt="uzb" />{' '}
                            <p>O&apos;zbek tili</p>
                        </div>
                        <ul className={styles.social}>
                            <li>
                                <Link href="/facebook">
                                    <a>
                                        <Image
                                            src={facebook}
                                            alt="facebook"
                                            width={24}
                                            height={20}
                                            className={styles.filter_white}
                                        />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/instagram">
                                    <a>
                                        <Image
                                            src={instagram}
                                            alt="instagram"
                                            width={24}
                                            height={24}
                                            className={styles.filter_white}
                                        />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/telegram">
                                    <a>
                                        <Image
                                            src={telegram}
                                            alt="telegram"
                                            width={24}
                                            height={24}
                                            className={styles.filter_white}
                                        />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.logo_nav}>
                <div className={style.container}>
                    <div className={styles.flex}>
                        <Link href="/">
                            <a className={styles.logo}>
                                <Image
                                    height={58}
                                    width={180}
                                    src={logo}
                                    alt="logo"
                                />
                            </a>
                        </Link>
                        <ul className={styles.connection}>
                            <li className={styles.d_flex}>
                                <Image
                                    src={telephone}
                                    alt="telephone"
                                    width={30}
                                    height={36}
                                    className={styles.filter_lightblack}
                                />
                                <div className={styles.add}>
                                    <p className={styles.gray}>
                                        BIZGA QO&apos;NG&apos;IROQ QILING!
                                    </p>
                                    <p>{callNumber[0].number}</p>
                                </div>
                            </li>
                            <li className={styles.d_flex}>
                                <Image
                                    alt="clock"
                                    src={clock}
                                    width={30}
                                    height={36}
                                    className={styles.filter_lightblack}
                                />
                                <div className={styles.add}>
                                    <p className={styles.gray}>ISH VAQTI!</p>
                                    <p>{workTime[0].time}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav className={styles.navbar}>
                <div className={style.container}>
                    <div className={styles.nav}>
                        <div className={styles.left}>
                            <ul
                                className={
                                    isOpen ? 'toggleMenu active' : 'toggleMenu'
                                }
                            >
                                {categorys.map((category) => {
                                    return (
                                        <li
                                            className={styles.navbar_navlink}
                                            key={category.name}
                                        >
                                            <Link href={category.path}>
                                                <a
                                                    className={
                                                        category.isActive
                                                            ? styles.active
                                                            : null
                                                    }
                                                >
                                                    {category.name}
                                                </a>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div
                                className={isOpen ? 'exit close' : 'exit '}
                                onClick={() => {
                                    toggleMenu();
                                }}
                            >
                                <Image
                                    src={xicon}
                                    alt="exit"
                                    width={32}
                                    height={41}
                                    className={styles.filter_white}
                                />
                            </div>
                        </div>
                        <ul className={styles.right}>
                            <li className={styles.degree_button}>
                                <Link href="https://merit.uz/web/test/">
                                    <a className={styles.degree}>
                                        Darajangizni bilib oling
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.navbar_logo}>
                                <Link href="/">
                                    <a className={styles.navbar_logo_link}>
                                        <Image
                                            alt="logo"
                                            height={58}
                                            width={180}
                                            src={logoOq}
                                        />
                                    </a>
                                </Link>
                            </li>
                            <li
                                className={styles.bars_menu}
                                onClick={() => {
                                    toggleMenu();
                                }}
                            >
                                <Image
                                    src={bars}
                                    alt="bars"
                                    width={31}
                                    height={37}
                                    className={styles.filter_white}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
