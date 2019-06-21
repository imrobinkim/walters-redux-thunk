const API_KEY = process.env.REACT_APP_API_KEY;
const URL = `https://api.thewalters.org/v1/objects.json?keywork=flowers&medium=oil&apikey=${API_KEY}`

function fetchedArtworks(artworks) {
  return { type: "FETCHED_INITIAL_ARTWORKS", artworks }
}

function fetchingArtworks(artworks) {
  //b/c of thunk, actionCreator can return function and that function has access to dispatch
  return (dispatch) => {
    fetch(URL)
    .then(res => res.json())
    .then(artworks => {
      dispatch(fetchedArtworks(artworks.Items))
    })
  }
}


//exporting functions as named exports
export { fetchingArtworks };