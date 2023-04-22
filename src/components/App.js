import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import MoviesPage from "./MoviesPage";

function App() {
  const [movies, setMovies] = useState({
    1: { id: 1, title: "A River Runs Through It" },
    2: { id: 2, title: "Se7en" },
    3: { id: 3, title: "Inception" },
  });

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/movies" element={<MoviesPage/>} />
        <Route exact path="/" element={() => <div>Home</div>} />
      </Routes>
    </div>
  );
}

export default App;
