import React from 'react';
import './CartItem.css'; 

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        onUpdateQuantity(item.id, newQuantity);
    };

    return (
        <li className="cart-item">
            <img src={item.img.front} alt={item.name} />
            <div>
                <h3>{item.name}</h3>
                <p>Precio: ${item.price}</p>
                <input 
                    type="number" 
                    value={item.quantity} 
                    onChange={handleQuantityChange} 
                    min="1" 
                />
                <button onClick={() => onRemove(item.id)}>Eliminar</button>
            </div>
        </li>
    );
};

export default CartItem;
