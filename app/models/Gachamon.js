
// REVIEW blueprint for our gachamon object
export class Gachamon {

  constructor(gachamonName, gachamonIcon, gachamonRarity, gachamonPicture) {
    // NOTE this line will create a name property on the Gachamon object
    this.name = gachamonName
    this.icon = gachamonIcon
    this.rarity = gachamonRarity
    this.picture = gachamonPicture
  }

  get catalogHTMLTemplate() {
    return `
     <div class="col-2">
        <div onclick="app.GachamonsController.setActiveGachamon('${this.name}')" class="text-center" title="See details for ${this.name}" role="button">
          <p class="display-2">${this.icon}</p>
        </div>
      </div>
    `
  }

  get activeHTMLTemplate() {
    return `
     <div class="col-12">
      <div class="text-center">
        <p class="fs-1">Petey</p>
        <p class="fs-2">Common</p>
        <img src="https://em-content.zobj.net/source/microsoft-teams/363/peacock_1f99a.png" alt="Picture of Petey">
      </div>
     </div>
    `
  }
}


// const petey = new Gachamon('Petey', '🦚', 'common', 'https://em-content.zobj.net/source/microsoft-teams/363/peacock_1f99a.png')
