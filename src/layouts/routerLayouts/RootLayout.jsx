import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import BreadCrumbs from "../../components/BreadCrumbs";
import ScrollToTop from '../../functions/ScrollToTop';

const RootLayout = ()=>{

    return (
        <>
        <ScrollToTop>
            <Header />
            <BreadCrumbs />
                <Outlet />
            <Footer />
        </ScrollToTop>
        </>
        
    );
};

export default RootLayout;