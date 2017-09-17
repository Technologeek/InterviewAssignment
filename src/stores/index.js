import { createStore, applyMiddleware } from 'redux'

import { createLogger as logger } from 'redux-logger'
import reduxThunk from 'redux-thunk'

import reducers from '../reducers'

const middleware = applyMiddleware(reduxThunk, logger())
export default createStore(reducers, middleware)