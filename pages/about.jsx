import React from 'react'
import style from '../styles/index.module.css';
import Link from 'next/link'
import aboutStyle from '../styles/about.module.css'
// import Image from '../public/img/main/videocover.png';
const about = () => {
    return (
        <div className={style.container}>
            <h2 className={aboutStyle.title}>MERIT EDUCATION O'QUV MARKAZI</h2>
            <div className={aboutStyle.boxes}>
                <div className={aboutStyle.box1}>
                    <h4>O'z ta'limingizni haqiqiy ekspertlarga qo'liga topshiring!</h4>
                    <p>Merit Education - bilim olish uchun ideal joy. Chunki bizning o'quv markazimizda talabalar va o'qituvchilar uchun barcha qulayliklar va imkoniyatlar yaratilb berilgan. <br />

                        Ta'lim xizmatlarini taqdim etib kelyatgan 5 yil ichida biz 2500 dan ortiq talabalarni muvaffaqiyatli o'qitdik va bir nechta mukofotlarga sazovor bo'ldik. <br />

                        Biz yetishgan natijalarimizda to'xtab qolmaymiz. Chunki, bizning asosiy maqsadimiz zamonaviy o'qitish usullarini joriy etish va ilg'or texnologiyalardan foydalanish orqali mamlakatimizning ta'lim darajasini oshirishdir.
                    </p>
                    <ul>
                        Bizning o'quv markazimizda 5 ta o'quv kurslari mavjud:
                        <li>General English.
                        </li>
                        <li>IELTS imtihoniga tayyorlanish kurslari.
                        </li>
                        <li>Math in English.</li>
                        <li>Individual kurslar.</li>
                        <li>Oliy o'quv yurtlariga tayyorlanish kurslari</li>
                    </ul>
                    <p>
                        Bizda faqat yuqori malakali, mas'uliyatli o'qituvchilar ishlaydilar, ular o'z kuchlarini talabalarimizga yordam berish, o'qitish va to'g'ri yo'lga boshlash uchun sarflashadi.
                        Bundan tashqari, bizning jamoamizda boshqa davlatlardan kelgan o'qituvchilar ham bor.<br /> Ular bizning talabalarimizga og'zaki ingliz tilini mashq qilishga va talaffuzni yaxshilashda yordam berishadi.

                        Biz har hafta yakshanba kuni tadbirlar o'tkazamiz. Shuningdek talabalarimizni ko'ngilochar tadbirlar va konkurslar bilan muntazam ravishda xursand qilib turamiz.

                        Talabalarimizga bizning kurslarda qantashish qulay bo'lishi uchun bizda shaxar bo'yicha 4ta filial mavjud.
                        <br />

                        MERIT - learning now, leading tomorrow.
                    </p>
                </div>
                <div className={aboutStyle.box2}>
                    <video poster='/img/main/videocover.png' controls='controls' src="https://merit.uz/video/merit-new.mp4"></video>
                </div>
            </div>
        </div>
    )
}

export default about