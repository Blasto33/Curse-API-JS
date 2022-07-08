# Curse-API-JS
🚀 A modern NodeJS library to easily retrieve informations using the new CurseForge API

Please do not forget to star the project if you like/use it ⭐

## Dependencies

- Node >= 18

This library has been made to be lightweight and to not depends on any other package, for the best reliability. This way, you can safely use it for all of your projects without hassle.

## Installation

```
npm install curse-api-js
```

## Example

```
const curse = new CurseClient(<your_api_key>) // https://console.curseforge.com/?#/api-keys

// Get the 30 most popular mods for the game provided as parameter
curse.getMods('minecraft')
```