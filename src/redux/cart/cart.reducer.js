import CartActionType from './cart.types'; 
import { addItemToCart, removeItemFromCart } from './cart.utils';
import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}; 

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionType.ADD_ITEM:
            return {
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state, 
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state, 
                cartItems: removeItemFromCart(state.cartItems, action.payload)  //utility function is been called to work in case REMOVE_ITEM called.
            };
        default: 
            return state;
    }
}

export default cartReducer; 
