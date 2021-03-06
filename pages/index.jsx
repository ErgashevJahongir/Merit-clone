import Head from 'next/head';
import Slider from 'react-slick';

import style from './../styles/index.module.css';
import styles from './../styles/home.module.css';
import CoursesSlider from '../components/Home/CoursesSlider';
import TeachersSlider from '../components/Home/TeachersSlider';
import NewsSlider from '../components/Home/NewsSlider';
import MainSlider from '../components/Home/MainSlider';
import React from 'react';
import Facts from '../components/Home/Facts';
import HomePage from '../components/about/HomePage';
import Events from '../components/about/Events';
export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Merit Education clone ingliz tili o&#039;quv markazi haqida
                    || Eng zo&#039;r o&#039;quv markaz
                </title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <section>
                    <MainSlider />
                </section>
                <div>
                    <HomePage />
                </div>
                <div className="main">
                    <section className={styles.courses}>
                        <div className={style.container}>
                            <CoursesSlider />
                        </div>
                    </section>
                    <section>
                        <Facts />
                    </section>
                    <section className={styles.courses}>
                        <div className={style.container}>yarn dev
                        
                            <TeachersSlider />
                        </div>
                    </section>
                    <Events />
                    <section className={styles.courses}>
                        <div className={style.container}>
                            <NewsSlider />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
