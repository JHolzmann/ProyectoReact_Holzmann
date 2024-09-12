import { useState, useEffect } from "react";
import Item from "../Item/item";

const ItemList = ({ id }) => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        fetch('/src/data/data.json')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                if (id) {
                    setFilteredItems(data.filter(item => item.id === id));
                } else {
                    setFilteredItems(data);
                }
            });
    }, [id]);

    return (
        <section className="items">
            {filteredItems.map((item, i) => <Item key={`item-${i}`} {...item} tag="NUEVO" />)}
        </section>
    );
}

export default ItemList;
