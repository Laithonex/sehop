// // import {createSelector} from 'reselect'; 

// // const selectCart = state => state.cart; //it get a cart from the state

// // export const selectCartItems = createSelector(
// //     [selectCart], cart => cart.cartItems
// // );

// // export const selectCartItemsCount = createSelector(
// //     [selectCartItems], cartItems => 
// //     cartItems.reduce(
// //         (accumalatedQuantity, cartItem) =>
// //         accumalatedQuantity + cartItem.quantity, 0
// //     )
// // ); 


// // import { createSelector } from 'reselect';

// import { createSelector } from 'reselect';

// const selectCart = state => state.cart;

// export const selectCartItems = createSelector(
//   [selectCart],
//   cart => cart.cartItems
// );

// export const selectCartItemsCount = createSelector(
//   [selectCartItems],
//   cartItems =>
//     cartItems.reduce(
//       (accumalatedQuantity, cartItem) =>
//         accumalatedQuantity + cartItem.quantity,
//       0
//     )
// );

// import {createSelector} from 'reselect'; 

// const selectCart = state => state.cart; 

// export const selectCartItems = createSelector(
//     [selectCart], 
//     cart => cart.cartItems
    
// );

// export const selectCartItemsCount = creatSelector(
//     [selectCartItems], 
//     cartItems.reduce(
//         (accumalatedQuantity, cartItem) => 
//         accumalatedQuantity + cartItem.quantity, 0

//     )
// );


import  {createSelector}  from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems], 
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity*cartItem.price,
      0
    )
)