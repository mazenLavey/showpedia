import NavBar from './NavBar';
import HeaderCSS from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = ()=>{
    return (
        <header className={HeaderCSS.section}>
            <div className={`${HeaderCSS.wrapper} container`}>
                <Link to="/" className={HeaderCSS.logo}><p>logo</p></Link>
                <NavBar />
            </div>
        </header>
    );
};

export default Header;