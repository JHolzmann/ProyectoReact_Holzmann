import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import Counter from '../Counter/counter';
import { Link } from "react-router-dom";

const Item = ({ name, img, price, category, id, tag, stock }) => {
    const { addItem } = useContext(CartContext);

    const handleAddToCart = (count) => {
        if (stock > 0) {
            addItem({ id, name, img, price, category, stock, quantity: count });
            alert(`${count} ${name} agregados al carrito`);
        } else {
            alert(`No hay stock disponible para ${name}`);
        }
    };

    return (
        <article className="item">
            <Link to={`/detalle/${id}`}>
                <picture className="item__picture">
                    <span className="item__picture--pill">{tag}</span>
                    <img className="card-image" 
                    src={`../../../public/${img}`} 
                    alt={`${name} - Semilla`} />
                </picture>
                <div className="item__info">
                    <h3 className="item__info--title">{category}</h3>
                    <h4 className="item__info--item">{name}</h4>
                    <p className="item__info--price">$ {price} .-</p>
                </div>
            </Link>

            <Counter
                initial={1}
                stock={stock}
                onAdd={handleAddToCart} 
            />
        </article>
    );
};

export default Item;


