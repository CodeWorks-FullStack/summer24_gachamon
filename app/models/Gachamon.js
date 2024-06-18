import { generateId } from "../utils/GenerateId.js"

// REVIEW blueprint for our gachamon object
export class Gachamon {

  constructor(gachamonName, gachamonIcon, gachamonRarity, gachamonPicture) {
    // NOTE this line will create a name property on the Gachamon object
    this.name = gachamonName
    this.icon = gachamonIcon
    this.rarity = gachamonRarity
    this.picture = gachamonPicture
    // NOTE generateId returns a very unique string that can be used to tell data apart
    this.id = generateId()
  }

  get catalogHTMLTemplate() {
    return `
     <div class="col-2">
        <div onclick="app.GachamonsController.setActiveGachamon('${this.id}')" class="text-center" title="See details for the ${this.rarity} ${this.name}" role="button">
          <p class="display-2">${this.icon}</p>
        </div>
      </div>
    `
  }

  get activeHTMLTemplate() {
    return `
     <div class="col-12">
      <div class="text-center">
        <p class="fs-1">${this.name}</p>
        <p class="fs-2">${this.rarity}</p>
        <img src="${this.picture}" alt="Picture of ${this.name}">
      </div>
     </div>
    `
  }
}


// const petey = new Gachamon('Petey', '🦚', 'common', 'https://em-content.zobj.net/source/microsoft-teams/363/peacock_1f99a.png')
