import React from "react";
import { Route } from "react-router-dom";
import Header from './Header';
import SearchPage from "./SearchPage";
import EventPage from "./EventPage";
import ArtistPage from "./ArtistPage";

import "../styles/App.css";

function App() {
  return (
    <div className="App">
        <Header />
        <Route path="/search/:keyword" component={SearchPage} />
        <Route path="/event/:eventId" component={EventPage} />
        <Route path="/artist/:artistId" component={ArtistPage} />
        <Route exact path="/"/>
    </div>
  );
}

export default App;
