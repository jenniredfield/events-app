import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../services/services";
import { AppContext } from "../context/AppContext";
import EventCard from "./EventCard";

import '../styles/SearchPage.css';

function SearchPage() {
  const {keyword} = useParams();
  const [status, setStatus] = useState({isLoading: true, wasRequested: false});

  const {
    appData: { eventsList },
    appDispatch,
  } = React.useContext(AppContext);

  useEffect(() => {
    setStatus({isLoading: true, wasRequested: true});
    getData(
      `https://www.skiddle.com/api/v1/events/search?api_key=008f1e6099ecc48e990e3776784d447b&keyword=${keyword}`
    ).then((res) => {
      const { data } = res;
      setStatus({isLoading: false, wasRequested: true});
      appDispatch({ type: "LOAD_EVENTS_LIST", eventsList: data.results });
    });
  }, [keyword, appDispatch]);

  return (
      <section className="search-page__section">
        {status.wasRequested && !status.isLoading && !eventsList.length ? <div>No results were found, try again please</div> : null}
        {status.isLoading ? (
          <div>Loading...</div>
        ) : (
          eventsList.map((event) => {
            return (
              <EventCard
                imageUrl={event.imageurl}
                eventName={event.eventname}
                eventDescription={event.description}
                eventVenue={event.venue.name}
                eventTown={event.venue.town}
                eventDate={event.startdate}
                eventId={event.id}
                key={event.id}
              />
            );
          })
        )}
      </section>
  );
}

export default SearchPage;
