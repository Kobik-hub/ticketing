import { Subjects, Publisher, PaymentCreatedEvent } from "@kobi-tickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
