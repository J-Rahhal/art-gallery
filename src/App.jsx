import React from "react";
import { Route, Routes } from "react-router-dom";
import Template from "./Template";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
