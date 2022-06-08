import React from 'react'
import Image from 'next/image';
import style from '../styles/index.module.css';
import Link from 'next/link'
import aboutStyle from '../styles/about.module.css'
import { useState } from 'react';
import Accardion1 from '../components/about/Accardion';
const about = () => {
    const [state, setState] = useState([
        {
            sectionTitle: "O'z ta'limingizni haqiqiy ekspertlarga qo'liga topshiring!",
            sectionText: `Merit Education - bilim olish uchun ideal joy. Chunki bizning o'quv markazimizda talabalar va br o'qituvchilar uchun barcha qulayliklar va imkoniyatlar yaratilb berilgan.

                Ta'lim xizmatlarini taqdim etib kelyatgan 5 yil ichida biz 2500 dan ortiq talabalarni muvaffaqiyatli o'qitdik va bir nechta mukofotlarga sazovor bo'ldik.
                
                Biz yetishgan natijalarimizda to'xtab qolmaymiz. Chunki, bizning asosiy maqsadimiz zamonaviy o'qitish usullarini joriy etish va ilg'or texnologiyalardan foydalanish orqali mamlakatimizning ta'lim darajasini oshirishdir.
                
                Bizning o'quv markazimizda 5 ta o'quv kurslari mavjud:
                • General English.
                • IELTS imtihoniga tayyorlanish kurslari.
                • Math in English.
                • Individual kurslar.
                • Oliy o'quv yurtlariga tayyorlanish kurslari
                
                Bizda faqat yuqori malakali, mas'uliyatli o'qituvchilar ishlaydilar, ular o'z kuchlarini talabalarimizga yordam berish, o'qitish va to'g'ri yo'lga boshlash uchun sarflashadi.
                Bundan tashqari, bizning jamoamizda boshqa davlatlardan kelgan o'qituvchilar ham bor. Ular bizning talabalarimizga og'zaki ingliz tilini mashq qilishga va talaffuzni yaxshilashda yordam berishadi.
                
                Biz har hafta yakshanba kuni tadbirlar o'tkazamiz. Shuningdek talabalarimizni ko'ngilochar tadbirlar va konkurslar bilan muntazam ravishda xursand qilib turamiz.
                
                Talabalarimizga bizning kurslarda qantashish qulay bo'lishi uchun bizda shaxar bo'yicha 4ta filial mavjud.
                
                MERIT - learning now, leading tomorrow.`,
            aboutUrl: "/about",
            videoUrl: "https://merit.uz/video/merit-new.mp4",
            posterImgUrl: "https://merit.uz//images/videocover.png"
        }
    ])
    const [data, setData] = useState([
        {
            id: 1,
            imgUrl: "https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Events28&dirtyAlias=ef982f2b36-1_160x120.jpg",
            titleThema: "Merit Education bilan 7 kun hursandchilik",
            dataa: "December 7, 2019",
            thema: "Merit Education bilan 7 kun hursandchilik",
            detailed: "/news"
        }, {
            id: 1,
            imgUrl: "https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Events27&dirtyAlias=09b1776c10-1_160x120.jpg",
            titleThema: "Merit Education bilan 7 kun hursandchilik",
            dataa: "December 7, 2019",
            thema: "Merit Education bilan 7 kun hursandchilik",
            detailed: "/news"
        },
        {
            id: 1,
            imgUrl: "https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Events26&dirtyAlias=0fda07a3f7-1_160x120.jpg",
            titleThema: "Merit Education bilan 7 kun hursandchilik",
            dataa: "December 7, 2019",
            thema: "Merit Education bilan 7 kun hursandchilik",
            detailed: "/news"
        }
    ])
    return (
        <div className={style.container}>
            <h2 className={aboutStyle.title}>MERIT EDUCATION O'QUV MARKAZI</h2>
            {state?.map((item, id) => {
                return (
                    <div className={aboutStyle.boxes} key={id}>
                        <div className={aboutStyle.box1}>
                            <h4>{item.sectionTitle}</h4>
                            <p>{item.sectionText}</p>
                            <a className={aboutStyle.button} href={item.aboutUrl} type='button' >Batafsil o'qish →</a>
                        </div>
                        <div className={aboutStyle.box2}>
                            <video poster={item.posterImgUrl} controls='controls' src={item.videoUrl}></video>
                        </div>
                    </div>
                )
            })}
            <div className={aboutStyle.boxmax} >
                <div className={aboutStyle.box3}>
                    <h3>
                        <Image src="/icon/main/calendar.png" height={25} width={25} />
                        O'QUV MARKAZDAGI VOQEALAR
                    </h3>
                    {data?.map((item, id) => {
                        return (
                            <div className={aboutStyle.news} key={id}>
                                <div className={aboutStyle.img}>
                                    <Image src={item.imgUrl} width={130} height={130} />
                                </div>
                                <div className={aboutStyle.post}>
                                    <h4>{item.titleThema}</h4>
                                    <p className={aboutStyle.data}>
                                        <Image src='/icon/main/calendar.png' width={15} height={15} />
                                        {item.dataa}
                                    </p>
                                    <p className={aboutStyle.thema}>
                                        {item.thema}
                                    </p>
                                    <a className={aboutStyle.detailed} href={item.detailed}>Batafsil →</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={aboutStyle.box4}>
                    <h3>Nimaga bizni tanlashadi </h3>
                    <p>Biz haqimizda ko'proq biling</p>
                    <Accardion1 />
                </div>
            </div>
        </div>
    )
}

export default about