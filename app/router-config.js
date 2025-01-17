import { CoinsController } from "./controllers/CoinsController.js";
import { GachamonsController } from "./controllers/GachamonsController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [GachamonsController, CoinsController],
    view: ''
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])