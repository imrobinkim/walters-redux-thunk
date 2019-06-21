import { combineReducers } from 'redux';

const artworksReducer = (
  oldState = [], 
  action
) => {
  switch (action.type) {
    case "FETCHED_INITIAL_ARTWORKS":
      return action.artworks

    default: 
      return oldState
  }
}

const loadingReducer = (oldState = "false", action) => {
  switch (action.type) {
    case "FETCHED_INITIAL_ARTWORKS":
      return false 

    case "LOADING_ARTWORKS":
      return true 

    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  artworks: artworksReducer,
  loading: loadingReducer,
})

export default rootReducer;