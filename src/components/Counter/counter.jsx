import React, { useState } from 'react';

const Counter = ({ initial, stock, onAdd }) => {
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

    const handleAdd = () => {
        if (stock > 0) {
            onAdd(count); 
        }
    };

    return (
        <div className="counter">
            <button onClick={decrease}>-</button>
            <span>{count}</span>
            <button onClick={increase}>+</button>
            <button onClick={handleAdd}>Agregar al carrito</button>
        </div>
    );
};

export default Counter;

