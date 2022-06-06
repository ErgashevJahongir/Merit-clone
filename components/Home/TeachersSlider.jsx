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
                                        <h3 className={styles.name}>
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
