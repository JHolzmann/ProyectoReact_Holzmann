import React, { useState } from 'react';

const ItemDetail = ({ name, img, price, description, category }) => {
    
    const [quantity, setQuantity] = useState(1);

    
    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    
    
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

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
                            onClick={handleDecrease}
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
                            onClick={handleIncrease}
                        >
                            +
                        </button>
                    </div>
                    <input
                        className="item-detail__form--submit"
                        type="submit"
                        value="Agregar al Carrito"
                    />
                </form>
            </article>
        </section>
    );
};

export default ItemDetail;
