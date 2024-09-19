import logo from '../../../public/img/beautySeeds.png';
import Menu from '../../components/Menu/menu'
import CartWidget from '../../components/CartWidget/cart';


const Header = () => {

    const links = [
    {
    label: 'Home',
    href: '/'
    },
    {
    label: 'Tienda',
    href: '/tienda'
    },
    {
    label: 'Contacto',
    href: '/contacto'
    },
];

    return (
        <header className="header">
        <nav className="navbar__container">
        <a className="navbar__logo" href="/">
            <figure className="navbar__img">
            <img src={logo} alt="logo" />
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