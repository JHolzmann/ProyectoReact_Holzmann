import { Icon } from '@iconify/react';

const CartWidget = ({ cantidad }) => {
    
    return(
        <div className='cart-widget'>
            <span className='pill'>{ cantidad } </span>
            <Icon className='cart-widget__cart' icon="ph:shopping-cart-thin" width="1.2em" height="1.2em" />
        </div>
    );
}

export default CartWidget