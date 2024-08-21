import logo from '../../assets/beautySeeds.png'



function Navbar() {
    return (
        <>
            <header className="header">
            <nav className="navbar container">
                <figure className="navbar__logo">
                    <img src={logo} alt="logo" />
                </figure>
                <ul className="navbar__menu">
                    <li className="navbar__link">
                        <a href=""> Shop</a>
                    </li>
                    <li className="navbar__link"> 
                        <a href="">Carrito</a>
                    </li>
                    <li className="navbar__link"> 
                        <a href="">Contacto</a>
                    </li>                    
                </ul>
            </nav>
            </header>
        </>
    );
}

export default Navbar;
