# Curse-API-JS
🚀 A modern NodeJS wrapper library to easily retrieve informations using the new CurseForge API. An equivalent to the [Curse API, a PHP Library](https://github.com/mTxServ/curse-api) made by [mTxServ](https://github.com/mTxServ).

Available on NPM [here](https://www.npmjs.com/package/curse-api-js).

Please do not forget to star the project if you like/use it ⭐

## Dependencies

- Node >= 18

<<<<<<< HEAD
This library has been made to be lightweight and to not depend on any other package, for the best reliability. This way, you can safely use it for all of your projects without hassle.
=======
This library has been made to be lightweight and to not depends on any other package, for the best reliability. This way, you can safely use it for all of your projects without hassle. It relies on fetch to get the best results.
>>>>>>> a1784e55853c5a59cb84eb4125aff39a59221c60

## Installation

```
npm install curse-api-js
```

## Example

```
const { curseClient } = require("curse-api-js");

<<<<<<< HEAD
const curse = new curseClient()

curse.setToken(<your_api_key>) // https://console.curseforge.com/?#/api-keys

// Get the 30 most popular mods for Minecraft 1.19
curse.Minecraft.getMods('1.19')
```

## Methods

CurseAPIJS will support all the games available on CurseForge. For now, only Minecraft is available so all the methods will use Minecraft as an example. Feel free to suggest what will be the next game!

```
// Sets your personal/team token to access CurseForge API, mandatory.
curse.setToken(<your_api_key>)

// Access the specified game methods, e.g Minecraft
curse.Minecraft

// Returns all the Minecraft versions with their corresponding ID to perform more complex operations afterwards
curse.Minecraft.getVersions()

/**
*   Returns mods for the specified version
*   {string} mandatory - version slug ("1.19" for example), only major versions
*   {int}    optional  - filter you wish to use among those enum values: https://docs.curseforge.com/?javascript#tocS_ModsSearchSortField
/
curse.Minecraft.getMods(<versionSlug>, <filter>)

// Not yet implemented
curse.Minecraft.getFeaturedMods()
```
=======
const curse = new curseClient(<your_api_key>) // https://console.curseforge.com/?#/api-keys to get your own key

// Get the 30 most popular mods for the game provided as parameter, example function that will be removed later
curse.getMods('minecraft')
```
>>>>>>> a1784e55853c5a59cb84eb4125aff39a59221c60
