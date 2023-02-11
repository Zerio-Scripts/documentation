# Config

This section explains the different meanings of the config and how to change the config.

#### &#x20;Camera <a href="#camera" id="camera"></a>

This is section exists so you can change the position of the "camera" while being in the character menu. You will most likely not want to change this although it is possible

#### CharacterAmount / MaxCharactersPerPage <a href="#characteramount-maxcharactersperpage" id="characteramount-maxcharactersperpage"></a>

Changing "CharacterAmount" will change the max amount of charcaters the player can have, changing "MaxCharactersPerPage" will change the amount of characters that get shown for every page. The calculation of how many pages should be shown are automatic.

### Misc <a href="#misc" id="misc"></a>

#### SpawnCoords <a href="#spawncoords" id="spawncoords"></a>

These dont really matter although you most likely want them to be somewhere the player cant be seen, this is the coordinates the player is at while being in the menu, as default its under the ground in the vinewood area to ensure that roleplaying players dont see players that are in the character menu

#### Identifier <a href="#identifier" id="identifier"></a>

This is the main identifier for the character system, make sure you include ":" at the end, example: "license**:"** is right, "license" is wrong.

#### SQL <a href="#sql" id="sql"></a>

The SQL system of the script, you can manually change this in the server -> functions.lua file although there are some default options to choose from, ghmattimysql and oxmysql.
