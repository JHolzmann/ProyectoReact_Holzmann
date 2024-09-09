import logo from '../../assets/beautySeeds.png';
import Menu from '../../components/Menu/menu';
import CartWidget from '../../components/CartWidget/cart';


const Header = () => {

    const links = [
    {
    label: 'Home',
    href: 'http://localhost:5174/'
    },
    {
    label: 'Tienda',
    href: 'http://localhost:5174/tienda'
    },
    {
    label: 'Contacto',
    href: 'http://localhost:5174/contacto'
    },
];

    return (
        <header className="header">
        <nav className="navbar container">
        <a className="navbar__logo" href="/">
            <figure className="navbar__img">
            <img src={logo} alt="" />
            </figure>
        </a>
        <Menu className="navbar" links={links}>
            <li>
            <a href="" className='navbar__link-button'>
            <CartWidget quantity={0} />
            </a>
            </li>
        </Menu>
        </nav>
    </header>
);
};

export default Header;