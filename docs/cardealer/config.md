---
sidebar_position: 4
---

# Config

## OrderTime

This determines the time needed for a vehicle to be fully ordered, it has to be in seconds.

## PaymentType

This determines if the money for buying vehicles should be taken from the employee or from the company. Setting it to society will use qb-bossmenu or qb-management for qb-core and esx_society for ESX. Setting it to playermoney will simply use the players money.

## PayEmployeesPercentage

If this is over 0 they will get the price multiplied by this number of the money from every sale.<br/>
So if they would sell a vehicle for $100,000 and this number would be 0,2 / 20% they would get $20,000 as a "selling bonus" / payout.

## Plates

### PlateUseSpace

If your plate has spaces then make sure this is set to true (ABC 123 etc), if your plate doesnt have spaces then make sure this is set to false (ABC123 etc).

### PlateFirstString + PlateLastString

If you dont have any spaces in the plate then this will work as long as these numbers add up to the length of the plate. Lets say your plates look like this: ABC123 then these numbers could be 3 and 3 or 4 and 2 etc. As long as they add up to the plate length.<br/>
If you use spaces for your plates these numbers will have to be the text length before and after the space. If your plate looks like this for example: ABC 123 the firststring would be 3 and the last would also be 3, if it would look like this: ABC 123A the firststring would be 3 and the last would be 4.

## JobScript

**ONLY QB-CORE** This has to be set to either qb-bossmenu or qb-management (newest versions) if you are going to use society as the Payment Type.

## Positions

This is all the cardealers and the data for them

### Position

The position of the main employee menu

### VehicleSpawn

This is the position that sold vehicles will spawn at.

### Duty

**ONLY QB-CORE** This is the position that the duty can be toggled at

**Job**

This is the job name of the dealership, has to be the same as the "cardealer" value in zerio_cardealer-vehicles.<br/>
If this is set to nil and a customname is added then a jobless dealership will be created. Example:

```lua
{
    ...
    job = nil,
    customname = "jobless"
    ...
}
```

**Label**

The text shown at the top of the all menus

### Showcase

### Menu

This is the position that the showcase menu gets opened at

### Vehicle

This is the position that the showcase vehicle spawns at
