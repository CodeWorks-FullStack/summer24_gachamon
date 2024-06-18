import { AppState } from "../AppState.js";
import { coinsService } from "../services/CoinsService.js";
import { setText } from "../utils/Writer.js";

export class CoinsController {
  constructor() {
    // I am listening for changes to the coins property in the appstate, and I will call drawcoins whenever that property changes
    // 💂 -------> coins (0)
    // 💂 -------> coins (1) ⏰!!!! drawCoins!
    AppState.on('coins', this.drawCoins)


    console.log('Coins Controller loaded', AppState['coins']);
    this.drawCoins()
  }

  addCoin() {
    console.log('adding coin!');
    coinsService.addCoin()
    // this.drawCoins() automatically called by subscriber
  }

  drawCoins() {
    console.log('drawing coins!');
    let coinEmojis = ''
    for (let i = 0; i < AppState.coins; i++) {
      // FIXME maybe add the silver coin
      coinEmojis += '🪙'
    }
    setText('coinCount', coinEmojis)
  }
}