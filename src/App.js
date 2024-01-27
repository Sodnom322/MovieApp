import React from "react";

import Favorites from "./Pages/Favorites";

import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main.jsx";

function App() {
  console.log("1234");
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
