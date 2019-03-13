import reduxCrud from 'redux-crud'
import { combineReducers } from 'redux'
import moment from 'moment'

const initialMetadataState = {
  busy: true,
  lastFetched: null
}

const metaDataReducerFor = (actionTypes) => {
  return (state = initialMetadataState, action) => {
    switch(action.type) {
      case actionTypes.fetchSuccess:
        return {
          ...state,
          busy: false,
          lastFetched: moment().format()
        }
      case actionTypes.fetchStart:
        return {
          ...state,
          busy: true
        }
      case actionTypes.fetchError:
        return {
          ...state,
          busy: false
        }
      default:
        return state
    }
  }
}

const getCombinedListReducerFor = (name, additionalReducers = {}) => {
  const actionTypes = reduxCrud.actionTypesFor(name)
  return combineReducers({
    records: reduxCrud.List.reducersFor(name),
    metadata: metaDataReducerFor(actionTypes),
    ...additionalReducers
  })
}

const getCombinedMapReducerFor = (name, additionalReducers = {}) => {
  const actionTypes = reduxCrud.actionTypesFor(name)
  return combineReducers({
    records: reduxCrud.Map.reducersFor(name),
    metadata: metaDataReducerFor(actionTypes),
    ...additionalReducers
  })
}

export {
  getCombinedListReducerFor,
  getCombinedMapReducerFor
}
