import React, { useState, useEffect } from "react";
import { getData } from "../services/services";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

import EventDetailCard from './EventDetailCard';

import '../styles/EventPage.css';

function EventPage() {
  const [status, setStatus] = useState({isLoading: true});
  const { eventId } = useParams();
  const {
    appData: { eventDetail },
    appDispatch,
  } = React.useContext(AppContext);

    useEffect(() => { 
        getData(`https://www.skiddle.com/api/v1/events/${eventId}?api_key=008f1e6099ecc48e990e3776784d447b`)
        .then(res => {
            const { data } = res;
            setStatus({isLoading: false});
            appDispatch({ type: "LOAD_EVENT_DETAIL", eventDetail: data.results });
        })
    }, [eventId, appDispatch]);

    console.log('eventDetail', eventDetail)

  return (
    <div className="event-detail-page">
      <section className="event-detail-page__section">
        {status.isLoading ? <div>Loading...</div> : null}
        {!status.isLoading && Object.keys(eventDetail).length ? 
          <EventDetailCard 
            imageUrl={eventDetail.largeimageurl} 
            eventName={eventDetail.eventname}
            eventDescription={eventDetail.description}
            eventOpeningTimes={eventDetail.openingtimes}
            artists={eventDetail.artists}
            tickets={eventDetail.tickets} /> : null}
      </section>
    </div>
  );
}

export default EventPage;
