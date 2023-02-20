# Frequently asked questions

### Turning off the blip for a specific garage / impound <a href="#turning-off-the-blip-for-a-specific-garage-impound" id="turning-off-the-blip-for-a-specific-garage-impound"></a>

```lua
hideblip = true
```

Adding this simple line of code to a JobGarage, Impound or Garage will cause the blip to not be shown.

### Lock garage to specific vehicle types. <a href="#lock-garage-to-specific-vehicle-types" id="lock-garage-to-specific-vehicle-types"></a>

#### Valid vehicle types: <a href="#valid-vehicle-types" id="valid-vehicle-types"></a>

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

![](<../.gitbook/assets/image (2) (1).png>)

Then add this at the bottom of the fxmanifest.lua file,&#x20;

```lua
dependencies {
    "zerio-garage"
}
```

After removing it save the fxmanifest.lua file and instead open the server folder of qb-phone and then edit the main.lua file in the server folder. And add this line at the top of the server -> main.lua script.

```lua
Config.Garages = exports["zerio-garage"]:getQBPhoneData()
```

