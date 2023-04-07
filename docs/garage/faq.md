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

### How do I setup housing support

Currently zerio-garage only supports qs-housing for house garages, if you wish for us to add support for any further scripts then please post an suggestion in our discord.

#### Integrating qs-housing

First you would have to change Config.Garage in `qs-housing/config/config.lua` to "zerio-garage".

Then you would have to create the following file: `qs-housing/client/custom/garage/zerio-garage.lua`

```lua title="qs-housing/client/custom/garage/zerio-garage.lua"
if Config.Garage ~= "zerio-garage" then
    return
end

function StoreVehicle(house)
    TriggerEvent("zerio-garage:client:PutBackHouseVehicle", house, "qs-housing")
end

function OpenGarage(house)
    TriggerEvent("zerio-garage:client:OpenHousingGarage", house, "qs-housing")
end

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        local ped = PlayerPedId()
        local pos = GetEntityCoords(ped)

        if closesthouse ~= nil and hasKey and Config.Houses and Config.Houses[closesthouse] and Config.Houses[closesthouse].garage then
            local dist = GetDistanceBetweenCoords(pos, Config.Houses[closesthouse].garage.x, Config.Houses[closesthouse].garage.y, Config.Houses[closesthouse].garage.z, true)

            if dist < 5.0 then
                DrawMarker(20, Config.Houses[closesthouse].garage.x, Config.Houses[closesthouse].garage.y, Config.Houses[closesthouse].garage.z + 0.3, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.3, 0.3, 0.15, 120, 10, 20, 155, false, false, false, 1, false, false, false)

                if dist < 2.0 then
                    local vehicle = GetVehiclePedIsIn(PlayerPedId(), false)
                    if Config.Houses[closesthouse].garage and Config.Houses[closesthouse].garage.x and Config.Houses[closesthouse].garage.y and Config.Houses[closesthouse].garage.z then
                        if vehicle and vehicle ~= 0 then
                            if Config.HelpNotification == 'ShowHelpNotification' then
                                ShowHelpNotification(Lang("HOUSING_SHOWHELP_GARAGE_STORE"))
                            elseif Config.HelpNotification == 'DrawText3D' then
                                DrawText3D(Config.Houses[closesthouse].garage.x, Config.Houses[closesthouse].garage.y, Config.Houses[closesthouse].garage.z + 0.3, Lang("HOUSING_DRAWTEXT_GARAGE_STORE"))
                            end

                            if IsControlJustPressed(0, Keys["E"]) or IsDisabledControlJustPressed(0, Keys["E"]) then
                                if not StoreVehicle then return DebugPrint("Your client/custom/garages/*.lua is not correctly configured") end
                                StoreVehicle(closesthouse)
                            end
                        else
                            if Config.HelpNotification == 'ShowHelpNotification' then
                                ShowHelpNotification(Lang("HOUSING_SHOWHELP_GARAGE_MENU"))
                            elseif Config.HelpNotification == 'DrawText3D' then
                                DrawText3D( Config.Houses[closesthouse].garage.x, Config.Houses[closesthouse].garage.y,  Config.Houses[closesthouse].garage.z + 0.3,  Lang("HOUSING_DRAWTEXT_GARAGE_STORE"))
                            end

                            if IsControlJustPressed(0, Keys["E"]) or IsDisabledControlJustPressed(0, Keys["E"]) then
                                if not OpenGarage then return DebugPrint("Your client/custom/garages/*.lua is not correctly configured") end
                                OpenGarage(closesthouse)
                            end
                        end
                    end
                end
            else
                Citizen.Wait(1000)
            end
        end
    end
end)
```

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
