import { AppState } from "../AppState.js";

export class GachamonsController {
  constructor() {
    console.log('Gachamons Controller loaded');
    this.drawGachamonCatalog()
  }


  drawGachamonCatalog() {
    const gachamons = AppState.gachamons
    console.log('Drawing the gachamons!', gachamons);
    let innerHTMLString = ''
    gachamons.forEach((gachamon) => innerHTMLString += gachamon.catalogHTMLTemplate)
    const gachamonCatalog = document.getElementById('gachamonCatalog')
    gachamonCatalog.innerHTML = innerHTMLString
  }
}