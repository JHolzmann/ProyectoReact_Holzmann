import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Icon } from '@iconify/react';
import Pill from '../pill/pill';
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cartItems } = useContext(CartContext);

    
    const itemsInCart = cartItems?.length || 0;

    return (
        <Link to={"/carrito"}>
            <div className='cart-widget'>
                
                {itemsInCart > 0 ? (
                    <Pill quantity={itemsInCart} />
                ) : (
                    <span className="cart-widget__empty"></span>
                )}
                <Icon
                    className='cart-widget__cart'
                    icon="clarity:shopping-cart-solid"
                    aria-label="Carrito de compras"
                />
            </div>
        </Link>
    );
};

export default CartWidget;
