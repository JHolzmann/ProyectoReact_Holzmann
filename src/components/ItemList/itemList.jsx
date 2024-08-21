const ItemList = ({ label }) => {
    return(
        <>
        <li className="navbar__item"> 
            <a className='navbar__link' href=""> { label } </a>
        </li>
        </>
    );
}

export default ItemList