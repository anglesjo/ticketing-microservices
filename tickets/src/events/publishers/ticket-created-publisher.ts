import { Publisher, Subjects, TicketCreatedEvent } from '@geoticketing/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
