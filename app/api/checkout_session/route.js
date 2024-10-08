import { NextResponse } from "next/server";

import Stripe from "stripe"; // Use 'stripe' for server-side

const formatAmountForStripe = (amount)=>{
    return Math.round(amount * 100)
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
export async function POST(req) {
    try {
        const params = {
            mode: 'subscription',
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Pro Subscription',
                        },
                        unit_amount: formatAmountForStripe(10),
                        recurring: {
                            interval: 'month',
                            interval_count: 1,
                        },
                    },
                    quantity: 1,
                },
            ],
            success_url: `${req.headers.get('origin')}/result?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.get('origin')}/cancel`,
        };

        const checkoutSession = await stripe.checkout.sessions.create(params);

        return NextResponse.json(checkoutSession, { status: 200 });
    } catch (error) {
        console.error('Error creating Stripe checkout session:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
