import React from 'react';

const Artwork = ({artwork}) => (
  <img 
    key={artwork.ObjectID} 
    src={artwork.PrimaryImage.Medium} 
    alt={artwork.Title} 
  />
);

export default Artwork;