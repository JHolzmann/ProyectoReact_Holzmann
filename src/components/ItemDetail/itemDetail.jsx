import React, { useState, useContext } from 'react'; 
import { CartContext } from "../../context/cartContext/";

const ItemDetail = ({ id, name, img, price, description, category }) => {
    let [ quantity, setQuantity ] = useState(0);
    const { addItem } = useContext(CartContext);

    const increase = () => {
        setQuantity(quantity++);
    }

    const decrease = () => {
        quantity < 1 ? setQuantity(0) : setQuantity(quantity--);
    }

    const addItemToCart = () => {
        addItem({id, name, img, price, description, category, quantity });
    }

    return (
        <section className="item-detail">
            <picture className="item-detail__picture">
                <img
                    className="item-detail__picture--img item-detail__picture--img--1"
                    src={`${img?.front}`}
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
                            onClick={decrease}
                        >
                            -
                        </button>
                        <input
                            className="item-detail__form--input"
                            type="text"
                            value={quantity}
                            readOnly
                        />
                        <button
                            className="item-detail__form--btn"
                            type="button"
                            onClick={increase}
                        >
                            +
                        </button>
                    </div>
                    <input
                        className="item-detail__form--submit"
                        type="button"
                        value="Agregar al Carrito"
                        onClick={addItemToCart}
                    />
                </form>
            </article>
        </section>
    );
};

export default ItemDetail;
