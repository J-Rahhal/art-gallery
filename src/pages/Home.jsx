import React from "react";
import Header from "../components/Header";
import TopPieces from "../components/TopPieces";
import MeetOurArtists from "../components/MeetOurArtists";
import Events from "../components/Events";
import About from "../components/About";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <TopPieces />
      <MeetOurArtists />
      <Events />
      <About />
    </div>
  );
};

export default Home;
