import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";


function HomeScreen() {

     
     return (<div className="homeScreen">
          <Nav />

          <Banner />

          <Row
               title="New Releases"
               fetchUrl={requests.fetchTopRated}
               isLargeRow
          />
          <Row
               title="New Comedy"
               fetchUrl={requests.fetchComedyMovies}
          />
          <Row
               title="Documentaries"
               fetchUrl={requests.fetchDocumentaries}
          />
          <Row
               title="Horror"
               fetchUrl={requests.fetchHorrorMovies}
          />
          <Row
               title="Romance"
               fetchUrl={requests.fetchRomanceMovies}
          />
          <Row
               title="Action"
               fetchUrl={requests.fetchActionMovies}
          />

     </div>
     );
}

export default HomeScreen;

