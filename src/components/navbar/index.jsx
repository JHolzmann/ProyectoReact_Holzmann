import LinkButton from "../Button/button";

const Navbar = ({links, className, children}) => {
    return (
    <menu className={`menu ${className}__menu`}>
        { links.map(link => <li className={`menu__item ${className}__item`}><LinkButton className={className} href={link.href} label={link.label} /></li>) }
        { children }
    </menu>
);
};

export default Navbar;
