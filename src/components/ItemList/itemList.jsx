import { useState, useEffect } from "react";
import Item from "../Item/item";

const ItemList = ({ category }) => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        fetch('/src/data/data.json')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                if (category) {
                    setFilteredItems(data.filter(item => item.category === category));
                } else {
                    setFilteredItems(data);
                }
            });
    }, [category]);

    return (
        <section className="items">
            {filteredItems.map((item, i) => <Item key={`item-${i}`} {...item} tag="NUEVO" />)}
        </section>
    );
}

export default ItemList;