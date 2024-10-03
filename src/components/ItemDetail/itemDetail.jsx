import React, { useState, useContext } from 'react'; 
import { CartContext } from "../../context/cartContext/";

const ItemDetail = ({ id, name, img, price, description, category, stock }) => {
    const { addItem } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1); 

    
    const increaseQuantity = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    
    const handleAdd = () => {
        if (quantity <= stock && quantity > 0) {
            addItem({ id, name, img, price, description, category, quantity });
            console.log(`${quantity} ${name} agregado(s) al carrito`);
        } else {
            console.log("Cantidad no válida");
        }
    };

    return (
        <section className="item-detail">
            <picture className="item-detail__picture">
                <img
                    className="item-detail__picture--img item-detail__picture--img--1"
                    src={`../../../public/${img}`}
                    alt={`${name} - seed`}
                />
            </picture>
            <article className="item-detail__info">
                <p className="item-detail__info--category">{category}</p>
                <h2 className="item-detail__info--name">{name}</h2>
                <p className="item-detail__info--description">{description}</p>
                <p className="item-detail__info--price">$ {price}</p>

                <form className="item-detail__form" action="" method="POST">
                    <div className="item-detail__form--container">
                        <button
                            className="item-detail__form--btn"
                            type="button"
                            onClick={decreaseQuantity}
                        >-</button>
                        <input
                            className="item-detail__form--input"
                            type="text"
                            value={quantity}
                            readOnly
                        />
                        <button
                            className="item-detail__form--btn"
                            type="button"
                            onClick={increaseQuantity}
                        >+</button>
                    </div>
                    <input
                        className="item-detail__form--submit"
                        type="button"
                        value="Agregar al Carrito"
                        onClick={handleAdd}
                    />
                </form>
            </article>
        </section>
    );
};

export default ItemDetail;
