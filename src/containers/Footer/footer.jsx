import Menu from "../../components/Menu/menu";


const Footer = () => {

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
        href: '/contact'
    },
];

    return(
        <footer>
        <section className="container">
            <nav className="navbar">
                <Menu className="navbar" links={links} />
            </nav>
            <picture>
                <img src="/img/beautySeeds.png" alt="logo beautySeeds" />
            </picture>
        </section>
        <p className="copy">Todos los derechos reservados- JessicoTH &copy;</p>
    </footer>
);
};

export default Footer;