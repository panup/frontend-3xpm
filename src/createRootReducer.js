/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import players from './reducers/playerReducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  players
})
