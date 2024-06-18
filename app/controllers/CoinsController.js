import { coinsService } from "../services/CoinsService.js";

export class CoinsController {
  constructor() {
    console.log('Coins Controller loaded');
  }

  addCoin() {
    console.log('adding coin!');
    coinsService.addCoin()
  }
}