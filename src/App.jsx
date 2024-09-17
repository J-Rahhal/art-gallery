import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import TopPieces from "./components/TopPieces";
import Carousel from "./components/Carousel";
import { TopPiecesThree } from "./constants";

const App = () => {
  return (
    <div className="">
      <Nav />
      <Header />
      <div className="">
        <TopPieces />
      </div>
    </div>
  );
};

export default App;
