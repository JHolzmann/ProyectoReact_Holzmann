import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "../../components/CartItem/cartItem";


        const CartPage = () => {
        const { cartItems, calculateTotal, removeItem, updateItemQuantity, clearCart } = useContext(CartContext);
    
        return (
            
            <div className="cart-page">
                <h2>Tu Carrito</h2>
                {cartItems.length === 0 ? (
                    <p>Tu carrito está vacío</p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <CartItem />
                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                <button onClick={() => removeItem(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                )}
                <h3>Total: ${calculateTotal()}</h3>
                <button onClick={clearCart}>Vaciar Carrito</button>
                </div>
        )}
    
    export default CartPage;