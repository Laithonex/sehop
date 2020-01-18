import React from 'react'; 
import StripeCheckout from 'react-stripe-checkout'; 

const StripeCheckoutButton = ({price}) => {
    const PriceForStrip = price * 100; 
    const PublishableKey = 'pk_test_w13L4KeuozxaeDcTpckYqGDG00NmyWQd3B';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful'); 
    }

    return(
        <StripeCheckout
            label='Pay Now' 
            name='eshop'
            billingAdress
            shippingAdress
            image='https://sendeyo.com/up/d/f3eb2117da'
            discription={`Your total is $${price}`}
            amount={PriceForStrip}
            panelLabel='Go hard'
            token={onToken}
            stripeKey={PublishableKey}

        />
    )
}

export default StripeCheckoutButton