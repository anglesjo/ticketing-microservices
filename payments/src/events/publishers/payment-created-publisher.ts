import { Publisher, PaymentCreatedEvent, Subjects } from '@geoticketing/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
