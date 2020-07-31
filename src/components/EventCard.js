import React from 'react';
import {Link} from 'react-router-dom';

function EventCard({imageUrl, eventName, eventDescription, eventVenue, eventDate}) {
  return (
    <div className="event-card">
        <img className="event-card__image" src={imageUrl} alt={eventName}/>
        <p className="event-card__event-name" >{eventName}</p>
        <p className="event-card__event-description" >{eventDescription}</p>
        <p className="event-card__event-venue" >{eventVenue}</p>
        <p className="event-card__event-date">{eventDate}</p>
       <Link to='/event'>
            view details babe
       </Link>
    </div>
  );
}

export default EventCard;
