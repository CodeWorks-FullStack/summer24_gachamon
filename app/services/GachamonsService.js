import { AppState } from "../AppState.js"

class GachamonsService {
  setActiveGachamon(gachamonId) {
    console.log('active gachamon in the appstate', AppState.activeGachamon);
    const gachamons = AppState.gachamons
    const foundGachamon = gachamons.find((gachamon) => gachamon.id == gachamonId)
    console.log(`found the gachamon with the id of ${gachamonId}`, foundGachamon);
    // Changed null value in appstate to the single gachamon object, and now the rest of our application can access it
    AppState.activeGachamon = foundGachamon // 💂 activeGachamon!!!!!
    console.log('active gachamon in the appstate', AppState.activeGachamon);
  }


  purchaseRandomGachamon() {
    if (AppState.coins < 1) {
      window.alert('Go ask your mom for some more moolah, loser')
      return
    }

    AppState.coins-- // 💂 coins!!!!!

    const gachamons = AppState.gachamons

    const randomIndex = Math.floor(Math.random() * gachamons.length)

    const randomGachamon = gachamons[randomIndex]

    console.log('random gachamon!', randomGachamon);

    AppState.activeGachamon = randomGachamon // 💂 activeGachamon!!!!!

    this.addGachamonToMyCollection()
  }

  addGachamonToMyCollection() {
    const myGachamons = AppState.myGachamonsCollection
    const activeGachamon = AppState.activeGachamon
    myGachamons.push(activeGachamon)

    console.log('GACHA GACHA MY GACHAMONS', myGachamons);
  }

}

export const gachamonsService = new GachamonsService()