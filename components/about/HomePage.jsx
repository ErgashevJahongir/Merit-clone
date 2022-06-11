import React, { useState } from 'react'
import style from './../../styles/index.module.css';
import HomePageStyle from './../../styles/HomePage.module.css'
import Link from 'next/link';
const HomePage = () => {
    const [dataa, setDataa] = useState({
        id: 1,
        title: "MERIT EDUCATION O'QUV MARKAZI",
        themaTitle: "O'z ta'limingizni haqiqiy ekspertlarga qo'liga topshiring!",
        text: `Merit Education - innovatsion ingliz tili o'quv markazi.Biz ingliz tilini o'rganishhaqidagi fikringizni yaxshi tomonga o'zgartiramiz!
        Bizda faqat yuqori malakali, o'qituvchilar ishlashadi, ularning sharofati bilan minglab talabalarimiz IELTS kurslarinitugatib imtihonda 7dan yuqori ball olishgan.
        Bizning tashkil topgan kunimizdan beri biz ko'plab mukofotlarga sazovor bo'ldik va ingliz tilini o'qitishbo'yicha yetakchilardan biriga aylandik.
        Biz erishgan yutuqlarimizda to'xtab qolmaymiz!
        Bizning asosiy maqsadimiz Toshkentda ingliz tilini o'rganishuchun jahon standartlarini joriy etish va ingliz tilining darajasini ko'tarish.`,
        link: "/about",
        posterUrl: "https://merit.uz//images/videocover.png",
        videoUrl: "https://merit.uz/video/merit-new.mp4"
    })
    return (
        <div>
            <div className={style.container}>

                {dataa && <div className={HomePageStyle.boxmax}>
                    <h2 className={HomePageStyle.title}>
                        {dataa.title}
                    </h2>
                    <div className={HomePageStyle.boxes}>
                        <div className={HomePageStyle.box1}>
                            <h4 className={HomePageStyle.themaTitle}><strong>{dataa.themaTitle}</strong></h4>
                            <p className={HomePageStyle.text}>{dataa.text}
                            </p>
                            <Link href={dataa.link}><a className={HomePageStyle.link}>Batafsil o'qish →</a></Link>
                        </div>
                        <div className={HomePageStyle.box2}>
                            <div className={HomePageStyle.videoBox}>
                                <video controls="controls" className={HomePageStyle.video} poster={dataa.posterUrl} src={dataa.videoUrl}></video>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default HomePage