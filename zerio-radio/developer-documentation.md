# Developer Documentation

## Information

The exports noted below can be used in any other script that you have in your config. You can handle channels and permissions / access to the channels via these exports.\
For further exports, such as setting or getting the current radio channel you would have to use either [mumble-voip's](https://github.com/FrazzIe/mumble-voip-fivem#exports) or [pma-voice's](https://github.com/AvarianKnight/pma-voice#exports) exports.

## Exports List (Serversided)

### DoesChannelExist

```lua
local exists = exports["zerio-radio"]:DoesChannelExist(frequency<number>)
```

This export takes a single parameter, which is the radio frequency to check. It returns a boolean (true or false) depending on if the channel exists or not.

### CreateChannel

```lua
local created = exports["zerio-radio"]:CreateChannel(frequency<number>, data<table>)
```

This export takes 3 parameters, the frequency / channel number and the actual radio data. The `data` parameter should be the same structure as it is in the `config.lua` of `zerio-radio`.\
The export returns a boolean (true or false) depending on if the channel was successfully created. If the channel isnt successfully created, an warning with further info will be shown in your server console.

### RemoveChannel

```lua
local removed = exports["zerio-radio"]:RemoveChannel(frequency<number>)
```

This export only takes one parameter, which is the frequency to remove.\
The export returns a boolean (true or false) depending on if the channel was successfully removed. If false is returned then you may assume that the channel doesnt exist.

### GiveAccessToChannel

```lua
local success = exports["zerio-multijobs"]:GiveAccessToChannel(frequency<number>, value<string>)
```

This export takes 2 parameters, the frequency of the channel and the value which should be whitelisted, such as the discord role, identifier etc (depends on the channel).\
The export returns a boolean (true or false) depending on if the access was successfully added. If false is returned, you may assume that the channel doesnt exist.

### RemoveAccessFromChannel

```lua
local removed = exports["zerio-multijobs"]:RemoveJob(frequency<number>, value<string>)
```

This export takes 2 parameters, the frequency of the channel and the value which should be removed access from the channel, such as the discord role, identifier etc (depends on the channel).\
The export returns a boolean (true or false) depending on if the access was successfully added. If false is returned, you may assume that the channel doesnt exist.
