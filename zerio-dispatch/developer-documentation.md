# Developer Documentation

## Exports List

### AddAlert (Serversided)

```lua
exports["zerio-dispatch"]:AddAlert(alertData<table>, menuIndex<number>)
```

You may add or remove as many fields as you want to.\
Official list for icons: [**MaterialDesignIcons**](https://materialdesignicons.com/)\
Example:

```lua
exports["zerio-dispatch"]:AddAlert({
    blipId = 161,
    length = 30 * 1000,
    position = {0,0,0},
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
