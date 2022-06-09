import styles from './../../styles/facts.module.css';
import style from './../../styles/index.module.css';

import { FaGraduationCap } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';

const Facts = () => {
    return (
        <div className={styles.facts}>
            <div className={style.container}>
                <div className={styles.fact}>
                    <div className={styles.item}>
                        <div className={styles.piece}>
                            <FaGraduationCap />
                            <h2>
                                <pre>&#62;</pre> 2500
                            </h2>
                            <h4>MAMNUN O&apos;QUVCHILAR</h4>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.piece}>
                            <FaBook />
                            <h2>
                                <pre>&#62;</pre> 5
                            </h2>
                            <h4>KURSLAR</h4>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.piece}>
                            <FaUserFriends />
                            <h2>
                                <pre>&#62;</pre> 26
                            </h2>
                            <h4>O&apos;QITUVCHILAR</h4>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.piece}>
                            <FaBuilding />
                            <h2>4</h2>
                            <h4>FILIALLAR O&apos;ZBEKISTONDA MAVJUD</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facts;
