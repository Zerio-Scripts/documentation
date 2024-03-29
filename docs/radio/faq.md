---
sidebar_position: 3
---

# Frequently asked questions

## Turn off radio on drop

To do this you will have to add a piece of code to your remove item function of either es_extended or qb-core.

### QB-Core

This is quite simple, open this file in any text editor. qb-inventory -> server -> main.lua. After that, find the function called "RemoveItem" The function should look close to this:

![Dropping Image](./assets/img/faq1.webp)

We want to add this piece of code over all of the "return true". (There are other ways although I dont want to over complicate this)

```lua
if tostring(item) == "radio" then
    TriggerClientEvent("zerio-radio:client:removedradio", Player.PlayerData.source)
end
```

Example of how it would look after the change:

![Dropping Image](./assets/img/faq2.webp)

### ESX / es_extended

This is quite simple, open this file in any text editor. es_extended -> server -> classes -> player.lua. After that, find the function called "removeInventoryItem" The function should look around the same as this, if it doesnt then dont worry. You most likely just have an different es_extended version:

![Dropping Image](./assets/img/faq3.png)

We want to add this piece of code after the "TriggerEvent(s)".

```lua
if tostring(item.name) == "radio" then
    TriggerClientEvent("zerio-radio:client:removedradio", self.source)
end
```

Example of how it would look after the change:

![Dropping Image](./assets/img/faq4.png)
