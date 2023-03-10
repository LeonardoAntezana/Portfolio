import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/configureStore'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <p id='home'></p>
      <App />
    </Provider>
  </React.StrictMode>,
)
