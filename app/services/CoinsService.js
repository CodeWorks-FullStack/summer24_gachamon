import { AppState } from "../AppState.js"

class CoinsService {
  addCoin() {
    // NOTE do not alias out a primitive and try to change the value!
    AppState.coins++ // 💂!!!!!
    console.log(AppState.coins);
  }
}

export const coinsService = new CoinsService()