import { AppState } from "../AppState.js";
import { gachamonsService } from "../services/GachamonsService.js";
import { setHTML } from "../utils/Writer.js";

export class GachamonsController {
  constructor() {
    AppState.on('activeGachamon', this.drawActiveGachamon)
    AppState.on('myGachamonsCollection', this.drawMyGachamons)

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

  drawActiveGachamon() {
    const activeGachamon = AppState.activeGachamon
    console.log('drawing information for the active gachamon', activeGachamon);
    setHTML('activeGachamon', activeGachamon.activeHTMLTemplate)
  }

  drawMyGachamons() {
    const gachamons = AppState.myGachamonsCollection
    let innerHTMLString = ''
    gachamons.forEach((gachamon) => innerHTMLString += gachamon.catalogHTMLTemplate)
    setHTML('myGachamons', innerHTMLString)
  }

  setActiveGachamon(gachamonId) {
    console.log('setting active gachamon with the id of ' + gachamonId);
    gachamonsService.setActiveGachamon(gachamonId)
    // this.drawActiveGachamon()
  }

  purchaseRandomGachamon() {
    console.log('GACHA GACHA GACHAMON');
    gachamonsService.purchaseRandomGachamon()
    // this.drawActiveGachamon()
  }
}