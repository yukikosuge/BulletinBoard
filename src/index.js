import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import * as serviceWorker from './serviceWorker'

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
import './helpers/initializeApp.js'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register({
  onUpdate() {
    window.location.reload()
  }
})

if (module.hot) {
  module.hot.accept()
}