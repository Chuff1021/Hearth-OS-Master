# Integration Target

End state:

1. Dealer customer submits one of these from the Superstore:
   - quote request
   - product/order request
   - service appointment request
   - parts fitment request

2. Superstore sends the event to Hearth-OS.

3. Hearth-OS creates or updates:
   - customer
   - address/location
   - request/job
   - product or part line items
   - estimate/invoice draft
   - payment status record
   - internal notification/task

4. Demo dashboard shows the dealer workflow from website lead to scheduled job/order/payment.

## First demo integration scope

For planning/build phase, use a simple internal API contract rather than production payment/customer infrastructure.

Suggested event types:

- `superstore.quote_requested`
- `superstore.order_requested`
- `superstore.service_requested`
- `superstore.parts_fitment_requested`

Each event should include:

- dealer id
- brand/demo id
- customer contact
- job/service address
- source page/product/SKU when applicable
- requested products/parts
- notes/photos placeholder
- timestamp
