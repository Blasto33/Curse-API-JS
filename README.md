# Curse-API-JS
🚀 A modern NodeJS library to easily retrieve informations using the new CurseForge API. An equivalent to the [Curse API, a PHP Library](https://github.com/mTxServ/curse-api) made by [mTxServ](https://github.com/mTxServ).

Available on NPM [here](https://www.npmjs.com/package/curse-api-js).

Please do not forget to star the project if you like/use it ⭐

## Dependencies

- Node >= 18

This library has been made to be lightweight and to not depends on any other package, for the best reliability. This way, you can safely use it for all of your projects without hassle. It relies on fetch to get the best results.

## Installation

```
npm install curse-api-js
```

## Example

```
const { curseClient } = require("curse-api-js");

const curse = new curseClient(<your_api_key>) // https://console.curseforge.com/?#/api-keys to get your own key

// Get the 30 most popular mods for the game provided as parameter, example function that will be removed later
curse.getMods('minecraft')
```
