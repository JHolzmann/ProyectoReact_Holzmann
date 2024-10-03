import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import CartItem from '../../components/CartItem/cartItem';
import './cartDetail.css'; 

const Cart = () => {
    const { cartItems, removeItem, updateItemQuantity, clearCart } = useContext(CartContext);

    const handleRemoveItem = (id) => {
        removeItem(id);
    };

    const handleUpdateQuantity = (id, quantity) => {
        updateItemQuantity(id, quantity);
    };

    const handleClearCart = () => {
        clearCart();
    };

    const handleAcceptPurchase = () => {
        
        alert("¡Compra aceptada!");
        clearCart(); 
    };

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h1>Tu Carrito</h1>
            {cartItems.length === 0 ? (
                <p>Tu carrito está vacío</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <CartItem 
                                key={item.id} 
                                item={item} 
                                onRemove={handleRemoveItem} 
                                onUpdateQuantity={handleUpdateQuantity} 
                            />
                        ))}
                    </ul>
                    <h2>Total: ${totalAmount.toFixed(2)}</h2>
                    <button onClick={handleClearCart}>Limpiar Carrito</button>
                    <button onClick={handleAcceptPurchase}>Aceptar Compra</button> 
                </>
            )}
        </div>
    );
};

export default Cart;

