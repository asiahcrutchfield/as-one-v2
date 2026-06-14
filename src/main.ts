import './style.css'
import { renderScene } from './scripts/battleScenes/sceneManager'

type SceneName = 'girl' | 'man' | 'officer'

const appElement = document.querySelector<HTMLDivElement>('#app')

if (!appElement) {
  throw new Error('App element not found')
}

const app = appElement

let currentScene: SceneName = 'girl'

function renderApp(sceneName: SceneName) {
  currentScene = sceneName

  app.innerHTML = `
    <div class="dev-scene-switcher">
      <button data-scene="girl" class="${currentScene === 'girl' ? 'active' : ''}">
        Girl
      </button>

      <button data-scene="man" class="${currentScene === 'man' ? 'active' : ''}">
        Man
      </button>

      <button data-scene="officer" class="${currentScene === 'officer' ? 'active' : ''}">
        Officer
      </button>
    </div>

    <main id="scene-root">
      ${renderScene(sceneName)}
    </main>
  `

  const buttons = app.querySelectorAll<HTMLButtonElement>('[data-scene]')

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const sceneName = button.dataset.scene as SceneName
      renderApp(sceneName)
    })
  })
}

renderApp(currentScene)