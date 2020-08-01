import React from 'react';
import {Link} from 'react-router-dom';

function ArtistTile({imageUrl, artistName, artistId}) {
  return (
       <Link className="artist-tile" to={`/artist/${artistId}`}>
            <img className="artist-tile__image" src={imageUrl} alt={artistName}/>
            <p className="artist-name" dangerouslySetInnerHTML={{__html: artistName}} />
       </Link>
  );
}

export default ArtistTile;
