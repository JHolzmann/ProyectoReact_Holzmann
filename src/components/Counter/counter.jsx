import { useState } from "react";
import './counter.css';

function Counter({ initial, stock, onAdd }) {
    const [count, setCount] = useState(initial);

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
