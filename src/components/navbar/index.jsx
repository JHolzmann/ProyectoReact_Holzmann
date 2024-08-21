import CartWidget from '../CartWidget/cart';
import logo from '../../assets/beautySeeds.png'
import ItemList from '../ItemList/itemList';


function Navbar() {
    return (
        <>
            <header className="header">
            <nav className="container navbar">
                <figure className="navbar__logo">
                    <img src={logo} alt="logo" />
                </figure>
                <ul className="navbar__menu">
                    <ItemList label= "Shop" />
                    <ItemList label= "Contacto" />
                    <ItemList label= "Newsletter" />
                    <li >
                        <a href=""> 
                            <CartWidget cantidad={1}/> 
                        </a>
                    </li>                    
                </ul>
            </nav>
            </header>
        </>
    );
}

export default Navbar;
