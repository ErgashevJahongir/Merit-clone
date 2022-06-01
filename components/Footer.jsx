import style from '../styles/index.module.css';
import styles from '../styles/footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

import footerLogo from '../public/img/main/footer-logo.png';
import telegram from '../public/icon/main/telegram-plane-brands.svg';
import facebook from '../public/icon/main/facebook-f-brands.svg';
import instagram from '../public/icon/main/instagram-brands.svg';

import locationmap from '../public/icon/main/location-dot-solid.svg';
import call from '../public/icon/main/phone-solid.svg';
import mail from '../public/icon/main/envelope-solid.svg';

const footerCategorys = [
    { name: "O'quv markaz haqida", isActive: false, path: '/' },
    { name: 'Kurslar', isActive: false, path: '/' },
    { name: "O'quv markazdagi voqealar", isActive: false, path: '/' },
    { name: 'Yangiliklar', isActive: false, path: '/' },
];

const locations = [
    {
        name: 'Улица Амира Темура, 129Б',
        path: '#',
        type: 'text',
        icon: locationmap,
    },
    {
        name: '+998 97 444 44 04',
        path: '#',
        type: 'tel',
        icon: call,
    },
    {
        name: ' info@merit.uz',
        path: '#',
        type: 'email',
        icon: mail,
    },
];

const workTime = [{ time: 'Du-Sh 10:00-20:00' }];

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={style.container}>
                <div className={styles.footer_menu}>
                    <div className={styles.card}>
                        <Image
                            className={styles.logo}
                            layout="intrinsic"
                            width={620}
                            src={footerLogo}
                        />
                        <ul className={styles.location}>
                            {locations.map((location) => {
                                return (
                                    <li
                                        key={location.name}
                                        className={styles.mapli}
                                    >
                                        <Image
                                            src={location.icon}
                                            width={20}
                                            height={20}
                                            className={styles.pink}
                                        />
                                        <Link href={location.path}>
                                            <a>{location.name}</a>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h4>Foydali ssilkalar</h4>
                        <ul>
                            {footerCategorys.map((category) => {
                                return (
                                    <li key={category.name}>
                                        <Link href={category.path}>
                                            <a>{category.name}</a>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h4>Ish soatlar</h4>
                        <ul>
                            <li>{workTime[0].time}</li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h5>Bizga qo'shiling</h5>
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
