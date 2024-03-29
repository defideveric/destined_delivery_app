import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react'

export default function CheckOutForm({ amount }) {
    const stripe = useStripe();
    const elements = useElements();
    const [cardholderName, setCardholderName] = useState('');
    
    const handlePayment = async(event) => {
        event.preventDefault();

        if(elements == null){
            return ;
        }

        const { name } = elements.getElement(CardElement);
        setCardholderName(name);


        const {error: submitError} = await elements.submit();
        if(submitError)
        {
            return ;
        }

        const res = await fetch('/api/create-intent', {
            method: 'POST',
            body: JSON.stringify({
                amount: amount,
                cardholderName: name,
            }),
        });

        const secretKey = await res.json();
        console.log(secretKey);

        const { error } = await stripe.confirmPayment({
            clientSecret: secretKey,
            elements,
            confirmParams: {
                return_url: "http://localhost:3000/payment-confirm"
            }
        })
    }

  return (
    <div className='flex flex-col justify-center items-center w-full mt-6'>
    <h2 className='m-5 font-bold'>Amount To Pay: {amount} </h2>
        <form onSubmit={handlePayment} className='max-w-md' type="submit" >
        <CardElement/>
        <PaymentElement/>
            <button className='w-full bg-black text-white p-2 rounded-lg mt-2'>Pay</button>
        </form>
    </div>
  )
}

