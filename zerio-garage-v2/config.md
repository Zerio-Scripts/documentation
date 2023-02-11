# Config

This section explains the different meanings of the config and how to change the config.

### Payment <a href="#payment" id="payment"></a>

#### IsItem <a href="#isitem" id="isitem"></a>

If this is set to false the money will be taken from the players money, setting this to true will instead take it from an item

#### PayImpoundFrom <a href="#payimpoundfrom" id="payimpoundfrom"></a>

This is the money type or item name depending on what you have "Config.IsItem" set to\
\


### Vehicle Damages <a href="#vehicle-damages" id="vehicle-damages"></a>

#### SaveVehicleDamages <a href="#savevehicledamages" id="savevehicledamages"></a>

If this is set to false then the vehicle will always spawn repaired, if set to true it will spawn the same way you put the vehicle in.

#### SaveFuelLevel <a href="#savefuellevel" id="savefuellevel"></a>

If this is set to false then the vehicle will always spawn with a full tank, if its set to true then the vehicle will spawn with the same fuel amount you put it in the garage with.

#### FixVehicleOnGarage <a href="#fixvehicleongarage" id="fixvehicleongarage"></a>

If set to true it will fix the vehicle upon being taken out of the garage.

#### FixVehicleOnImpound <a href="#fixvehicleonimpound" id="fixvehicleonimpound"></a>

If set to true it will fix the vehicle upon being taken out of the impound.\
\


### Plate <a href="#plate" id="plate"></a>

#### PlateFirstString <a href="#platefirststring" id="platefirststring"></a>

The amount of letters before the space or sepperation, if there is no sepperation then just make sure "PlateFirstString" and "PlateLastString" add up to the length of the plate and make sure "PlateUseSpace" is false. For example: "**ABC** 123"

#### PlateLastString <a href="#platelaststring" id="platelaststring"></a>

The amount of letters after the space or sepperation, if there is no sepperation then just make sure "PlateFirstString" and "PlateLastString" add up to the length of the plate and make sure "PlateUseSpace" is false.\
For example: "ABC **123**"

#### PlateUseSpace <a href="#plateusespace" id="plateusespace"></a>

If set to false the plate doesnt have a space in it, example: "ABC123".\
If set to true it means the plate has a space, example: "ABC 123".\
If this is set to the wrong value it will not be able to fetch data from the database.\
\


### Blip <a href="#blip" id="blip"></a>

Setting enabled to false will disable **all** blips, if you only want to turn off some blips then check the frequently asked questions for this script. The sprite changes the blip icon, all blips are shown on [<mark style="color:purple;">**this website**</mark>](https://docs.fivem.net/docs/game-references/blips/). Display and ShortRange should only be changed if you know what you are doing, further documentation of this exists in the FiveM natives & FiveM documentation. The scale changes the size of the blip. The color changes the color of the blip, all available colors are shown at the bottom of [<mark style="color:purple;">**this website**</mark>](https://docs.fivem.net/docs/game-references/blips/)\
\


### Marker <a href="#marker" id="marker"></a>

Setting Enabled to false will disable **all** markers. Changing the Type will change the style of the marker, all marker styles exist on [<mark style="color:purple;">**this website**</mark>](https://docs.fivem.net/docs/game-references/markers/). If Rotate is set to true the blip will rotate on the X / Y axis causing a cool animation. The colors is a table existing of RGBA (Red, Green, Blue, Alpha / Opacity). Changing offsets changes the offset of the marker, for example making it show higher or lower up. Changing the size will make it smaller or larger.\
\


### Misc <a href="#misc" id="misc"></a>

#### ShowAllVehiclesInAllGarages <a href="#showallvehiclesinallgarages" id="showallvehiclesinallgarages"></a>

If this is set to false then it doesnt matter which garage you put your vehicle in, it will always show up in all garages. If this is set to true it will instead only be shown in the garage you put the vehicle in, for example if you put it in the Motel Garage you wont be able to take it out from any other garage except for the Motel Garage.

#### Animations <a href="#animations" id="animations"></a>

Has 3 different values which changes what happens to the player upon putting back and taking out a vehicle.\
**Tween:** The player tweens out upon putting it back and runs to the vehicle upon taking it out\
**Warp:** The player instantly teleports into the vehicle upon taking it out and the vehicle instantly dissapears upon putting it back in\
**None:** Nothing will happen upon taking the vehicle out, although it works the same as "Warp" for putting the vehicle back.

#### HelpText <a href="#helptext" id="helptext"></a>

Has 2 different values which changes the style of the help text, also an option to turn it off.\
Setting "Enabled" to false will remove all help texts from the script, setting it to true it will show help texts\
**Default:** The default GTA V help text\
**Floating:** 3D Help Text

#### Multipliers <a href="#multipliers" id="multipliers"></a>

Changes the multiplier for fuel, body damge and engine damage. This takes the value \* the property, for example fuel \* 1 if the multiplier was set to 1.\
The importance in this is that the value ends up having a max value of 100, if the body damage saves as max 1000 then the multiplier should 0.1 since 1000 \* 0.1 is 100.

#### Events <a href="#events" id="events"></a>

This changes the events for when the job updates, the event used to create a notification and also when the player loads.\
99% of the time you wont need to change this although if you have changed the default esx / qb-core event names then you will need to change it.

\
