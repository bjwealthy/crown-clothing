import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_pRbyN5cn2EeeHZnYNge8411o00Z95kbHAB';

    const  onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout 
           label='Pay Now'
           name='Crown Clothing Ltd'
           billingsAddress
           shippingAddress
           image='https://svgshare.com/i/CUz.svg'
           description={`Your total is $${price}`}
           amount={priceForStripe}
           panelLabel='Pay Now' 
           token={onToken}
           stripeKey={publishableKey}    
        />
    )
}

export default StripeCheckoutButton;