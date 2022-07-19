class Mod {

    constructor(mod) {
        this.name = mod
    }

    getModName() {
        console.log(this.name)
    }
}

module.exports.Mod = Mod;