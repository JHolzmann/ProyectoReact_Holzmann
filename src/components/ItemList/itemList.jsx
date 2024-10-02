import React from 'react';
import Item from "../Item/item";

const ItemList = ({ items }) => {
    return (
        <section className="items__container container">
            {items.map((item) => (
                <Item key={item.id} {...item} tag="NUEVO" />
            ))}
        </section>
    );
};

export default ItemList;
