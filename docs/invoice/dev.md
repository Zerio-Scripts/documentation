---
sidebar_position: 3
---

# Developer Documentation

## Information

The exports noted below can be used in any other script that you have in your config. You can use these exports to integrate other scripts with the invoice system.

## Exports List (Clientsided)


### GetInvoices

```lua
local invoices = exports["zerio-invoice"]:GetInvoices("police")
```

This export can be used to get a list of all the invoices for either a job or player.

It takes in one parameter, the receiver (job name or player identifier) and returns the invoices in the same structure as the database table.

### MarkInvoiceAsPaid

```lua
exports["zerio-invoice"]:MarkInvoiceAsPaid("025364-de5caa-e6f923-359a3e")
```

This export can be used to mark an invoice as paid, without removing money from anyone.

It takes in one parameter, the uuid of the invoice, which would be a string. It does not return anything.

### RemoveInvoice

```lua
exports["zerio-invoice"]:RemoveInvoice("025364-de5caa-e6f923-359a3e")
```

This export permanently deletes/removes an invoice, after being removed, the invoice can not be taken back.

It takes in one parameter, the uuid of the invoice, which would be a string. It does not return anything.

### NewInvoice

```lua
exports["zerio-invoice"]:NewInvoice({
    type = "player",
    sendDate = "2023-07-29 01:03:00",
    dueDate = "2023-07-31 01:03:00",
    receiver = "SKZ55766",
    senderJob = "police",
    senderPlayer = "SKZ55766",
    reason = "cool",
    category = "Fine",
    products = {
        {
            price = 10,
            description = "",
            quantity = 10
        }
    }
})
```

This export creates a new invoice. It does not return anything, the type definitions can be seen below:

```yaml
PARAM           TYPE                        EXPLENATION
type            "player" | "business"
sendDate        sql timestamp
dueDate         sql timestamp
receiver        string                      Any valid job / identifier
senderJob       string                      Any valid job
senderPlayer    string                      Any valid player identifier
reason          string
category        string                      Any valid invoice category for that job
products        array (see types below)
    price:          number
    description:    string
    quantity:       number
```