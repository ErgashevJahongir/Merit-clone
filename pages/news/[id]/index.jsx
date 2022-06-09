import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import style from './../../../styles/index.module.css';
import styles from './../../../styles/newsId.module.css';

const yangiliklar = [
    {
        title: 'Новость 1',
        sometitle: 'Новость 1 yana nima',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=News22&dirtyAlias=929a9e8eb5-1_360x262.png',
        date: '12.12.2019',
        newId: '1',
        discription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a sequi distinctio illo soluta iure, odio commodi accusamus tempore voluptatibus, harum corporis in tempora repellat laboriosam aliquam aperiam alias pariatur minima? Perferendis reprehenderit pariatur, illum a nulla soluta ex deserunt similique commodi, voluptatum aliquid quidem, itaque iste ipsam dolorem dolore.',
    },
    {
        title: 'Новость 1',
        sometitle: 'Новость 1 yana nima',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=News22&dirtyAlias=929a9e8eb5-1_360x262.png',
        date: '12.12.2019',
        newId: '2',
        discription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a sequi distinctio illo soluta iure, odio commodi accusamus tempore voluptatibus, harum corporis in tempora repellat laboriosam aliquam aperiam alias pariatur minima? Perferendis reprehenderit pariatur, illum a nulla soluta ex deserunt similique commodi, voluptatum aliquid quidem, itaque iste ipsam dolorem dolore.',
    },
    {
        title: 'Новость 1',
        sometitle: 'Новость 1 yana nima',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=News22&dirtyAlias=929a9e8eb5-1_360x262.png',
        date: '12.12.2019',
        newId: '3',
        discription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a sequi distinctio illo soluta iure, odio commodi accusamus tempore voluptatibus, harum corporis in tempora repellat laboriosam aliquam aperiam alias pariatur minima? Perferendis reprehenderit pariatur, illum a nulla soluta ex deserunt similique commodi, voluptatum aliquid quidem, itaque iste ipsam dolorem dolore.',
    },
    {
        title: 'Новость 1',
        sometitle: 'Новость 1 yana nima',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=News22&dirtyAlias=929a9e8eb5-1_360x262.png',
        date: '12.12.2019',
        newId: '4',
        discription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a sequi distinctio illo soluta iure, odio commodi accusamus tempore voluptatibus, harum corporis in tempora repellat laboriosam aliquam aperiam alias pariatur minima? Perferendis reprehenderit pariatur, illum a nulla soluta ex deserunt similique commodi, voluptatum aliquid quidem, itaque iste ipsam dolorem dolore.',
    },
    {
        title: 'Новость 1',
        sometitle: 'Новость 1 yana nima',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=News22&dirtyAlias=929a9e8eb5-1_360x262.png',
        date: '12.12.2019',
        newId: '5',
        discription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a sequi distinctio illo soluta iure, odio commodi accusamus tempore voluptatibus, harum corporis in tempora repellat laboriosam aliquam aperiam alias pariatur minima? Perferendis reprehenderit pariatur, illum a nulla soluta ex deserunt similique commodi, voluptatum aliquid quidem, itaque iste ipsam dolorem dolore.',
    },
    {
        title: 'Новость 1',
        sometitle: 'Новость 1 yana nima',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=News22&dirtyAlias=929a9e8eb5-1_360x262.png',
        date: '12.12.2019',
        newId: '6',
        discription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a sequi distinctio illo soluta iure, odio commodi accusamus tempore voluptatibus, harum corporis in tempora repellat laboriosam aliquam aperiam alias pariatur minima? Perferendis reprehenderit pariatur, illum a nulla soluta ex deserunt similique commodi, voluptatum aliquid quidem, itaque iste ipsam dolorem dolore.',
    },
];

const Index = () => {
    const router = useRouter();
    const { id } = router.query;

    const Callback = () => {
        useEffect(() => {
            router.push('/404');
        }, []);
    };

    let son = 0;
    return (
        <div className={style.container}>
            {yangiliklar.map((news, index) => {
                if (news.newId.toLocaleString() === id) {
                    return (
                        <div key={index} className={styles.new}>
                            <div>
                                <Image
                                    src={news.img}
                                    alt={news.title}
                                    width={750}
                                    height={500}
                                    layout="intrinsic"
                                />
                                <h3 className={styles.title}>{news.title}</h3>
                                <p>
                                    <span>{news.date}</span>
                                </p>
                                <h5>{news.sometitle}</h5>
                                <p>{news.discription}</p>
                            </div>
                            <div className={styles.links}>
                                <h4>Boshqa kurslar</h4>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            Individual ingliz tili kurslari
                                            Toshkentda
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            Ingliz tili kurslari
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            Toshkentda IELTS imtihoniga
                                            tayyorlanish kurslari
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    );
                } else {
                    son += 1;
                }
                if (son === yangiliklar.length) {
                    Callback();
                }
            })}
        </div>
    );
};

export default Index;
