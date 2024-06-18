import { AppState } from "../AppState.js";
import { coinsService } from "../services/CoinsService.js";
import { setText } from "../utils/Writer.js";

export class CoinsController {
  constructor() {
    console.log('Coins Controller loaded');
    this.drawCoins()
  }

  addCoin() {
    console.log('adding coin!');
    coinsService.addCoin()
    this.drawCoins()
  }

  drawCoins() {
    setText('coinCount', AppState.coins)
  }
}