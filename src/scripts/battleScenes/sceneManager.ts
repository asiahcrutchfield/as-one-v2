import { girlScene } from './girl/girlScene'
import { manScene } from './man/manScene'
import { officerScene } from './officer/officerScene'

type SceneName = 'girl' | 'man' | 'officer'

export function renderScene(sceneName: SceneName) {
  switch (sceneName) {
    case 'girl':
      return girlScene()
    case 'man':
      return manScene()
    case 'officer':
      return officerScene()
  }
}