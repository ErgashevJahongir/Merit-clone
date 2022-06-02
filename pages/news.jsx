import Image from 'next/image';
import Link from 'next/link';
import style from './../styles/index.module.css';
import styles from './../styles/news.module.css';

const yangiliklar = [
    {
        title: 'Новость 1',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=News22&dirtyAlias=929a9e8eb5-1_360x262.png',
        date: '12.12.2019',
        newId: '1',
    },
    {
        title: 'Новость 1',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=News22&dirtyAlias=929a9e8eb5-1_360x262.png',
        date: '12.12.2019',
        newId: '1',
    },
    {
        title: 'Новость 1',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=News22&dirtyAlias=929a9e8eb5-1_360x262.png',
        date: '12.12.2019',
        newId: '1',
    },
    {
        title: 'Новость 1',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=News22&dirtyAlias=929a9e8eb5-1_360x262.png',
        date: '12.12.2019',
        newId: '1',
    },
    {
        title: 'Новость 1',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=News22&dirtyAlias=929a9e8eb5-1_360x262.png',
        date: '12.12.2019',
        newId: '1',
    },
    {
        title: 'Новость 1',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=News22&dirtyAlias=929a9e8eb5-1_360x262.png',
        date: '12.12.2019',
        newId: '1',
    },
];

const news = () => {
    return (
        <div className={style.container}>
            <div className={styles.news}>
                {yangiliklar.map((item, index) => {
                    return (
                        <div className={styles.new} key={index}>
                            <div className={styles.img}>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={740}
                                    height={450}
                                    layout="intrinsic"
                                />
                            </div>
                            <div className={styles.news_info}>
                                <h3 className={styles.newsName}>
                                    {item.title}
                                </h3>
                                <p>{item.date}</p>
                                <Link href={`/newss/${item.newId}`}>
                                    <a className={styles.link}>
                                        Batafsil ma'lumot
                                    </a>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default news;
