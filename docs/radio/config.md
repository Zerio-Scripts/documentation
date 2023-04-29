---
sidebar_position: 4
---

# Config

This section explains the different meanings of the config and how to change the config.

### Channels

This is used to define specific channels with custom names and job requirements. The channel doesnt need to have a job requirement, to remove the job requirement simply remove the "jobs" table from the channel. Example:

```lua title="zerio-radio/config.lua"
[911] = {
    label = "Police Radio",
    jobs = {
        "police"
    }
}
```

This would create a channel for the frequency 911, and call it "Police Radio", it would also lock this channel to the "police" job.

### Misc

#### VoiceScript

This is the voice script you are using, the script currently only supports pma-voice and mumble-voip. Although saltychat and toko-voip support is being worked on.

#### OpenType

This changes the way you open the radio, here are the different types + an explenation\
**item:** It will open the radio when an item gets used. The item name gets changed through "Config.Item".\
**command:** The radio will open through the /radio command.\
**keybind:** The radio will open when a key gets pressed. The key gets changed through "Config.RadioKey"\
**custom:** This is only if you know what you are doing, the radio will open when the client event "zerio-radio:client:open" gets trigered. Which allows you to create your own custom ways of opening the radio.

#### RadioKey

This is only important if you use Mumble-Voip, this is the key used to show the animation therefore has to be the same as the mumble-voip radio talking key.

#### EventNames

You shouldnt need to change this if you havent changed the default ESX / QB-Core events.
