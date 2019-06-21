import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingArtworks } from '../redux/actionCreators';
import Artwork from './Artwork';


class App extends Component {
  componentDidMount() {
    this.props.fetchingArtworks();
  }

  render() {
    console.log(this.props.artworks)
    const artworksNames = this.props.artworks.map(a => <li key={a.ObjectID}>{a.Title}</li>)
    return (
      <div className="App">
        <ul>{artworksNames}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artworks: state.artworks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingArtworks: () => {dispatch(fetchingArtworks())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// {
//   this.props.artworks.map(artwork => (
//     <Artwork
//       key={artwork.ObjectID}
//       image={artwork.PrimaryImage.Medium}
//     />
//   ))
// }
