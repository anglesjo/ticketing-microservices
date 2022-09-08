import * as dotenv from 'dotenv';
import { Stripe } from 'stripe';

dotenv.config();

export const stripe = new Stripe(process.env.STRIPE_KEY!, {
  apiVersion: '2022-08-01',
});
