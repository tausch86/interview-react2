import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import ActivityTracker from './ActivityTracker.jsx'

ReactDOM.render(
  <Provider store={ createStore(reducers) }>
    <ActivityTracker/>
  </Provider>,
  document.querySelector('body')
)
