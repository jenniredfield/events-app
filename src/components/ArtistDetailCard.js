import React from 'react';
import {sanitiseString} from '../helpers/helpers';

import SocialMediaLink from './SocialMediaLink';

function ArtistDetailCard({imageUrl, artistName, artistDescription, artistSpotifyUrl, artistTwitter}) {
  return (
    <div className="artist-detail-card">
        <img className="artist-detail-card__image" src={imageUrl} alt={sanitiseString(artistName)}/>
        <h1 dangerouslySetInnerHTML={{__html: artistName}}/>
        <p dangerouslySetInnerHTML={{__html: artistDescription}}/>
        <div className="artist-detail-card__social-media">
            <SocialMediaLink platform="spotify" url={artistSpotifyUrl} />
            <SocialMediaLink platform="twitter" url={`https://www.twitter.com/${artistTwitter}`} target="_blank" />
        </div>
    </div>
  );
}

export default ArtistDetailCard;
