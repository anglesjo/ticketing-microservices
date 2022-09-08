import {
  Publisher,
  Subjects,
  ExpirationCompleteEvent,
} from '@geoticketing/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
