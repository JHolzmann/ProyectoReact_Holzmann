import logo from `../../assets/Beauty_Seeds.png`

function Navbar() {
    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <figure className="navbar__logo">
                        <img src={logo} alt="" />
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

export default Navbar
