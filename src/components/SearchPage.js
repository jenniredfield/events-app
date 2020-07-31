import React, { useState } from "react";
import { getData } from "../services/services";
import { AppContext } from "../context/AppContext";
import EventCard from "./EventCard";

function SearchPage() {
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState({isLoading: false, wasRequested: false});
  console.log("SearchPage -> status", status)
  console.log("SearchPage -> keyword", keyword);

  const {
    appData: { eventsList },
    appDispatch,
  } = React.useContext(AppContext);

  function handleOnChange(e) {
    const value = e.target.value;

    setKeyword(value);
  }

  function handleSubmit() {
    setStatus({isLoading: true, wasRequested: true});
    getData(
      `https://www.skiddle.com/api/v1/events/search?api_key=008f1e6099ecc48e990e3776784d447b&keyword=${keyword}`
    ).then((res) => {
      const { data } = res;
      setStatus({isLoading: false, wasRequested: true});
      appDispatch({ type: "LOAD_EVENTS_LIST", eventsList: data.results });
    });
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <div className="search-page">
      <header className="search-page__header">
        <h1>Skiddle</h1>
        <input placeholder="search..." onChange={handleOnChange} onKeyDown={handleKeyDown}></input>
        <button onClick={handleSubmit}>Submit</button>
      </header>
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
    </div>
  );
}

export default SearchPage;
