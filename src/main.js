import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    </a>
    <h1>// We are rebranding the site //</h1>
    <p>Actually this paragraph is pretty good!! :)</p>
  </div>
`