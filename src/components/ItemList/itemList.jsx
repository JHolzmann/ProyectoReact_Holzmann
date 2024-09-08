import { useState, useEffect } from "react";

import Card from "../Card/card";

const ItemList = () => {
    let [ Card, setItems ] = useState([]);

    useEffect(() => {
        fetch('/src/data/data.json')
        .then(res => res.json())
        .then(data => setItems(data))
}, []);

    return(
    <section className="items__container container">
    {Card.map(Card => <Item {...Card} tag="NUEVO"/>)}
    </section>
);

}

export default ItemList;