"use client";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation';
import CheckOutForm from "/components/Home/CheckOutForm.jsx"
import React from 'react'

export default function Payment() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);
  const options = {
    mode: 'payment',
    amount: Math.round(amount*100),
    currency: 'usd'
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckOutForm amount={amount}/>
    </Elements>
  )
}

