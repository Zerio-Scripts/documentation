# Frequently asked questions

### Turn off radio on drop <a href="#turn-off-radio-on-drop" id="turn-off-radio-on-drop"></a>

To do this you will have to add a piece of code to your remove item function of either es\_extended or qb-core.

#### QB-Core <a href="#qb-core" id="qb-core"></a>

This is quite simple, open this file in any text editor. qb-inventory -> server -> main.lua. After that, find the function called "RemoveItem" The function should look close to this:&#x20;

![](../.gitbook/assets/image.png)&#x20;

We want to add this piece of code over all of the "return true". (There are other ways although I dont want to over complicate this)

```lua
if tostring(item) == "radio" then
    TriggerClientEvent("zerio-radio:client:removedradio", Player.PlayerData.source)
end
```

Example of how it would look after the change:&#x20;

![](<../.gitbook/assets/image (15).png>)

#### ESX / es\_extended <a href="#esx-es-extended" id="esx-es-extended"></a>

This is quite simple, open this file in any text editor. es\_extended -> server -> classes -> player.lua. After that, find the function called "removeInventoryItem" The function should look around the same as this, if it doesnt then dont worry. You most likely just have an different es\_extended version:

&#x20;![Example](https://cdn.discordapp.com/attachments/934470871333105674/956651899032072262/unknown.png)&#x20;

We want to add this piece of code after the "TriggerEvent(s)".

```lua
if tostring(item.name) == "radio" then
    TriggerClientEvent("zerio-radio:client:removedradio", self.source)
end
```

Example of how it would look after the change:

&#x20;![Example](https://cdn.discordapp.com/attachments/934470871333105674/956652376515838075/unknown.png)
