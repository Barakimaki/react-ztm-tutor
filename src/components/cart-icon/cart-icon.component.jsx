import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import {CartIconContainer, ItemCount} from "./cart-icon.styles";

const CartIcon = () => {

    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)

    return (
        <CartIconContainer onClick={()=>setIsCartOpen(!isCartOpen)}>
            <ShoppingIcon/>
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;