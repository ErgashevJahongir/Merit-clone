import style from '../styles/index.module.css';
import styles from '../styles/footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../public/img/main/logo.png';
import telegram from '../public/icon/main/telegram-plane-brands.svg';
import facebook from '../public/icon/main/facebook-f-brands.svg';
import instagram from '../public/icon/main/instagram-brands.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={style.container}>
                <div className={styles.footer_menu}>
                    <div className={styles.card}>
                        <Image
                            className={styles.logo}
                            height={58}
                            width={180}
                            src={logo}
                        />
                    </div>
                    <div className={styles.card}>
                        <h4>Foydali ssilkalar</h4>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>O'quv markaz haqida</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Kurslar</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>O'quv markazdagi voqealar</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Yangiliklar</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h4>Ish soatlar</h4>
                        <ul>
                            <li>Du-Sh 10:00-20:00</li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h4>Bizga qo'shiling</h4>
                        <ul className={styles.social}>
                            <li>
                                <Link href="/facebook">
                                    <a>
                                        <Image
                                            src={facebook}
                                            width={20}
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
                                            width={20}
                                            height={30}
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
                                            width={20}
                                            height={30}
                                            className={styles.filter_white}
                                        />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
