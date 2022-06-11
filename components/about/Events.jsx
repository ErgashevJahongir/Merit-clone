import React, { useState } from 'react'
import style from './../../styles/index.module.css'
import eventStyle from './../../styles/event.module.css'
import Accardion from './Accardion'
import Image from 'next/image'
import Link from 'next/link'
const Events = () => {
    const [state, setState] = useState([{
        id: 1,
        imgUrl: "https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Events28&dirtyAlias=ef982f2b36-1_160x120.jpg",
        title: "Merit Education bilan 7 kun hursandchilik",
        data: "December 7, 2019",
        text: "Merit Education bilan 7 kun hursandchilik",
        link: "/about"
    },
    {
        id: 1,
        imgUrl: "https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Events27&dirtyAlias=09b1776c10-1_160x120.jpg",
        title: "Merit Education bilan 7 kun hursandchilik",
        data: "December 7, 2019",
        text: "Merit Education bilan 7 kun hursandchilik",
        link: "/about"
    },
    {
        id: 1,
        imgUrl: "https://merit.uz/uz/yii2images/images/image-by-item-and-alias?item=Events26&dirtyAlias=0fda07a3f7-1_160x120.jpg",
        title: "Merit Education bilan 7 kun hursandchilik",
        data: "December 7, 2019",
        text: "Merit Education bilan 7 kun hursandchilik",
        link: "/about"
    }
    ])
    return (
        <div className={style.container}>
            <div className={eventStyle.boxes}>
                <div className={eventStyle.box1}>
                    <h3 className={eventStyle.thema}>
                        <Image src="/icon/main/calendar.png" height={25} width={25} />
                        O'QUV MARKAZDAGI VOQEALAR
                    </h3>
                    {state?.map((item, id) => {
                        return (
                            <div className={eventStyle.news} key={id}>
                                <div className={eventStyle.image}><Image src={item.imgUrl} width={130} height={130} /></div>
                                <div className={eventStyle.post}>
                                    <h4 className={eventStyle.title}>{item.title}</h4>
                                    <p className={eventStyle.data}>{item.data}</p>
                                    <p className={eventStyle.text}>{item.text}</p>
                                    <Link href={item.link}><a className={eventStyle.link}>Batafsil →</a></Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={eventStyle.box2}>
                    <h3 className={eventStyle.thema}>
                        Nimaga bizni tanlashadi
                    </h3>
                    <Accardion />
                </div>
            </div>
        </div>
    )
}

export default Events