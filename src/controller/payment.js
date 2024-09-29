const express = require('express');
const stripe = require('stripe')('your_stripe_secret_key');
const router = express.Router();




// router.post('/pay', async (req, res) => {
//   const { amount } = req.body;
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount,
//     currency: 'usd',
//     payment_method_types: ['card'],
//   });
//   res.json({ clientSecret: paymentIntent.client_secret });
// });




const pay = async(req,res)=>{
      
  const { amount } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
    payment_method_types: ['card'],
  });
  res.json({ clientSecret: paymentIntent.client_secret });

}


module.exports = {pay};
