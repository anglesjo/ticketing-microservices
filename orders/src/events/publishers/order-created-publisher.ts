import { Publisher, OrderCreatedEvent, Subjects } from '@geoticketing/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
