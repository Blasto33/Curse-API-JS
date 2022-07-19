const { Game } = require("../game")

class Minecraft extends Game {

    #api_URL = new URL("https://api.curseforge.com/v1/mods/")
    #api_key = ""
    #myHeaders = ""

    constructor(api_key, myHeaders) {
        super();
        this.game_id = 432; 
        this.version_id = 0;
        this.#myHeaders = myHeaders;
        this.#api_key = api_key;
    }

    /** 
     * All the Minecraft versions available on CurseForge, excepted for the beta ones. To be updated.
    */
    minecraftVersions = {
        "1.19": 73407,
        "1.18": 73250,
        "1.17": 73242,
        "1.16": 70886,
        "1.15": 68722,
        "1.14": 64806,
        "1.13": 55023,
        "1.12": 628,
        "1.11": 599,
        "1.10": 572,
        "1.7": 5,
        "1.5": 11,
        "1.4": 12,
        "1.3": 13,
        "1.2": 14,
        "1.1": 15,
        "1.0": 16,
        "forge": 432,
        "fabric": 73247,
    }

    /**
     * All the sorting types available
     */
    sortingType = {
        "featured": 1,
        "popularity": 2,
        "lastUpdated": 3,
        "name": 4,
        "author": 5,
        "totalDownloads": 6,
        "category": 7,
        "gameVersion": 8,
    }

    // TODO: Improve this function to add varargs for the multiple filters
    getMods(versionSlug, sort = "featured") {
        /**
         * @name getMods
         * @description To get an array of mods for the version passed as parameter
         * @param {string} versionSlug The Minecraft version you wish to use
         * @param {string} filter To sort mods according to a filter (default: popularity)
         * 
         * @returns {array} mods
         */

        let isVersionSlugCorrect = this.minecraftVersions.hasOwnProperty(versionSlug)
        let isSortingTypeCorrect = this.sortingType.hasOwnProperty(sort)

        if (isVersionSlugCorrect === false)
            return "Version does not exist or is not supported"
        else if (isSortingTypeCorrect === false)
            return "Sorting type does not exist, please check your syntax"

        fetch(this.#api_URL + 'search?' + "gameId=432&" + "sortField=1",
        {
            method: 'GET',
            headers: this.#myHeaders,
        })
        .then(function(serverPromise){ 
            serverPromise.json()
              .then(function(j) { 
                console.log(j['data']['name']); 
              })
              .catch(function(e){
                console.log(e);
              });
        })
        .catch(function(e){
            console.log(e);
        }); 
    }

    getFeaturedMods(versionSlug) {
        /**
         * @name getFeaturedMods
         * @description To get an array of featured, popular and recently updated mods for the version passed as parameter
         * @param {string} versionSlug The Minecraft version you wish to use
         * 
         * @returns {array} mods
         */

        return "Not Yet Implemented"
    }

}

module.exports.Minecraft = Minecraft;