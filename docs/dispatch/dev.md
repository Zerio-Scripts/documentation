---
sidebar_position: 3
---

# Developer Documentation

## Exports List

### AddAlert (Serversided)

```lua
exports["zerio-dispatch"]:AddAlert(alertData<table>, menuIndex<number>)
```

You may add or remove as many fields as you want to.<br/>
Official list for icons: [**MaterialDesignIcons**](https://pictogrammers.com/library/mdi/?welcome)<br/>
Example:

```lua
exports["zerio-dispatch"]:AddAlert({
    blipId = 161,
    position = {0,0,0},
    sound = "adddispatch.mp3",
    description = "There was an carjacking down at Popular Street",
    top = {
        text = "Carjacking",
        code = "10-22"
    },
    fields = {
        {
            text = "Popular street",
            icon = "mdi-earth",
        },
        {
            text = "Adder [ABC 123]",
            icon = "mdi-car",
        },
        {
            text = "Black, White",
            icon = "mdi-palette",
        }
    }
}, 2)
```

### AddAlert (Server Event, from client)

```lua
TriggerServerEvent("zerio-dispatch:server:addAlert", menuIndex<number>, alertData<table>)
```

You may add or remove as many fields as you want to.<br/>
Official list for icons: [**MaterialDesignIcons**](https://pictogrammers.com/library/mdi/?welcome)<br/>
Example:

```lua
TriggerServerEvent("zerio-dispatch:server:addAlert", 1, {
    blipId = 161,
    position = {0,0,0},
    sound = "adddispatch.mp3",
    description = "There was an carjacking down at Popular Street",
    top = {
        text = "Carjacking",
        code = "10-22"
    },
    fields = {
        {
            text = "Popular street",
            icon = "mdi-earth",
        },
        {
            text = "Adder [ABC 123]",
            icon = "mdi-car",
        },
        {
            text = "Black, White",
            icon = "mdi-palette",
        }
    }
})
```

### AddAlert (Client Export)

```lua
exports["zerio-dispatch"]:AddAlert(menuIndex<number>, alertData<table>)
```

This export can be used as an alternative to triggering the server event directly.<br/>
The difference is that this export automatically adds the player position & street name field.<br/>
So if you wish to use this, do not include the street name field or position value.

Example:

```lua
exports["zerio-dispatch"]:AddAlert(1, {
    blipId = 161,
    sound = "adddispatch.mp3",
    description = "There was an carjacking down at Popular Street",
    top = {
        text = "Carjacking",
        code = "10-22"
    },
    fields = {
        {
            text = "Adder [ABC 123]",
            icon = "mdi-car",
        },
        {
            text = "Black, White",
            icon = "mdi-palette",
        }
    }
})
```

### GetAlerts (Serversided)

```lua
exports["zerio-dispatch"]:GetAlerts(menuIndex<number>) -- Returns: alerts<table>
```

Example:

```lua
local alerts = exports["zerio-dispatch"]:GetAlerts(2)
for i = 1, #alerts, 1 do
    local alert = alerts[i]
    print(alert)
end
```
