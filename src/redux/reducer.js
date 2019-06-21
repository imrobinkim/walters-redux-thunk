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

const rootReducer = combineReducers({
  artworks: artworksReducer,
})

export default rootReducer;