import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { phones } from './index'

export default history => combineReducers({
  phones,
  router: connectRouter(history),
})
