import { useState, useEffect } from "react";
import Item from "../Item/item";

const ItemList = () => {
    let [ items, setItems ] = useState([]);

    useEffect(() => {
        fetch('/src/data/data.json')
        .then(res => res.json())
        .then(data => setItems(data))
}, []);

    return(
    <section className="items__container container">
        {items.map((item, i) => <Item key={`item-${i}`} {...item} tag="NUEVO"/>)}
    </section>
);
}

export default ItemList;