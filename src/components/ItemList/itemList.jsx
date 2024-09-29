import React, { useContext } from 'react';
import Item from "../Item/item";
import { CartContext } from "../../context/cartContext";

const ItemList = ({ items }) => {
    const { cart } = useContext(CartContext); 

    return (
        <section className="items__container container">
            {items.map((item, i) => (
                <Item key={`item-${i}`} {...item} tag="NUEVO" />
            ))}
        </section>
    );
};

export default ItemList;