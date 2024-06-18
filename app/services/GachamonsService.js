import { AppState } from "../AppState.js"

class GachamonsService {
  setActiveGachamon(gachamonName) {
    console.log('active gachamon in the appstate', AppState.activeGachamon);
    const gachamons = AppState.gachamons
    const foundGachamon = gachamons.find((gachamon) => gachamon.name == gachamonName)
    console.log(`found the gachamon with the name of ${gachamonName}`, foundGachamon);
    // Changed null value in appstate to the single gachamon object, and now the rest of our application can access it
    AppState.activeGachamon = foundGachamon
    console.log('active gachamon in the appstate', AppState.activeGachamon);
  }

}

export const gachamonsService = new GachamonsService()