import { Publisher, OrderCreatedEvent, Subjects } from "@kobi-tickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
