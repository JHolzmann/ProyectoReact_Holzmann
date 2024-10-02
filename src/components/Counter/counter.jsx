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
        if (stock > 0 && onAdd) {
            onAdd(count); 
        }
    };

    return (
        <div className="counter">
            <button 
                onClick={decrease} 
                disabled={count === 1} 
                aria-label="Disminuir cantidad"
            >
                -
            </button>
            <span>{count}</span>
            <button 
                onClick={increase} 
                disabled={count === stock} 
                aria-label="Aumentar cantidad"
            >
                +
            </button>
            <button 
                onClick={handleAdd} 
                disabled={stock === 0 || !onAdd} 
                aria-label="Agregar al carrito"
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default Counter;


