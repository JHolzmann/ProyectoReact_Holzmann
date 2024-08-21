import CartWidget from '../CartWidget';
import logo from '../../assets/beautySeeds.png'



function Navbar() {
    return (
        <>
            <header className="header">
            <nav className="container navbar">
                <figure className="navbar__logo">
                    <img src={logo} alt="logo" />
                </figure>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <a className='navbar__link' href=""> Shop</a>
                    </li>
                    <li className="navbar__item"> 
                        <a className='navbar__link' href="">contacto</a>
                    </li>
                    <li className="navbar__item"> 
                        <a className='navbar__link' href="">Newsletter</a>
                    </li>
                    <li className="navbar__item" >
                        <a href=""> 
                            <cartWidget/> 
                        </a>
                    </li>                    
                </ul>
            </nav>
            </header>
        </>
    );
}

export default Navbar;
