import React from 'react'; 
import {connect} from 'react-redux'; 
import { createStructuredSelector } from 'reselect'; 

import CheckoutItem from '../../Component/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../Component/strip-button/strip-button.component';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'; 

import './checkout.styles.scss';

const CheckoutPage = ({CartItems, total}) => (
    <div className='checkout-page'>
    <div className='checkout-header'>
        <div className='header-blocks'>
            <span>Product</span> 
        </div>
        <div className='header-blocks'>
            <span>Discription</span> 
        </div>
        <div className='header-blocks'>
            <span>Quantity</span> 
        </div>
        <div className='header-blocks'>
            <span>Price</span> 
        </div>
        <div className='header-blocks'>
            <span>Remove</span> 
        </div>
        
    </div>
    {
        CartItems.map(cartItem=>(
        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        ))}

    <div className='total'>
<span>TOTAL: ${total}</span>

    </div>
   
    <StripeCheckoutButton price={total}/>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    </div>
    

);


const mapStateToProps = createStructuredSelector({
    CartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage); 
