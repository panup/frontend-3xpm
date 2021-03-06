import { unregister } from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import moment from 'moment'
import 'moment/locale/fi'
import App from './containers/App'
import createRootReducer from './createRootReducer'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '@fortawesome/fontawesome-free/scss/brands.scss'
import '@fortawesome/fontawesome-free/scss/solid.scss'
import './index.css'

moment.locale('fi')

const history = createBrowserHistory()
const middleware = [
  routerMiddleware(history)
]

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
)
ReactDOM.render(<App store={store} history={history} />, document.getElementById('root'))

/* ((history) => combineReducers({
  router: connectRouter(history,
    createRootReducer) }) */
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
unregister()
