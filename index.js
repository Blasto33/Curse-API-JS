class curseClient {

    #api_key
    #api_URL = new URL("https://api.curseforge.com/v1/")

    /**
     * Creates a new CF client, from which you will be able to call endpoints.
     * 
     * @param api_key - Your own API Key from Curseforge that you can receive from https://console.curseforge.com/#/api-keys, after logging in through Google
     */
    constructor(api_key) {
      this.#api_key = api_key;
    }

    games = {
      'minecraft': 432,
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

        let myHeaders = new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "x-api-key": this.#api_key
        })

        let body = {
            "gameId": 432,
            "excludedModIds": [
              0
            ],
            "gameVersionTypeId": 73242
        };

        console.log("Getting mods 🚀")

        this.#checkIfGamesExists(game)

        fetch(this.#api_URL + 'mods/featured',
        {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(body),
        })
        .then(function(serverPromise){ 
            serverPromise.json()
              .then(function(j) { 
                console.log(j['data']); 
              })
              .catch(function(e){
                console.log(e);
              });
          })
          .catch(function(e){
              console.log(e);
            });
        
    }

}

module.exports.curseClient = curseClient;


