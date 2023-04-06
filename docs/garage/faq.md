---
sidebar_position: 3
---

# Frequently asked questions

### Turning off the blip for a specific garage / impound

```lua
hideblip = true
```

Adding this simple line of code to a JobGarage, Impound or Garage will cause the blip to not be shown.

### Lock garage to specific vehicle types.

#### Valid vehicle types:

Compacts, Sedans, SUVs, Coupes, Muscle, SportClassic, Sport, Super, Motorcycle, Offroad, Industrial, Utility, Vans, Bicycles, Boats, Helicopter, Plane, Service, Emergency, Military

```lua
whitelistedTypes = {
    -- VEHICLE TYPES HERE
}
```

Adding this simple line of code to a Garage will lock it to the inputted vehicle types.

```lua
blacklistedTypes = {
    -- VEHICLE TYPES HERE
}
```

Adding this simple line of code to a Garage will lock it to all vehicle types except the inputted vehicle types.

### How do I setup qb-phone support

Start by opening the fxmanifest.lua of qb-phone.\
Find the line that imports config.lua from qb-garages and delete it, the line should look somewhat like this.

![](./assets/images/faq1.webp)

Then add this at the bottom of the fxmanifest.lua file,

```lua
dependencies {
    "zerio-garage"
}
```

After removing it save the fxmanifest.lua file and instead open the server folder of qb-phone and then edit the main.lua file in the server folder. And add this line at the top of the server -> main.lua script.

```lua
Config.Garages = exports["zerio-garage"]:getQBPhoneData()
```
