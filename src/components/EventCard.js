import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

function EventCard({imageUrl, eventName, eventDescription, eventVenue, eventTown, eventDate, eventId}) {
  return (
    <div className="event-card" data-testid="event-card">
        <img className="event-card__image" src={imageUrl} alt={eventName}/>
        <p className="event-card__event-name"  dangerouslySetInnerHTML={{__html: eventName}}/>
        <p className="event-card__event-description" dangerouslySetInnerHTML={{__html: eventDescription}}/>
        {eventVenue || eventTown ? <p className="event-card__event-venue" ><i className="fa fa-map-marker" aria-hidden="true"/>{`${eventVenue}, ${eventTown}`}</p> : null}
        {eventDate ? <p className="event-card__event-date"><i className="fa fa-calendar" aria-hidden="true"/>{moment(eventDate).format('Do MMMM')}</p> : null}
       <Link className="general-button" to={`/event/${eventId}`}>
            view details
       </Link>
    </div>
  );
}

export default EventCard;
