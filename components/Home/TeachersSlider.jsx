import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

import styles from './../../styles/coursesSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const teacher = [
    {
        name: 'Ergashev Jahongir',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Teachers3&dirtyAlias=dfa250a530-1_265x195.jpg',
        fan: "Ingliz tili o'qituvchisi",
    },
    {
        name: 'Ergashev Jahongir',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Teachers3&dirtyAlias=dfa250a530-1_265x195.jpg',
        fan: "Ingliz tili o'qituvchisi",
    },
    {
        name: 'Ergashev Jahongir',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Teachers3&dirtyAlias=dfa250a530-1_265x195.jpg',
        fan: "Ingliz tili o'qituvchisi",
    },
    {
        name: 'Ergashev Jahongir',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Teachers3&dirtyAlias=dfa250a530-1_265x195.jpg',
        fan: "Ingliz tili o'qituvchisi",
    },
    {
        name: 'Ergashev Jahongir',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Teachers3&dirtyAlias=dfa250a530-1_265x195.jpg',
        fan: "Ingliz tili o'qituvchisi",
    },
    {
        name: 'Ergashev Jahongir',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Teachers3&dirtyAlias=dfa250a530-1_265x195.jpg',
        fan: "Ingliz tili o'qituvchisi",
    },
    {
        name: 'Ergashev Jahongir',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Teachers3&dirtyAlias=dfa250a530-1_265x195.jpg',
        fan: "Ingliz tili o'qituvchisi",
    },
    {
        name: 'Ergashev Jahongir',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Teachers3&dirtyAlias=dfa250a530-1_265x195.jpg',
        fan: "Ingliz tili o'qituvchisi",
    },
    {
        name: 'Ergashev Jahongir',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Teachers3&dirtyAlias=dfa250a530-1_265x195.jpg',
        fan: "Ingliz tili o'qituvchisi",
    },
    {
        name: 'Ergashev Jahongir',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Teachers3&dirtyAlias=dfa250a530-1_265x195.jpg',
        fan: "Ingliz tili o'qituvchisi",
    },
    {
        name: 'Ergashev Jahongir',
        img: 'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Teachers3&dirtyAlias=dfa250a530-1_265x195.jpg',
        fan: "Ingliz tili o'qituvchisi",
    },
];

const TeachersSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className={styles.coursesSlider}>
            <h2>Bizning Ustozlarimiz</h2>
            <div className={styles.slider}>
                <Slider {...settings}>
                    {teacher.map((teach) => {
                        return (
                            <div key={teach.name}>
                                <div className={styles.content}>
                                    <div>
                                        <Image
                                            src={teach.img}
                                            alt={teach.name}
                                            layout="intrinsic"
                                            height={370}
                                            width={500}
                                        />
                                    </div>
                                    <div className={styles.title}>
                                        <h3 className={styles.techname}>
                                            {teach.name}
                                        </h3>
                                        <p className={styles.someTitle}>
                                            {teach.fan}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default TeachersSlider;
