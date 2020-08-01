import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

function EventCard({imageUrl, eventName, eventDescription, eventVenue, eventTown, eventDate, eventId}) {
  return (
    <div className="event-card">
        <img className="event-card__image" src={imageUrl} alt={eventName}/>
        <p className="event-card__event-name"  dangerouslySetInnerHTML={{__html: eventName}}/>
        <p className="event-card__event-description" dangerouslySetInnerHTML={{__html: eventDescription}}/>
        <p className="event-card__event-venue" >{`${eventVenue}, ${eventTown}`}</p>
        <p className="event-card__event-date">{moment(eventDate).format('Do MMMM')}</p>
       <Link className="general-button" to={`/event/${eventId}`}>
            view details babe
       </Link>
    </div>
  );
}

export default EventCard;
