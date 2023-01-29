import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@kobi-tickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
