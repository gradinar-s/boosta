import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/application/Layout/Layout";
import CharacterInfo from "./pages/CharacterInfo/CharacterInfo";
import CharactersList from "./pages/CharactersList/CharactersList";
import "./App.css";

export const CharactersContext = createContext({});

const App = () => {
  const [search, setSearch] = useState("");
  const [character, setCharacter] = useState({});

  const value = { search, setSearch, character, setCharacter };

  return (
    <CharactersContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route path="/" element={<CharactersList />} />
            <Route path="/character/:id" element={<CharacterInfo characterInfo={character} />} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CharactersContext.Provider>
  );
};

export default App;
