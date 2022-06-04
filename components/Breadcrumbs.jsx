// import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from 'next/router';
import Link from 'next/link';
import style from './../styles/index.module.css';
import styles from './../styles/breadcrumb.module.css';

const routes = [
    // {
    //     path: '/',
    //     breadcrumb: 'Bosh sahifa',
    // },
    {
        path: '/about',
        breadcrumb: 'Biz haqimizda',
    },
    {
        path: '/courses',
        breadcrumb: 'Kurslarimiz',
    },
    {
        path: '/news',
        breadcrumb: 'Yangiliklar',
    },
    {
        path: '/teachers',
        breadcrumb: "Bizning O'qituvchilar",
    },
    {
        path: '/contacts',
        breadcrumb: 'Kontaktlar',
    },
];

const Breadcrumb = () => {
    let location = useRouter();
    console.log(location.pathname);

    return (
        <div className={styles.breadcrumb}>
            <div className={style.container}>
                <h2>
                    {routes.map((route) => {
                        if (location.pathname.includes(route.path)) {
                            return route.breadcrumb;
                        }
                    })}
                </h2>
                <Breadcrumbs
                    style={{
                        color: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: '3',
                        opacity: '0.8',
                    }}
                    aria-label="breadcrumb"
                    className="center"
                >
                    <Link href="/" passHref>
                        <a>
                            <HomeIcon
                                style={{
                                    color: '#fff',
                                    textDecoration: 'none',
                                }}
                            />
                        </a>
                    </Link>
                    {routes.map((rout) => {
                        if (location.pathname.includes(rout.path)) {
                            return (
                                <Link href={rout.path} key={rout.breadcrumb}>
                                    <a
                                        style={{
                                            color: '#fff',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        {rout.breadcrumb}
                                    </a>
                                </Link>
                            );
                        }
                    })}
                </Breadcrumbs>
            </div>
        </div>
    );
};

export default Breadcrumb;
