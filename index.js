class CurseClient {
    constructor(api_key) {
      this.api_key = api_key;
      this.games = {
        'minecraft': 432,
      }
    }

    #checkIfGamesExists(game_name) {
        let isGameExisting = this.games.hasOwnProperty(game_name)

        if (isGameExisting === false)
            console.log("Game doesn't exist or isn't supported yet.")
        console.log(isGameExisting)
    }

    getGames() {
        /**
        * Summary.
        * Retrieves games.
        * Description.
        * Get the games and returns their infos.
        * 
        * @function getGames
        * @return {JSON object}
        */

        fetch('https://api.curseforge.com/v1/games',
        {
            method: 'GET',
            headers: { 'x-api-key': this.api_key }
        })
        .then(function(res) {
            return res.json();
        }).then(function(body) {
            console.log(body);
        });
    }

    getMods(game) {
        /**
         * 
         * @param gameName Game to get mods for.
         * @returns an object with multiple lists of [[Mod]]
         */

        console.log("Getting mods 🚀")

        this.#checkIfGamesExists(game)

        fetch('https://api.curseforge.com/v1/mods/featured',
        {
            method: 'POST',
            body: {
                "gameId": this.games[game],
                "excludedModIds": [
                    0
                ],
                "gameVersionTypeId": 9186 // 1.19
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'x-api-key': this.api_key
            },
        })
        .then(function(res) {
            return res.json();
        }).then(function(body) {
            console.log(body);
        });
    }

}

const client = new CurseClient('$2a$10$p01j6Aw2PoH9L78Mex3xoeFRqKPNkWtzC.BSvN9A/O0EAcZl/1IIy')

client.getMods("minecraft")