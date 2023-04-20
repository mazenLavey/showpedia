import NavBar from './NavBar';
import HeaderCSS from './Header.module.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/icon.png';

const Header = ()=>{
    return (
        <header className={HeaderCSS.section}>
            <div className={`${HeaderCSS.wrapper} container`}>
                <Link to="/" className={HeaderCSS.logo}>
                    <span>showpedia</span>
                    <img src={logo} alt="logo" />
                </Link>
                <NavBar />
            </div>
        </header>
    );
};

export default Header;