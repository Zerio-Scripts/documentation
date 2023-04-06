---
sidebar_position: 4
---

# Config

This section explains the different meanings of the config and how to change the config.

## Camera

This is section exists so you can change the position of the "camera" while being in the character menu. You will most likely not want to change this although it is possible

## CharacterAmount / MaxCharactersPerPage

Changing "CharacterAmount" will change the max amount of charcaters the player can have, changing "MaxCharactersPerPage" will change the amount of characters that get shown for every page. The calculation of how many pages should be shown are automatic.

## Misc

### SpawnCoords

These dont really matter although you most likely want them to be somewhere the player cant be seen, this is the coordinates the player is at while being in the menu, as default its under the ground in the vinewood area to ensure that roleplaying players dont see players that are in the character menu

### Identifier

This is the main identifier for the character system, make sure you include ":" at the end, example: "license**:"** is right, "license" is wrong.

### SQL

The SQL system of the script, you can manually change this in the server -> functions.lua file although there are some default options to choose from, ghmattimysql and oxmysql.
