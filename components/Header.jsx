import Link from 'next/link';
import Image from 'next/image';
import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoInstagram } from 'react-icons/io5';
import { IoNavigate } from 'react-icons/io5';
import { IoCall } from 'react-icons/io5';
import { IoTimeOutline } from 'react-icons/io5';
import styles from '../styles/header.module.css';
import logo from '../public/logo.png';
import telegram from '../public/telegram-plane-brands.svg';
import facebook from '../public/facebook-f-brands.svg';
import instagram from '../public/instagram-brands.svg';
import telephone from '../public/square-phone-solid.svg';
import clock from '../public/clock-regular.svg';
import uzb from '../public/UZ-Uzbekistan-Flag-icon.png';

const Header = () => {
    return (
        <header>
            <div className={styles.top}>
                <div className={styles.container}>
                    <div className={styles.flex}>
                        <div className={styles.language}>
                            <Image src={uzb} width={30} height={30} />{' '}
                            <p>O'zbek tili</p>
                        </div>
                        <ul className={styles.social}>
                            <li>
                                <Link href="/facebook">
                                    <a>
                                        <Image
                                            src={facebook}
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
                <div className={styles.container}>
                    <div className={styles.flex}>
                        <Link href="/">
                            <Image
                                className={styles.logo}
                                height={58}
                                width={180}
                                src={logo}
                            />
                        </Link>
                        <ul className={styles.connection}>
                            <li className={styles.d_flex}>
                                <Image
                                    src={telephone}
                                    width={30}
                                    height={36}
                                    className={styles.filter_lightblack}
                                />
                                <div className={styles.add}>
                                    <p className={styles.gray}>
                                        BIZGA QO'NG'IROQ QILING!
                                    </p>
                                    <p>+99 8(90) 377 89 90</p>
                                </div>
                            </li>
                            <li className={styles.d_flex}>
                                <Image
                                    src={clock}
                                    width={30}
                                    height={36}
                                    className={styles.filter_lightblack}
                                />
                                <div className={styles.add}>
                                    <p className={styles.gray}>ISH VAQTI!</p>
                                    <p>Du-Sh 10:00-20:00</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    <div className={styles.nav}>
                        <ul className={styles.left}>
                            <li>
                                <Link href="/">
                                    <a className={styles.active}>Bosh sahifa</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a>Biz haqimizda</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses">
                                    <a>Kurslar</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/events">
                                    <a>Voqealar</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/news">
                                    <a>Yangiliklar</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/teachers">
                                    <a>Bizning ustozlarimiz</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contacts">
                                    <a>Kontaktlar</a>
                                </Link>
                            </li>
                        </ul>
                        <ul className={styles.right}>
                            <li>
                                <Link href="#">
                                    <a className={styles.degree}>
                                        Darajangizni bilib oling
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
