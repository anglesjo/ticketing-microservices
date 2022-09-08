import { Publisher, OrderCancelledEvent, Subjects } from '@geoticketing/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
