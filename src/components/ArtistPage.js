import React, { useState, useEffect } from "react";
import { getData } from "../services/services";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

import ArtistDetailCard from "./ArtistDetailCard";
import Loading from "./Loading";
 
import "../styles/ArtistPage.css"

function ArtistPage() {
  const [status, setStatus] = useState({isLoading: true});
  const { artistId } = useParams();
  const {
    appData: { artistDetail },
    appDispatch,
  } = React.useContext(AppContext);

    useEffect(() => { 
        getData(`https://www.skiddle.com/api/v1/artist/${artistId}?api_key=008f1e6099ecc48e990e3776784d447b`)
        .then(res => {
            const { data } = res;
            setStatus({isLoading: false});
            appDispatch({ type: "LOAD_ARTIST_DETAIL", artistDetail: data.results });
        })
    }, [artistId, appDispatch]);

  return (
      <section className="artist-page__section">
        {status.isLoading ? <Loading /> : null}
        {Object.keys(artistDetail).length ? 
            <ArtistDetailCard 
                imageUrl={artistDetail.imageurl} 
                artistName={artistDetail.name}
                artistDescription={artistDetail.description}
                artistSpotifyUrl={artistDetail.spotifyartisturl}
                artistTwitter={artistDetail.twitter}
            /> : null}
      </section>
  );
}

export default ArtistPage;
