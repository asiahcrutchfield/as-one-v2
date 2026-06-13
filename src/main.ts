import './style.css'
import { renderScene } from './scripts/battleScenes/sceneManager'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App element not found')
}

app.innerHTML = renderScene('girl')