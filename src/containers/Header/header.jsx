import logo from '../../../public/img/beautySeeds.png';
import Menu from '../../components/Menu/menu'
import CartWidget from '../../components/CartWidget/cart';
import { Link } from 'react-router-dom';


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
        <Link className="navbar__logo" href="/">
            <figure className="navbar__img">
            <img src={logo} alt="logo" />
            </figure>
        </Link>
        <Menu className="navbar" links={links}>
            <li>
            <CartWidget quantity={0} />
            </li>
        </Menu>
        </nav>
    </header>
);
};

export default Header;