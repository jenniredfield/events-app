import React from 'react';
import {sanitiseString} from '../helpers/helpers';

function ArtistDetailCard({imageUrl, artistName, artistDescription, artistSpotifyUrl, artistTwitter}) {
  return (
    <div className="artist-detail-card">
        <img className="artist-detail-card__image" src={imageUrl} alt={sanitiseString(artistName)}/>
        <h1 dangerouslySetInnerHTML={{__html: artistName}}/>
        <p dangerouslySetInnerHTML={{__html: artistDescription}}/>
        <div className="artist-detail-card__social-media">
            <a href={artistSpotifyUrl}>Spotify</a>
            <a href={`https://www.twitter.com/${artistTwitter}`} target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
    </div>
  );
}

export default ArtistDetailCard;
