import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import BreadCrumbs from "../../components/BreadCrumbs";
import ScrollToTop from '../../functions/ScrollToTop';
import ToUpBtn from 'components/ToUpBtn';

const RootLayout = ()=>{

    return (
        <>
        <ScrollToTop>
            <Header />
            <BreadCrumbs />
                <Outlet />
            <Footer />
            <ToUpBtn />
        </ScrollToTop>
        </>
        
    );
};

export default RootLayout;