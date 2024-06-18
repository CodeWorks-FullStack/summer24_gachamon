import { Gachamon } from './models/Gachamon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  /**@type {Gachamon[]} */
  gachamons = [
    new Gachamon(
      'Petey',
      '🦚',
      'common',
      'https://em-content.zobj.net/source/microsoft-teams/363/peacock_1f99a.png'),
    new Gachamon(
      'Ben',
      '🦛',
      'uncommon',
      'https://em-content.zobj.net/source/microsoft-teams/363/hippopotamus_1f99b.png'
    ),
    new Gachamon(
      'Lil Jeremy',
      '🦞',
      'rare',
      'https://em-content.zobj.net/source/microsoft-teams/363/lobster_1f99e.png'
    ),
    new Gachamon(
      'Lil Jeremy',
      '🦞',
      'ultra-rare',
      'https://em-content.zobj.net/source/microsoft-teams/363/lobster_1f99e.png'
    ),
    new Gachamon(
      'Oslo',
      '🦧',
      'common',
      'https://em-content.zobj.net/source/microsoft-teams/363/orangutan_1f9a7.png'
    ),
    new Gachamon(
      'Oslo',
      '🦧',
      'ultra-rare',
      'https://em-content.zobj.net/source/microsoft-teams/363/orangutan_1f9a7.png'
    )
  ]

  /**@type {Gachamon[]} */
  myGachamonsCollection = []

  // NOTE there is nothing here on page load, but we will change the value later
  // @type gives us intellisense in our code
  /**@type {Gachamon} */
  activeGachamon = null

  coins = 0
}

export const AppState = createObservableProxy(new ObservableAppState())