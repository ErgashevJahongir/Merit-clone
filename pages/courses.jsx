import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/courses.module.css';
import style from '../styles/index.module.css';

const course = [
    {
        courseId: 1,
        courseName: 'Individual ingliz tili kurslari Toshkentda',
        courseImg:
            'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Courses3&dirtyAlias=6aab1fe857-1.jpg',
        price: "1 700 000 so'm",
        sometitle:
            "Individual ingliz tili kurslari Toshkentda || Merit Education o'quv markazi",
        fullTitle: ` Individual Ingliz tili kurslari - qobiliyatlaringizni va maqsadlaringizni inobatga olgan holda qisqa vaqt ichida ingliz tilini o'rganishga va kerakli natijaga erishish uchun ajoyib imkoniyatdir!
        Siz individual ingliz tili kurslarini Merit Education o'quv markazida boshlashingiz mumkin.
         Individual Ingliz tili kurslarining narxini, jadvalini, va davomiyligini o'zingizga mos qilib tanlab olasiz.
        Individual ingliz tili kurslari haqida ko'proq malumotga ega bo'lmoqchi bo'lsangiz, quyidagi raqamlarga qo'ng'iroq qiling:
        97 444 44 04
        97 444 40 04
        97 440 40 00
        97 440 40 04`,
    },
    {
        courseId: 2,
        courseName: 'Ingliz tili kurslari',
        courseImg:
            'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Courses3&dirtyAlias=6aab1fe857-1.jpg',
        price: "585 000 so'm",
        sometitle: "Ingliz tili kurslari || Merit Education o'quv markazi",
        fullTitle: ` Ingliz tilini bilish allaqachon ehtiyojga aylanib ulgurgan. Axir, ingliz tilini bilgan odam uchun katta imkoniyatlar ochiladi, chet elliklar bilan oddiy muloqotdan tortib, chet el mamlakatlarida ishlashgacha.
        Biz guruhlarga mo'ljallangan ingliz tili kurslarini taklif etamiz.
        • Darslar haftada 3 marotaba 90 daqiqa davom etiladi.
        • Darsdagi olingan bilimni o'zlashtirishga yordam berish uchun ikkinchi o'qituvchi.
        • Ingliz tilidagi video darslar bilan noutbuk.
        • Yakshanba eventlari.
         Bepul sinov darsi!
         Ingliz tili kurslari narxi (General English).
        • Tushlik guruhi (soat 15:00 gacha) - 444 000 so‘m.
        • Kechki guruh (soat 17:00 dan) - 555 000 so'm.
         Bizning ingliz tili kurslarimizga ro'yhatdan o'tish uchun quyidagi raqamlarga qo'ng'iroq qiling:
         97 444 44 04
         97 444 40 04
         97 440 40 00
         97 440 40 04`,
    },
    {
        courseId: 3,
        courseName: 'Toshkentda IELTS imtihoniga tayyorlanish kurslari',
        courseImg:
            'https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Courses3&dirtyAlias=6aab1fe857-1.jpg',
        price: "585 000 so'm",
        sometitle:
            "Toshkentda IELTSga tayyorlanish kurslari || Merit Education o'quv markazi",
        fullTitle: `  IELTS imtihoni - odamning ingliz tilini qanchalik yaxshi bilishini aniqlashga imkon beradi. Ushbu test birinchi navbatda o'qish, ish yoki immigratsiya munosabati bilan ingliz tilida so'zlashadigan muhitda qolmoqchi bo'lgan odamlar uchun.
        Va agar sizda qiziqish bo'lsa, siz uchun Merit Education o'quv markazida IELTSga tayyorlanish kurslari mavjud.
        IELTS imtihoniga tayyorgarlik kursining qisqacha tavsifi:
       • Darslar haftada 3 marta 90 daqiqadan davom etadi.
       • Kurs davomiyligi 4 oy.
       • Kurs narxi 555 000 so'm.
       ‼️  IELTSga tayyorgarlik kurslari haqida ko'proq ma'lumot olish uchun quyidagi raqamlarga qo'ng'iroq qiling:
       97 444 44 04
       97 444 40 04
       97 440 40 00
       97 440 40 04`,
    },
];

const courses = () => {
    return (
        <div className={style.container}>
            <div className={styles.courses}>
                {course.map((cours) => {
                    return (
                        <div className={styles.course} key={cours.courseName}>
                            <div>
                                <Image
                                    src={cours.courseImg}
                                    alt={cours.sometitle}
                                    layout="intrinsic"
                                    height={720}
                                    width={720}
                                />
                            </div>
                            <div className={styles.title}>
                                <h3 className={styles.courseName}>
                                    {cours.courseName}
                                </h3>
                                <h3 className={styles.price}>
                                    <span>Narxi: </span>
                                    {cours.price}
                                </h3>
                                <p className={styles.someTitle}>
                                    {cours.sometitle}
                                </p>
                                <Link href={`/courses/${cours.courseId}`}>
                                    <a className={styles.link}>
                                        batafsil ma'lumot
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

export default courses;
