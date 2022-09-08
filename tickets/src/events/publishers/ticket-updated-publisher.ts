import { Publisher, Subjects, TicketUpdatedEvent } from '@geoticketing/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
