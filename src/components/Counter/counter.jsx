import { useState, useEffect } from "react";
import './counter.css'
function Counter({ initial, onAdd }) {
    const [count, setCount] = useState(initial);
    const [stock, setStock] = useState(0);

useEffect(() => {
    fetch('/path/to/data.json')
        .then((response) => response.json())
        .then((data) => {
        const product = data.find(item => item.id === 1);
        setStock(product.stock);
    });
}, []);

const increase = () => {
    if (count < stock) {
        setCount(count + 1);
    }
};

const decrease = () => {
    if (count > 1) {
        setCount(count - 1);
    }
};

const addToCart = () => {
    onAdd(count);
};

    return (
    <div>
        <button onClick={decrease}>-</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
        <button onClick={addToCart}>Agregar al carrito</button>
        <p>Stock disponible: {stock}</p>
    </div>
);
}

export default Counter;