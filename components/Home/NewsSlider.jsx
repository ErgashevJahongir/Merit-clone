import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

import styles from './../../styles/coursesSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaLongArrowAltRight } from 'react-icons/fa';

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

const NewsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className={styles.coursesSlider}>
            <h2>
                Oxirgi <span>Yangiliklar</span>
            </h2>
            <div className={styles.slider}>
                <Slider {...settings}>
                    {yangiliklar.map((news) => {
                        if (news.newId <= 3) {
                            return (
                                <div key={news.newId}>
                                    <div className={styles.content}>
                                        <div>
                                            <Image
                                                src={news.img}
                                                alt={news.title}
                                                layout="intrinsic"
                                                height={720}
                                                width={720}
                                            />
                                        </div>
                                        <div className={styles.newstitle}>
                                            <h3 className={styles.newsname}>
                                                <Link
                                                    href={`/news/${news.newId}`}
                                                >
                                                    <a>{news.title}</a>
                                                </Link>
                                            </h3>
                                            <p className={styles.date}>
                                                {news.date}
                                            </p>
                                            <p className={styles.newssomeTitle}>
                                                {news.sometitle}
                                            </p>
                                            <Link href={`/news/${news.newId}`}>
                                                <a className={styles.newslink}>
                                                    batafsil ma'lumot
                                                    <FaLongArrowAltRight />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default NewsSlider;
