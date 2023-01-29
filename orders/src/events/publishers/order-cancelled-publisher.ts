import { Publisher, OrderCancelledEvent, Subjects } from "@kobi-tickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
