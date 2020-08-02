import React from 'react';
import ArtistTile from './ArtistTile';
import {sanitiseString} from '../helpers/helpers';
import moment from 'moment';

function EventDetailCard({imageUrl, eventName, eventDescription, eventVenue, eventDate, eventOpeningTimes, artists, tickets}) {
  console.log("EventDetailCard -> eventDate", eventDate)
  return (
    <div className="event-detail-card">
      <div className="event-detail-card__content">
        <img className="event-detail-card__image" src={imageUrl} alt={sanitiseString(eventName)}/>
        <div className="event-detail-card__content-text">
          <p className="event-detail-card__event-name" dangerouslySetInnerHTML={{__html: eventName}}/>
          <p className="event-detail-card__event-description" dangerouslySetInnerHTML={{__html: eventDescription}} />
          {eventVenue ? <p className="event-detail-card__event-venue" ><i className="fa fa-map-marker" aria-hidden="true"/>{eventVenue}</p> : null}
          <p className="event-detail-card__event-date"><i className="fa fa-calendar" aria-hidden="true"/>{moment(eventDate).format('Do MMMM YYYY')}</p> 
          <p className="event-detail-card__opening-times">{`From ${eventOpeningTimes.doorsopen} 
            to ${eventOpeningTimes.doorsclose} (Last entry  ${eventOpeningTimes.lastentry})`}</p>
        {tickets ? <p>Tickets Available!</p> : <p>Tickets not available</p>}
        </div>
      </div>
      <div className="event-detail-card__artists">
        {artists && artists.length ? 
        artists.map(artist => {
          return (
            <ArtistTile 
              artistName={artist.name}
              artistId={artist.artistid}
              imageUrl={artist.image}
              key={artist.artistid}   />
          )
        }): null}
      </div>
    </div>
  );
}

export default EventDetailCard;
