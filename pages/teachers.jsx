import Image from 'next/image';
import stayle from './../styles/index.module.css';
import styles from './../styles/teachers.module.css';

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

const teachers = () => {
    return (
        <div className={stayle.container}>
            <div className={styles.teachers}>
                {teacher.map((index, id) => {
                    return (
                        <div className="teacher" key={id}>
                            <div className="teacher-img">
                                <Image
                                    src={index.img}
                                    alt={index.name}
                                    width={750}
                                    height={450}
                                    layout="intrinsic"
                                />
                            </div>
                            <div className={styles.teacher_info}>
                                <h3 className={styles.teacherName}>
                                    {index.name}
                                </h3>
                                <p>{index.fan}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default teachers;
