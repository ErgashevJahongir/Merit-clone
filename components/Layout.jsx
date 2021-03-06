import { useRouter } from 'next/router';
import Breadcrumb from './Breadcrumbs';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
    const location = useRouter();

    return (
        <>
            <Header />
            {location.pathname !== '/' && location.pathname !== '/_error' ? (
                <Breadcrumb />
            ) : null}
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
