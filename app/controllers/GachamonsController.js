import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

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
    // const gachamonCatalog = document.getElementById('gachamonCatalog')
    // gachamonCatalog.innerHTML = innerHTMLString
    // NOTE utility function you can import, that takes in an ID from your HTML, and a string of HTML, and draws to said ID
    setHTML('gachamonCatalog', innerHTMLString)
  }
}