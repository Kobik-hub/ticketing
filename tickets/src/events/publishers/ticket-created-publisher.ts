import { Publisher, Subjects, TicketCreatedEvent } from "@kobi-tickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
