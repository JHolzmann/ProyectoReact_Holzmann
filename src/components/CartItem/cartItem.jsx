const CartItem = ({ name, quantity, price }) => {
    
    
    return (       
        <li className="cart-item">
                    <span>{name}</span>
                    <span>Cantidad: {quantity}</span>
                    <span>Precio unitario: ${price}</span>
                    <span>Subtotal: ${quantity * price}</span>
        </li>
        );
        };


export default CartItem;