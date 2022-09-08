export enum OrderStatus {
  // When the order has been created, but the
  // ticket it is trying to order has not been received
  Created = 'created',

  // When the ticket the order is trying to reserve has already been reserved
  // Or, when the user has cancelled the order
  // Or, when the order expires before payment
  Cancelled = 'cancelled',

  // The order has successfully reserved the ticket
  AwaitingPayment = 'awaiting:payment',

  // The order has reserved the ticket and the user has
  // provided payment successfully
  Complete = 'complete',
}
