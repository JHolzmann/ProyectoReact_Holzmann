import React from 'react';
import './cartItem.css'; 

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
    
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10); // Asegúrate de que se pase la base 10
        if (!isNaN(newQuantity) && newQuantity > 0) {
            onUpdateQuantity(item.id, newQuantity);
        }
    };

    return (
        <li className="cart-item">
            <img className="cart-item__img" src={item.img} alt={item.name} />
            <div className="cart-item__details">
                <h3 className="cart-item__name">{item.name}</h3>
                <p className="cart-item__price">Precio: ${item.price}</p>
                <input 
                    className="cart-item__quantity"
                    type="number" 
                    value={item.quantity || 1} 
                    onChange={handleQuantityChange} 
                    min="1" 
                />
                <button className="cart-item__remove" onClick={() => onRemove(item.id)}>
                    Eliminar
                </button>
            </div>
        </li>
    );
};

export default CartItem;
