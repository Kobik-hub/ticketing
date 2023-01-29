import { Publisher, Subjects, TicketUpdatedEvent } from "@kobi-tickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
