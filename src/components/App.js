import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingArtworks } from '../redux/actionCreators';
import Artwork from './Artwork';
import { stat } from 'fs';


class App extends Component {
  componentDidMount() {
    this.props.fetchingArtworks();
  }

  render() {
    console.log(this.props.artworks)
    const artworks = this.props.artworks.map(artwork => <Artwork 
      key={artwork.ObjectID} 
      artwork={artwork} 
    />)

    return this.props.loading ? <div>Loading...</div> : (
      <div className="App">
        <div>{artworks}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artworks: state.artworks,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingArtworks: () => {dispatch(fetchingArtworks())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);